import Container from "@/components/Container";
import PhoneLink from "@/components/PhoneLink";
import LeadForm from "@/components/LeadForm";
import TrustBadges from "@/components/TrustBadges";
import ServiceAreaList from "@/components/ServiceAreaList";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd } from "@/lib/jsonld";
import { business } from "@/data/siteConfig";

export const metadata = buildMetadata({
  title: "Contact / free quote",
  description: `Request a free quote from ${business.name}. Call ${business.phoneDisplay} or send us your project details and we'll get back to you fast.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <Container className="py-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <span className="text-sm font-bold tracking-wide text-rust">
              {business.serviceRegion}
            </span>
            <h1 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
              Get a free quote
            </h1>
            <p className="mt-4 max-w-md text-ink-soft">
              Tell us about your project and we&apos;ll follow up fast to schedule a walkthrough —
              or just call and talk to us directly.
            </p>
            <PhoneLink className="mt-6 inline-flex items-center gap-2 rounded bg-rust px-6 py-3 font-bold text-white hover:bg-rust-dark" />
            <a href={`mailto:${business.email}`} className="mt-2 block text-sm text-ink-soft hover:text-rust">
              {business.email}
            </a>

            <ul className="mt-4 space-y-1 text-sm text-ink-soft">
              {business.hours.map((h) => (
                <li key={h.day}>
                  <span className="font-semibold text-ink">{h.day}:</span> {h.time}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <TrustBadges />
            </div>
          </div>

          <LeadForm title="Request a free quote" />
        </div>
      </Container>

      <Container className="py-12">
        <h2 className="text-center text-3xl font-extrabold text-ink sm:text-4xl">
          Where we work
        </h2>
        <div className="mx-auto mt-3 h-0.5 w-24 bg-rust" />
        <div className="mt-8">
          <ServiceAreaList />
        </div>
      </Container>
    </>
  );
}
