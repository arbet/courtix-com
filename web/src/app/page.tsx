import Link from "next/link";
import {
  Code2,
  Cable,
  Workflow,
  ShieldCheck,
  GaugeCircle,
  GitBranch,
  LineChart,
  Lock,
  Server,
  ArrowRight,
} from "lucide-react";
import { Hero } from "@/components/marketing/Hero";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { LogoWall } from "@/components/marketing/LogoWall";
import { CaseStudyCard } from "@/components/marketing/CaseStudyCard";
import { FAQ } from "@/components/marketing/FAQ";
import { FaqJsonLd } from "@/components/seo/StructuredData";
import { CTABand } from "@/components/marketing/CTABand";
import { getPortfolio } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Enterprise software engineering and cloud infrastructure",
  path: "/",
});

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Purpose-built applications, platforms and APIs engineered to your workflow. Senior full-stack team — TypeScript, React and Python.",
    href: "/services/software-development",
    bullets: ["Custom platforms", "Internal tools", "Data systems"],
  },
  {
    icon: Cable,
    title: "API Integration",
    description:
      "Connect systems, automate workflows and unify data. From bespoke integrations to event-driven architectures at scale.",
    href: "/services/api-integration",
    bullets: ["Third-party APIs", "Event-driven workflows", "ETL pipelines"],
  },
  {
    icon: Workflow,
    title: "Platform & Reliability Engineering",
    description:
      "CI/CD, infrastructure-as-code, managed data, observability, DDoS protection and on-call. Ship faster without trading reliability.",
    href: "/services/platform-reliability",
    bullets: ["Terraform & CI", "SLO tracking", "Incident response"],
  },
];

const pillars = [
  {
    icon: ShieldCheck,
    title: "Secure by default",
    description:
      "Every project follows our Secure SDLC policy — threat modeling, code review, SAST/DAST and SBOM tracking before release.",
    href: "/trust/sdlc",
  },
  {
    icon: GaugeCircle,
    title: "Performance-obsessed",
    description:
      "We optimise for Core Web Vitals and backend P95 latency. Edge rendering, smart caching and tight asset budgets.",
  },
  {
    icon: GitBranch,
    title: "Trunk-based delivery",
    description:
      "Short-lived branches, protected main, green CI. Your team can audit every change and deploy with confidence.",
  },
  {
    icon: LineChart,
    title: "Observable systems",
    description:
      "Structured logs, traces and metrics wired from day one — not bolted on in an outage. Dashboards you&rsquo;ll actually use.",
  },
  {
    icon: Lock,
    title: "Compliance aware",
    description:
      "PCI-aligned payment flows, GDPR data handling, audit-ready retention. Built with regulated-industry clients in mind.",
  },
  {
    icon: Server,
    title: "Infrastructure as code",
    description:
      "Terraform and Wrangler for repeatable, reviewable infrastructure. No snowflakes, no &ldquo;works on my box&rdquo;.",
  },
];

const homeFaqs = [
  {
    q: "What kind of projects do you take on?",
    a: "We focus on custom software engineering — cloud-native applications, APIs, platforms and integrations. Typical projects range from a focused 4-week build to long-running platform engagements. We work best with teams that have clear business goals and need senior engineers who can own a system end-to-end.",
  },
  {
    q: "Who is the legal entity behind Courtix?",
    a: "Courtix Hosting LLC, registered in the State of Delaware, United States (file number 4680426). Contracts, invoices and legal correspondence are with this entity. Full company details are on our About page.",
  },
  {
    q: "Which technology stack do you use?",
    a: "TypeScript and JavaScript on Node.js, with React and Next.js for frontends. Python (Django, FastAPI) for data, AI and service workloads. PostgreSQL, Redis and MongoDB for state. We build on web standards — Fetch, Web Streams, WebSockets, Service Workers — so our code travels cleanly between browser, Node and edge runtimes. We pick the right tool for the job and avoid lock-in.",
  },
  {
    q: "How do payments work?",
    a: "We accept Visa and Mastercard in US Dollars, processed through Wise (a regulated financial institution, FCA firm reference 900507). Projects are typically scoped with a deposit and milestone billing. Full terms and our refund policy are published and acknowledged before any engagement starts.",
  },
  {
    q: "Do you deploy on Cloudflare and AWS?",
    a: "Yes — they are the two platforms we deploy on most. Our applications are built on standard modern web technologies — TypeScript, React, Next.js, Python, PostgreSQL — which run cleanly on both Cloudflare and AWS. We choose the platform per workload based on latency, compliance and the client&rsquo;s existing commitments.",
  },
  {
    q: "How do you handle security and compliance?",
    a: "We follow a written Secure SDLC policy covering threat modeling, code review, dependency scanning, secrets management and incident response. Enterprise buyers can review our Trust Center, including security posture, SLA and SDLC documents, without signing an NDA.",
  },
];

export default async function HomePage() {
  const featured = (await getPortfolio()).slice(0, 3);

  return (
    <>
      <Hero />

      <LogoWall />

      <section className="container-max my-24">
        <SectionHeading
          eyebrow="What we do"
          title="Three practices, one delivery team."
          description="We built Courtix around one idea: engineering teams should be accountable for the software they ship and the systems they run. No hand-offs, no dropped context."
        />
        <div className="mt-12">
          <FeatureGrid features={services} columns={3} />
        </div>
      </section>

      <section className="relative isolate my-24">
        <div aria-hidden className="absolute inset-0 -z-10 bg-radial-brand opacity-60" />
        <div className="container-max">
          <SectionHeading
            eyebrow="How we build"
            title="Principles you can audit."
            description="Every Courtix engagement is underwritten by the same engineering principles. When enterprise buyers ask how you ship software, you should be able to answer in specifics."
            align="center"
          />
          <div className="mt-12">
            <FeatureGrid features={pillars} columns={3} />
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/trust/sdlc" className="btn-secondary">
              Read our Secure SDLC policy <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="container-max my-24">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title="Software that went to production."
            description="A small slice of recent engagements. Real projects are under NDA — reach out if you&rsquo;d like a reference call."
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

      <FAQ items={homeFaqs} />
      <FaqJsonLd faqs={homeFaqs} />

      <CTABand />
    </>
  );
}
