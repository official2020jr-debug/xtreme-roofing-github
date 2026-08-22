// ---------------------------------------------------------------------------
// Xtreme Roofing — Las Vegas, NV
//
// Single source of truth for all business content. See README.md for the
// full setup checklist. Remaining [NEEDS INPUT] items (hours, review/social
// URLs, geo coordinates, GA4/Meta IDs, SITE_URL, city pages, testimonials,
// photos) are intentionally left as placeholders per client instruction —
// to be handed over separately.
// ---------------------------------------------------------------------------

/** GoHighLevel inline form widget ID (from the client's embed snippet). */
export const GHL_FORM_ID = "t4OYi4muTbMiN0j7A69b";
export const GHL_FORM_HEIGHT = 547;

/** [NEEDS INPUT] REPLACE WITH YOUR GA4 MEASUREMENT ID (format: G-XXXXXXXXXX) */
export const GA4_ID = "REPLACE_WITH_GA4_ID";

/** [NEEDS INPUT] REPLACE WITH YOUR META (FACEBOOK) PIXEL ID */
export const META_PIXEL_ID = "REPLACE_WITH_META_PIXEL_ID";

// [NEEDS INPUT] real production domain
export const SITE_URL = "https://www.xtremeroofing.net";

export const business = {
  name: "Xtreme Roofing",
  shortName: "Xtreme Roofing",
  // No single named point of contact provided — kept as a role rather than
  // inventing a name. See README: "leave as a role if there's no single
  // named point of contact."
  // "Adolfo" is named as owner/manager independently across 4 different
  // real customer reviews (see testimonials below) — confirm last name and
  // exact title (owner vs. manager) to fill in further.
  ownerName: "Adolfo",
  tagline: "Residential & commercial roofing across the Las Vegas valley.",
  longPositioning:
    "Xtreme Roofing installs, repairs, and restores residential and commercial roofs across the Las Vegas valley — from full tear-off replacements to storm and hail damage insurance claims and new construction roofing. One team handles inspection, scope, materials, and the build, so nothing gets lost in a hand-off.",
  phoneDisplay: "(702) 750-2622",
  phoneHref: "tel:+17027502622",
  email: "Xtremeroofingvegas@gmail.com",
  city: "Las Vegas",
  state: "NV",
  primaryCity: "Las Vegas, NV",
  serviceRegion:
    "Las Vegas, Henderson, Summerlin, North Las Vegas, Spring Valley, Sunrise Manor & Enterprise",
  streetAddress: "6135 Harrison Dr",
  postalCode: "89120",
  // [NEEDS INPUT] Real geocoded coordinates — do not invent. Left at 0,0
  // per client instruction (handing off separately).
  geo: { latitude: 0, longitude: 0 },
  // [NEEDS INPUT] Ask the client how they want to be positioned.
  priceRange: "$$",
  // [NEEDS INPUT] Real business hours — not provided yet.
  hours: [
    { day: "Mon", time: "8:00 Am - 5:00 Pm" },
    { day: "Tue", time: "8:00 Am - 5:00 Pm" },
    { day: "Wed", time: "8:00 Am - 5:00 Pm" },
    { day: "Thu", time: "8:00 Am - 5:00 Pm" },
    { day: "Fri", time: "8:00 Am - 5:00 Pm" },
    { day: "Sat", time: "Closed" },
    { day: "Sun", time: "Closed" },
  ],
  // [NEEDS INPUT] real review/social links — not provided yet.
  googleReviewUrl: "https://contractor-us.com/5star-page2026",
  googleMapsUrl: "https://REPLACE-WITH-GOOGLE-MAPS-LINK",
  facebookUrl: "https://REPLACE-WITH-FACEBOOK-URL",
  instagramUrl: "https://REPLACE-WITH-INSTAGRAM-URL",
  consentLine:
    "By submitting you agree to be contacted about your project. We respect your privacy.",
};

export const trustBadges = [
  { label: "Locally owned & operated in Las Vegas" },
  { label: "Residential & commercial roofing under one roof" },
  { label: "Free roof inspections & written estimates" },
  { label: "Storm & hail damage insurance claim support" },
];

export const whyChooseBullets = [
  "Locally based in Las Vegas — not a call center dispatching out-of-state crews",
  "Free, no-pressure roof inspections and written estimates",
  "One team handles both residential and commercial roofing, so there's no guessing who to call",
  "Direct communication from your first inspection through the final walkthrough",
];

