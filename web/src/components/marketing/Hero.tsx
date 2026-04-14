import Link from "next/link";
import { ArrowRight, ShieldCheck, Activity, Cloud } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      {/* backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-mesh-hero opacity-80"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 grid-bg mask-fade-b opacity-40"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/3 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]"
      />

      <div className="container-max">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-display-xl font-semibold tracking-tight text-fg text-balance">
            Enterprise-grade software,{" "}
            <span className="text-gradient-brand">engineered to ship.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted text-pretty">
            Courtix builds, deploys and operates mission-critical software for companies that
            can&rsquo;t afford downtime. Custom applications, cloud-native APIs and managed edge
            infrastructure — designed, shipped and supported by a senior engineering team that owns
            every system end-to-end.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact?intent=start" className="btn-primary text-base">
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/portfolio" className="btn-secondary text-base">
              View our work
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-fg-faint">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-400" /> Secure SDLC · OWASP ASVS aligned
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Activity className="h-3.5 w-3.5 text-brand-400" /> 99.95% production uptime
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Cloud className="h-3.5 w-3.5 text-brand-400" /> Cloudflare + AWS infrastructure
            </span>
          </div>
        </div>

        {/* stat band */}
        <div className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle md:grid-cols-4">
          {[
            { k: "250+", v: "Projects delivered" },
            { k: "100+", v: "Clients worldwide" },
            { k: "20+", v: "Countries served" },
            { k: "15+", v: "Years operating" },
          ].map((s) => (
            <div key={s.v} className="bg-surface-1/80 p-6 text-center backdrop-blur">
              <div className="font-display text-3xl font-semibold text-gradient-brand">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-fg-faint">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
