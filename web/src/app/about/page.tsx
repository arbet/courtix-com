import Link from "next/link";
import { PageHero } from "@/components/marketing/PageHero";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { CTABand } from "@/components/marketing/CTABand";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({
  title: "About",
  description: "About Courtix, a software engineering firm building enterprise software worldwide.",
  path: "/about",
});

const values = [
  {
    title: "Transparency",
    body: "No hidden fees, no scope surprises. You always know where your project stands, and why.",
  },
  {
    title: "Accountability",
    body: "The people who design your system are the ones who build, ship and operate it. No hand-offs.",
  },
  {
    title: "Craftsmanship",
    body: "Clean, documented, tested code. We’d rather write a simple thing well than an elegant thing poorly.",
  },
  {
    title: "Long-term partnerships",
    body: "We stay after launch. Our best references are clients who have worked with us for years.",
  },
];

export default function AboutPage() {
  const { registration, contact } = siteConfig;
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />
      <PageHero
        eyebrow="About"
        title="Senior engineering, grown-up process, enterprise-ready."
        description="Courtix builds mission-critical software for companies that can’t afford downtime or shortcuts."
      />

      <section className="container-max my-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="prose-courtix max-w-none">
            <h2>Who we are</h2>
            <p>
              Courtix is a software engineering firm that builds custom software, cloud infrastructure and
              integrations for businesses of every size, from Series A startups launching their first platform all
              the way to established enterprises modernising decades of accumulated systems.
            </p>
            <p>
              We started with a simple idea: clients deserve development partners who understand both the technical
              and business sides of a project. Too many engagements end with software that technically works but
              doesn’t solve the actual problem. We bridge that gap by putting senior engineers in the room
              from the first conversation.
            </p>
            <p>
              Our team brings together experienced developers, SREs and project managers who have delivered
              production software across fintech, e-commerce, healthcare, logistics, AI and SaaS. Every engagement
              is owned end-to-end by the people who design, build, ship and operate the system. No hand-offs, no
              dropped context.
            </p>
          </div>

          <aside className="h-fit rounded-2xl border border-border-subtle bg-surface-1/60 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-fg-faint">Company details</h3>
            <dl className="mt-5 space-y-4 text-sm">
              <Row label="Registered name" value="Courtix Hosting LLC" />
              <Row
                label="Registered address"
                value={`${registration.address.line1}, ${registration.address.city}, ${registration.address.region} ${registration.address.postalCode}, ${registration.address.country}`}
              />
              <Row label="Jurisdiction" value={registration.jurisdiction} />
              <Row label="Delaware file number" value={registration.fileNumber} />
              <Row label="Email" value={contact.email} />
              <Row label="Phone" value={contact.phone} />
              <Row label="Business hours" value={contact.hours} />
            </dl>
            <div className="mt-6 flex flex-col gap-2">
              <Link href="/trust" className="btn-secondary">
                Trust Center
              </Link>
              <Link href="/platforms" className="btn-ghost">
                Platforms
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-max my-24">
        <SectionHeading eyebrow="What we stand for" title="Four values, applied consistently." align="center" />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border-subtle bg-surface-1/40 p-6">
              <h3 className="text-lg font-semibold text-fg">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <dt className="text-xs uppercase tracking-wider text-fg-faint">{label}</dt>
      <dd className="text-fg">{value}</dd>
    </div>
  );
}
