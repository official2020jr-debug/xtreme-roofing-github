import { SITE_URL, business, cities, subServices } from "@/data/siteConfig";
import type { Faq, SubService } from "@/data/siteConfig";

/** LocalBusiness + Service JSON-LD for the root layout — read by Google for local SEO. */
export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: business.name,
    description: business.longPositioning,
    telephone: business.phoneDisplay,
    url: SITE_URL,
    image: `${SITE_URL}/logo.jpeg`,
    sameAs: [business.facebookUrl, business.instagramUrl, business.googleMapsUrl],
    areaServed: cities.map((c) => ({ "@type": "City", name: c.name })),
    priceRange: business.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.streetAddress,
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.postalCode,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHoursSpecification: buildOpeningHoursSpecification(),
    makesOffer: subServices.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.metaDescription,
        url: `${SITE_URL}/${s.categorySlug}/${s.slug}`,
      },
    })),
  };
}

/** Service JSON-LD for an individual subservice page — richer per-page structured data than the LocalBusiness `makesOffer` list alone. */
export function buildServiceJsonLd(service: SubService) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDescription,
    url: `${SITE_URL}/${service.categorySlug}/${service.slug}`,
    serviceType: service.name,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: business.name,
      telephone: business.phoneDisplay,
    },
    areaServed: cities.map((c) => ({ "@type": "City", name: c.name })),
  };
}

const DAY_NAMES: Record<string, string> = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};

/** Parses "7:00 Am" into 24-hour "07:00" for openingHoursSpecification. */
function to24Hour(time: string) {
  const match = time.trim().match(/^(\d{1,2}):(\d{2})\s*(Am|Pm)$/i);
  if (!match) return time;
  const [, hourStr, minute, meridiem] = match;
  let hour = parseInt(hourStr, 10);
  if (/pm/i.test(meridiem) && hour !== 12) hour += 12;
  if (/am/i.test(meridiem) && hour === 12) hour = 0;
  return `${String(hour).padStart(2, "0")}:${minute}`;
}

/** Builds schema.org openingHoursSpecification from business.hours, skipping closed days. */
function buildOpeningHoursSpecification() {
  return business.hours
    .filter((h) => h.time.toLowerCase() !== "closed")
    .map((h) => {
      const [opens, closes] = h.time.split(" - ").map(to24Hour);
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${DAY_NAMES[h.day] ?? h.day}`,
        opens,
        closes,
      };
    });
}

/** FAQPage JSON-LD — only wire this onto a page that actually renders these Q&As visibly. */
export function buildFaqPageJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

/** BreadcrumbList JSON-LD. `path` is site-relative, e.g. "/", "/patio-contractor/paver-patio-installation". */
export function buildBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** BlogPosting JSON-LD for a Tier 3 informational blog post. */
export function buildBlogPostingJsonLd(post: { slug: string; title: string; excerpt: string; publishedAt: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    url: `${SITE_URL}/blog/${post.slug}`,
    author: { "@type": "Organization", name: business.name },
    publisher: { "@type": "Organization", name: business.name },
  };
}
