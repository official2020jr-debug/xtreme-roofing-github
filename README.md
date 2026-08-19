# Local service business website — template

A production-grade marketing site template for a local home-service business (landscaping,
plumbing, roofing, HVAC, etc.), built with **Next.js (App Router) + TypeScript + Tailwind CSS**.
Structure and SEO patterns proven on a real client site: schema markup, service/city page
architecture, a real lead-form integration, and a Tier 1/2/3 keyword content structure.

**If you are a fresh Claude Code session reading this cold:** this file is written for you. Read
it fully before touching code. The short version — almost everything client-specific lives in two
files (`src/data/siteConfig.ts` and `src/data/blog.ts`); fill those in, drop in real photos and
brand colors, and the rest of the site (30+ pages: home, about, services hub + category + service
pages, service-areas hub + city pages, blog, reviews, contact, legal) follows automatically because
every page is a thin template driven by that data.

## Setup checklist — do this in order

1. **`src/data/siteConfig.ts`** — every value marked `[REPLACE]` or `[BUSINESS_NAME]`-style
   bracketed placeholder needs real input. Run `grep -rn "\[REPLACE\]\|\[BUSINESS_NAME\]" src` to
   find them all. Fill in, in this order:
   - `business` object: name, shortName (keep short — see title-tag note below), owner name (only
     if a real named point of contact exists and reviews back it up), phone, email, address,
     city/state, hours, social/review URLs.
   - `trustBadges`, `whyChooseBullets`, `differentiators`, `homeFaqs` — real claims specific to
     this business. Don't invent certifications or licensing claims that aren't true.
   - `testimonials` — **real reviews only**, pasted from the client's actual Google Business
     Profile (quote, name, and the *actual* star rating — don't default everything to 5 without
     checking). Never invent a review.
   - `categories` / `subServices` — replace the 4 landscaping-flavored examples with the new
     client's real service structure. Keep the file's existing pattern (see below) — don't
     collapse `whatItIs`/`howItWorks`/`whyUs` into thin one-liners; that's what makes a page read
     as a template instead of a real business.
   - `cities` — **only build a city page if you have something real for it**: a real completed
     project (photo) and a real local detail (soil, HOA norms, lot sizes, neighborhoods locals
     actually reference). Three strong city pages outrank twelve thin ones. Delete the
     corresponding `src/app/service-areas/[slug]/` route directory for any city you don't build.

