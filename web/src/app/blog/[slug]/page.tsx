import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { Mdx } from "@/components/content/Mdx";
import { JsonLd } from "@/components/seo/StructuredData";
import { buildMetadata } from "@/lib/metadata";
import { getBlog, getBlogBySlug } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/lib/site.config";

export async function generateStaticParams() {
  const items = await getBlog();
  return items.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) return buildMetadata({ title: "Not found", path: `/blog/${slug}` });
  return buildMetadata({ title: post.title, description: post.description, path: `/blog/${slug}` });
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.date,
          author: { "@type": "Organization", name: post.author, url: siteConfig.url },
          publisher: { "@type": "Organization", name: siteConfig.legalName, url: siteConfig.url },
          mainEntityOfPage: `${siteConfig.url}/blog/${slug}`,
        }}
      />
      <PageHero eyebrow={formatDate(post.date)} title={post.title} description={post.description} />
      <section className="container-max my-12 max-w-3xl">
        <Mdx source={post.body} />
        <div className="mt-12">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-brand-300 hover:text-brand-200">
            <ArrowLeft className="h-4 w-4" /> All posts
          </Link>
        </div>
      </section>
    </>
  );
}
