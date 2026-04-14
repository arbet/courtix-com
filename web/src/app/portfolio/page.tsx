import { PageHero } from "@/components/marketing/PageHero";
import { CaseStudyCard } from "@/components/marketing/CaseStudyCard";
import { CTABand } from "@/components/marketing/CTABand";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { buildMetadata } from "@/lib/metadata";
import { getPortfolio } from "@/lib/content";

export const metadata = buildMetadata({
  title: "Portfolio",
  description: "Selected Courtix engagements across fintech, SaaS, e-commerce, logistics, healthcare and AI.",
  path: "/portfolio",
});

export default async function PortfolioIndex() {
  const items = await getPortfolio();
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Portfolio", href: "/portfolio" }]} />
      <PageHero
        eyebrow="Portfolio"
        title="Software that went to production."
        description="A selection of recent engagements. Client names are redacted where engagements are under NDA — reference calls available on request."
      />
      <section className="container-max my-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
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
