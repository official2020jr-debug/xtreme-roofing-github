import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd } from "@/lib/jsonld";
import { categories, getSubServicesForCategory, business } from "@/data/siteConfig";

export const metadata = buildMetadata({
  title: "Services",
  description: `Full list of residential and commercial roofing services offered by ${business.name} in ${business.serviceRegion}. Free estimates on every project.`,
  path: "/services",
});

const heroImage = { kind: "real" as const, src: "/images/project/commercial-tpo-roof-install.jpg", alt: "Roofing crew installing a commercial low-slope roof" };

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <PageHero
        eyebrow={business.serviceRegion}
        title="Our services"
        subtitle="Roof replacement, repair, storm damage restoration, and new construction roofing — residential and commercial."
        image={heroImage}
      />

      {categories.map((cat) => {
        const services = getSubServicesForCategory(cat.slug);
        return (
          <Container className="py-12" key={cat.slug}>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-extrabold text-ink">{cat.name}</h2>
                <div className="mt-2 h-0.5 w-16 bg-rust" />
                <p className="mt-3 max-w-xl text-ink-soft">{cat.intro[0]}</p>
              </div>
              <Link
                href={`/${cat.slug}`}
                className="whitespace-nowrap rounded bg-ink px-5 py-2.5 text-sm font-bold text-white hover:bg-ink/80"
              >
                View {cat.name} →
              </Link>
            </div>
            <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s, i) => (
                <Reveal key={s.slug} delayMs={i * 60}>
                  <ServiceCard href={`/${s.categorySlug}/${s.slug}`} name={s.name} image={s.hero} />
                </Reveal>
              ))}
            </div>
          </Container>
        );
      })}

      <CTASection image={heroImage} />
    </>
  );
}
