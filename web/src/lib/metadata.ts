import type { Metadata } from "next";
import { siteConfig } from "./site.config";

type PageMetaInput = {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
};

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  ogImage = siteConfig.ogImage,
}: PageMetaInput = {}): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const fullTitle = title ? `${title} — ${siteConfig.name}` : `${siteConfig.name} — ${siteConfig.tagline}`;
  return {
    metadataBase: new URL(siteConfig.url),
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}
