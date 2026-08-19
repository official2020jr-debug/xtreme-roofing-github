// ---------------------------------------------------------------------------
// TEMPLATE — single source of truth for all business content.
//
// This is the only file (plus src/data/blog.ts) you should need to edit to
// stand up a new client site. Everything below marked [REPLACE] is a
// placeholder — nothing here is real. Photos are all `{ kind: "placeholder" }`
// on purpose; drop real client photos into public/images/project/ and switch
// entries to `{ kind: "real", src, alt }` as you get them.
//
// See README.md for the full setup checklist.
// ---------------------------------------------------------------------------

/** GoHighLevel inline form widget ID (from the embed snippet — the "..." in the src/data-form-id). */
export const GHL_FORM_ID = "REPLACE_WITH_GHL_FORM_ID";
export const GHL_FORM_HEIGHT = 664;

/** REPLACE WITH YOUR GA4 MEASUREMENT ID (format: G-XXXXXXXXXX) */
export const GA4_ID = "REPLACE_WITH_GA4_ID";

/** REPLACE WITH YOUR META (FACEBOOK) PIXEL ID */
export const META_PIXEL_ID = "REPLACE_WITH_META_PIXEL_ID";

export const SITE_URL = "https://REPLACE-WITH-DOMAIN.com";

export const business = {
  // [REPLACE] Exact legal/DBA name as it appears on the Google Business Profile.
  name: "[BUSINESS_NAME]",
  // [REPLACE] Short brand name — used as the site-wide title-tag suffix, so
  // keep it under ~20 characters or every page title tag will blow past
  // Google's ~60-char cutoff. See src/lib/seo.ts.
  shortName: "[SHORT_NAME]",
  // [REPLACE] Pulled from a real customer review, if the business has one
  // that repeatedly names the owner — using a real name instead of "the
  // owner" everywhere is what makes a site read as a real local business
  // instead of a template. Leave as a role ("the owner") if there's no
  // single named point of contact.
  ownerName: "[OWNER_NAME]",
  tagline: "[ONE-LINE TAGLINE — what the business does and for whom]",
  longPositioning:
    "[2-3 sentence positioning statement — what you build/do, who it's for, why you're different. Used in meta descriptions and the homepage mission section.]",
  phoneDisplay: "(555) 555-5555",
  phoneHref: "tel:+15555555555",
  email: "REPLACE@example.com",
  // City + state shown in copy and used to build LocalBusiness schema's address.
  city: "[CITY]",
  state: "[ST]",
  primaryCity: "[CITY], [ST]",
  serviceRegion: "[CITY], [ST] & the surrounding area",
  // [REPLACE] Exact street address as it appears on the Google Business
  // Profile — needed for LocalBusiness schema NAP consistency. If this is a
  // home-based/service-area business that doesn't publish a street address,
  // leave streetAddress blank and drop the `address` block in
  // src/lib/jsonld.ts down to just city/region/country.
  streetAddress: "[STREET ADDRESS]",
  postalCode: "[ZIP]",
  // [REPLACE] Real geocoded coordinates for the address above — do not
  // invent these. A free lookup (e.g. OpenStreetMap Nominatim) against the
  // real address works well; do not reuse another business's coordinates.
  geo: { latitude: 0, longitude: 0 },
  // [REPLACE] "$" / "$$" / "$$$" — ask the client how they want to be
  // positioned. Do not guess.
  priceRange: "$$",
  hours: [
    { day: "Mon", time: "8:00 Am - 5:00 Pm" },
    { day: "Tue", time: "8:00 Am - 5:00 Pm" },
    { day: "Wed", time: "8:00 Am - 5:00 Pm" },
    { day: "Thu", time: "8:00 Am - 5:00 Pm" },
    { day: "Fri", time: "8:00 Am - 5:00 Pm" },
    { day: "Sat", time: "Closed" },
    { day: "Sun", time: "Closed" },
  ],
  // [REPLACE] If the client runs a review-gate funnel (e.g. GoHighLevel),
  // point this there. Otherwise link straight to the real Google review URL
  // from the Business Profile ("Ask for reviews" short link).
  googleReviewUrl: "https://REPLACE-WITH-REVIEW-LINK",
  googleMapsUrl: "https://REPLACE-WITH-GOOGLE-MAPS-LINK",
  facebookUrl: "https://REPLACE-WITH-FACEBOOK-URL",
  instagramUrl: "https://REPLACE-WITH-INSTAGRAM-URL",
  consentLine:
    "By submitting you agree to be contacted about your project. We respect your privacy.",
};

