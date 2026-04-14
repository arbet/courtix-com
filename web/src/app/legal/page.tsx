import Link from "next/link";
import { PageHero } from "@/components/marketing/PageHero";
import { buildMetadata } from "@/lib/metadata";
import { getAllLegal } from "@/lib/content";

export const metadata = buildMetadata({
  title: "Legal",
  description: "Terms, privacy policy, refund policy and acceptable use policy for Courtix Hosting LLC (the legal entity behind Courtix).",
  path: "/legal",
});

export default async function LegalIndex() {
  const docs = await getAllLegal();
  return (
    <>
      <PageHero eyebrow="Legal" title="Legal documents" description="Everything you need before signing up." />
      <section className="container-max my-12 max-w-3xl">
        <ul className="divide-y divide-border-subtle overflow-hidden rounded-2xl border border-border-subtle bg-surface-1/40">
          {docs.map((d) => (
            <li key={d.slug}>
              <Link href={`/legal/${d.slug}`} className="flex items-start justify-between gap-4 p-5 hover:bg-white/[0.03]">
                <div>
                  <div className="text-base font-medium text-fg">{d.title}</div>
                  {d.description && <div className="mt-1 text-sm text-fg-muted">{d.description}</div>}
                </div>
                <span className="text-xs text-fg-faint">Updated {d.updated}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