export const differentiators = [
  {
    title: "One team, from inspection to final walkthrough",
    body: "You won't get bounced between a sales rep, a scheduler, and a different repair crew. The same team that inspects your roof and writes the scope is the team that shows up to do the work.",
  },
  {
    title: "Built for Las Vegas heat and monsoon season",
    body: "Valley roofs take a beating from triple-digit summer heat, constant UV exposure, and sudden monsoon downpours and hail. We spec materials and installation details — underlayment, ventilation, flashing — for that specific combination, not a generic climate.",
  },
  {
    title: "Residential and commercial, without switching contractors",
    body: "Whether it's a tile roof on a home or a low-slope membrane on a commercial building, it's handled by the same company — one point of contact for every property you own or manage.",
  },
  {
    title: "Straight answers on storm and insurance claims",
    body: "When hail or wind damage is involved, we document it clearly and walk you through what your insurance scope should actually cover — no inflated claims, no missed damage.",
  },
];

// ---------------------------------------------------------------------------
// Testimonials — REAL reviews, pasted in directly by the client from Google,
// Yelp, and Angi/Home Improvement listings. Light copyediting only (typos,
// stray punctuation) — no wording, claims, or meaning added or changed.
// `source` reflects the actual platform where that's identifiable from the
// pasted text (e.g. "Local Guide" badge = Google); otherwise a neutral
// "Customer review" label rather than guessing a specific platform.
//
// NOTE: star ratings weren't included in the pasted text (platform star
// icons don't copy as text). Every review here reads as unambiguously
// positive with no critical/mixed language, and one explicitly states "5
// star rating" — so all are set to 5 on that basis. Flag any that should be
// a different rating and it'll get corrected immediately.
// ---------------------------------------------------------------------------
export type Testimonial = { quote: string; name: string; source: string; rating: number };

