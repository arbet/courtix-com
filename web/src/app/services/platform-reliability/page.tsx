import { Workflow } from "lucide-react";
import { ServiceDetail } from "@/components/marketing/ServiceDetail";
import { CTABand } from "@/components/marketing/CTABand";
import { FAQ } from "@/components/marketing/FAQ";
import { FaqJsonLd, ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Platform & Reliability Engineering",
  description:
    "Continuous delivery, infrastructure-as-code, observability, managed data, on-call and reliability engineering for production systems running on Cloudflare and AWS.",
  path: "/services/platform-reliability",
});

const faqs = [
  {
    q: "Where do you deploy production workloads?",
    a: "Primarily Cloudflare and AWS. We’re cloud-pragmatic: the right platform depends on the workload, compliance requirements and the client’s existing commitments. Our applications are built on standard modern web technologies so they travel cleanly between platforms.",
  },
  {
    q: "Do you provide managed databases?",
    a: "Yes. PostgreSQL, MySQL and Redis are our most common managed offerings, provisioned via infrastructure-as-code and monitored alongside the application. Backups, point-in-time recovery and patching are included.",
  },
  {
    q: "Do you take on on-call?",
    a: "For systems we operate, yes. We run a documented on-call rotation with paging, escalation and post-incident review. For systems operated by the client, we help set the same practices up and train the team.",
  },
  {
    q: "What does ‘observability-first’ mean in practice?",
    a: "Structured logs, metrics and traces wired from day one, with dashboards and alerts focused on the indicators your team would actually act on. If an alert fires and nobody does anything, we either fix the alert or delete it.",
  },
  {
    q: "How do you handle DDoS and abuse?",
    a: "We lean on Cloudflare’s network for DDoS mitigation, WAF and bot protection in front of most of our production workloads. Application-layer controls (rate limiting, auth hardening, audit logging) are layered on top.",
  },
  {
    q: "What’s your uptime target?",
    a: "We target 99.9% monthly uptime for production workloads with 30-minute Sev-1 response during business hours, or 24×7 with a contracted on-call rotation. See our [SLA](/trust/sla) for full details.",
  },
];

export default function PlatformReliabilityPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Platform & Reliability Engineering", href: "/services/platform-reliability" },
        ]}
      />
      <ServiceJsonLd
        name="Platform & Reliability Engineering"
        description="Continuous delivery, infrastructure-as-code, managed data, observability and reliability engineering."
        path="/services/platform-reliability"
      />
      <ServiceDetail
        eyebrow="Platform & Reliability Engineering"
        title="Ship faster. Stay up. Sleep at night."
        description="We build and operate the platform underneath your software — CI/CD, infrastructure-as-code, managed data, observability, DDoS protection and on-call rotations — so your product engineers can focus on shipping features, not fighting fires."
        icon={Workflow}
        included={[
          "CI/CD pipeline design and implementation",
          "Infrastructure-as-code provisioning and review",
          "Deployment automation on Cloudflare and AWS",
          "Managed PostgreSQL, MySQL and Redis",
          "WAF, DDoS and bot protection in front of production",
          "Automated backups and point-in-time recovery",
          "TLS certificates and DNS management",
          "Structured logging, metrics and traces",
          "SLI / SLO definition and error budgets",
          "Runbooks and on-call rotations",
          "Incident response and post-mortems",
        ]}
        outcomes={[
          {
            title: "Faster, safer releases",
            description: "Trunk-based delivery with protected main and automated rollbacks — so shipping isn’t scary.",
          },
          {
            title: "Fewer surprise outages",
            description: "Observability catches issues before users do. On-call actually works. Runbooks exist and are current.",
          },
          {
            title: "An audit trail you can show a regulator",
            description: "Every change tagged, reviewed and reproducible through infrastructure-as-code. No snowflake servers.",
          },
        ]}
        stack={[
          "Infrastructure as code",
          "GitHub Actions",
          "Docker",
          "Kubernetes",
          "PostgreSQL",
          "MySQL",
          "Redis",
          "Prometheus",
          "Grafana",
          "OpenTelemetry",
          "Cloudflare",
          "AWS",
        ]}
      />
      <FAQ items={faqs} title="Platform & Reliability Engineering FAQ" />
      <FaqJsonLd faqs={faqs} />
      <CTABand />
    </>
  );
}
