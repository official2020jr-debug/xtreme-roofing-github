import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import TrustBadges from "@/components/TrustBadges";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd } from "@/lib/jsonld";
import { cities, business } from "@/data/siteConfig";

export const metadata = buildMetadata({
  title: "Service areas",
  description: `${business.name} serves ${business.serviceRegion}, including ${cities.map((c) => c.name).join(", ")}.`,
  path: "/service-areas",
});

const heroImage = { kind: "real" as const, src: "/images/project/aerial-shingle-roof-1.jpg", alt: "Aerial view of a roof in the Las Vegas valley" };

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Service areas", path: "/service-areas" },
        ])}
      />

      <PageHero
        eyebrow="Where we work"
        title={`Serving ${business.serviceRegion}`}
        subtitle={`Locally owned and based in ${business.primaryCity} — with crews regularly working throughout the area.`}
        image={heroImage}
      />

      <Container className="py-10">
        <TrustBadges />
      </Container>

      <Container className="py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city, i) => (
            <Reveal key={city.slug} delayMs={i * 60}>
              <Link
                href={`/service-areas/${city.slug}`}
                className="group flex h-full flex-col justify-between bg-limestone-dark p-6 transition-all hover:-translate-y-1 hover:shadow-md motion-reduce:hover:translate-y-0"
              >
                <div>
                  <h2 className="text-xl font-extrabold text-ink group-hover:text-rust">
                    {city.name}
                  </h2>
                  <p className="mt-2 text-sm text-ink-soft">{city.intro[0].slice(0, 140)}…</p>
                </div>
                <span className="mt-4 text-sm font-bold text-rust">
                  View {city.name} →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>

      <CTASection image={heroImage} />
    </>
  );
}
