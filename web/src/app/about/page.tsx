import Link from "next/link";
import { PageHero } from "@/components/marketing/PageHero";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { CTABand } from "@/components/marketing/CTABand";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({
  title: "About",
  description: "About Courtix, a software engineering firm building enterprise software worldwide.",
  path: "/about",
});

const values = [
  {
    title: "Senior engineers only",
    body: "Every engagement is staffed with senior engineers who have shipped production software before. No junior hand-offs, no body-shop model, no one learning on your dime.",
  },
  {
    title: "Written scope before any code",
    body: "Every project starts with a paid discovery and a written scope. No open-ended hourly meters, no surprise invoices, no silent scope creep. You see the plan before we build.",
  },
  {
    title: "One team, end-to-end accountable",
    body: "The same people who design your system build it, ship it and operate it in production. No hand-offs between design, development and operations. No dropped context.",
  },
  {
    title: "Clients stay for years, not months",
    body: "Our best references are clients who have worked with us across multiple engagements. We optimise for long-term partnerships, not one-off builds, and we stay available after launch.",
  },
];

const stats = [
  { k: "15+", v: "Years operating" },
  { k: "250+", v: "Projects delivered" },
  { k: "100+", v: "Clients worldwide" },
  { k: "20+", v: "Countries served" },
];

const team = [
  {
    name: "Samer Bechara",
    role: "Founder & CTO",
    bio: "Samer founded Courtix in 2011 after a decade of shipping production software across healthcare, marketplaces and enterprise platforms. He still writes code, reviews every architecture decision before it reaches a client proposal and is the technical point of contact on every engagement. His job is to keep Courtix senior-only and to refuse work that would require staffing juniors.",
    linkedin: "https://www.linkedin.com/in/samerbechara/",
  },
  {
    name: "Denis Vorobev",
    role: "Head of Platform & Security",
    bio: "Denis owns infrastructure, deployment and security posture across Courtix engagements. Fifteen years of hands-on platform engineering across AWS, Azure and GCP, supporting development teams from solo founders up to fifty engineers. His work spans CI/CD automation, multi-region architecture, observability and the security side of running production systems: vulnerability remediation, hardening, incident recovery and backup automation.",
    linkedin: "https://www.linkedin.com/in/denis-vorobev-9238bb20a/",
  },
  {
    name: "Gergely Parragh",
    role: "Head of Delivery",
    bio: "Gergely runs engagement delivery across Courtix client work: scope, milestones, written status and the weekly cadence that keeps stakeholders informed without pulling engineers into meeting sprawl. Background as a business analyst and product owner, with delivery experience across Agile, Kanban and Waterfall programmes. Prior roles in consulting and risk management, plus a master's in business informatics and a finance background.",
    linkedin: "https://www.linkedin.com/in/gergely-parragh/",
  },
];

function initialsOf(name: string) {
  const cleaned = name.replace(/\[|\]/g, "");
  const parts = cleaned.trim().split(/\s+/);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function AboutPage() {
  const { registration, contact } = siteConfig;
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />
      <PageHero
        eyebrow="About"
        title="Senior engineering, grown-up process, enterprise-ready."
        description="Courtix builds mission-critical software for companies that can’t afford downtime or shortcuts."
      />

      <section className="container-max my-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="prose-courtix max-w-none">
            <h2>Who we are</h2>
            <p>
              Courtix is a software engineering firm that builds custom software, cloud infrastructure and
              integrations for businesses of every size, from Series A startups launching their first platform all
              the way to established enterprises modernising decades of accumulated systems.
            </p>
            <p>
              We started with a simple idea: clients deserve development partners who understand both the technical
              and business sides of a project. Too many engagements end with software that technically works but
              doesn’t solve the actual problem. We bridge that gap by putting senior engineers in the room
              from the first conversation.
            </p>
            <p>
              Our team brings together experienced developers, SREs and project managers who have delivered
              production software across healthcare, applied AI, government and public sector, on-demand
              marketplaces, enterprise internal platforms and marketing technology. Every engagement is owned
              end-to-end by the people who design, build, ship and operate the system. No hand-offs, no dropped
              context.
            </p>
          </div>

          <aside className="h-fit rounded-2xl border border-border-subtle bg-surface-1/60 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-fg-faint">Company details</h3>
            <dl className="mt-5 space-y-4 text-sm">
              <Row label="Registered name" value="Courtix Hosting LLC" />
              <Row
                label="Registered address"
                value={`${registration.address.line1}, ${registration.address.city}, ${registration.address.region} ${registration.address.postalCode}, ${registration.address.country}`}
              />
              <Row label="Jurisdiction" value={registration.jurisdiction} />
              <Row label="Delaware file number" value={registration.fileNumber} />
              <Row label="Email" value={contact.email} />
              <Row label="Phone" value={contact.phone} />
              <Row label="Business hours" value={contact.hours} />
            </dl>
            <div className="mt-6 flex flex-col gap-2">
              <Link href="/trust" className="btn-secondary">
                Trust Center
              </Link>
              <Link href="/trust/security" className="btn-ghost">
                Security
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-max my-20">
        <div className="eyebrow mb-6 text-center">By the numbers · since 2011</div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.v} className="bg-surface-1/80 p-6 text-center backdrop-blur">
              <div className="font-display text-3xl font-semibold text-gradient-brand">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-fg-faint">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-max my-24">
        <SectionHeading
          eyebrow="The team"
          title="Senior engineers you can name before you sign."
          description="The humans who design, build and operate the systems Courtix delivers. Every engagement is led by the people on this page, not anonymous staffing behind a logo."
          align="center"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {team.map((p) => (
            <div
              key={p.name + p.role}
              className="flex h-full flex-col rounded-2xl border border-border-subtle bg-surface-1/40 p-6 transition-all hover:border-border-strong hover:bg-surface-1/70"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-gradient-to-br from-brand-500/20 to-brand-700/10 font-display text-lg font-semibold text-brand-200">
                  {initialsOf(p.name)}
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-semibold text-fg">{p.name}</h3>
                  <div className="mt-0.5 text-xs uppercase tracking-wider text-fg-faint">{p.role}</div>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-fg-muted">{p.bio}</p>
              <div className="mt-5 pt-4 border-t border-border-subtle">
                <Link
                  href={p.linkedin}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-300 hover:text-brand-200"
                >
                  LinkedIn profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-max my-24">
        <SectionHeading
          eyebrow="What we stand for"
          title="Four commitments, applied consistently."
          description="These are the operating rules every engagement follows. They’re how enterprise buyers can predict exactly how we’ll behave before signing anything."
          align="center"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border-subtle bg-surface-1/40 p-6">
              <h3 className="text-lg font-semibold text-fg">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <dt className="text-xs uppercase tracking-wider text-fg-faint">{label}</dt>
      <dd className="text-fg">{value}</dd>
    </div>
  );
}
