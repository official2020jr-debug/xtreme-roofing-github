import Link from "next/link";
import { cities } from "@/data/siteConfig";

export default function ServiceAreaTeaser() {
  const featured = cities.slice(0, 8);

  return (
    <div className="ml-auto max-w-xl text-right">
      <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
        Proudly serving
        <br />
        these areas
      </h2>
      <ul className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3 text-left">
        {featured.map((city) => (
          <li key={city.slug} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
            <Link href={`/service-areas/${city.slug}`} className="font-semibold text-ink hover:text-rust">
              {city.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/service-areas"
        className="mt-6 inline-flex items-center gap-2 rounded bg-rust px-6 py-3 font-bold text-white hover:bg-rust-dark"
      >
        View all service areas
        <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
          <path d="M4.5 10a.75.75 0 01.75-.75h8.19L10.72 6.53a.75.75 0 111.06-1.06l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 11-1.06-1.06l2.72-2.72H5.25A.75.75 0 014.5 10z" />
        </svg>
      </Link>
    </div>
  );
}
