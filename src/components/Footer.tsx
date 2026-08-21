import Image from "next/image";
import Link from "next/link";
import PhoneLink from "./PhoneLink";
import Container from "./Container";
import SocialIcons from "./SocialIcons";
import { business, categories, cities } from "@/data/siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t-2 border-rust bg-ink pt-12 text-white/80">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="min-w-0">
            <Image
              src="/logo-white.png"
              alt={`${business.name} logo`}
              width={321}
              height={147}
              className="h-16 w-auto object-contain"
            />
            <div className="mt-4 flex flex-col gap-2.5 text-sm">
              <PhoneLink className="flex items-center gap-2 font-bold text-white hover:text-rust">
                <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-rust" fill="currentColor">
                  <path d="M2.75 3.5A1.75 1.75 0 014.5 1.75h1.086c.83 0 1.556.564 1.76 1.368l.63 2.52a1.75 1.75 0 01-.46 1.69l-1.06 1.06a12.06 12.06 0 005.657 5.656l1.06-1.06a1.75 1.75 0 011.69-.46l2.52.63c.804.204 1.368.93 1.368 1.76V16.5a1.75 1.75 0 01-1.75 1.75h-.5C8.663 18.25 1.75 11.337 1.75 2.75v-.5c0-.138.008-.274.023-.408z" />
                </svg>
                {business.phoneDisplay}
              </PhoneLink>
              <a href={`mailto:${business.email}`} className="flex items-start gap-2 hover:text-rust">
                <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-rust" fill="currentColor">
                  <path d="M3 4a2 2 0 00-2 2v.4l9 5.4 9-5.4V6a2 2 0 00-2-2H3z" />
                  <path d="M18 8.6l-8.5 5.1a1 1 0 01-1 0L1 8.6V14a2 2 0 002 2h14a2 2 0 002-2V8.6z" />
                </svg>
                <span className="min-w-0 break-words">{business.email}</span>
              </a>
            </div>
            <SocialIcons className="mt-4" dark />
          </div>

          <div className="min-w-0">
            <h3 className="text-xs font-bold tracking-wide text-white">Quick links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/" className="hover:text-rust">Home</Link></li>
              <li><Link href="/projects" className="hover:text-rust">Projects</Link></li>
              <li><Link href="/reviews" className="hover:text-rust">Reviews</Link></li>
              <li><Link href="/service-areas" className="hover:text-rust">Service areas</Link></li>
              <li><Link href="/blog" className="hover:text-rust">Blog</Link></li>
              <li><Link href="/about" className="hover:text-rust">About us</Link></li>
              <li><Link href="/contact" className="hover:text-rust">Contact</Link></li>
              <li><a href={business.googleReviewUrl} className="hover:text-rust">Review us</a></li>
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="text-xs font-bold tracking-wide text-white">Our services</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/${cat.slug}`} className="hover:text-rust">{cat.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="text-xs font-bold tracking-wide text-white">Service areas</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {cities.slice(0, 8).map((city) => (
                <li key={city.slug}>
                  <Link href={`/service-areas/${city.slug}`} className="hover:text-rust">{city.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/service-areas" className="font-semibold text-white hover:text-rust">See all service areas</Link>
              </li>
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="text-xs font-bold tracking-wide text-white">Operating hours</h3>
            <ul className="mt-3 space-y-1.5 text-sm">
              {business.hours.map((h) => (
                <li key={h.day}>
                  <span className="font-semibold text-white">{h.day}:</span> {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </Container>

      <div className="mt-10 bg-white py-5 pb-24 text-ink lg:pb-5">
        <Container className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. All rights reserved. Serving {business.serviceRegion}.
          </p>
          <div className="flex gap-5 font-semibold">
            <Link href="/privacy-policy" className="hover:text-rust">Privacy policy</Link>
            <Link href="/terms" className="hover:text-rust">Terms &amp; conditions</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
