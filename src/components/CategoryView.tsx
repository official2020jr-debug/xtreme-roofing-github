import Container from "./Container";
import PageHero from "./PageHero";
import VideoHero from "./VideoHero";
import ServiceCard from "./ServiceCard";
import CTASection from "./CTASection";
import Reveal from "./Reveal";
import JsonLd from "./JsonLd";
import { getCategory, getSubServicesForCategory, business } from "@/data/siteConfig";
import { buildBreadcrumbJsonLd } from "@/lib/jsonld";
import { notFound } from "next/navigation";

export default function CategoryView({ slug }: { slug: string }) {
  const category = getCategory(slug);
  if (!category) return notFound();

  const services = getSubServicesForCategory(slug);

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: category.name, path: `/${category.slug}` },
        ])}
      />

      {category.heroVideo ? (
        <VideoHero
          src={category.heroVideo}
          eyebrow={business.serviceRegion}
          title={category.name}
          subtitle={category.intro[0]}
        />
      ) : (
        <PageHero
          eyebrow={business.serviceRegion}
          title={category.name}
          subtitle={category.intro[0]}
          image={category.hero}
        />
      )}

      <Container className="py-14">
        <div className="grid gap-1 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delayMs={i * 80}>
              <ServiceCard href={`/${s.categorySlug}/${s.slug}`} name={s.name} image={s.hero} />
            </Reveal>
          ))}
        </div>
      </Container>

      <CTASection
        headline={`Ready to talk through your ${category.name} project?`}
        subheadline="Get a free quote today!"
        image={category.hero}
      />
    </>
  );
}
