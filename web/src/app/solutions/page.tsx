import { Landmark, ShoppingBag, Stethoscope, Factory, GraduationCap, Sparkles } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { CTABand } from "@/components/marketing/CTABand";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Solutions",
  description: "Industry solutions from Courtix: fintech, e-commerce, healthcare, logistics, education and AI.",
  path: "/solutions",
});

const solutions = [
  {
    icon: Landmark,
    title: "Fintech & Payments",
    description: "Payment orchestration, ledgers, KYC integrations and PCI-aligned architectures.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description: "Headless storefronts, inventory sync, checkout optimisation and marketing experimentation.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "HIPAA-aligned patient portals, secure document exchange and audit-ready data handling.",
  },
  {
    icon: Factory,
    title: "Logistics & Operations",
    description: "Real-time tracking, dispatch tools, route optimisation and driver-facing mobile apps.",
  },
  {
    icon: GraduationCap,
    title: "Education & SaaS",
    description: "Multi-tenant platforms, role-based access, analytics and payment integrations.",
  },
  {
    icon: Sparkles,
    title: "AI & Applied ML",
    description: "Retrieval-augmented generation, document intelligence and LLM-backed tools with grounded answers.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Solutions", href: "/solutions" }]} />
      <PageHero
        eyebrow="Solutions"
        title="Software built for the way your industry actually works."
        description="We’ve delivered production software across regulated and high-stakes industries. Here’s where we go deepest."
      />
      <section className="container-max my-16">
        <FeatureGrid features={solutions} columns={3} />
      </section>
      <CTABand />
    </>
  );
}
