import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative isolate overflow-hidden pt-20 pb-16", className)}>
      <div aria-hidden className="absolute inset-0 -z-10 bg-radial-brand opacity-70" />
      <div aria-hidden className="absolute inset-0 -z-10 grid-bg opacity-25 mask-fade-b" />
      <div className="container-max">
        <div className="max-w-3xl">
          {eyebrow && <div className="eyebrow mb-5">{eyebrow}</div>}
          <h1 className="text-display-lg font-semibold text-balance">{title}</h1>
          {description && (
            <p className="mt-5 text-lg leading-relaxed text-fg-muted text-pretty">{description}</p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