export const testimonials: Testimonial[] = [
  {
    quote:
      "Had a great experience with Xtreme Roofing. They did great work for a great price. There was one small issue that they resolved, standing by their company and keeping their word. I wouldn't hesitate recommending them to family and friends.",
    name: "Jim Cardenas",
    source: "Google review",
    rating: 5,
  },
  {
    quote:
      "I highly recommend Xtreme Roofing in Las Vegas for their outstanding service and prompt response. As a real estate professional, I recently found myself needing a roof estimate urgently to proceed with a contract for my buyer. I reached out to several roofing companies, but none could accommodate my request within a reasonable timeframe — some quoted wait times of 2 to 6 weeks. Xtreme Roofing stood out from the rest: they provided a competitive price and completed the entire roofing project within just two weeks, which let me close on the home smoothly and left my buyer extremely satisfied. Throughout the process the team was professional, courteous, and easy to work with, and delivered the project on budget and on time.",
    name: "Dale McCarthy",
    source: "Google review",
    rating: 5,
  },
  {
    quote: "They did a great job replacing my full roof. I wouldn't hesitate recommending them to family and friends.",
    name: "John Martin",
    source: "Customer review",
    rating: 5,
  },
  {
    quote:
      "Friendly and hard-working staff providing great quality service! The value for the service requested was much better than the other quotes we had done. Highly recommend!",
    name: "Leslie C. — North Las Vegas",
    source: "Home Improvement review",
    rating: 5,
  },
  {
    quote:
      "Great prices, extremely detailed, very honorable — most ethical contractors I've dealt with, and I'm in the RE business. They may not be the cheapest, but they're absolutely worth it — what you see is what you get. The end product and warranty for the money is honestly the best in Vegas. I've been on Yelp since 2009 and I never write fake reviews.",
    name: "V. M. — Las Vegas",
    source: "Yelp review",
    rating: 5,
  },
  {
    quote:
      "Xtreme Roofing just finished a complete tear-down and re-roof — new sheathing, flashing, and shingles. We chose Xtreme Roofing because owner/manager Adolfo was patient with our questions and very knowledgeable. The crew arrived promptly every day, worked hard, and left our property clean. The roof looks amazing and it's rock solid. Don't hesitate to give them a call — you won't regret it.",
    name: "Jaqui O.",
    source: "Customer review",
    rating: 5,
  },
  {
    quote:
      "I've been extremely satisfied with this company. They returned my call the same day and gave me a quote two days later, after an inspection of my roof. The manager, Adolfo, didn't try to oversell — he was honest and gave me a competitive price. Repairs were done the same week and very professionally. I definitely recommend Xtreme Roofing.",
    name: "Vincent B. — Henderson",
    source: "Customer review",
    rating: 5,
  },
  {
    quote:
      "I had a small leak on my roof that was going through my ceiling. I reached out to several companies for an estimate, and Xtreme was very responsive and helpful. Adolfo was professional and knowledgeable, helped me save money, and answered all of my questions. The work was fast and very well done. I'll be recommending them to everyone I know.",
    name: "Jonathan Q. — Las Vegas",
    source: "Home Improvement review",
    rating: 5,
  },
  {
    quote:
      "I wanted to share my awesome experience with Xtreme Roofing. Absolutely would recommend this company for any roofing needs — amazing quality of work, and they made sure to clean up everything at the end of each work day. On top of all that, they gave me a great price for my re-roofing project: great quality, very clean, excellent price, and a fast 2.5-day turnaround.",
    name: "Whitney M. — Henderson",
    source: "Home Improvement review",
    rating: 5,
  },
  {
    quote:
      "Our roof was nearly 33 years old and had developed a leak, so we got 4 estimates and decided to replace it. We went with Xtreme because of the price and because they required no money up front — every other company wanted 50% down, which is a red flag. Their proposal was clear and met all of the Nevada Contractors Board requirements. They completed the entire job in three days, just like they promised, with 6-7 workers on site at times. They matched our existing tile perfectly, cleaned up every day, and even repaired a few tiles for an elderly neighbor at no charge. Adolfo, the owner, is very professional and reachable — these guys do it right.",
    name: "Thomas M. — Las Vegas",
    source: "Home Improvement review",
    rating: 5,
  },
  {
    quote:
      "The price was great and I had several estimates to compare it against. The work quality and finished product make the house look a lot better. They were also one of the few contractors who provided a written proposal for the work.",
    name: "William M. — Las Vegas",
    source: "Home Improvement review",
    rating: 5,
  },
  {
    quote:
      "These guys are great — they did a fantastic job on my new roof replacement. I got several bids from other roofers and theirs was among the lowest. The crew was fantastic even in 110-degree heat (had to be at least 130 up on that roof — I don't know how they handle that). They use all the newest materials on the market, including the new synthetic underlayment, which impressed me. The clean-up at the end of each day was impressive too. Kudos to this roofing company.",
    name: "Johnny W. — Sunrise Manor",
    source: "Home Improvement review",
    rating: 5,
  },
  {
    quote:
      "Had a pretty old roof that needed a lot of love. Xtreme quickly got back to us with a fair quote and finished the project within the week. You helped us a ton, folks — thank you so much!",
    name: "Bryce R. — Henderson",
    source: "Home Improvement review",
    rating: 5,
  },
  {
    quote:
      "While we did not end up selecting Xtreme, all the five-star comments about Xtreme and Adolfo in particular are spot on. The proposal was just out of reach based on how we were going to pay. Thank you for a professional and immensely friendly estimate!",
    name: "Theresa C. — Las Vegas",
    source: "Home Improvement review",
    rating: 5,
  },
  {
    quote:
      "They did an excellent and thorough job replacing our flat roof at a fraction of the cost of other roofing companies! I recommend them highly!",
    name: "Clara K. — Las Vegas",
    source: "Home Improvement review",
    rating: 5,
  },
  {
    quote:
      "They are fast, their people are most considerate, and they have a great work ethic. They cleaned up and replaced my roof — it was 27 years old with defective tiles from the original builder, and I'd had small leaks since 2011, so it was time to replace it. They were the best bid out of 4, and the job had no surprises, no add-on fees. The bid was the bill.",
    name: "Lynaae F. — Las Vegas",
    source: "Home Improvement review",
    rating: 5,
  },
  {
    quote:
      "They were the first to respond to my immediate need to have a roof leak repaired, unlike several other roofing companies on Yelp. They came out, did their inspection, and the quote was very fair and considerably less than other roofing companies with the same warranties. They also helped me find a company to remove and reinstall my solar panels. Their work was done very professionally and quickly. I would highly recommend Adolfo and his team.",
    name: "Ken S. — Las Vegas",
    source: "Home Improvement review",
    rating: 5,
  },
  {
    quote:
      "Very thorough and friendly. Adolfo took the time to explain everything to me. Before and after pictures were very helpful as well. Highly recommend this company!",
    name: "Crystal W. — San Francisco, CA",
    source: "Home Improvement review",
    rating: 5,
  },
];

