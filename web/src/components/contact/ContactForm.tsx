"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle } from "lucide-react";

type State = { status: "idle" | "submitting" | "success" | "error"; message?: string };

export function ContactForm() {
  const [state, setState] = useState<State>({ status: "idle" });
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    startTransition(async () => {
      setState({ status: "submitting" });
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const body = (await res.json()) as { ok: boolean; message?: string };
        if (!res.ok || !body.ok) throw new Error(body.message || "Failed to send");
        setState({ status: "success", message: "Thanks, we’ll be in touch within one business day." });
        form.reset();
      } catch (err) {
        setState({ status: "error", message: err instanceof Error ? err.message : "Something went wrong" });
      }
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border-subtle bg-surface-1/60 p-6 sm:p-8"
    >
      <h2 className="text-xl font-semibold text-fg">Send us a message</h2>
      <p className="mt-1 text-sm text-fg-muted">
        Share a few details and we’ll reply within one business day.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Work email" name="email" type="email" required />
        <Field label="Company" name="company" />
        <Field label="Role" name="role" />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Select
          label="Service you’re interested in"
          name="service"
          options={[
            "Custom Software Development",
            "Integration Engineering",
            "Platform & Reliability Engineering",
            "Not sure yet",
          ]}
        />
        <Select
          label="Engagement type"
          name="engagement"
          options={[
            "Discovery sprint",
            "Fixed-scope build",
            "Ongoing retainer / embedded team",
            "Technical due diligence / codebase review",
            "Not sure yet",
          ]}
        />
      </div>

      <div className="mt-4">
        <TextArea label="Tell us about your project" name="message" required />
      </div>

      {/* honeypot */}
      <div className="hidden" aria-hidden>
        <label>
          Leave this field empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="mt-6 flex items-start gap-3 rounded-2xl border border-border-subtle bg-white/[0.02] p-4 text-sm text-fg-muted">
        <input
          type="checkbox"
          name="accept"
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-border-strong bg-transparent text-brand-500 accent-brand-500"
        />
        <span>
          I have read and agree to the{" "}
          <Link href="/legal/terms" className="text-brand-300 underline-offset-4 hover:underline">
            Terms & Conditions
          </Link>
          ,{" "}
          <Link href="/legal/privacy" className="text-brand-300 underline-offset-4 hover:underline">
            Privacy Policy
          </Link>
          , and{" "}
          <Link href="/legal/refund" className="text-brand-300 underline-offset-4 hover:underline">
            Refund & Cancellation Policy
          </Link>
          . I understand that by submitting this form I am entering into a pre-contractual conversation with
          Courtix Hosting LLC.
        </span>
      </label>

      <button
        type="submit"
        disabled={isPending || state.status === "submitting"}
        className="btn-primary mt-6 w-full sm:w-auto disabled:opacity-60"
      >
        {isPending || state.status === "submitting" ? "Sending…" : "Send message"}
      </button>

      {state.status === "success" && (
        <div className="mt-5 flex items-start gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-3 text-sm text-emerald-300">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{state.message}</span>
        </div>
      )}
      {state.status === "error" && (
        <div className="mt-5 flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/5 p-3 text-sm text-red-300">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{state.message}</span>
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="text-fg-muted">
        {label}
        {required && <span className="text-brand-400"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="rounded-lg border border-border-subtle bg-white/[0.03] px-3 py-2.5 text-fg outline-none transition-colors focus:border-brand-500 focus:bg-white/[0.05]"
      />
    </label>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="text-fg-muted">{label}</span>
      <select
        name={name}
        className="rounded-lg border border-border-subtle bg-white/[0.03] px-3 py-2.5 text-fg outline-none transition-colors focus:border-brand-500 focus:bg-white/[0.05]"
        defaultValue=""
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-surface-2">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextArea({ label, name, required }: { label: string; name: string; required?: boolean }) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="text-fg-muted">
        {label}
        {required && <span className="text-brand-400"> *</span>}
      </span>
      <textarea
        name={name}
        rows={5}
        required={required}
        minLength={10}
        className="resize-y rounded-lg border border-border-subtle bg-white/[0.03] px-3 py-2.5 text-fg outline-none transition-colors focus:border-brand-500 focus:bg-white/[0.05]"
        placeholder="Goals, timeline, tech context, whatever helps us reply usefully. 10+ characters."
      />
    </label>
  );
}
