import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import TrustBadges from "@/components/TrustBadges";
import WhyChooseCollage from "@/components/WhyChooseCollage";
import ProjectCarousel, { type CarouselItem } from "@/components/ProjectCarousel";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import ReviewsSection from "@/components/ReviewsSection";
import ProjectPhoto from "@/components/ProjectPhoto";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { buildMetadata } from "@/lib/seo";
import { buildFaqPageJsonLd } from "@/lib/jsonld";
import { business, subServices, categories, homeFaqs } from "@/data/siteConfig";
import type { ProjectImage } from "@/data/siteConfig";

const heroImage: ProjectImage = { kind: "placeholder", label: "Homepage hero photo" };
const missionImage: ProjectImage = { kind: "placeholder", label: "Mission section photo" };

export const metadata = buildMetadata({
  title: "[REPLACE] Primary keyword — e.g. Hardscape & landscape construction",
  description: `[REPLACE] ${business.tagline} Free estimates.`,
  path: "/",
});

// [REPLACE] These must match real slugs in src/data/siteConfig.ts (subServices).
const popularServiceSlugs = [
  "paver-patio-installation",
  "landscape-design-build",
];

const carouselSlugs = [
  "landscape-design-build",
  "irrigation-system-installation",
  "paver-patio-installation",
  "concrete-patio-installation",
];

export default function HomePage() {
  const popular = popularServiceSlugs
    .map((slug) => subServices.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const carouselItems: CarouselItem[] = carouselSlugs
    .map((slug) => subServices.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))
    .map((s) => ({
      key: s.slug,
      tag: s.name,
      name: `${business.primaryCity} project`,
      href: `/${s.categorySlug}/${s.slug}`,
      image: s.hero,
    }));

  return (
    <>
      {/* Once real hero video footage exists, swap this PageHero for
          VideoHero (src="/videos/your-video.mp4") — same props, full-bleed
          video background instead of a static photo. */}
      <PageHero
        eyebrow={business.serviceRegion}
        title="[REPLACE] Primary headline — what you build/do, benefit-focused"
        subtitle={business.tagline}
        image={heroImage}
      />

      <Container className="py-10">
        <Reveal>
          <TrustBadges />
        </Reveal>
      </Container>

      {/* Why clients choose {business.shortName} */}
      <Container className="py-14">
        <Reveal>
          <WhyChooseCollage
            imageLeft={{ kind: "placeholder", label: "Homepage collage photo (left)" }}
            imageRight={{ kind: "placeholder", label: "Homepage collage photo (right)" }}
          />
        </Reveal>
      </Container>

      {/* Results carousel */}
      <section className="bg-ink py-16" id="gallery">
        <Container>
          <Reveal>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="inline-block rounded bg-rust px-4 py-2 text-xs font-bold tracking-wide text-white">
                  Projects
                </span>
                <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
                  Results worth sharing
                </h2>
              </div>
              <Link
                href="/services"
                className="whitespace-nowrap rounded bg-rust px-5 py-2.5 text-sm font-bold text-white hover:bg-rust-dark"
              >
                Explore all services →
              </Link>
            </div>
          </Reveal>
          <ProjectCarousel items={carouselItems} />
        </Container>
      </section>

      {/* Services */}
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal className="bg-limestone-dark p-8">
            <h2 className="text-2xl font-extrabold text-ink">Why homeowners choose us</h2>
            <div className="mt-2 h-0.5 w-16 bg-rust" />
            <p className="mt-4 text-ink-soft">
              [REPLACE] Short paragraph: what this business does, for whom, and its core promise
              (free consultations, honest quotes, owner-involved, etc.).
            </p>
            <h3 className="mt-6 text-sm font-bold tracking-wide text-ink">
              Popular services
            </h3>
            <ul className="mt-3 space-y-2">
              {popular.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.categorySlug}/${s.slug}`}
                    className="font-semibold text-rust hover:underline"
                  >
                    {s.name} →
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="mt-6 inline-block rounded bg-ink px-6 py-3 font-bold text-white hover:bg-ink/80"
            >
              View all services
            </Link>
          </Reveal>

          <div>
            <h2 className="text-2xl font-extrabold text-ink">
              [REPLACE] Section headline — e.g. &ldquo;Comprehensive service solutions&rdquo;
            </h2>
            <div className="mt-2 h-0.5 w-16 bg-rust" />
            <div className="mt-6 space-y-5">
              {categories.map((cat, i) => (
                <Reveal key={cat.slug} delayMs={i * 60}>
                  <div className="flex gap-4">
                    <Link href={`/${cat.slug}`} className="shrink-0">
                      <ProjectPhoto image={cat.hero} className="h-20 w-28 rounded" sizes="112px" />
                    </Link>
                    <div>
                      <Link href={`/${cat.slug}`} className="font-bold text-ink hover:text-rust">
                        {cat.name}
                      </Link>
                      <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                        {cat.subServiceSlugs.map((slug) => {
                          const s = subServices.find((sub) => sub.slug === slug);
                          if (!s) return null;
                          return (
                            <Link
                              key={slug}
                              href={`/${cat.slug}/${slug}`}
                              className="text-ink-soft hover:text-rust"
                            >
                              {s.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Mission statement */}
      <section className="relative overflow-hidden py-24">
        <ProjectPhoto image={missionImage} fill />
        <div className="absolute inset-0 bg-ink/70" />
        <Container className="relative text-center">
          <Reveal>
            <Image
              src="/logo.png"
              alt={`${business.name} logo`}
              width={1944}
              height={1166}
              className="mx-auto h-16 w-auto object-contain"
            />
            <span className="mt-4 block text-sm font-bold tracking-wide text-rust">
              [REPLACE] Short eyebrow line — e.g. &ldquo;Your vision, our expertise&rdquo;
            </span>
            <p className="mx-auto mt-3 max-w-2xl text-xl font-semibold text-white">
              {business.tagline}
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-white/80">{business.longPositioning}</p>
            <Link
              href="/about"
              className="mt-6 inline-block rounded bg-rust px-6 py-3 font-bold text-white hover:bg-rust-dark"
            >
              Learn more about us
            </Link>
          </Reveal>
        </Container>
      </section>

      <ReviewsSection />

      <Container className="py-14">
        <Reveal>
          <FAQ items={homeFaqs} />
        </Reveal>
        <JsonLd data={buildFaqPageJsonLd(homeFaqs)} />
      </Container>

      <ServiceAreaMap />
    </>
  );
}
