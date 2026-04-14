export const siteConfig = {
  name: "Courtix",
  legalName: "Courtix Hosting LLC",
  shortName: "Courtix",
  tagline: "Enterprise software engineering and cloud infrastructure",
  description:
    "Courtix builds, deploys and operates mission-critical software for enterprises: custom applications, cloud-native APIs and managed edge infrastructure.",
  url: "https://courtix.com",
  ogImage: "/og.png",

  registration: {
    jurisdiction: "State of Delaware, United States",
    fileNumber: "4680426",
    address: {
      line1: "8 The Green Ste A",
      city: "Dover",
      region: "DE",
      postalCode: "19901",
      country: "USA",
    },
  },
  contact: {
    email: "hello@courtix.com",
    phone: "+1 (830) 293-3496",
    phoneE164: "+18302933496",
    hours: "Monday – Friday, 9:00 AM – 6:00 PM EST",
  },
  social: {
    github: "https://github.com/courtix",
    linkedin: "https://www.linkedin.com/company/courtix",
  },
  nav: [
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "Software Development", href: "/services/software-development", description: "Custom applications, platforms and APIs" },
        { label: "Integration Engineering", href: "/services/api-integration", description: "Systems, data and workflow automation" },
        { label: "Platform & Reliability Engineering", href: "/services/platform-reliability", description: "Deploy, operate and keep production running" },
      ],
    },
    { label: "Solutions", href: "/solutions" },
    { label: "Portfolio", href: "/portfolio" },
    {
      label: "Trust",
      href: "/trust",
      children: [
        { label: "Secure SDLC Policy", href: "/trust/sdlc", description: "How we ship secure software" },
        { label: "Security", href: "/trust/security", description: "Our security posture" },
        { label: "Service Level Agreement", href: "/trust/sla", description: "Uptime and response commitments" },
      ],
    },
    { label: "Platforms", href: "/platforms" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ],
  footer: {
    services: [
      { label: "Software Development", href: "/services/software-development" },
      { label: "Integration Engineering", href: "/services/api-integration" },
      { label: "Platform & Reliability Engineering", href: "/services/platform-reliability" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Platforms", href: "/platforms" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    trust: [
      { label: "Trust Center", href: "/trust" },
      { label: "Secure SDLC", href: "/trust/sdlc" },
      { label: "Security", href: "/trust/security" },
      { label: "SLA", href: "/trust/sla" },
    ],
    legal: [
      { label: "Terms & Conditions", href: "/legal/terms" },
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Refund & Cancellation Policy", href: "/legal/refund" },
      { label: "Acceptable Use", href: "/legal/aup" },
    ],
  },
  partners: [
    { name: "Cloudflare", note: "Infrastructure & edge network" },
    { name: "Amazon Web Services", note: "Cloud platform" },
    { name: "Stripe", note: "Payments platform" },
    { name: "Wise", note: "Card payment processing" },
    { name: "GitHub", note: "Source control & CI" },
    { name: "Vercel", note: "Frontend deployments" },
  ],
  infrastructure: [
    { name: "AWS" },
    { name: "Google Cloud" },
    { name: "Microsoft Azure" },
    { name: "Cloudflare" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
