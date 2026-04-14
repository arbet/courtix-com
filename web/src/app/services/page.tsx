import Link from "next/link";
import { ArrowRight, Code2, Cable, Workflow, Users, FileCheck, Layers, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { CaseStudyCard } from "@/components/marketing/CaseStudyCard";
import { ScopingPath } from "@/components/marketing/ScopingPath";
import { CTABand } from "@/components/marketing/CTABand";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { buildMetadata } from "@/lib/metadata";
import { getPortfolio } from "@/lib/content";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Software development, API integration and platform & reliability engineering from Courtix. Senior engineers, written scope, one team accountable end-to-end.",
  path: "/services",
});

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Custom applications, internal platforms and APIs designed around the way your team actually works.",
    href: "/services/software-development",
    bullets: ["Custom platforms", "Internal tools", "Technical due diligence"],
  },
  {
    icon: Cable,
    title: "API Integration",
    description:
      "Connect the systems your business already runs on, and automate the work between them.",
    href: "/services/api-integration",
    bullets: ["Third-party APIs", "Event-driven workflows", "ETL pipelines"],
  },
  {
    icon: Workflow,
    title: "Platform & Reliability Engineering",
    description:
      "Deploy, operate and keep production running. Infrastructure-as-code, managed data, observability, DDoS protection and on-call.",
    href: "/services/platform-reliability",
    bullets: ["CI/CD & IaC", "Managed data", "Incident response"],
  },
];

const differentiators = [
  {
    icon: Users,
    title: "Senior engineers only",
    description:
      "Every engagement is staffed with senior engineers who have shipped production software before. No junior hand-offs, no offshore body-shop model.",
  },
  {
    icon: FileCheck,
    title: "Written scope before any code",
    description:
      "Every project starts with a paid discovery and a written scope. No open-ended hourly meters, no surprise invoices, no silent scope creep.",
  },
  {
    icon: Layers,
    title: "One team, end-to-end accountable",
    description:
      "The same people design, build, ship and operate your system. No hand-offs between design, development and operations, no dropped context.",
  },
  {
    icon: ShieldCheck,
    title: "Audit-ready from day one",
    description:
      "Secure SDLC, threat modelling, code review, observability and audit logging built in from the first commit, not bolted on for a compliance review.",
  },
];

export default async function ServicesPage() {
  const featured = (await getPortfolio()).slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]} />

      <PageHero
        eyebrow="Services"
        title="Engineering, hosted and operated by the same team."
        description="Courtix delivers software as a vertical stack: design, development, deployment and operation. You get one team accountable from sketch to production."
      />

      <section className="container-max my-16">
        <FeatureGrid features={services} columns={3} />
      </section>

      <ScopingPath />

      <section className="container-max my-24">
        <SectionHeading
          eyebrow="What makes working with us different"
          title="Four commitments. No exceptions."
          description="The way we staff, scope and ship is the same whether an engagement is four weeks or twelve months. Enterprise buyers should be able to predict exactly how we will behave before signing anything."
          align="center"
        />
        <div className="mt-12">
          <FeatureGrid features={differentiators} columns={2} />
        </div>
      </section>

      <section className="container-max my-24">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Recent work"
            title="Software that went to production."
            description="A slice of what the three practices look like in practice."
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

      <CTABand />
    </>
  );
}
