import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discovery sprint",
    body: "A short, paid engagement where we map the problem, review any existing code or systems, produce an architecture brief and deliver a written proposal with scope and pricing you can act on.",
  },
  {
    num: "02",
    title: "Scoped build",
    body: "Once you accept the proposal, we ship against written scope and milestones. Weekly demos, transparent progress, no open-ended hourly meters.",
  },
  {
    num: "03",
    title: "Operate or hand over",
    body: "After launch we can run the system alongside you, iterate on it under a retainer, or transition it cleanly to your team with documentation and knowledge transfer.",
  },
];

export function ScopingPath() {
  return (
    <section className="container-max my-20">
      <div className="rounded-3xl border border-border-subtle bg-surface-1/40 p-8 sm:p-10">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="eyebrow mb-3">How engagements are scoped</div>
            <h2 className="text-display-md font-semibold text-balance">
              A discovery sprint, a written proposal, then we ship.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-fg-muted sm:text-lg">
              We don&rsquo;t publish list prices because no two engagements are the same. Every
              project starts with a short, paid discovery so you and we can agree on scope,
              timeline and cost before we write any production code.
            </p>
          </div>
          <Link href="/contact?intent=start" className="btn-primary shrink-0">
            Start a discovery sprint <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.num}
              className="rounded-2xl border border-border-subtle bg-bg/40 p-6"
            >
              <div className="font-display text-sm font-semibold tracking-[0.2em] text-brand-300">
                {s.num}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-fg">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
