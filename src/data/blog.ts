// ---------------------------------------------------------------------------
// Tier 3 informational content for Xtreme Roofing — real, researched
// questions homeowners search before they're ready to request a quote.
// Regional facts (climate, monsoon season timing) are general, well-
// established facts about the Las Vegas valley; no fabricated statistics,
// prices, or code citations.
// ---------------------------------------------------------------------------

import type { ProjectImage } from "./siteConfig";

export type BlogSection = { heading?: string; paragraphs: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  image: ProjectImage;
  sections: BlogSection[];
  relatedServiceSlugs: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-long-does-a-roof-last-in-las-vegas-heat",
    title: "How long does a roof actually last in Las Vegas heat?",
    excerpt:
      "Manufacturer warranties assume a mild climate. Las Vegas sun, heat, and monsoon storms shorten that timeline — here's what actually determines how long your roof holds up.",
    publishedAt: "2026-07-14",
    image: { kind: "real", src: "/images/project/xtreme-crew-blog-feature.png", alt: "Xtreme Roofing crew re-roofing a home in the Las Vegas heat" },
    sections: [
      {
        paragraphs: [
          "Las Vegas gets close to 300 sunny days a year and summer highs that regularly sit above 105°F. A dark asphalt shingle roof in direct sun can run 50-70°F hotter than the surrounding air temperature — meaning a roof surface can realistically hit 150°F or more on a summer afternoon. That heat and UV exposure is the single biggest factor in how long a roof actually lasts here, and it's a different equation than in a milder climate.",
        ],
      },
      {
        heading: "Why the warranty number and the real-world number don't match",
        paragraphs: [
          "Architectural asphalt shingles are commonly warrantied for 25-30 years, and that number assumes moderate climate conditions. In extreme heat and UV climates like Las Vegas, most roofers see asphalt shingles fall short of that — the constant heat cycling (baking all day, cooling at night) accelerates the breakdown of the asphalt and granule loss well before the warranty period is up. Attic ventilation makes a real difference here: a poorly ventilated attic bakes the underside of the roof deck along with the top side, and that shortens shingle life further.",
        ],
      },
      {
        heading: "Tile roofs age differently than shingle roofs",
        paragraphs: [
          "Concrete and clay tile are common in Las Vegas partly because the tile itself can last 50 years or more — it's not the material that fails first. It's almost always the underlayment beneath the tile, which typically needs replacing every 20-25 years even though the tile on top still looks fine. If a tile roof is leaking, the tile itself is rarely the problem; it's usually the underlayment or flashing underneath.",
        ],
      },
      {
        heading: "What actually determines your roof's lifespan",
        paragraphs: [
          "Material choice, attic ventilation, and the quality of the original installation (flashing details, underlayment, fastening) matter more than the warranty sticker. A roof inspection can tell you which of those factors are working against your specific roof, and whether you're looking at years of life left or a replacement that makes more sense than another round of repairs.",
        ],
      },
    ],
    relatedServiceSlugs: ["roof-replacement", "roof-repair"],
  },
  {
    slug: "what-determines-roof-replacement-cost-las-vegas",
    title: "What actually determines the cost of a roof replacement?",
    excerpt:
      "There's no honest flat price for a roof replacement sight unseen. Here's what actually moves the number, so you know what you're being quoted for.",
    publishedAt: "2026-07-28",
    image: { kind: "real", src: "/images/project/xtreme-crew-tile-reroof-1.png", alt: "Xtreme Roofing crew and trucks on site for a roof replacement" },
    sections: [
      {
        paragraphs: [
          "Any roofer who gives you a firm price over the phone, before seeing the roof, is guessing. A roof replacement quote depends on several things that only show up during an actual inspection — which is why we quote on-site instead of over the phone. Here's what actually drives the number up or down.",
        ],
      },
      {
        heading: "Roof size, pitch, and complexity",
        paragraphs: [
          "A simple, low-pitch roof with few penetrations costs less to work on than a steep, cut-up roof with multiple valleys, dormers, and chimneys — more cuts, more flashing detail, and more time on every part of the job. Square footage matters, but shape and pitch usually move the price more than size alone.",
        ],
      },
      {
        heading: "Material — shingle, tile, or a low-slope system",
        paragraphs: [
          "Architectural asphalt shingles, concrete or clay tile, and low-slope membrane systems (for flat or near-flat sections) all have different material and labor costs. Tile in particular costs more upfront but holds up structurally for decades; shingle costs less upfront and needs replacing sooner. Neither is the 'right' answer for every roof — it depends on the home, HOA requirements, and budget.",
        ],
      },
      {
        heading: "What the tear-off reveals",
        paragraphs: [
          "You can't always tell what's under the existing roofing material until it comes off. Rotted decking, old ventilation problems, or damaged framing all add cost — but they're also things you'd rather find and fix now than have them cause a leak two years after a new roof goes on. A trustworthy roofer shows you the damage and gets your sign-off before doing that extra work, not after.",
        ],
      },
      {
        heading: "The honest answer",
        paragraphs: [
          "We quote on-site because a real inspection is the only way to give you a number that actually holds once the work starts. If you want to know what your specific roof will cost to replace, the fastest path is a free inspection — call (702) 750-2622 or request a quote online.",
        ],
      },
    ],
    relatedServiceSlugs: ["roof-replacement", "commercial-roof-replacement"],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