// [REPLACE] Match whatever the client's real differentiators are — do not
// invent licensing/certification claims that aren't true.
export const trustBadges = [
  { label: "Locally owned & operated" },
  { label: "Owner-involved on every project" },
  { label: "[REPLACE] Full-service [industry] & design" },
  { label: "Built to last quality" },
];

// Short, single-line claims for the homepage "Why clients choose us" checklist.
export const whyChooseBullets = [
  "[REPLACE] Locally owned — the owner is on site, not just in the office",
  "Free, no-pressure estimates on every project",
  "[REPLACE] A real, industry-specific claim — e.g. base prep standards, code compliance, material quality",
  "Honest scopes and real numbers — no lowball bait-and-switch",
];

export const differentiators = [
  {
    title: "[REPLACE] The owner shows up — not a rotating crew",
    body: "[REPLACE] There's no hand-off to a stranger once the contract's signed. Describe how the business actually operates, using specifics, not marketing fluff.",
  },
  {
    title: "[REPLACE] Built for how you'll actually use it",
    body: "[REPLACE] Describe a real part of the process that shows attention to the customer's actual needs.",
  },
  {
    title: "[REPLACE] Materials and workmanship that hold up",
    body: "[REPLACE] Describe a real quality/durability standard specific to this business's industry and region.",
  },
  {
    title: "[REPLACE] A straight answer, even when it costs the sale",
    body: "[REPLACE] Describe a real honesty/trust differentiator, ideally one the owner can back up with a real story.",
  },
];

// ---------------------------------------------------------------------------
// Testimonials — PLACEHOLDER DATA. Do not ship these to production.
// Replace with real reviews pasted directly from the client's Google
// Business Profile (name, quote, and real star rating for each one — do not
// default every rating to 5 without checking). Never invent reviews.
// ---------------------------------------------------------------------------
export const testimonials = [
  {
    quote: "[PLACEHOLDER — replace with a real, pasted Google review]",
    name: "[Reviewer Name]",
    rating: 5,
  },
  {
    quote: "[PLACEHOLDER — replace with a real, pasted Google review]",
    name: "[Reviewer Name]",
    rating: 5,
  },
  {
    quote: "[PLACEHOLDER — replace with a real, pasted Google review]",
    name: "[Reviewer Name]",
    rating: 5,
  },
];

// ---------------------------------------------------------------------------
// Homepage FAQ — replace with the client's actual most-asked questions.
// ---------------------------------------------------------------------------
export const homeFaqs = [
  {
    q: "[REPLACE] What services does [BUSINESS_NAME] offer?",
    a: "[REPLACE] A real answer listing the actual services offered, in the order that matters most to the business.",
  },
  {
    q: "[REPLACE] Should I hire a professional for this, or DIY?",
    a: "[REPLACE] A real, honest answer specific to this industry.",
  },
  {
    q: "[REPLACE] What's the first step if I want to start a project?",
    a: "[REPLACE] Describe the client's actual intake process — call, walkthrough, quote, etc.",
  },
];

// ---------------------------------------------------------------------------
// Service categories + sub-services
//
// PATTERN: categories are the top-level nav/hub grouping (e.g. "Landscape
// Designer"); each category holds several subServices, and each subService
// gets its own page at /[categorySlug]/[subServiceSlug]. The example data
// below is landscaping-flavored just to show the pattern working end to
// end — replace slugs, names, and every paragraph with the new client's
// real services. Keep whatItIs/howItWorks/whyUs/faqs long-form and specific;
// thin, generic copy is what makes template sites look like template sites.
// ---------------------------------------------------------------------------

export type Faq = { q: string; a: string };
export type ProcessStep = { step: string; description: string };

