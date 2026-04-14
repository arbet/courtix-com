import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHero } from "./PageHero";

export type ServiceDetailProps = {
  eyebrow: string;
  title: string;
  description: string;
  priceFrom?: string;
  priceNote?: string;
  icon: LucideIcon;
  included: string[];
  outcomes: { title: string; description: string }[];
  stack: string[];
};

export function ServiceDetail({
  eyebrow,
  title,
  description,
  priceFrom,
  priceNote,
  icon: Icon,
  included,
  outcomes,
  stack,
}: ServiceDetailProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="/contact?intent=start" className="btn-primary">
            Start a project <ArrowRight className="h-4 w-4" />
          </Link>
          {priceFrom && (
            <div className="text-sm text-fg-muted">
              <span className="font-semibold text-fg">{priceFrom}</span>
              {priceNote && <span> · {priceNote}</span>}
            </div>
          )}
        </div>
      </PageHero>

      <section className="container-max my-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <div className="eyebrow mb-4">What&rsquo;s included</div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {included.map((i) => (
                <li key={i} className="flex gap-3 rounded-xl border border-border-subtle bg-surface-1/40 p-4 text-sm text-fg-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-2xl border border-border-subtle bg-surface-1/60 p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-subtle bg-gradient-to-br from-brand-500/20 to-brand-700/10 text-brand-300">
              <Icon className="h-5 w-5" />
            </div>
            <div className="mt-4 text-sm text-fg-muted">
              <div className="font-medium text-fg">Typical stack</div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {stack.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-max my-16">
        <div className="eyebrow mb-4">Outcomes you should expect</div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((o) => (
            <div key={o.title} className="rounded-2xl border border-border-subtle bg-surface-1/40 p-6">
              <h3 className="text-base font-semibold text-fg">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{o.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
