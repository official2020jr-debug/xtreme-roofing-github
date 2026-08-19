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
  description: `[REPLACE] Real finished projects from ${business.name} in ${business.serviceRegion}.`,
  path: "/projects",
});

const heroImage: ProjectImage = { kind: "placeholder", label: "Projects page hero photo" };

// [REPLACE] Once real project photos exist, swap these placeholders for
// `{ kind: "real", src: "/images/project/....jpg", alt: "..." }` entries.
// Keep real width/height on real photos so the masonry grid doesn't shift.
const photos: ProjectImage[] = [
  { kind: "placeholder", label: "Project photo 1" },
  { kind: "placeholder", label: "Project photo 2" },
  { kind: "placeholder", label: "Project photo 3" },
  { kind: "placeholder", label: "Project photo 4" },
  { kind: "placeholder", label: "Project photo 5" },
  { kind: "placeholder", label: "Project photo 6" },
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
        subtitle="[REPLACE] Every photo below is a real project — no stock photography, no renderings."
        image={heroImage}
      />

      <Container className="py-10">
        <TrustBadges />
      </Container>

      <Container className="py-4">
        <Reveal>
          <p className="mx-auto max-w-3xl text-center text-ink-soft">
            [REPLACE] Short intro line about the range of work shown below — browse the finished
            work, then{" "}
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
