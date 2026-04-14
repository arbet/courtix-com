import { PageHero } from "@/components/marketing/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { PaymentMarks } from "@/components/brand/PaymentMarks";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Contact Courtix about a software, cloud, API or DevOps engagement. A senior engineer replies within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  const { contact, registration } = siteConfig;
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />
      <PageHero
        eyebrow="Contact"
        title="Tell us about your project."
        description="A senior engineer replies to every enquiry within one business day. No forms-before-forms, no pitches — just a real conversation."
      />

      <section className="container-max my-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <aside className="space-y-8 text-sm">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-faint">Email</h3>
              <a href={`mailto:${contact.email}`} className="mt-2 block text-fg hover:text-brand-300">{contact.email}</a>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-faint">Phone</h3>
              <a href={`tel:${contact.phoneE164}`} className="mt-2 block text-fg hover:text-brand-300">{contact.phone}</a>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-faint">Business address</h3>
              <p className="mt-2 text-fg">
                Courtix Hosting LLC<br />
                {registration.address.line1}<br />
                {registration.address.city}, {registration.address.region} {registration.address.postalCode}<br />
                {registration.address.country}
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-faint">Delaware file number</h3>
              <p className="mt-2 text-fg">{registration.fileNumber}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-faint">Business hours</h3>
              <p className="mt-2 text-fg">{contact.hours}</p>
            </div>

            <div className="rounded-2xl border border-border-subtle bg-surface-1/40 p-5">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-faint">Accepted payment methods</h3>
              <div className="mt-3">
                <PaymentMarks size="md" />
              </div>
              <p className="mt-3 text-xs leading-relaxed text-fg-muted">
                We accept Visa and Mastercard through Wise, a regulated financial institution. All transactions are
                charged in US Dollars (USD). Card details are never stored on our servers and are handled in
                compliance with PCI DSS requirements.
              </p>
            </div>
          </aside>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
