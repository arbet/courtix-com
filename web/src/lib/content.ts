import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

const CONTENT_DIR = path.join(process.cwd(), "content");

const PortfolioSchema = z.object({
  title: z.string(),
  client: z.string(),
  industry: z.string(),
  summary: z.string(),
  stack: z.array(z.string()),
  duration: z.string().optional(),
  year: z.number().optional(),
  outcomeHeadline: z.string().optional(),
  featured: z.boolean().optional(),
});
export type PortfolioMeta = z.infer<typeof PortfolioSchema> & { slug: string; body: string };

const LegalSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  updated: z.string(),
});
export type LegalMeta = z.infer<typeof LegalSchema> & { slug: string; body: string };

const TrustSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  updated: z.string(),
  version: z.string().optional(),
});
export type TrustMeta = z.infer<typeof TrustSchema> & { slug: string; body: string };

const BlogSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  author: z.string().default("Courtix Engineering"),
  tags: z.array(z.string()).default([]),
});
export type BlogMeta = z.infer<typeof BlogSchema> & { slug: string; body: string };

function readDir(rel: string) {
  const dir = path.join(CONTENT_DIR, rel);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((file) => {
      const full = path.join(dir, file);
      const raw = fs.readFileSync(full, "utf8");
      const { data, content } = matter(raw);
      return { slug: file.replace(/\.mdx?$/, ""), data, content };
    });
}

export async function getPortfolio(): Promise<PortfolioMeta[]> {
  return readDir("portfolio")
    .map(({ slug, data, content }) => ({ ...PortfolioSchema.parse(data), slug, body: content }))
    .sort((a, b) => {
      // Featured first, then most recent year, then alphabetical title for stable order.
      const featuredDiff = Number(!!b.featured) - Number(!!a.featured);
      if (featuredDiff !== 0) return featuredDiff;
      const yearDiff = (b.year ?? 0) - (a.year ?? 0);
      if (yearDiff !== 0) return yearDiff;
      return a.title.localeCompare(b.title);
    });
}

export async function getPortfolioBySlug(slug: string): Promise<PortfolioMeta | null> {
  const all = await getPortfolio();
  return all.find((p) => p.slug === slug) ?? null;
}

export async function getLegal(slug: string): Promise<LegalMeta | null> {
  const all = readDir("legal");
  const match = all.find((d) => d.slug === slug);
  if (!match) return null;
  return { ...LegalSchema.parse(match.data), slug: match.slug, body: match.content };
}

export async function getAllLegal(): Promise<LegalMeta[]> {
  return readDir("legal").map(({ slug, data, content }) => ({
    ...LegalSchema.parse(data),
    slug,
    body: content,
  }));
}

export async function getTrust(slug: string): Promise<TrustMeta | null> {
  const all = readDir("trust");
  const match = all.find((d) => d.slug === slug);
  if (!match) return null;
  return { ...TrustSchema.parse(match.data), slug: match.slug, body: match.content };
}

export async function getAllTrust(): Promise<TrustMeta[]> {
  return readDir("trust").map(({ slug, data, content }) => ({
    ...TrustSchema.parse(data),
    slug,
    body: content,
  }));
}

export async function getBlog(): Promise<BlogMeta[]> {
  return readDir("blog")
    .map(({ slug, data, content }) => ({ ...BlogSchema.parse(data), slug, body: content }))
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getBlogBySlug(slug: string): Promise<BlogMeta | null> {
  const all = await getBlog();
  return all.find((p) => p.slug === slug) ?? null;
}
