import { siteConfig } from "@/lib/site.config";

type JsonLdProps = { data: Record<string, unknown> | Record<string, unknown>[] };

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const { legalName, url, contact, registration, social } = siteConfig;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: legalName,
        legalName,
        url,
        logo: `${url}/logo.png`,
        email: contact.email,
        telephone: contact.phone,
        foundingLocation: "Dover, Delaware, USA",
        address: {
          "@type": "PostalAddress",
          streetAddress: registration.address.line1,
          addressLocality: registration.address.city,
          addressRegion: registration.address.region,
          postalCode: registration.address.postalCode,
          addressCountry: "US",
        },
        identifier: registration.fileNumber,
        sameAs: [social.github, social.linkedin],
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
        publisher: { "@type": "Organization", name: siteConfig.legalName },
      }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; href: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((it, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: it.name,
          item: `${siteConfig.url}${it.href}`,
        })),
      }}
    />
  );
}

export function FaqJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  path,
  offers,
}: {
  name: string;
  description: string;
  path: string;
  offers?: { price: string; priceCurrency: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: name,
        provider: { "@type": "Organization", name: siteConfig.legalName, url: siteConfig.url },
        name,
        description,
        url: `${siteConfig.url}${path}`,
        areaServed: "Worldwide",
        ...(offers && {
          offers: offers.map((o) => ({
            "@type": "Offer",
            price: o.price,
            priceCurrency: o.priceCurrency,
            availability: "https://schema.org/InStock",
          })),
        }),
      }}
    />
  );
}
