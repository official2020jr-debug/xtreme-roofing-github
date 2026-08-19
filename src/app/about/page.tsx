import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import TrustBadges from "@/components/TrustBadges";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd } from "@/lib/jsonld";
import { differentiators, business } from "@/data/siteConfig";

export const metadata = buildMetadata({
  title: `About us — meet ${business.ownerName}`,
  description: `[REPLACE] Meet ${business.ownerName}, the owner behind every ${business.name} project in ${business.serviceRegion}. One accountable person from your first walkthrough to the final one — not a rotating crew.`,
  path: "/about",
});

const heroImage = { kind: "placeholder" as const, label: "About page hero photo" };

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <PageHero
        eyebrow={`About ${business.shortName}`}
        title={`One name behind every ${business.shortName} project: ${business.ownerName}`}
        subtitle="Not a sales team, not a call center — the same person who bids your job is the person who builds it."
        image={heroImage}
      />

      <Container className="py-10">
        <TrustBadges />
      </Container>

      <Container className="py-8">
        <Reveal>
          <div className="mx-auto max-w-3xl space-y-4 text-ink-soft">
            <p>
              [REPLACE] A real 2-3 paragraph founder story — why they started the business, what
              they were frustrated by in the industry, and what running it differently actually
              looks like day to day. Use specifics, not generic claims. If real reviews repeatedly
              name the owner, quote that pattern here — it&apos;s what makes an about page read as
              a real business instead of a template.
            </p>
            <p>
              [REPLACE] A paragraph on what the owner personally does on a typical project — the
              walkthrough, the design, being on site for key milestones. Concrete details beat
              adjectives.
            </p>
            <p>
              [REPLACE] A paragraph on the technical/quality standard the business holds itself to
              — something specific to the trade and region (code requirements, material specs,
              climate considerations) that signals real expertise.
            </p>
          </div>
        </Reveal>
      </Container>

      <Container className="pb-4">
        <Reveal>
          <blockquote className="mx-auto max-w-3xl border-l-4 border-rust bg-limestone-dark p-6 text-lg italic text-ink">
            &ldquo;[REPLACE — a real, pasted Google review quote, not invented]&rdquo;
            <footer className="mt-3 text-sm font-semibold not-italic text-ink-soft">
              — [Reviewer name], real Google review
            </footer>
          </blockquote>
        </Reveal>
      </Container>

      <Container className="py-12">
        <h2 className="text-center text-3xl font-extrabold text-ink sm:text-4xl">
          How {business.ownerName} works
        </h2>
        <div className="mx-auto mt-3 h-0.5 w-24 bg-rust" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {differentiators.map((d, i) => (
            <Reveal key={d.title} delayMs={i * 80}>
              <div className="h-full bg-limestone-dark p-6">
                <h3 className="text-lg font-bold text-ink">{d.title}</h3>
                <p className="mt-2 text-ink-soft">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-block rounded bg-ink px-8 py-4 font-bold text-white hover:bg-ink/80"
          >
            See our work →
          </Link>
        </div>
      </Container>

      <ReviewsSection image={heroImage} />

      <CTASection image={heroImage} />
    </>
  );
}
