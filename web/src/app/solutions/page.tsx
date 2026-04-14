import Link from "next/link";
import {
  Stethoscope,
  Sparkles,
  Landmark,
  Store,
  Boxes,
  Megaphone,
  ArrowRight,
  ShieldCheck,
  Database,
  Activity,
  Lock,
} from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { CaseStudyCard } from "@/components/marketing/CaseStudyCard";
import { CTABand } from "@/components/marketing/CTABand";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { buildMetadata } from "@/lib/metadata";
import { getPortfolio } from "@/lib/content";

export const metadata = buildMetadata({
  title: "Solutions",
  description:
    "Industry solutions from Courtix across healthcare, AI, government, on-demand marketplaces, enterprise internal platforms and marketing technology.",
  path: "/solutions",
});

const industries = [
  {
    icon: Stethoscope,
    title: "Healthcare",
    description:
      "HIPAA-aligned systems, multi-tenant isolation, document intelligence, audit-ready data handling and clinical-network pricing engines.",
  },
  {
    icon: Sparkles,
    title: "AI & Applied ML",
    description:
      "Production AI platforms with retrieval-first answers, citation tracking, async processing at scale and per-job cost attribution.",
  },
  {
    icon: Landmark,
    title: "Government & Public Sector",
    description:
      "Enterprise admin platforms with granular role-based access, auditable financial tracking and department-level workflow.",
  },
  {
    icon: Store,
    title: "Marketplaces & On-demand",
    description:
      "Two-sided marketplaces with mobile apps, real-time booking state, KYC and multi-party payment flows through Stripe Connect.",
  },
  {
    icon: Boxes,
    title: "Enterprise Internal Platforms",
    description:
      "Internal data-ops platforms with least-privilege access, audit trails and safe automation surfaces for AI assistants.",
  },
  {
    icon: Megaphone,
    title: "Marketing & Growth Tech",
    description:
      "Multi-tenant SaaS with metered billing, event-driven lead capture, tenant-isolated data and non-engineer authoring surfaces.",
  },
];

const concerns = [
  {
    icon: ShieldCheck,
    title: "Regulated data handling",
    description:
      "HIPAA, GDPR, PCI-aligned architectures with encryption at rest, signed access, audit logging and documented data flows.",
  },
  {
    icon: Database,
    title: "Multi-tenant isolation",
    description:
      "Tenant boundaries enforced at the database, storage and query level, verifiable from procurement review through operation.",
  },
  {
    icon: Activity,
    title: "Real-time and at scale",
    description:
      "Event-driven pipelines, async processing and observability built in on day one, so bursty load doesn't take anything down.",
  },
  {
    icon: Lock,
    title: "Audit-ready from day one",
    description:
      "Structured logs, append-only audit trails and written change history on every production system we design or operate.",
  },
];

export default async function SolutionsPage() {
  const featured = (await getPortfolio()).slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Solutions", href: "/solutions" }]} />

      <PageHero
        eyebrow="Solutions"
        title="Software built for the way your industry actually works."
        description="We’ve delivered production software across regulated and high-stakes industries. Here’s where we’ve gone deepest."
      />

      <section className="container-max my-16">
        <FeatureGrid features={industries} columns={3} />
      </section>

      <section className="relative isolate mt-24 border-y border-border-subtle/70 py-24 sm:py-28 lg:py-36">
        {/* layered backdrop */}
        <div
          aria-hidden
          className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_75%_55%_at_50%_0%,rgba(37,99,235,0.22),transparent_65%),radial-gradient(ellipse_60%_45%_at_50%_100%,rgba(139,92,246,0.14),transparent_70%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 grid-bg opacity-[0.18] [mask-image:radial-gradient(ellipse_70%_60%_at_center,black_40%,transparent_85%)]"
        />
        {/* corner crop marks, subtle editorial detail */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-brand-400/60 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-brand-400/40 to-transparent"
        />

        <div className="container-max">
          <div className="mx-auto max-w-3xl text-center">
            {/* composed eyebrow: flanked by thin rules */}
            <div className="flex items-center justify-center gap-3 text-brand-400">
              <span
                className="h-px w-10 bg-gradient-to-r from-transparent to-brand-400/70"
                aria-hidden
              />
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.28em]">
                What stays the same across industries
              </span>
              <span
                className="h-px w-10 bg-gradient-to-l from-transparent to-brand-400/70"
                aria-hidden
              />
            </div>

            <h2 className="mt-7 font-display text-display-lg font-semibold tracking-tight text-balance">
              The hard problems don’t care about your vertical.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-fg-muted text-pretty sm:text-lg">
              Every engagement we take on shares the same underlying engineering concerns. The
              industry determines the regulations and the vocabulary. The engineering determines
              whether the system actually holds up.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl lg:mt-20">
            <FeatureGrid features={concerns} columns={2} />
          </div>
        </div>
      </section>

      <section className="container-max my-24">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Proof"
            title="Case studies from these industries."
            description="Representative engagements anonymised to the industry level. Reference calls available on request for serious prospects."
          />
          <Link href="/portfolio" className="btn-ghost shrink-0">
            All case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <CaseStudyCard
              key={item.slug}
              slug={item.slug}
              title={item.title}
              client={item.client}
              industry={item.industry}
              summary={item.summary}
              stack={item.stack}
              outcome={item.outcomeHeadline}
            />
          ))}
        </div>
      </section>

      <section className="container-max my-24">
        <div className="rounded-3xl border border-border-subtle bg-surface-1/40 p-8 sm:p-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="eyebrow mb-3">Don’t see your industry?</div>
              <h2 className="text-display-md font-semibold text-balance">
                Our engagements are defined by technical complexity, not vertical.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-fg-muted">
                If your industry isn’t on this page, it doesn’t mean we can’t help. Most of the
                hard problems we solve are the same everywhere: regulated data, multi-tenant
                isolation, real-time and at scale, audit-ready operations. Tell us what you’re
                building and we’ll tell you quickly whether we’re a fit.
              </p>
            </div>
            <Link href="/contact?intent=start" className="btn-primary shrink-0">
              Talk to us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
