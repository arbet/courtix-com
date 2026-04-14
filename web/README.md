# Courtix Hosting — website (Next.js 15)

Modern rebuild of courtix.com, designed to:

- Look like an enterprise software company (Cloudflare / AWS partner ready)
- Showcase software development as the core competency
- Rank well on search and answer engines (SEO + AEO)
- Preserve every Wise card-payment compliance requirement

## Stack

- **Next.js 15** (App Router) + **TypeScript** + **Tailwind CSS 3**
- **MDX** content via `next-mdx-remote` + `gray-matter` + `zod` frontmatter validation
- **Lucide** icons, **Space Grotesk** display, **Inter** body via `next/font`
- **Cloudflare Pages** hosting via `@cloudflare/next-on-pages`
- **Resend** for contact form delivery (optional — graceful fallback)

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm typecheck    # tsc --noEmit
pnpm build        # full production build
```

## Content

MDX lives under `content/`:

- `content/portfolio/*.mdx` — case studies (placeholders; swap in real ones)
- `content/blog/*.mdx` — engineering notes
- `content/trust/*.mdx` — Secure SDLC policy, Security, SLA
- `content/legal/*.mdx` — Terms, Privacy, Refund, AUP

Each content type has a Zod-validated frontmatter schema in `src/lib/content.ts`. Adding a new file
and pushing is enough — the sitemap, navigation and routes pick it up automatically.

## Wise compliance — do not break

The following MUST remain visible and are enforced by the design system:

1. `Courtix Hosting LLC` in the footer, contact, about and legal pages
2. Delaware file number **4680426** on the About, Contact and Terms pages
3. Registered address **8 The Green Ste A, Dover, DE 19901, USA**
4. **Full-color Visa + Mastercard** brand marks on home, contact and footer (see `PaymentMarks.tsx`)
5. Service descriptions + pricing with a link to Terms and Refund Policy
6. **Click-to-accept** checkbox on the contact form referencing Terms, Privacy and Refund Policy
7. Refund & cancellation policy clearly communicated at `/legal/refund`

See `/home/samer/.claude/projects/-home-samer-public-html-courtix/memory/project_wise_compliance.md`
for the full requirements captured from the Wise support thread.

## Deploy (Cloudflare Pages)

```bash
pnpm pages:build
npx wrangler pages deploy .vercel/output/static --project-name courtix-web
```

Or connect the repo to Cloudflare Pages dashboard with:

- **Build command:** `pnpm install && pnpm pages:build`
- **Output dir:** `.vercel/output/static`
- **Root dir:** `web`
- **Env vars:** `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM`

## Cutover from legacy HTML

The previous static HTML lives at the repository root (`index.html`, `services.html`, etc.).
It has been left in place to avoid breaking the current production site. Recommended cutover:

1. Point `courtix.com` DNS at the new Cloudflare Pages project.
2. Once verified, archive the legacy HTML under `legacy/` in a follow-up commit, or delete it.

## SEO / AEO

- `src/app/sitemap.ts` — dynamic sitemap covering all static and MDX routes
- `src/app/robots.ts` — robots rules pointing at the sitemap
- `public/llms.txt` — summary + canonical URLs for LLM crawlers
- `src/components/seo/StructuredData.tsx` — Organization, WebSite, Breadcrumb, FAQPage, Service and Article JSON-LD helpers
- `src/app/opengraph-image.tsx` — edge-rendered OG image
- FAQ blocks on home and every service page with FAQPage JSON-LD for answer engines

## Portfolio

Six placeholder case studies, all skewed toward software development. Swap in real projects by editing
frontmatter (`client`, `year`, `duration`, `outcomeHeadline`) and the MDX body. The portfolio grid,
home featured strip and sitemap will update automatically.
