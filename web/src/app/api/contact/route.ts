import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "edge";

const Body = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(320),
  company: z.string().max(200).optional().default(""),
  role: z.string().max(200).optional().default(""),
  service: z.string().max(100).optional().default(""),
  budget: z.string().max(100).optional().default(""),
  message: z.string().min(10).max(5000),
  accept: z.union([z.literal("on"), z.literal(true), z.literal("true")]),
  website: z.string().max(0).optional().default(""), // honeypot
});

export async function POST(req: Request) {
  let data: unknown;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON" }, { status: 400 });
  }

  const parsed = Body.safeParse(data);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Please fill in the required fields and accept the policies." },
      { status: 400 }
    );
  }

  const { website, ...payload } = parsed.data;
  if (website) return NextResponse.json({ ok: true }); // silently drop bots

  // Best-effort delivery. Configure RESEND_API_KEY + CONTACT_TO in env to enable.
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || "hello@courtix.com";
  const from = process.env.CONTACT_FROM || "Courtix Contact <hello@courtix.com>";

  if (apiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to,
          reply_to: payload.email,
          subject: `New Courtix enquiry — ${payload.name}${payload.company ? ` (${payload.company})` : ""}`,
          text: [
            `Name: ${payload.name}`,
            `Email: ${payload.email}`,
            `Company: ${payload.company}`,
            `Role: ${payload.role}`,
            `Service: ${payload.service}`,
            `Budget: ${payload.budget}`,
            "",
            payload.message,
            "",
            "— Submitted from courtix.com/contact with policy acknowledgement.",
          ].join("\n"),
        }),
      });
      if (!res.ok) throw new Error(`Resend ${res.status}`);
    } catch (err) {
      console.error("contact send failed", err);
      return NextResponse.json(
        { ok: false, message: "We couldn't deliver your message right now. Please email hello@courtix.com." },
        { status: 502 }
      );
    }
  } else {
    // No mailer configured — log server-side so the message isn't lost in dev.
    console.info("[contact][no-mailer]", payload);
  }

  return NextResponse.json({ ok: true });
}
