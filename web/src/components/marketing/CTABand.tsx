import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTABand({
  eyebrow = "Ready when you are",
  title = "Let's build something that ships.",
  description = "Tell us about your project. A senior engineer will reply within one business day — no pitches, no forms-before-forms.",
  primaryLabel = "Start a project",
  primaryHref = "/contact?intent=start",
  secondaryLabel = "See our work",
  secondaryHref = "/portfolio",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="container-max my-24">
      <div className="relative isolate overflow-hidden rounded-3xl border border-border-subtle bg-surface-1/60 p-10 sm:p-14">
        <div aria-hidden className="absolute inset-0 -z-10 bg-mesh-hero opacity-60" />
        <div aria-hidden className="absolute inset-0 -z-10 grid-bg opacity-30" />
        <div className="max-w-2xl">
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="mt-4 text-display-md font-semibold text-balance">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-fg-muted sm:text-lg">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={primaryHref} className="btn-primary">
              {primaryLabel} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={secondaryHref} className="btn-secondary">
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