export const homeFaqs = [
  {
    q: "What roofing services does Xtreme Roofing offer?",
    a: "We handle full roof replacement, roof repair, storm and hail damage restoration with insurance claim support, and new construction roofing — for both residential and commercial properties throughout the Las Vegas valley.",
  },
  {
    q: "Do I need a full replacement, or can my roof be repaired?",
    a: "It depends on the roof's age, the extent of the damage, and whether the underlying decking and underlayment are still sound. We inspect first and give you a straight answer — we don't push a replacement when a repair will genuinely hold up.",
  },
  {
    q: "Will you work with my homeowner's insurance on storm damage?",
    a: "Yes. We inspect the roof, document the hail or wind damage with photos, and provide a detailed scope you can hand to your adjuster — so the claim reflects the real damage, not a guess.",
  },
  {
    q: "What's the first step if I want a quote?",
    a: "Call us at (702) 750-2622 or fill out our quote form. We'll schedule a free roof inspection, walk you through what we find, and give you a written estimate before any work starts.",
  },
];

// ---------------------------------------------------------------------------
// Service categories + sub-services — real Xtreme Roofing services.
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
  /** Optional full-bleed hero video (mp4 path) — takes priority over `hero` photo when set. */
  heroVideo?: string;
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
  /** Optional full-bleed hero video (mp4 path) — takes priority over `hero` photo when set. */
  heroVideo?: string;
  subServiceSlugs: string[];
};

const roofingProcess: ProcessStep[] = [
  { step: "Inspection", description: "We walk the full roof, check the decking, flashing, and ventilation, and document any damage with photos before quoting anything." },
  { step: "Written estimate", description: "You get a detailed, itemized quote — materials, scope of work, and timeline — before we schedule anything." },
  { step: "Tear-off & install", description: "Old roofing is removed down to the decking, any rot or damage is repaired, and the new system goes on to manufacturer spec." },
  { step: "Final walkthrough & cleanup", description: "We walk the finished roof with you, cover the warranty, and do a full nail and debris sweep of the property before calling the job done." },
];

