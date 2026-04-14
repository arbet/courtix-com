import { notFound } from "next/navigation";
import { PageHero } from "@/components/marketing/PageHero";
import { Mdx } from "@/components/content/Mdx";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { buildMetadata } from "@/lib/metadata";
import { getAllLegal, getLegal } from "@/lib/content";

export async function generateStaticParams() {
  const all = await getAllLegal();
  return all.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = await getLegal(slug);
  if (!doc) return buildMetadata({ title: "Not found", path: `/legal/${slug}` });
  return buildMetadata({
    title: doc.title,
    description: doc.description,
    path: `/legal/${slug}`,
  });
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = await getLegal(slug);
  if (!doc) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Legal", href: "/legal" },
          { name: doc.title, href: `/legal/${slug}` },
        ]}
      />
      <PageHero eyebrow="Legal" title={doc.title} description={doc.description} />
      <section className="container-max my-12 max-w-3xl">
        <p className="text-xs uppercase tracking-wider text-fg-faint">Last updated: {doc.updated}</p>
        <div className="mt-6">
          <Mdx source={doc.body} />
        </div>
      </section>
    </>
  );
}
