// ---------------------------------------------------------------------------
// TEMPLATE — Tier 3 informational content. Blog posts like these build
// topical authority and capture early-stage searchers who aren't ready to
// request a quote yet.
//
// The 2 example posts below are landscaping/Utah-flavored ONLY to show the
// pattern working end to end (a real regional fact, cited plainly, tied to a
// related service) — replace both entirely with real, researched questions
// and facts for the new client's actual trade and region. Never invent
// regional facts (rebate amounts, code requirements, climate specifics) —
// research them for real, or mark clearly as [NEEDS INPUT].
// ---------------------------------------------------------------------------

export type BlogSection = { heading?: string; paragraphs: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  sections: BlogSection[];
  relatedServiceSlugs: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "example-post-one",
    title: "[REPLACE] A real, researched informational question",
    excerpt:
      "[REPLACE] One-sentence summary of the answer, written to earn a click.",
    publishedAt: "2026-03-02",
    sections: [
      {
        paragraphs: [
          "[REPLACE] Opening paragraph answering the question directly. Example pattern shown below (landscaping/Utah-flavored) demonstrates citing a real, specific regional fact plainly instead of vague filler.",
        ],
      },
      {
        heading: "[REPLACE] A real sub-question",
        paragraphs: [
          "Example: \"The Salt Lake Valley sits in USDA hardiness zone 6b–7a, which gives new grass two realistic windows to get established: spring and early fall.\" — this is the level of specificity to aim for: a real, checkable fact, not a generic claim.",
        ],
      },
      {
        heading: "[REPLACE] What actually determines the outcome",
        paragraphs: [
          "[REPLACE] A paragraph tying the informational answer back to why professional work matters here, without being a hard sales pitch.",
        ],
      },
    ],
    relatedServiceSlugs: ["landscape-design-build"],
  },
  {
    slug: "example-post-two",
    title: "[REPLACE] Cost-factors style post — explain factors, don't invent a price",
    excerpt:
      "[REPLACE] One-sentence summary. Note: never quote a fabricated price/rate — explain what drives cost instead, and point to a real quote.",
    publishedAt: "2026-03-09",
    sections: [
      {
        paragraphs: [
          "[REPLACE] Opening paragraph explaining why a flat price is misleading, without inventing a fake price range.",
        ],
      },
      {
        heading: "[REPLACE] Factor 1",
        paragraphs: [
          "[REPLACE] Explain a real factor that drives cost up or down for this trade.",
        ],
      },
      {
        heading: "[REPLACE] Factor 2",
        paragraphs: [
          "[REPLACE] Explain another real factor.",
        ],
      },
      {
        heading: "The honest answer",
        paragraphs: [
          "[REPLACE] Close with an honest \"here's why we quote on-site instead of over the phone\" paragraph and a link/CTA to request a real quote.",
        ],
      },
    ],
    relatedServiceSlugs: ["paver-patio-installation"],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
