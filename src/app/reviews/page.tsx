import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import TrustBadges from "@/components/TrustBadges";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd } from "@/lib/jsonld";
import { business, testimonials } from "@/data/siteConfig";

export const metadata = buildMetadata({
  title: "Reviews",
  description: `Real Google reviews from ${business.name} customers in ${business.serviceRegion} — read them all, then leave your own.`,
  path: "/reviews",
});

const heroImage = { kind: "placeholder" as const, label: "Reviews page hero photo" };

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-rust" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="h-4 w-4"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={i < rating ? 0 : 1.2}
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.9l-5.2 2.62.99-5.8-4.21-4.1 5.82-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
        ])}
      />

      <PageHero
        eyebrow={business.serviceRegion}
        title="What our customers say"
        subtitle={`Every review below is real, pulled from ${business.name}'s Google Business Profile — ${testimonials.length} and counting.`}
        image={heroImage}
      />

      <Container className="py-10">
        <TrustBadges />
      </Container>

      <Container className="py-4">
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <p className="text-ink-soft">
              We don&apos;t hand-pick a handful of quotes — this is every written review on our
              Google listing. Had a good experience with us?
            </p>
            <a
              href={business.googleReviewUrl}
              className="inline-block rounded bg-rust px-6 py-3 font-bold text-white hover:bg-rust-dark"
            >
              Leave a review →
            </a>
          </div>
        </Reveal>
      </Container>

      <Container className="py-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name + i} delayMs={(i % 6) * 60}>
              <figure className="flex h-full flex-col gap-4 rounded-lg bg-white p-6 shadow-md">
                <Stars rating={t.rating} />
                <blockquote className="flex-1 text-ink-soft">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="flex items-center gap-2 text-sm font-semibold text-ink">
                  {t.name}
                  <span className="rounded bg-limestone-dark px-2 py-0.5 text-xs font-normal text-ink-soft">
                    Google review
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>

      <CTASection image={heroImage} />
    </>
  );
}
