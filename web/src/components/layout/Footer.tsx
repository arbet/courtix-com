import Link from "next/link";
import { siteConfig } from "@/lib/site.config";
import { Logo } from "@/components/brand/Logo";
import { PaymentMarks } from "@/components/brand/PaymentMarks";

export function Footer() {
  const { footer, legalName, registration, contact } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-32 border-t border-border-subtle bg-bg">
      <div className="container-max py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-fg-muted">
              Courtix builds, deploys and operates mission-critical software for enterprises:
              custom applications, cloud-native APIs and managed edge infrastructure.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-xs text-fg-faint">
              <div>{legalName}</div>
              <div>
                {registration.address.line1}, {registration.address.city}, {registration.address.region}{" "}
                {registration.address.postalCode}, {registration.address.country}
              </div>
              <div>Delaware file number: {registration.fileNumber}</div>
              <div>
                <a href={`mailto:${contact.email}`} className="hover:text-fg">
                  {contact.email}
                </a>{" "}
                · {contact.phone}
              </div>
            </div>
          </div>

          <FooterColumn title="Services" items={footer.services} />
          <FooterColumn title="Company" items={footer.company} />
          <FooterColumn title="Trust" items={footer.trust} />
          <FooterColumn title="Legal" items={footer.legal} />
        </div>

        <div className="mt-14 flex flex-col gap-6 rounded-2xl border border-border-subtle bg-surface-1/60 p-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-5">
            <PaymentMarks size="md" />
            <div className="text-xs text-fg-muted">
              <div className="font-medium text-fg">We accept Visa and Mastercard</div>
              <p className="mt-1 max-w-md leading-relaxed">
                Card payments are processed securely through Wise, a regulated financial institution (FCA firm
                reference 900507). All transactions are charged in US Dollars (USD). Your card details are never
                stored on our servers and are handled in compliance with PCI DSS requirements.
              </p>
            </div>
          </div>
          <div className="text-xs text-fg-muted lg:text-right">
            <div>By purchasing, you accept our</div>
            <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 lg:justify-end">
              <Link href="/legal/terms" className="underline-offset-4 hover:underline hover:text-fg">
                Terms
              </Link>
              <Link href="/legal/privacy" className="underline-offset-4 hover:underline hover:text-fg">
                Privacy Policy
              </Link>
              <Link href="/legal/refund" className="underline-offset-4 hover:underline hover:text-fg">
                Refund &amp; Cancellation Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border-subtle pt-6 text-xs text-fg-faint sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {year} {legalName}. All rights reserved.
          </div>
          <div>Registered in the State of Delaware, United States.</div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: ReadonlyArray<{ label: string; href: string }> }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-widest text-fg-faint">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {items.map((it) => (
          <li key={it.href}>
            <Link href={it.href} className="text-sm text-fg-muted hover:text-fg">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
