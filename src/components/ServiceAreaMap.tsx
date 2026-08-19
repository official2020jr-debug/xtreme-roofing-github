import Link from "next/link";
import { business } from "@/data/siteConfig";

/**
 * Plain Google Maps embed (no API key required) centered on the service region.
 */
export default function ServiceAreaMap() {
  return (
    <section className="bg-ink py-16 text-white">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Our service area</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/70">
          Based in {business.primaryCity} and serving {business.serviceRegion}.
        </p>

        <div className="mt-8 overflow-hidden rounded-lg border border-white/10">
          <iframe
            title={`${business.name} service area map`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(business.primaryCity)}&output=embed`}
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <Link
          href="/service-areas"
          className="mt-8 inline-flex items-center gap-2 rounded bg-rust px-6 py-3 font-bold text-white hover:bg-rust-dark"
        >
          See your area →
        </Link>
      </div>
    </section>
  );
}
