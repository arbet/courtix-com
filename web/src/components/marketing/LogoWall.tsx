import { siteConfig } from "@/lib/site.config";

export function LogoWall() {
  return (
    <section className="border-y border-border-subtle bg-surface-1/30 py-14">
      <div className="container-max">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-fg-faint">
          What we build on
        </p>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4">
          {siteConfig.infrastructure.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-center rounded-xl border border-border-subtle/60 bg-white/[0.02] px-4 py-5 text-center transition-colors hover:border-border-strong hover:bg-white/[0.04]"
            >
              <span className="text-sm font-semibold text-fg-muted">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