export type ProjectImage =
  | { kind: "real"; src: string; alt: string }
  | { kind: "placeholder"; label: string };

export type SubService = {
  slug: string;
  categorySlug: string;
  name: string;
  oneLiner: string;
  metaDescription: string;
  hero: ProjectImage;
  gallery: ProjectImage[];
  whatItIs: string[];
  howItWorks: string[];
  whyUs: string[];
  process?: ProcessStep[];
  faqs: Faq[];
  relatedSlugs: string[];
};

export type Category = {
  slug: string;
  name: string;
  metaDescription: string;
  intro: string[];
  hero: ProjectImage;
  subServiceSlugs: string[];
};

const standardProcess: ProcessStep[] = [
  { step: "Consultation", description: "Walk the site, listen to how the customer wants to use the space or solve the problem, and talk through rough budget and timeline — no pressure, no obligation." },
  { step: "Design", description: "Put together a plan with real material choices and layout, sized to the actual property and budget, not a generic template." },
  { step: "Build", description: "Crew handles the work to spec, with the owner checking in on progress at key milestones." },
  { step: "Walkthrough", description: "Walk the finished work with the customer, confirm everything meets expectations, and cover care and maintenance before calling the job done." },
];

export const subServices: SubService[] = [
  {
    slug: "landscape-design-build",
    categorySlug: "landscape-designer",
    name: "Landscape design-build",
    oneLiner: "One team, from first sketch to final walkthrough.",
    metaDescription:
      "[REPLACE] Full-service landscape design-build in [CITY], [ST]. One team handles design and construction so nothing gets lost between them.",
    hero: { kind: "placeholder", label: "Landscape design-build hero photo" },
    gallery: [
      { kind: "placeholder", label: "Design-build project photo 1" },
      { kind: "placeholder", label: "Design-build project photo 2" },
    ],
    whatItIs: [
      "[REPLACE] 2-4 paragraphs explaining what this service actually is, written in plain language, with real technical specifics (materials, depths, code requirements) that prove expertise — not generic marketing copy.",
    ],
    howItWorks: [
      "[REPLACE] Step 1 of the real process",
      "[REPLACE] Step 2",
      "[REPLACE] Step 3",
    ],
    whyUs: [
      "[REPLACE] A real, specific reason to choose this business for this service — not a generic claim.",
      "[REPLACE] A second real differentiator.",
    ],
    process: standardProcess,
    faqs: [
      { q: "[REPLACE] A real question customers actually ask", a: "[REPLACE] A real, specific answer." },
      { q: "[REPLACE] Another real question", a: "[REPLACE] A real, specific answer." },
    ],
    relatedSlugs: ["irrigation-system-installation"],
  },
  {
    slug: "irrigation-system-installation",
    categorySlug: "landscape-designer",
    name: "Irrigation system installation",
    oneLiner: "Even coverage, no dry patches, no wasted water.",
    metaDescription:
      "[REPLACE] Irrigation system installation in [CITY], [ST] — zoned sprinkler and drip systems designed for the property and local water restrictions.",
    hero: { kind: "placeholder", label: "Irrigation installation hero photo" },
    gallery: [
      { kind: "placeholder", label: "Irrigation project photo" },
    ],
    whatItIs: [
      "[REPLACE] 2-4 paragraphs on what this service is, with real technical detail (depths, code requirements, material specs).",
    ],
    howItWorks: [
      "[REPLACE] Step 1",
      "[REPLACE] Step 2",
    ],
    whyUs: [
      "[REPLACE] Real differentiator 1",
      "[REPLACE] Real differentiator 2",
    ],
    faqs: [
      { q: "[REPLACE] Real question", a: "[REPLACE] Real answer." },
    ],
    relatedSlugs: ["landscape-design-build"],
  },
  {
    slug: "paver-patio-installation",
    categorySlug: "patio-contractor",
    name: "Paver patio installation",
    oneLiner: "Built on a base that actually lasts.",
    metaDescription:
      "[REPLACE] Paver patio installation in [CITY], [ST], built with proper base prep for the local climate.",
    hero: { kind: "placeholder", label: "Paver patio hero photo" },
    gallery: [
      { kind: "placeholder", label: "Paver patio project photo" },
    ],
    whatItIs: [
      "[REPLACE] 2-4 paragraphs on what this service is, with real technical detail.",
    ],
    howItWorks: [
      "[REPLACE] Step 1",
      "[REPLACE] Step 2",
    ],
    whyUs: [
      "[REPLACE] Real differentiator 1",
    ],
    process: standardProcess,
    faqs: [
      { q: "[REPLACE] Real question", a: "[REPLACE] Real answer." },
    ],
    relatedSlugs: ["concrete-patio-installation"],
  },
  {
    slug: "concrete-patio-installation",
    categorySlug: "patio-contractor",
    name: "Concrete patio installation",
    oneLiner: "A clean, durable surface built to spec.",
    metaDescription:
      "[REPLACE] Concrete patio installation in [CITY], [ST].",
    hero: { kind: "placeholder", label: "Concrete patio hero photo" },
    gallery: [
      { kind: "placeholder", label: "Concrete patio project photo" },
    ],
    whatItIs: [
      "[REPLACE] 2-4 paragraphs on what this service is, with real technical detail.",
    ],
    howItWorks: [
      "[REPLACE] Step 1",
      "[REPLACE] Step 2",
    ],
    whyUs: [
      "[REPLACE] Real differentiator 1",
    ],
    faqs: [
      { q: "[REPLACE] Real question", a: "[REPLACE] Real answer." },
    ],
    relatedSlugs: ["paver-patio-installation"],
  },
];