export const subServices: SubService[] = [
  {
    slug: "roof-replacement",
    categorySlug: "residential-roofing",
    name: "Roof replacement",
    oneLiner: "A full tear-off and new roof, built for Las Vegas heat and monsoon storms.",
    metaDescription:
      "Residential roof replacement in Las Vegas, NV. Full tear-off, new underlayment and shingles or tile, built for extreme heat and monsoon season. Free estimates.",
    hero: { kind: "real", src: "/images/project/roof-replacement-tearoff.webp", alt: "Full tear-off in progress during a residential roof replacement" },
    heroVideo: "/videos/roofing-system-layers.mp4",
    gallery: [
      { kind: "real", src: "/images/project/aerial-shingle-roof-1.jpg", alt: "Aerial view of a completed asphalt shingle roof" },
      { kind: "real", src: "/images/project/xtreme-crew-shingle-reroof.png", alt: "Xtreme Roofing crew installing a new roof system" },
    ],
    whatItIs: [
      "A roof replacement is a full tear-off — every layer of the old roofing system comes off down to the bare decking, not just a new layer installed over what's already there. In the Las Vegas valley that matters more than in milder climates: years of 100°F+ summer heat and direct UV exposure break down asphalt shingles and underlayment from underneath, and a re-roof over failing material just traps the problem.",
      "Once the decking is exposed, we check it for rot, delamination, or storm damage and replace any bad sheathing before anything new goes down. Then it's a new underlayment layer rated for high-heat climates, followed by the roofing material itself — architectural asphalt shingles, tile, or another system depending on the home and HOA requirements.",
      "We also address ventilation and flashing at this stage, since both are common failure points on Las Vegas roofs. Poor attic ventilation bakes shingles from underneath and can shorten a roof's life by years, and flashing around chimneys, vents, and roof-to-wall transitions is where most leaks actually start — not the field of the roof itself.",
    ],
    howItWorks: [
      "Free inspection of the current roof, attic ventilation, and decking condition, with photos",
      "Written estimate covering materials, tear-off, disposal, and timeline",
      "Full tear-off to bare decking, with any damaged sheathing replaced",
      "New underlayment, flashing, and roofing material installed to manufacturer spec",
      "Final walkthrough, warranty paperwork, and a full nail and debris sweep of the property",
    ],
    whyUs: [
      "We tear off down to the decking on every replacement — we don't install a new layer over old, failing roofing just to save a day of labor.",
      "Materials and ventilation are specced for Las Vegas heat and monsoon season specifically, not a one-size-fits-all climate.",
      "One written estimate before work starts — no surprise costs once the tear-off reveals what's underneath, unless we find something you need to sign off on first.",
    ],
    process: roofingProcess,
    faqs: [
      { q: "How long does a roof replacement take?", a: "Most residential replacements take 1-3 days depending on the size of the roof, the material, and how much decking repair is needed once the tear-off is done. We'll give you a specific timeline in your written estimate." },
      { q: "Do you install tile roofs or just shingles?", a: "Both. Tile is common on Las Vegas homes, especially in HOA communities, and we install and repair both concrete/clay tile and asphalt shingle systems." },
      { q: "Will you handle the permit and HOA approval?", a: "We can pull the required Clark County or city permit as part of the job. If your community has HOA architectural approval requirements, let us know early — we'll provide whatever documentation they need." },
    ],
    relatedSlugs: ["roof-repair", "storm-hail-damage-insurance-claims"],
  },
  {
    slug: "roof-repair",
    categorySlug: "residential-roofing",
    name: "Roof repair",
    oneLiner: "Fix the actual problem — leaks, flashing, and storm damage — without an unnecessary replacement upsell.",
    metaDescription:
      "Roof repair in Las Vegas, NV — leaks, flashing, storm damage, and shingle or tile repair. Free inspection and honest scope, no unnecessary replacement upsell.",
    hero: { kind: "real", src: "/images/project/xtreme-crew-tile-reroof-1.png", alt: "Xtreme Roofing crew making a repair on an existing roof" },
    heroVideo: "/videos/residential-roof-rebuilding.mp4",
    gallery: [
      { kind: "real", src: "/images/project/roof-replacement-tearoff.webp", alt: "Roofing crew working on a residential re-roof" },
    ],
    whatItIs: [
      "Most roof leaks in the Las Vegas valley don't come from the field of the roof — they come from flashing around chimneys, plumbing vents, skylights, and roof-to-wall transitions, or from cracked and slipped tiles after wind. We start every repair call with an inspection to find the actual source of the leak or damage, not just patch where the stain shows up inside.",
      "Repairs range from resealing and replacing flashing, to swapping damaged shingles or tiles, to fixing ventilation issues that are cooking the roof from underneath. If the decking underneath a leak has rotted, we'll show you the damage and repair that section before closing the roof back up.",
      "We're upfront when a roof is past the point where repair makes sense — usually when there's widespread granule loss, multiple layers of aging material, or damage spread across most of the roof rather than one isolated area. In that case we'll tell you honestly instead of running up repair costs on a roof that needs replacing.",
    ],
    howItWorks: [
      "Free inspection to find the actual source of the leak or damage",
      "Written repair scope and cost before any work starts",
      "Repair of the specific area — flashing, shingles, tile, decking, or ventilation",
      "Post-repair check for any other vulnerable spots nearby",
    ],
    whyUs: [
      "We inspect before we quote — you get a scope for the actual problem, not a generic repair estimate.",
      "If a repair isn't the right call, we'll say so instead of billing for a fix that won't hold.",
    ],
    faqs: [
      { q: "How fast can you get to a leak?", a: "Active leaks get priority scheduling — call us at (702) 750-2622 and we'll get someone out to inspect as soon as possible." },
      { q: "Is a small roof repair worth it, or should I just replace the roof?", a: "It depends on the roof's age and how widespread the damage is. A single flashing or tile repair on a roof with years of life left is almost always worth it. We'll give you a straight recommendation after inspecting." },
    ],
    relatedSlugs: ["roof-replacement", "storm-hail-damage-insurance-claims"],
  },
  {
    slug: "storm-hail-damage-insurance-claims",
    categorySlug: "residential-roofing",
    name: "Storm & hail damage insurance claims",
    oneLiner: "Damage documented right, so your insurance claim reflects what actually happened to your roof.",
    metaDescription:
      "Storm and hail damage roof restoration in Las Vegas, NV, with insurance claim documentation and support — from inspection through the adjuster meeting.",
    hero: { kind: "real", src: "/images/project/aerial-shingle-roof-2.jpg", alt: "Aerial view of a residential roof after storm damage restoration" },
    heroVideo: "/videos/storm-damage-transformation.mp4",
    gallery: [
      { kind: "real", src: "/images/project/xtreme-crew-tile-reroof-2.png", alt: "Xtreme Roofing crew inspecting and repairing storm damage" },
    ],
    whatItIs: [
      "Las Vegas gets sudden, intense monsoon storms in summer — high wind, driving rain, and occasional hail — that can crack tiles, tear shingles, and damage flashing in a single afternoon. Damage isn't always obvious from the ground, which is why an inspection after a bad storm matters even if you don't see an active leak yet.",
      "We inspect the full roof after storm events and photo-document every point of damage — impact marks on shingles or tile, lifted or torn material, damaged flashing and vents, gutter and downspout damage. That documentation becomes the scope of work we hand you to give to your insurance adjuster.",
      "If your insurance company sends their own adjuster out, we can meet them at the property and walk the roof together, pointing out damage that's easy to miss from a ladder inspection or satellite imagery alone.",
    ],
    howItWorks: [
      "Post-storm inspection of the full roof, gutters, and flashing",
      "Photo documentation of every point of damage",
      "Detailed written scope you can submit with your insurance claim",
      "On-site meeting with your adjuster if needed",
      "Repair or replacement once the claim is approved",
    ],
    whyUs: [
      "We document damage thoroughly so your claim reflects what actually happened — not a guess based on what's visible from the driveway.",
      "We're not an insurance company or adjuster — our job is to give you an accurate, honest scope, not inflate it.",
    ],
    faqs: [
      { q: "How soon after a storm should I get my roof inspected?", a: "As soon as it's safe to do so, ideally within a few days. Some damage — like cracked tile or lifted shingle tabs — gets worse with the next windstorm or heavy rain if it isn't caught early." },
      { q: "Do you deal directly with my insurance company?", a: "We can meet your adjuster on site and provide documentation to support your claim, but the claim itself is between you and your insurer. We focus on making sure the roof damage is accurately documented." },
    ],
    relatedSlugs: ["roof-replacement", "roof-repair"],
  },
  {
    slug: "new-construction-roofing",
    categorySlug: "residential-roofing",
    name: "New construction roofing",
    oneLiner: "Roofing installed right the first time, coordinated with your builder's schedule.",
    metaDescription:
      "New construction roofing in Las Vegas, NV for custom homes and builder projects — installed to code and coordinated with your build timeline.",
    hero: { kind: "real", src: "/images/project/aerial-shingle-roof-1.jpg", alt: "Aerial view of a new residential roof installation" },
    heroVideo: "/videos/roof-assembly-luxury-home.mp4",
    gallery: [
      { kind: "real", src: "/images/project/aerial-shingle-roof-2.jpg", alt: "Completed new construction roof" },
    ],
    whatItIs: [
      "New construction roofing means installing the roofing system on a home that's being built from the ground up — working directly off the framing and decking rather than tearing off an old roof first. That means the underlayment, flashing, and ventilation all get installed fresh, to spec, with no old material to work around.",
      "We coordinate with builders and general contractors to fit into the build schedule, since roofing has to happen at a specific point in the framing timeline before other trades can move forward. Materials and details — shingle or tile, ventilation layout, flashing at every roof-to-wall transition — get specced for Las Vegas's heat and monsoon exposure from day one.",
    ],
    howItWorks: [
      "Coordinate timing with your builder or general contractor",
      "Install underlayment, flashing, and ventilation to code",
      "Install the roofing material — shingle, tile, or the system specified in your plans",
      "Final inspection and sign-off before the next trade or occupancy",
    ],
    whyUs: [
      "We work directly with builders and GCs to stay on schedule without holding up the rest of the build.",
      "Every detail — ventilation, flashing, underlayment — is installed to code the first time, not retrofitted later.",
    ],
    faqs: [
      { q: "Do you work with builders and general contractors directly, or only homeowners?", a: "Both. We regularly coordinate directly with builders and GCs on new construction timelines, and we also work with homeowners managing their own custom build." },
      { q: "Can you match a specific roofing material a builder or architect specified?", a: "Yes — we install to the specs in your plans, whether that's a particular shingle line, tile profile, or another system." },
    ],
    relatedSlugs: ["roof-replacement", "commercial-roof-replacement"],
  },
  {
    slug: "commercial-roof-replacement",
    categorySlug: "commercial-roofing",
    name: "Commercial roof replacement",
    oneLiner: "Low-slope and flat roof replacement built to hold up under the Las Vegas sun.",
    metaDescription:
      "Commercial roof replacement in Las Vegas, NV — low-slope and flat roofing systems built for extreme heat with minimal disruption to your business.",
    hero: { kind: "real", src: "/images/project/commercial-tpo-roof-install.jpg", alt: "Commercial TPO low-slope roof membrane installation" },
    gallery: [
      { kind: "real", src: "/images/project/commercial-metal-roof-install.jpg", alt: "Commercial roofing crew installing a metal roof system" },
    ],
    whatItIs: [
      "Most commercial buildings in the Las Vegas valley use low-slope or flat roofing systems — TPO, EPDM, or modified bitumen — which fail differently than a residential shingle roof. Membrane seams, ponding water, and UV degradation from year-round direct sun are the usual failure points, not wind-lifted shingles.",
      "A commercial replacement starts with removing the failed membrane and insulation down to the deck, checking the deck for damage, and installing new insulation and a membrane system sized and rated for the building. We plan the work to minimize disruption to whatever's operating underneath — scheduling around business hours where possible.",
    ],
    howItWorks: [
      "Roof inspection and moisture scan to assess the deck and insulation condition",
      "Written scope and material recommendation — TPO, EPDM, or modified bitumen",
      "Tear-off and deck repair as needed",
      "New insulation and membrane installed and seams welded or sealed to spec",
      "Final walkthrough and warranty documentation",
    ],
    whyUs: [
      "We work with commercial low-slope systems specifically — this isn't a residential shingle crew doing flat roofs on the side.",
      "Scheduling is built around minimizing disruption to your business operations.",
    ],
    faqs: [
      { q: "What roofing system do you recommend for a flat commercial roof?", a: "It depends on the building, budget, and how much foot traffic or equipment the roof deals with. TPO is common for Las Vegas due to its heat and UV resistance; we'll walk you through the tradeoffs during your inspection." },
      { q: "Can the roof be replaced without shutting down the business?", a: "In most cases, yes — we schedule around your operating hours and section off work areas so the building stays open during the replacement." },
    ],
    relatedSlugs: ["commercial-roof-repair", "new-construction-roofing"],
  },
  {
    slug: "commercial-roof-repair",
    categorySlug: "commercial-roofing",
    name: "Commercial roof repair",
    oneLiner: "Find and fix the leak before it turns into a bigger problem for your building.",
    metaDescription:
      "Commercial roof repair in Las Vegas, NV — membrane leaks, ponding water, and flashing repair for flat and low-slope roofs.",
    hero: { kind: "real", src: "/images/project/commercial-metal-roof-install.jpg", alt: "Aerial view of a commercial building roof under repair" },
    gallery: [
      { kind: "real", src: "/images/project/commercial-tpo-roof-install.jpg", alt: "Commercial roof repair in progress on a low-slope membrane roof" },
    ],
    whatItIs: [
      "Commercial roof leaks are usually one of a few things: a failed seam in the membrane, ponding water that's degraded the material over time, or flashing failure around rooftop equipment, drains, or parapet walls. We inspect the full roof to find the actual source rather than just patching the spot where water showed up inside.",
      "Repairs range from resealing and patching membrane seams to fixing drainage issues that are causing water to pond in the first place — ponding water is one of the fastest ways to shorten a flat roof's life, so fixing the cause matters as much as fixing the leak itself.",
    ],
    howItWorks: [
      "Roof inspection to locate the actual source of the leak or damage",
      "Written repair scope before work starts",
      "Repair of the membrane, flashing, or drainage issue",
      "Check for other vulnerable spots — seams, penetrations, ponding areas",
    ],
    whyUs: [
      "We fix the cause — drainage, seam failure, flashing — not just the visible leak.",
      "Repairs are scheduled to minimize disruption to your building's operations.",
    ],
    faqs: [
      { q: "How do you find a leak on a flat roof when the water travels before it shows up inside?", a: "We inspect the full membrane, all seams, flashing points, and drainage areas rather than assuming the leak is directly above the interior stain — on a flat roof, water often travels along the deck before it drips through." },
      { q: "What causes ponding water on a flat roof, and is it a problem?", a: "Ponding usually means a drainage or slope issue. Left alone, standing water accelerates membrane breakdown and UV damage. If we see ponding during an inspection, we'll flag it and explain what's causing it." },
    ],
    relatedSlugs: ["commercial-roof-replacement", "roof-repair"],
  },
];

