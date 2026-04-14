import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { Mdx } from "@/components/content/Mdx";
import { CTABand } from "@/components/marketing/CTABand";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { buildMetadata } from "@/lib/metadata";
import { getPortfolio, getPortfolioBySlug } from "@/lib/content";

export async function generateStaticParams() {
  const items = await getPortfolio();
  return items.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await getPortfolioBySlug(slug);
  if (!item) return buildMetadata({ title: "Not found", path: `/portfolio/${slug}` });
  return buildMetadata({ title: item.title, description: item.summary, path: `/portfolio/${slug}` });
}

export default async function PortfolioDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await getPortfolioBySlug(slug);
  if (!item) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Portfolio", href: "/portfolio" },
          { name: item.title, href: `/portfolio/${slug}` },
        ]}
      />
      <PageHero eyebrow={item.industry} title={item.title} description={item.summary}>
        <div className="flex flex-wrap gap-1.5">
          {item.stack.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="container-max my-12 max-w-3xl">
        <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Meta label="Client" value={item.client} />
          {item.year && <Meta label="Year" value={String(item.year)} />}
          {item.duration && <Meta label="Duration" value={item.duration} />}
          {item.outcomeHeadline && <Meta label="Outcome" value={item.outcomeHeadline} />}
        </div>
        <Mdx source={item.body} />

        <div className="mt-12">
          <Link href="/portfolio" className="inline-flex items-center gap-1.5 text-sm text-brand-300 hover:text-brand-200">
            <ArrowLeft className="h-4 w-4" /> All case studies
          </Link>
        </div>
      </section>

      <CTABand />
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border-subtle bg-surface-1/40 p-3">
      <div className="text-[0.625rem] uppercase tracking-wider text-fg-faint">{label}</div>
      <div className="mt-0.5 text-sm text-fg">{value}</div>
    </div>
  );
}
