import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type CaseStudyCardProps = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  stack: string[];
  outcome?: string;
};

export function CaseStudyCard({ slug, title, client, industry, summary, stack, outcome }: CaseStudyCardProps) {
  return (
    <Link
      href={`/portfolio/${slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface-1/40 p-6 transition-all hover:border-border-strong hover:bg-surface-1/70"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-300">{industry}</span>
          <span className="text-xs text-fg-faint">{client}</span>
        </div>
        <ArrowUpRight className="h-4 w-4 text-fg-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-300" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-fg">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">{summary}</p>
      {outcome && (
        <div className="mt-4 rounded-lg border border-border-subtle bg-white/[0.03] p-3 text-xs text-fg-muted">
          <span className="font-semibold text-fg">Outcome · </span>
          {outcome}
        </div>
      )}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {stack.slice(0, 5).map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}
