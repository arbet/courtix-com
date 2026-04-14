import Link from "next/link";
import { PageHero } from "@/components/marketing/PageHero";
import { buildMetadata } from "@/lib/metadata";
import { getBlog } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Engineering notes from Courtix: how we ship, how we operate, and what we&rsquo;ve learned along the way.",
  path: "/blog",
});

export default async function BlogIndex() {
  const posts = await getBlog();
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Engineering notes."
        description="Short writeups on how we build and operate software — published so clients and partners can see how we think."
      />
      <section className="container-max my-12 max-w-3xl">
        {posts.length === 0 ? (
          <p className="text-sm text-fg-muted">No posts yet — watch this space.</p>
        ) : (
          <ul className="divide-y divide-border-subtle overflow-hidden rounded-2xl border border-border-subtle bg-surface-1/40">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="block p-6 hover:bg-white/[0.03]">
                  <div className="text-xs uppercase tracking-wider text-brand-300">{formatDate(p.date)}</div>
                  <h2 className="mt-2 text-lg font-semibold text-fg">{p.title}</h2>
                  <p className="mt-2 text-sm text-fg-muted">{p.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
