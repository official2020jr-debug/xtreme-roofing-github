import Link from "next/link";
import Container from "./Container";
import PageHero from "./PageHero";
import VideoHero from "./VideoHero";
import ProjectPhoto from "./ProjectPhoto";
import FAQ from "./FAQ";
import CTASection from "./CTASection";
import Reveal from "./Reveal";
import JsonLd from "./JsonLd";
import { getCategory, getSubService, subServices, business } from "@/data/siteConfig";
import { buildFaqPageJsonLd, buildBreadcrumbJsonLd, buildServiceJsonLd } from "@/lib/jsonld";
import { notFound } from "next/navigation";

export default function SubServiceView({ slug }: { slug: string }) {
  const service = getSubService(slug);
  if (!service) return notFound();

  const category = getCategory(service.categorySlug);

  const related = service.relatedSlugs
    .map((s) => subServices.find((sub) => sub.slug === s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          ...(category ? [{ name: category.name, path: `/${category.slug}` }] : []),
          { name: service.name, path: `/${service.categorySlug}/${service.slug}` },
        ])}
      />
      <JsonLd data={buildFaqPageJsonLd(service.faqs)} />
      <JsonLd data={buildServiceJsonLd(service)} />

      {service.heroVideo ? (
        <VideoHero
          src={service.heroVideo}
          eyebrow={business.serviceRegion}
          title={service.name}
          subtitle={service.oneLiner}
        />
      ) : (
        <PageHero
          eyebrow={business.serviceRegion}
          title={service.name}
          subtitle={service.oneLiner}
          image={service.hero}
        />
      )}

      <Container className="grid gap-12 py-14 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-10">
          <Reveal>
            <div>
              <h2 className="text-2xl font-extrabold text-ink">What&apos;s included</h2>
              <div className="mt-1 h-0.5 w-16 bg-rust" />
              <div className="mt-4 space-y-4 text-ink-soft">
                {service.whatItIs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h2 className="text-2xl font-extrabold text-ink">How it works</h2>
              <div className="mt-1 h-0.5 w-16 bg-rust" />
              <p className="mt-4 text-sm font-semibold tracking-wide text-ink-soft">
                Step by step, here&apos;s what actually happens on site:
              </p>
              <ol className="mt-4 space-y-3">
                {service.howItWorks.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-extrabold text-white">
                      {i + 1}
                    </span>
                    <span className="text-ink-soft">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h2 className="text-2xl font-extrabold text-ink">Why {business.shortName}</h2>
              <div className="mt-1 h-0.5 w-16 bg-rust" />
              <div className="mt-4 space-y-4 text-ink-soft">
                {service.whyUs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </Reveal>

          {service.process && (
            <Reveal>
              <div>
                <h2 className="text-2xl font-extrabold text-ink">Our process</h2>
                <div className="mt-1 h-0.5 w-16 bg-rust" />
                <ol className="mt-4 grid gap-4 sm:grid-cols-2">
                  {service.process.map((step, i) => (
                    <li key={step.step} className="bg-limestone-dark p-5">
                      <span className="text-sm font-extrabold text-rust">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-1 text-lg font-bold text-ink">{step.step}</h3>
                      <p className="mt-1 text-sm text-ink-soft">{step.description}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          )}

          {service.gallery.length > 0 && (
            <div>
              <h2 className="text-2xl font-extrabold text-ink">Project gallery</h2>
              <div className="mt-1 h-0.5 w-16 bg-rust" />
              <div className="mt-4 grid grid-cols-2 gap-1 sm:grid-cols-3">
                {service.gallery.map((img, i) => (
                  <ProjectPhoto
                    key={i}
                    image={img}
                    className="aspect-square"
                    sizes="(min-width: 640px) 33vw, 50vw"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <aside>
          <div className="bg-limestone-dark p-6">
            <h3 className="text-lg font-extrabold text-ink">Related services</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/${r.categorySlug}/${r.slug}`}
                    className="font-semibold text-rust hover:underline"
                  >
                    {r.name} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </Container>

      <Container className="py-12">
        <FAQ items={service.faqs} title={`${service.name} FAQ`} />
      </Container>

      <CTASection
        headline={`Ready to start your ${service.name} project?`}
        subheadline="Get a free quote today!"
        image={service.hero}
      />
    </>
  );
}
