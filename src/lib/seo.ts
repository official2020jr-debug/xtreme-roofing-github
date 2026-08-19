import type { Metadata } from "next";
import { SITE_URL, business } from "@/data/siteConfig";

/**
 * Builds consistent per-page metadata (title, description, canonical, Open Graph).
 * `path` should start with a leading slash, e.g. "/about" or "/" for the homepage.
 */
export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}): Metadata {
  const url = new URL(opts.path, SITE_URL).toString();
  // [REPLACE] Point this at a real default social-share image once one
  // exists — falling back to the logo keeps this from ever 404ing.
  const ogImage = opts.ogImage ?? "/logo.png";
  // business.name is often too long to use as a title-tag suffix on every
  // page and still fit Google's ~60-char cutoff, so this uses the shorter
  // business.shortName instead — keep that field genuinely short (~20 chars)
  // or re-audit title lengths per page once real content is in.
  const titleSuffix = business.shortName;
  const title = `${opts.title} | ${titleSuffix}`;

  return {
    title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: opts.description,
      url,
      siteName: business.name,
      images: [{ url: ogImage }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: opts.description,
      images: [ogImage],
    },
  };
}
