import Link from "next/link";
import Container from "./Container";
import PageHero from "./PageHero";
import TrustBadges from "./TrustBadges";
import ServiceAreaList from "./ServiceAreaList";
import ReviewsSection from "./ReviewsSection";
import CTASection from "./CTASection";
import Reveal from "./Reveal";
import JsonLd from "./JsonLd";
import { getCity, categories, subServices, business } from "@/data/siteConfig";
import { buildBreadcrumbJsonLd } from "@/lib/jsonld";
import { notFound } from "next/navigation";

export default function CityView({ slug }: { slug: string }) {
  const city = getCity(slug);
  if (!city) return notFound();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Service areas", path: "/service-areas" },
          { name: city.name, path: `/service-areas/${city.slug}` },
        ])}
      />

      <PageHero
        eyebrow={business.serviceRegion}
        title={city.name}
        subtitle={`[REPLACE] One-line description of services offered for homeowners in ${city.name} and nearby.`}
        image={city.hero}
      />

      <Container className="py-10">
        <TrustBadges />
      </Container>

      <Container className="py-8">
        <Reveal>
          <div className="mx-auto max-w-3xl space-y-4 text-ink-soft">
            {city.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p>
              We also regularly serve nearby {city.nearby.join(", ")}, and the rest of {business.serviceRegion}.
            </p>
          </div>
        </Reveal>
      </Container>

      <Container className="py-12">
        <h2 className="text-center text-3xl font-extrabold text-ink sm:text-4xl">
          Services in {city.name}
        </h2>
        <div className="mx-auto mt-3 h-0.5 w-24 bg-rust" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <div key={cat.slug} className="bg-limestone-dark p-5">
              <Link href={`/${cat.slug}`} className="text-lg font-extrabold text-ink hover:text-rust">
                {cat.name}
              </Link>
              <ul className="mt-3 space-y-1.5 text-sm">
                {subServices
                  .filter((s) => s.categorySlug === cat.slug)
                  .map((s) => (
                    <li key={s.slug}>
                      <Link href={`/${s.categorySlug}/${s.slug}`} className="text-ink-soft hover:text-rust">
                        {s.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <ReviewsSection />

      <Container className="py-12">
        <h2 className="text-center text-3xl font-extrabold text-ink sm:text-4xl">
          Other areas we serve
        </h2>
        <div className="mx-auto mt-3 h-0.5 w-24 bg-rust" />
        <div className="mt-8">
          <ServiceAreaList currentSlug={city.slug} />
        </div>
      </Container>

      <CTASection
        headline={`Get a free quote in ${city.name}`}
        subheadline="Get a free quote today!"
        image={city.hero}
      />
    </>
  );
}