export const categories: Category[] = [
  {
    slug: "residential-roofing",
    name: "Residential roofing",
    metaDescription:
      "Residential roof replacement, repair, storm damage restoration, and new construction roofing in Las Vegas, NV.",
    intro: [
      "From full roof replacements to storm damage repair and new construction, we handle residential roofing across the Las Vegas valley — tile and shingle, single homes and HOA communities.",
    ],
    hero: { kind: "real", src: "/images/project/roof-replacement-tearoff.webp", alt: "Residential roof replacement in progress" },
    subServiceSlugs: ["roof-replacement", "roof-repair", "storm-hail-damage-insurance-claims", "new-construction-roofing"],
  },
  {
    slug: "commercial-roofing",
    name: "Commercial roofing",
    metaDescription:
      "Commercial roof replacement and repair for low-slope and flat roofing systems in Las Vegas, NV.",
    intro: [
      "Low-slope and flat roof replacement and repair for commercial buildings across the Las Vegas valley, built to hold up under year-round direct sun.",
    ],
    hero: { kind: "real", src: "/images/project/commercial-metal-roof-install.jpg", alt: "Commercial roofing installation" },
    heroVideo: "/videos/roofing-system-assembly.mp4",
    subServiceSlugs: ["commercial-roof-replacement", "commercial-roof-repair"],
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
// Service-area (city) pages — the 7 real areas the client serves. Hero
// photos are placeholders until real project photos exist for each area
// (per hard rule: no stock photos, no fabricated project claims). Intro
// copy sticks to genuinely checkable facts about each area (its role in the
// valley, housing stock, HOA norms) rather than inventing a specific job.
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
    slug: "las-vegas",
    name: "Las Vegas, NV",
    intro: [
      "Las Vegas is home base for Xtreme Roofing, and it's the widest mix of roofing stock we work on — established mid-century neighborhoods with aging shingle roofs near the urban core, alongside newer tile-roofed subdivisions further out. Whatever the roof's age or material, the same triple-digit summer heat and monsoon exposure applies valley-wide.",
    ],
    nearby: ["Henderson", "North Las Vegas", "Spring Valley", "Sunrise Manor"],
    hero: { kind: "real", src: "/images/project/aerial-shingle-roof-1.jpg", alt: "Aerial view of a completed roof in the Las Vegas valley" },
  },
  {
    slug: "henderson",
    name: "Henderson, NV",
    intro: [
      "Henderson is one of the largest cities in the valley, with a lot of master-planned communities — Green Valley, Anthem, Inspirada — that come with HOA architectural review on any roofing work. We're familiar with getting the documentation those associations expect submitted alongside the permit.",
    ],
    nearby: ["Enterprise", "Las Vegas", "Summerlin"],
    hero: { kind: "real", src: "/images/project/aerial-shingle-roof-2.jpg", alt: "Aerial view of a residential roof in Henderson" },
  },
  {
    slug: "summerlin",
    name: "Summerlin, NV",
    intro: [
      "Summerlin's master-planned communities on the west side of the valley have some of the strictest HOA architectural guidelines in the area, and tile roofing is the dominant look. Replacement and repair work here usually means matching an existing tile profile and color, not just picking whatever's in stock.",
    ],
    nearby: ["Las Vegas", "Spring Valley", "Enterprise"],
    hero: { kind: "real", src: "/images/project/roof-replacement-tearoff.webp", alt: "Roof replacement in progress on a home in Summerlin" },
  },
  {
    slug: "north-las-vegas",
    name: "North Las Vegas, NV",
    intro: [
      "North Las Vegas has seen heavy new-home construction over the past decade alongside its established residential pockets, plus a growing industrial and commercial corridor — which means we're regularly quoting both new construction roofing on residential builds and low-slope commercial work in the same area.",
    ],
    nearby: ["Las Vegas", "Sunrise Manor"],
    hero: { kind: "real", src: "/images/project/xtreme-crew-shingle-reroof.png", alt: "Xtreme Roofing crew at work in North Las Vegas" },
  },
  {
    slug: "spring-valley",
    name: "Spring Valley, NV",
    intro: [
      "Spring Valley is a dense, largely built-out unincorporated community west of the Strip, with a mix of tile and shingle roofs from different building eras. A lot of our repair calls here are on roofs from the 1990s and 2000s that are now old enough for flashing and underlayment to be failing even if the shingles or tile still look fine from the ground.",
    ],
    nearby: ["Las Vegas", "Enterprise", "Summerlin"],
    hero: { kind: "real", src: "/images/project/xtreme-crew-tile-reroof-1.png", alt: "Roofing installation on a Spring Valley property" },
  },
  {
    slug: "sunrise-manor",
    name: "Sunrise Manor, NV",
    intro: [
      "Sunrise Manor is an established unincorporated community east of the Strip, with a lot of single-story homes from the 1970s-90s. Roofs of that age are frequently past the point of a spot repair, which is usually the first thing we check when we get a call from this area.",
    ],
    nearby: ["Las Vegas", "North Las Vegas"],
    hero: { kind: "real", src: "/images/project/aerial-shingle-roof-1.jpg", alt: "Aerial view of a residential roof in Sunrise Manor" },
  },
  {
    slug: "enterprise",
    name: "Enterprise, NV",
    intro: [
      "Enterprise, south of Las Vegas, has been one of the fastest-growing parts of the valley for new residential subdivisions alongside an expanding commercial and logistics footprint along the I-15 corridor — so we see a fairly even split between residential new construction and commercial low-slope roofing here.",
    ],
    nearby: ["Henderson", "Summerlin", "Spring Valley"],
    hero: { kind: "real", src: "/images/project/aerial-shingle-roof-2.jpg", alt: "Aerial view of a roof in Enterprise" },
  },
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}
