"use client";

import { useState, type ReactNode } from "react";
import { Plus, Minus } from "lucide-react";

export type FaqItem = {
  q: string;
  /** Plain-text answer. Used by FaqJsonLd for Schema.org FAQPage. */
  a: string;
  /** Optional rich answer (JSX, with Links). If provided, rendered instead of `a` in the visible FAQ. */
  aRich?: ReactNode;
};

export function FAQ({ items, title = "Frequently asked questions" }: { items: FaqItem[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="container-max my-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <div className="eyebrow">FAQ</div>
          <h2 className="mt-4 text-display-md font-semibold text-balance">{title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-fg-muted">
            Didn’t find what you were looking for? Email{" "}
            <a className="text-brand-300 hover:text-brand-200" href="mailto:hello@courtix.com">
              hello@courtix.com
            </a>{" "}
            and we’ll get back to you within one business day.
          </p>
        </div>
        <div className="space-y-2">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-border-subtle bg-surface-1/40"
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-fg sm:text-base">{item.q}</span>
                  {isOpen ? (
                    <Minus className="h-4 w-4 shrink-0 text-brand-300" />
                  ) : (
                    <Plus className="h-4 w-4 shrink-0 text-fg-muted" />
                  )}
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-200 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="px-5 pb-5 text-sm leading-relaxed text-fg-muted">{item.aRich ?? item.a}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
