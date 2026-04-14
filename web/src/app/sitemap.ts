import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site.config";
import { getPortfolio, getAllLegal, getAllTrust, getBlog } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    "/",
    "/services",
    "/services/software-development",
    "/services/api-integration",
    "/services/platform-reliability",
    "/solutions",
    "/portfolio",
    "/about",
    "/platforms",
    "/contact",
    "/trust",
    "/legal",
    "/blog",
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "/" ? 1 : 0.7,
  }));

  const [portfolio, legal, trust, blog] = await Promise.all([
    getPortfolio(),
    getAllLegal(),
    getAllTrust(),
    getBlog(),
  ]);

  const dynamic = [
    ...portfolio.map((p) => ({
      url: `${base}/portfolio/${p.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...legal.map((p) => ({
      url: `${base}/legal/${p.slug}`,
      lastModified: new Date(p.updated),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
    ...trust.map((p) => ({
      url: `${base}/trust/${p.slug}`,
      lastModified: new Date(p.updated),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    ...blog.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })),
  ];

  return [...staticRoutes, ...dynamic];
}
