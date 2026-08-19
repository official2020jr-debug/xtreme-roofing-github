import Link from "next/link";
import { cities } from "@/data/siteConfig";

export default function ServiceAreaList({ currentSlug }: { currentSlug?: string }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {cities
        .filter((c) => c.slug !== currentSlug)
        .map((city) => (
          <li key={city.slug}>
            <Link
              href={`/service-areas/${city.slug}`}
              className="block rounded-md border border-stone-light bg-white px-4 py-3 text-center text-sm font-semibold text-ink transition-colors hover:border-rust hover:text-rust"
            >
              {city.name}
            </Link>
          </li>
        ))}
    </ul>
  );
}
