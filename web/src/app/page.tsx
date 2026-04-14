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
      "Purpose-built applications, platforms and APIs engineered to your workflow. Senior full-stack team working in TypeScript, React and Python.",
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
    bullets: ["Infrastructure as code", "SLO tracking", "Incident response"],
  },
];

const pillars = [
  {
    icon: ShieldCheck,
    title: "Secure by default",
    description:
      "Every project follows our Secure SDLC policy, threat modeling, code review, SAST/DAST and SBOM tracking before release.",
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
      "Structured logs, traces and metrics wired from day one, not bolted on in an outage. Dashboards you’ll actually use.",
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
      "All infrastructure is provisioned and versioned as code, reviewed like application changes. No snowflakes, no “works on my box”.",
  },
];

const homeFaqs = [
  {
    q: "What kind of projects do you take on?",
    a: "We focus on custom software engineering, cloud-native applications, APIs, platforms and integrations. Typical projects range from a focused 4-week build to long-running platform engagements. We work best with teams that have clear business goals and need senior engineers who can own a system end-to-end.",
  },
  {
    q: "Who is the legal entity behind Courtix?",
    a: "Courtix Hosting LLC, registered in the State of Delaware, United States (file number 4680426). Contracts, invoices and legal correspondence are with this entity. Full company details are on our About page.",
  },
  {
    q: "Which technology stack do you use?",
    a: "TypeScript and JavaScript on Node.js, with React and Next.js for frontends. Python (Django, FastAPI) for data, AI and service workloads. PostgreSQL, Redis and MongoDB for state. We build on web standards (Fetch, Web Streams, WebSockets, Service Workers) so our code travels cleanly between browser, Node and edge runtimes. We pick the right tool for the job and avoid lock-in.",
  },
  {
    q: "How do payments work?",
    a: "We accept Visa and Mastercard in US Dollars, processed through Wise (a regulated financial institution, FCA firm reference 900507). Projects are typically scoped with a deposit and milestone billing. Full terms and our refund policy are published and acknowledged before any engagement starts.",
  },
  {
    q: "How do you decide where to host a workload?",
    a: "We choose the platform per workload based on latency, compliance, the client’s existing commitments and operational cost. Most of our production work runs on Cloudflare and AWS, and we’re equally comfortable deploying to Google Cloud, Azure or dedicated infrastructure when the workload calls for it. Our applications are built on standard, portable web technologies, so the code doesn’t get stuck on one cloud.",
  },
  {
    q: "How do you handle security and compliance?",
    a: "We follow a written Secure SDLC policy covering threat modeling, code review, dependency scanning, secrets management and incident response. Enterprise buyers can review our Trust Center, including security posture, SLA and SDLC documents, without signing an NDA.",
  },
  {
    q: "Who owns the code and intellectual property at the end of an engagement?",
    a: "You do. Upon full payment, you own all the custom software and code we develop specifically for you. We retain the right to use general-purpose tools, libraries and frameworks in other projects, and any pre-existing intellectual property stays with its original owner. The full wording is in our Terms.",
  },
  {
    q: "Can we start with a paid discovery before committing to a full engagement?",
    a: "Yes, and we encourage it. A one- to two-week paid discovery sprint lets us understand your problem, review any existing code or systems, produce an architecture brief and deliver a written proposal with scope and cost. You decide whether to proceed to a full build. It’s the lowest-risk way to start working together.",
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

      <section className="relative isolate mt-24 border-y border-border-subtle/70 py-24 sm:py-28 lg:py-36">
        {/* layered backdrop */}
        <div
          aria-hidden
          className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_75%_55%_at_50%_0%,rgba(37,99,235,0.22),transparent_65%),radial-gradient(ellipse_60%_45%_at_50%_100%,rgba(139,92,246,0.14),transparent_70%)]"
        />
        <div aria-hidden className="absolute inset-0 -z-10 grid-bg opacity-[0.18] [mask-image:radial-gradient(ellipse_70%_60%_at_center,black_40%,transparent_85%)]" />
        {/* corner crop marks, subtle editorial detail */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-brand-400/60 to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-brand-400/40 to-transparent" />

        <div className="container-max">
          <div className="mx-auto max-w-3xl text-center">
            {/* composed eyebrow: flanked by thin rules, with diamond ornament */}
            <div className="flex items-center justify-center gap-3 text-brand-400">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-brand-400/70" aria-hidden />
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.28em]">
                How we build
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-brand-400/70" aria-hidden />
            </div>

            <h2 className="mt-7 font-display text-display-lg font-semibold tracking-tight text-balance">
              Principles you can audit.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-fg-muted text-pretty sm:text-lg">
              Every Courtix engagement is underwritten by the same engineering principles. When
              enterprise buyers ask how you ship software, you should be able to answer in
              specifics.
            </p>
          </div>

          <div className="mt-16 lg:mt-20">
            <FeatureGrid features={pillars} columns={3} />
          </div>

          <div className="mt-14 flex justify-center">
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
            description="Representative engagements across the industries we serve. Most client work is under NDA. Reference calls available on request."
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