export const categories: Category[] = [
  {
    slug: "landscape-designer",
    name: "Landscape designer",
    metaDescription:
      "[REPLACE] Landscape design and design-build services in [CITY], [ST].",
    intro: [
      "[REPLACE] 1-2 sentence intro to this category.",
    ],
    hero: { kind: "placeholder", label: "Landscape designer category hero photo" },
    subServiceSlugs: ["landscape-design-build", "irrigation-system-installation"],
  },
  {
    slug: "patio-contractor",
    name: "Patio contractor",
    metaDescription:
      "[REPLACE] Paver and concrete patio installation in [CITY], [ST].",
    intro: [
      "[REPLACE] 1-2 sentence intro to this category.",
    ],
    hero: { kind: "placeholder", label: "Patio contractor category hero photo" },
    subServiceSlugs: ["paver-patio-installation", "concrete-patio-installation"],
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getSubService(slug: string) {
  return subServices.find((s) => s.slug === slug);
}

export function getSubServicesForCategory(categorySlug: string) {
  return subServices.filter((s) => s.categorySlug === categorySlug);
}

// ---------------------------------------------------------------------------
// Service-area (city) pages
//
// Each city page needs a REAL completed project + a REAL local detail (soil,
// HOA norms, lot sizes, neighborhoods locals actually reference) — do not
// build a city page you can't fill in with something real. Three strong
// city pages outrank twelve thin ones.
// ---------------------------------------------------------------------------
export type City = {
  slug: string;
  name: string;
  intro: string[];
  nearby: string[];
  hero: ProjectImage;
};

export const cities: City[] = [
  {
    slug: "example-city-one",
    name: "Example City One, ST",
    intro: [
      "[REPLACE] 2-3 paragraphs of genuinely unique content about this specific city — a real completed project near here, something specific to the area (soil, lot sizes, HOA norms, elevation), and the neighborhoods locals actually reference. Do not just swap the city name into generic copy.",
    ],
    nearby: ["Example City Two", "Example City Three"],
    hero: { kind: "placeholder", label: "Example City One project photo" },
  },
  {
    slug: "example-city-two",
    name: "Example City Two, ST",
    intro: [
      "[REPLACE] Same as above — real, specific content for this city, not a template swap.",
    ],
    nearby: ["Example City One", "Example City Three"],
    hero: { kind: "placeholder", label: "Example City Two project photo" },
  },
  {
    slug: "example-city-three",
    name: "Example City Three, ST",
    intro: [
      "[REPLACE] Same as above — real, specific content for this city, not a template swap.",
    ],
    nearby: ["Example City One", "Example City Two"],
    hero: { kind: "placeholder", label: "Example City Three project photo" },
  },
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}
