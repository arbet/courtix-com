import { Cable } from "lucide-react";
import { ServiceDetail } from "@/components/marketing/ServiceDetail";
import { ScopingPath } from "@/components/marketing/ScopingPath";
import { CTABand } from "@/components/marketing/CTABand";
import { FAQ } from "@/components/marketing/FAQ";
import { FaqJsonLd, ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "API Integration & Consulting",
  description:
    "API design, system integration, workflow automation and event-driven architectures. RESTful and GraphQL APIs, ETL pipelines and partner integrations.",
  path: "/services/api-integration",
});

const faqs = [
  {
    q: "Do you work with legacy systems?",
    a: "Routinely. We’re comfortable integrating with SOAP endpoints, flat-file exchanges, SFTP drops and vendor APIs that were last updated in 2014. We wrap them in clean, tested boundaries so the rest of the system doesn’t have to care.",
  },
  {
    q: "Can you build an internal API platform?",
    a: "Yes, from auth and rate limiting to developer portals, schema registries and OpenAPI-driven client generation. We’ve delivered internal API platforms for both fast-growing startups and enterprises modernising a service-oriented architecture.",
  },
  {
    q: "REST or GraphQL?",
    a: "Both, depending on the problem. GraphQL is great when you have many clients with different data needs. REST is usually simpler for partner-facing APIs where predictability and caching matter most.",
  },
];

export default function ApiIntegrationPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "API Integration", href: "/services/api-integration" },
        ]}
      />
      <ServiceJsonLd
        name="API Integration & Consulting"
        description="API design, system integration and workflow automation."
        path="/services/api-integration"
      />
      <ServiceDetail
        eyebrow="API Integration"
        title="Systems that actually talk to each other."
        description="We design, build and maintain the APIs and integrations that move data between the systems your business runs on, so your team stops doing it manually."
        icon={Cable}
        included={[
          "RESTful and GraphQL API design and development",
          "Partner API integrations (payments, CRMs, ERPs)",
          "Event-driven architectures with webhooks and queues",
          "ETL and reverse-ETL pipelines",
          "Workflow automation and idempotency",
          "OpenAPI / AsyncAPI specifications",
          "Authentication and rate limiting",
          "Observability and audit logging",
        ]}
        outcomes={[
          { title: "Fewer manual hand-offs", description: "Automated flows replace spreadsheets and copy-paste." },
          { title: "One source of truth", description: "Data reconciled between systems with idempotent, replayable pipelines." },
          { title: "Integrations you can trust", description: "Every external call is retried, logged and monitored for drift." },
        ]}
        stack={["TypeScript", "Node.js", "Python", "PostgreSQL", "Redis", "REST", "GraphQL", "OpenAPI", "Webhooks"]}
      />
      <ScopingPath />
      <FAQ items={faqs} title="API integration FAQ" />
      <FaqJsonLd faqs={faqs} />
      <CTABand />
    </>
  );
}
