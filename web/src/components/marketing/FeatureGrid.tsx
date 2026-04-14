import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  bullets?: string[];
};

export function FeatureGrid({
  features,
  columns = 3,
  className,
}: {
  features: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  const cols =
    columns === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : columns === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={cn("grid gap-4", cols, className)}>
      {features.map((f) => {
        const Icon = f.icon;
        const body = (
          <div className="group relative flex h-full flex-col rounded-2xl border border-border-subtle bg-surface-1/40 p-6 transition-all hover:border-border-strong hover:bg-surface-1/70">
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-subtle bg-gradient-to-br from-brand-500/20 to-brand-700/10 text-brand-300">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-fg">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">{f.description}</p>
            {f.bullets && (
              <ul className="mt-4 space-y-1.5 text-sm text-fg-muted">
                {f.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
            {f.href && (
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-300 group-hover:text-brand-200">
                Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            )}
          </div>
        );
        return f.href ? (
          <Link key={f.title} href={f.href} className="block h-full">
            {body}
          </Link>
        ) : (
          <div key={f.title}>{body}</div>
        );
      })}
    </div>
  );
}
