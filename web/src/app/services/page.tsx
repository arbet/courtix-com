import { Code2, Cable, Workflow } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { CTABand } from "@/components/marketing/CTABand";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Services",
  description: "Software development, cloud hosting, API integration and DevOps engineering from Courtix.",
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
      "Connect the systems your business already runs on — and automate the work between them.",
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

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]} />
      <PageHero
        eyebrow="Services"
        title="Engineering, hosted and operated by the same team."
        description="Courtix delivers software as a vertical stack — design, development, deployment and operation — so you get one team accountable from sketch to production."
      />
      <section className="container-max my-16">
        <FeatureGrid features={services} columns={3} />
      </section>
      <CTABand />
    </>
  );
}
