import { Code2 } from "lucide-react";
import { ServiceDetail } from "@/components/marketing/ServiceDetail";
import { CTABand } from "@/components/marketing/CTABand";
import { FAQ } from "@/components/marketing/FAQ";
import { FaqJsonLd, ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Custom Software Development",
  description:
    "Senior engineering team building custom applications, platforms, internal tools and APIs for enterprises. TypeScript, Go, Python, cloud-native.",
  path: "/services/software-development",
});

const faqs = [
  {
    q: "What’s the smallest engagement you take on?",
    a: "Typically a 4-week scoped build. Anything shorter is usually better served by internal engineers or a specialist freelancer. We do run paid discovery sprints (1–2 weeks) to de-risk larger engagements.",
  },
  {
    q: "Do you take over existing codebases?",
    a: "Yes. About a third of our engagements start with a codebase review and stabilisation phase before net-new work. We publish a technical due diligence report at the end of the review so you know exactly what you own.",
  },
  {
    q: "Which languages and frameworks do you use?",
    a: "TypeScript and JavaScript on Node.js, React and Next.js for frontends, Python (Django, FastAPI) for data and AI workloads, PostgreSQL and Redis for state. We build on modern web standards so the same code runs cleanly across browser, Node and edge runtimes. We avoid exotic tech unless the problem genuinely requires it.",
  },
  {
    q: "Do you sign NDAs and DPAs?",
    a: "Yes to both. We have standard NDA and Data Processing Agreement templates that we can sign quickly, or we can counter-sign yours.",
  },
];

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Software Development", href: "/services/software-development" },
        ]}
      />
      <ServiceJsonLd
        name="Custom Software Development"
        description="Custom applications, platforms, internal tools and APIs for enterprises."
        path="/services/software-development"
        offers={[{ price: "2500", priceCurrency: "USD" }]}
      />
      <ServiceDetail
        eyebrow="Software Development"
        title="Custom software, engineered to ship."
        description="Applications, internal platforms, APIs and data systems designed around the way your team actually works. Senior engineers own every project end-to-end."
        priceFrom="From $2,500"
        priceNote="Per project, quoted in USD"
        icon={Code2}
        included={[
          "Technical discovery and requirements analysis",
          "System architecture and threat modelling",
          "Full-stack application development",
          "Code review, SAST and dependency scanning in CI",
          "Integration and end-to-end testing",
          "Deployment automation and environment setup",
          "Documentation and knowledge transfer",
          "Post-launch support and maintenance options",
        ]}
        outcomes={[
          {
            title: "Software your team can own",
            description: "Clean, documented code with tests. No magic, no black boxes, no vendor lock-in.",
          },
          {
            title: "Predictable delivery",
            description: "Written scope, milestone billing and weekly demos. You know what’s coming and when.",
          },
          {
            title: "Production-ready from day one",
            description: "Secure SDLC, observability, backups and infrastructure-as-code — not an afterthought.",
          },
        ]}
        stack={[
          "TypeScript",
          "JavaScript",
          "React",
          "Next.js",
          "Node.js",
          "Python",
          "Django",
          "FastAPI",
          "PostgreSQL",
          "Redis",
          "REST",
          "GraphQL",
          "Docker",
        ]}
      />
      <FAQ items={faqs} title="Software development FAQ" />
      <FaqJsonLd faqs={faqs} />
      <CTABand />
    </>
  );
}