2. **`src/data/blog.ts`** — replace the 2 placeholder posts with real, researched informational
   content (Tier 3 keywords — the questions customers search before they're ready to buy). Cite
   real, checkable facts (building codes, climate data, regional programs) — research them, don't
   invent them. Delete/add matching route directories under `src/app/blog/[slug]/` to match.

3. **Route directories must match the data exactly.** Every `page.tsx` under `src/app/` does
   `const x = getSubService(slug)!` (or `getCategory`/`getCity`/`getBlogPost`) with a non-null
   assertion — if the slug isn't in the data file, the build crashes. When you add/remove a
   service, category, city, or blog post in the data files, add/remove the matching route
   directory (copy an existing one as a template — they're all ~15 lines).

4. **Brand colors** — `src/app/globals.css`, top of the `:root` block. One comment block marks
   exactly where to change hex values. Token names (`rust`, `ink`, `limestone`) are generic on
   purpose; you don't need to rename anything that references them, just change the hex values.

5. **Logo** — replace `public/logo.png` and `public/logo.jpeg` with the real client logo (same
   filenames, so no code changes needed). A plain placeholder wordmark ships in both slots so the
   site never shows a broken image before you get to this step.

6. **Photos** — `public/images/project/` ships empty. Every photo slot in `siteConfig.ts` and
   every page-level hero defaults to `{ kind: "placeholder", label: "..." }`, which renders a
   tasteful labeled placeholder block (not a broken image icon). As real photos come in: drop the
   file in `public/images/project/`, then change the matching entry to
   `{ kind: "real", src: "/images/project/your-file.jpg", alt: "..." }`. Never use stock photos —
   if there's no real photo yet, leave it as a placeholder.

7. **Lead form (GoHighLevel)** — `GHL_FORM_ID` in `siteConfig.ts`. The form component
   (`src/components/LeadForm.tsx`) is a real GHL inline-form embed, already wired for GA4/Meta
   Pixel `Lead` event firing on submit — just needs the client's real form ID.

8. **Analytics** — `GA4_ID` / `META_PIXEL_ID` in `siteConfig.ts`. Both scripts in
   `src/app/layout.tsx` auto-activate once these stop starting with `REPLACE_`. **Tell the client
   what this costs in performance before adding anything beyond GA4/Meta Pixel** — don't bolt on
   extra third-party scripts without flagging the tradeoff.

9. **`SITE_URL`** in `siteConfig.ts` — the real production domain. Feeds canonical URLs, the
   sitemap, Open Graph tags, and JSON-LD.

10. **`LocalBusiness` schema geo coordinates** (`business.geo` in `siteConfig.ts`) — **do not
    invent these.** Look them up for real (a free geocoder against the real street address works —
    e.g. OpenStreetMap Nominatim) or leave them at `0, 0` and flag it as [NEEDS INPUT] rather than
    guessing.

## Hard rules (learned the expensive way — don't relearn them)

- **Never invent business facts.** License numbers, years in business, project counts, review
  text, geo coordinates — if you don't have it, mark it `[NEEDS INPUT]` in the code and tell the
  person you're building this for. Don't fill in a plausible-sounding placeholder that ships to
  production.
- **Never add `AggregateRating`/`Review` JSON-LD schema with invented or unverified numbers.**
  Only add it if real review data is actually displayed on the page, and only once every star
  rating in that data is confirmed real (not defaulted). Fabricated review schema risks a Google
  manual action against the whole site.
- **Don't build a thin city/location page.** If there's no real local project photo and no real
  local detail for that city, don't build the page — a stub page with the city name swapped into
  generic copy actively hurts rankings.
- **Title tags have a hard budget.** The site-wide suffix is `" | " + business.shortName`. Google
  cuts off around 60 characters — keep `business.shortName` short (~15-20 chars), and if any
  individual page title still runs long once real content is in, trim it; don't just let it
  truncate mid-word in search results.
- **Casing: sentence case everywhere, not Title Case, not ALL CAPS.** No `text-transform:
  uppercase` / Tailwind `uppercase` classes anywhere in the codebase — letter-spacing
  (`tracking-wide`) is fine as a CSS treatment, but the underlying text must read normally for
  screen readers and crawlers. Service/category names in `siteConfig.ts` follow this too (e.g.
  `"Paver patio installation"`, not `"Paver Patio Installation"`).
- **All routes lowercase-hyphenated.** `src/middleware.ts` already permanently redirects any
  mixed-case request to its lowercase equivalent — this matters most when a site is *replacing* an
  older site whose URLs Google has indexed with different casing. Add specific old-URL → new-URL
  mappings to `next.config.ts`'s `redirects()` as they turn up.

## Architecture

- **`src/data/siteConfig.ts`** — single source of truth for all business content: contact info,
  hours, trust badges, differentiators, testimonials, homepage FAQ, every category/service
  (`whatItIs` / `howItWorks` / `whyUs` / optional `process` / `faqs`), every city
  (`intro` / `nearby`). Edit copy here, not inside components.
- **`src/data/blog.ts`** — Tier 3 informational blog posts, same single-source-of-truth pattern.
- **`src/components/`** — shared pieces (`Header`, `Footer`, `MobileStickyBar`,
  `FloatingQuoteWidget`, `LeadForm`, `PageHero`, `VideoHero`, `CTASection`, `ServiceCard`,
  `TrustBadges`, `Testimonials`, `ReviewsSection`, `FAQ`, `ServiceAreaList`, `ServiceAreaMap`,
  `ProjectPhoto`, `ProjectCarousel`, `Reveal`, `JsonLd`) plus four page templates
  (`SubServiceView`, `CategoryView`, `CityView`, `BlogPostView`) that every dynamic page is built
  from — these templates are generic; you should not need to edit them for a new client, only the
  data they render.
- **`src/app/`** — one folder per route. Every route file is a thin wrapper: pulls its slug's
  content from the data layer via `getSubService`/`getCategory`/`getCity`/`getBlogPost` and renders
  the matching template, plus `buildMetadata()` for SEO tags and `buildBreadcrumbJsonLd()` /
  `buildFaqPageJsonLd()` for structured data.
- **`src/lib/seo.ts`** — builds consistent per-page `<title>`, meta description, canonical URL,
  Open Graph/Twitter tags.
- **`src/lib/jsonld.ts`** — `LocalBusiness` (with address/geo/hours/priceRange), `FAQPage`,
  `BreadcrumbList`, `BlogPosting` JSON-LD builders.
- **`src/app/sitemap.ts`** / **`src/app/robots.ts`** — generate `/sitemap.xml` and `/robots.txt`
  automatically from the data layer (Next.js metadata routes, no static XML to maintain by hand).
  Adding a service/city/blog post to the data automatically adds it to the sitemap.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build — also type-checks
npm run lint    # ESLint
```

## Deploying

1. Push to GitHub, import at [vercel.com/new](https://vercel.com/new) (Next.js auto-detected, no
   special build config needed).
2. Confirm `GA4_ID` / `META_PIXEL_ID` / `SITE_URL` are real, then deploy.
3. Point the real domain at the Vercel deployment.
4. **A live commercial client site should not run on a free/hobby hosting tier** — most hosts'
   free tiers (including Vercel's) restrict free tiers to personal, non-commercial use in their
   terms. Budget for a real paid plan (or a host whose free tier explicitly allows commercial use,
   e.g. Cloudflare Pages) before this goes live for a paying client.

### Known issue — do not bump Next.js past 15.x without testing on Vercel first

`package.json` pins `next`/`eslint-config-next` to `15.5.23` on purpose. A prior client build on
Next.js `16.2.12` deployed to Vercel with a build that reported "Ready" and a domain that showed
"Valid Configuration," yet **every route 404'd in production** — Vercel Analytics showed Edge
Requests arriving but 0 Function Invocations, meaning requests were rejected before the app ever
ran. This happened on a fresh project import, on both the `.vercel.app` URL and a custom domain,
and survived removing `middleware.ts` — it only went away after downgrading to `15.5.23`. Root
cause was never confirmed (never got a straight answer from Vercel), but it reproduced reliably.
If you ever bump past 15.x, deploy a throwaway test project to Vercel and confirm the homepage
actually loads (not just that the build succeeds) before pointing a real client domain at it.

If ESLint breaks after changing the Next.js version, `eslint.config.mjs` uses the `FlatCompat`
bridge (via `@eslint/eslintrc`) rather than importing `eslint-config-next`'s flat configs
directly — different Next.js versions have shipped incompatible export shapes for those. The
bridge is more stable across versions; don't "simplify" it back to a direct import without
confirming `npm run lint` still works.
