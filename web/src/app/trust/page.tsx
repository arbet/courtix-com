import Link from "next/link";
import { ShieldCheck, FileCheck, GaugeCircle, FileText, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { CTABand } from "@/components/marketing/CTABand";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Trust Center",
  description: "Courtix Trust Center — secure SDLC, security posture, SLA and compliance documentation for enterprise buyers.",
  path: "/trust",
});

const sections = [
  {
    icon: ShieldCheck,
    title: "Secure SDLC Policy",
    description: "The written, versioned process we follow on every engagement — design, build, review, ship and operate.",
    href: "/trust/sdlc",
  },
  {
    icon: FileCheck,
    title: "Security",
    description: "Our security posture: organisational controls, technical controls, compliance and vulnerability reporting.",
    href: "/trust/security",
  },
  {
    icon: GaugeCircle,
    title: "Service Level Agreement",
    description: "Uptime, severity definitions, response times and incident communication commitments.",
    href: "/trust/sla",
  },
  {
    icon: FileText,
    title: "Legal documents",
    description: "Terms, Privacy Policy, Refund & Cancellation Policy and Acceptable Use Policy.",
    href: "/legal",
  },
];

const badges = [
  { label: "PCI DSS", note: "Via Wise" },
  { label: "GDPR", note: "Aligned" },
  { label: "HIPAA", note: "Delivered" },
  { label: "SOC 2 Type I", note: "In progress" },
];

export default function TrustHub() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Trust Center", href: "/trust" }]} />
      <PageHero
        eyebrow="Trust Center"
        title="Security, reliability and compliance — in writing."
        description="Enterprise buyers shouldn&rsquo;t have to take us at our word. Every policy, control and commitment is published here and available for procurement review."
      />

      <section className="container-max my-12">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {badges.map((b) => (
            <div key={b.label} className="rounded-2xl border border-border-subtle bg-surface-1/40 p-5 text-center">
              <div className="text-base font-semibold text-fg">{b.label}</div>
              <div className="mt-1 text-xs text-fg-muted">{b.note}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-max my-12">
        <div className="grid gap-4 md:grid-cols-2">
          {sections.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.href}
                href={s.href}
                className="group flex items-start gap-5 rounded-2xl border border-border-subtle bg-surface-1/40 p-6 transition-all hover:border-border-strong hover:bg-surface-1/70"
              >
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-subtle bg-gradient-to-br from-brand-500/20 to-brand-700/10 text-brand-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h2 className="flex items-center gap-1.5 text-lg font-semibold text-fg">
                    {s.title}
                    <ArrowRight className="h-4 w-4 text-fg-muted transition-transform group-hover:translate-x-0.5 group-hover:text-brand-300" />
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{s.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <CTABand
        eyebrow="Due diligence"
        title="Need documentation under NDA?"
        description="We can share signed SDLC policies, completed security questionnaires (SIG Lite, CAIQ), penetration test summaries and DPAs for enterprise procurement."
        primaryLabel="Contact security"
        primaryHref="mailto:security@courtix.com"
        secondaryLabel="Email us"
        secondaryHref="/contact"
      />
    </>
  );
}
