import { notFound } from "next/navigation";
import { PageHero } from "@/components/marketing/PageHero";
import { Mdx } from "@/components/content/Mdx";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { buildMetadata } from "@/lib/metadata";
import { getAllTrust, getTrust } from "@/lib/content";

export async function generateStaticParams() {
  const all = await getAllTrust();
  return all.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = await getTrust(slug);
  if (!doc) return buildMetadata({ title: "Not found", path: `/trust/${slug}` });
  return buildMetadata({
    title: doc.title,
    description: doc.description,
    path: `/trust/${slug}`,
  });
}

export default async function TrustDoc({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = await getTrust(slug);
  if (!doc) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Trust Center", href: "/trust" },
          { name: doc.title, href: `/trust/${slug}` },
        ]}
      />
      <PageHero eyebrow="Trust" title={doc.title} description={doc.description} />
      <section className="container-max my-12 max-w-3xl">
        <p className="text-xs uppercase tracking-wider text-fg-faint">
          Version {doc.version ?? "1.0"} · Last updated {doc.updated}
        </p>
        <div className="mt-6">
          <Mdx source={doc.body} />
        </div>
      </section>
    </>
  );
}
