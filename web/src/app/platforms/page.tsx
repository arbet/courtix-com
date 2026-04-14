import { PageHero } from "@/components/marketing/PageHero";
import { CTABand } from "@/components/marketing/CTABand";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Platforms & ecosystem",
  description: "The platforms and services Courtix builds on, deploys to and integrates with every day.",
  path: "/platforms",
});

const platforms = [
  {
    name: "Cloudflare",
    role: "Edge network & production CDN",
    body: "We run production workloads behind Cloudflare&rsquo;s global network — CDN, WAF, DDoS mitigation, DNS, Turnstile and Zero Trust. We deploy applications across Cloudflare&rsquo;s developer platform for clients whose workloads fit an edge-first architecture.",
  },
  {
    name: "Amazon Web Services",
    role: "Cloud platform",
    body: "We design, build and operate workloads on AWS across EC2, RDS, S3, Lambda, CloudFront, SQS and KMS. Infrastructure is provisioned via Terraform with environment parity from development through production.",
  },
  {
    name: "Stripe",
    role: "Payments platform",
    body: "We build and integrate Stripe-powered checkout, billing and Connect flows for clients who need a full payments platform alongside our Wise-based card acceptance.",
  },
  {
    name: "Wise",
    role: "Card payment processing",
    body: "We accept Visa and Mastercard through Wise, a regulated Electronic Money Institution (FCA firm reference 900507). All cardholder data is handled by Wise under PCI DSS — we never store card details.",
  },
  {
    name: "GitHub",
    role: "Source control & CI",
    body: "All our projects are hosted on GitHub with protected branches, required reviews and GitHub Actions for continuous integration, static analysis and dependency scanning.",
  },
  {
    name: "Managed AI APIs",
    role: "AI & retrieval",
    body: "For AI-powered features we build on managed LLM APIs and vector search. Our pipelines prioritise grounded retrieval and citation-first answers so every response can be traced to source material.",
  },
];

export default function PlatformsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Platforms", href: "/platforms" }]} />
      <PageHero
        eyebrow="Platforms"
        title="The platforms we build on."
        description="We&rsquo;re deliberate about the platforms we commit to. Each of these is a daily part of how Courtix ships and runs software for clients."
      />

      <section className="container-max my-16">
        <div className="grid gap-4 md:grid-cols-2">
          {platforms.map((p) => (
            <div key={p.name} className="rounded-2xl border border-border-subtle bg-surface-1/40 p-6">
              <h2 className="text-xl font-semibold text-fg">{p.name}</h2>
              <div className="mt-0.5 text-xs font-medium uppercase tracking-wider text-brand-300">
                {p.role}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-fg-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABand
        eyebrow="Build on any of these?"
        title="Let&rsquo;s talk about your project."
        description="If you&rsquo;re shipping on Cloudflare, AWS or any of the platforms above and you need senior engineers to build, ship or operate alongside your team, we&rsquo;d like to hear from you."
        primaryLabel="Start a project"
        primaryHref="/contact?intent=start"
        secondaryLabel="Email us"
        secondaryHref="mailto:hello@courtix.com"
      />
    </>
  );
}
