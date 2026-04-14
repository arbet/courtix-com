import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/StructuredData";
import { siteConfig } from "@/lib/site.config";
import { buildMetadata } from "@/lib/metadata";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const display = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  ...buildMetadata({}),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  keywords: [
    "custom software development",
    "cloud hosting",
    "API integration",
    "DevOps",
    "TypeScript",
    "React",
    "Python",
    "Cloudflare",
    "AWS",
    "enterprise software",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-bg text-fg" suppressHydrationWarning>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-brand-600 focus:px-3 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
