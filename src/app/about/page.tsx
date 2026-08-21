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
  title: "About us",
  description: `Meet ${business.name} — a locally based residential and commercial roofing team serving ${business.serviceRegion}.`,
  path: "/about",
});

const heroImage = { kind: "real" as const, src: "/images/project/xtreme-crew-tile-reroof-2.png", alt: "The Xtreme Roofing crew at work on a roof" };

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
        title={`The team behind every ${business.shortName} project`}
        subtitle="Not a call center dispatching subcontractors — the same team that inspects your roof and writes the scope is the team that shows up to do the work."
        image={heroImage}
      />

      <Container className="py-10">
        <TrustBadges />
      </Container>

      <Container className="py-8">
        <Reveal>
          <div className="mx-auto max-w-3xl space-y-4 text-ink-soft">
            <p>
              Xtreme Roofing is based in Las Vegas at 6135 Harrison Dr, and works residential and
              commercial roofs across the valley — Henderson, Summerlin, North Las Vegas, Spring
              Valley, Sunrise Manor, and Enterprise included. We handle roof replacement, repair,
              storm and hail damage restoration with insurance claim support, and new construction
              roofing, so most property owners only need one call regardless of what the roof
              needs.
            </p>
            <p>
              Every job starts with a free inspection, not a sales pitch. We check the decking,
              flashing, and ventilation, document what we find, and give you a written estimate
              before anything is scheduled. If a repair will genuinely hold up, we say so instead
              of pushing a replacement — and if a roof is past that point, we explain exactly why.
            </p>
            <p>
              Materials and installation details are specced for what actually wears out a roof in
              this climate: triple-digit summer heat, constant UV exposure, and monsoon-season wind
              and hail. That means getting ventilation and underlayment right, not just laying down
              new shingles or tile over the same problems that were there before.
            </p>
          </div>
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
