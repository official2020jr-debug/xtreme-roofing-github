import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import TrustBadges from "@/components/TrustBadges";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";
import ProjectPhoto from "@/components/ProjectPhoto";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd } from "@/lib/jsonld";
import { business } from "@/data/siteConfig";
import type { ProjectImage } from "@/data/siteConfig";

export const metadata = buildMetadata({
  title: "Our work",
  description: `Completed roofing projects from ${business.name} in ${business.serviceRegion}.`,
  path: "/projects",
});

const heroImage: ProjectImage = {
  kind: "real",
  src: "/images/project/roof-replacement-tearoff.webp",
  alt: "Roofing crew working on a residential roof replacement",
};

const photos: ProjectImage[] = [
  { kind: "real", src: "/images/project/xtreme-crew-tile-reroof-1.png", alt: "Xtreme Roofing crew re-roofing a Las Vegas home" },
  { kind: "real", src: "/images/project/roof-replacement-tearoff.webp", alt: "Full tear-off during a residential roof replacement" },
  { kind: "real", src: "/images/project/commercial-tpo-roof-install.jpg", alt: "Commercial low-slope roof membrane installation" },
  { kind: "real", src: "/images/project/xtreme-crew-shingle-reroof.png", alt: "Xtreme Roofing crew installing a shingle roof" },
  { kind: "real", src: "/images/project/aerial-shingle-roof-2.jpg", alt: "Aerial view of a residential roof" },
  { kind: "real", src: "/images/project/commercial-metal-roof-install.jpg", alt: "Commercial roofing crew installing membrane roofing" },
  { kind: "real", src: "/images/project/xtreme-crew-tile-reroof-2.png", alt: "Xtreme Roofing crew working on a tile roof" },
  { kind: "real", src: "/images/project/aerial-shingle-roof-1.jpg", alt: "Aerial view of a completed asphalt shingle roof" },
];

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Our work", path: "/projects" },
        ])}
      />

      <PageHero
        eyebrow={business.serviceRegion}
        title="See our work"
        subtitle="Residential and commercial roofing work — no renderings, no mockups."
        image={heroImage}
      />

      <Container className="py-10">
        <TrustBadges />
      </Container>

      <Container className="py-4">
        <Reveal>
          <p className="mx-auto max-w-3xl text-center text-ink-soft">
            Residential and commercial roof replacements, repairs, and storm damage restorations
            across the Las Vegas valley. Browse the work below, then{" "}
            <Link href="/contact" className="font-semibold text-rust hover:underline">
              request a free quote
            </Link>{" "}
            and {business.ownerName} will walk you through what&apos;s possible for your project.
          </p>
        </Reveal>
      </Container>

      <Container className="py-10">
        <Reveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {photos.map((photo, i) => (
              <ProjectPhoto
                key={i}
                image={photo}
                className="aspect-square rounded-lg"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              />
            ))}
          </div>
        </Reveal>
      </Container>

      <ReviewsSection />

      <CTASection
        headline="Like what you see?"
        subheadline="Get a free quote today!"
        image={heroImage}
      />
    </>
  );
}
