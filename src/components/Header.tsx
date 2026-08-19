"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PhoneLink from "./PhoneLink";
import { categories, cities, subServices, business } from "@/data/siteConfig";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-ink">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3 py-1">
          <Image
            src="/logo.png"
            alt={`${business.name} logo`}
            width={1944}
            height={1166}
            priority
            className="h-14 w-auto object-contain sm:h-16"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex">
          <Link href="/" className="font-semibold text-white hover:text-rust">
            Home
          </Link>

          <div className="group relative">
            <button className="flex items-center gap-1 font-semibold text-white hover:text-rust">
              Services
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
              </svg>
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-[min(90vw,56rem)] -translate-x-1/2 rounded-md border border-black/10 bg-white p-6 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="grid grid-cols-4 gap-6">
                {categories.map((cat) => (
                  <div key={cat.slug}>
                    <Link
                      href={`/${cat.slug}`}
                      className="group/cat inline-flex items-center gap-1 text-sm font-extrabold tracking-wide text-ink hover:text-rust"
                    >
                      {cat.name}
                      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-3.5 w-3.5 -rotate-90 opacity-60" fill="currentColor">
                        <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                      </svg>
                    </Link>
                    <div className="mt-1.5 h-0.5 w-8 bg-rust" />
                    <ul className="mt-3 space-y-2.5">
                      {subServices
                        .filter((s) => s.categorySlug === cat.slug)
                        .map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/${cat.slug}/${s.slug}`}
                              className="text-sm text-ink-soft hover:text-rust"
                            >
                              {s.name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-black/10 pt-4">
                <Link href="/services" className="text-sm font-bold text-rust hover:underline">
                  View all services →
                </Link>
              </div>
            </div>
          </div>

          <div className="group relative">
            <button className="flex items-center gap-1 font-semibold text-white hover:text-rust">
              Service areas
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
              </svg>
            </button>
            <div className="invisible absolute left-0 top-full z-50 grid w-72 grid-cols-2 gap-1 rounded-md border border-white/10 bg-ink p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/service-areas/${city.slug}`}
                  className="rounded px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-rust"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/projects" className="font-semibold text-white hover:text-rust">
            Our work
          </Link>
          <Link href="/reviews" className="font-semibold text-white hover:text-rust">
            Reviews
          </Link>
          <Link href="/about" className="font-semibold text-white hover:text-rust">
            About us
          </Link>
          <Link href="/blog" className="font-semibold text-white hover:text-rust">
            Blog
          </Link>
          <Link href="/contact" className="font-semibold text-white hover:text-rust">
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-md bg-rust px-5 py-2.5 text-sm font-bold tracking-wide text-white transition-colors hover:bg-rust-dark"
          >
            Get free quote
          </Link>
          <PhoneLink className="flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-bold text-rust">
            <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
              <path d="M2.75 3.5A1.75 1.75 0 014.5 1.75h1.086c.83 0 1.556.564 1.76 1.368l.63 2.52a1.75 1.75 0 01-.46 1.69l-1.06 1.06a12.06 12.06 0 005.657 5.656l1.06-1.06a1.75 1.75 0 011.69-.46l2.52.63c.804.204 1.368.93 1.368 1.76V16.5a1.75 1.75 0 01-1.75 1.75h-.5C8.663 18.25 1.75 11.337 1.75 2.75v-.5c0-.138.008-.274.023-.408z" />
            </svg>
            {business.phoneDisplay}
          </PhoneLink>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 lg:hidden"
        >
          <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5 text-white" fill="currentColor">
            {mobileOpen ? (
              <path d="M4.22 4.22a.75.75 0 011.06 0L10 8.94l4.72-4.72a.75.75 0 111.06 1.06L11.06 10l4.72 4.72a.75.75 0 11-1.06 1.06L10 11.06l-4.72 4.72a.75.75 0 01-1.06-1.06L8.94 10 4.22 5.28a.75.75 0 010-1.06z" />
            ) : (
              <path d="M2.5 5.5a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H3.25A.75.75 0 012.5 5.5zm0 4.5a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H3.25A.75.75 0 012.5 10zm.75 3.75a.75.75 0 000 1.5h13.5a.75.75 0 000-1.5H3.25z" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-white/10 bg-ink px-4 pb-6 pt-2 lg:hidden">
          <PhoneLink className="mb-3 block py-2 text-lg font-bold text-white" />
          <Link href="/" onClick={() => setMobileOpen(false)} className="block border-b border-white/10 py-3 font-semibold text-white">
            Home
          </Link>
          <details className="border-b border-white/10 py-2">
            <summary className="cursor-pointer font-semibold text-white">Services</summary>
            <div className="mt-2 grid gap-4 pl-2">
              <Link href="/services" className="py-1 font-semibold text-white" onClick={() => setMobileOpen(false)}>
                All services
              </Link>
              {categories.map((cat) => (
                <div key={cat.slug}>
                  <Link href={`/${cat.slug}`} className="py-1 font-bold text-white" onClick={() => setMobileOpen(false)}>
                    {cat.name}
                  </Link>
                  <div className="mt-1 grid gap-1 pl-2">
                    {subServices
                      .filter((s) => s.categorySlug === cat.slug)
                      .map((s) => (
                        <Link
                          key={s.slug}
                          href={`/${cat.slug}/${s.slug}`}
                          className="py-1 text-sm text-white/70"
                          onClick={() => setMobileOpen(false)}
                        >
                          {s.name}
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </details>
          <details className="border-b border-white/10 py-2">
            <summary className="cursor-pointer font-semibold text-white">Service areas</summary>
            <div className="mt-2 grid gap-1 pl-2">
              <Link href="/service-areas" className="py-1 text-white/80" onClick={() => setMobileOpen(false)}>
                All areas
              </Link>
              {cities.map((city) => (
                <Link key={city.slug} href={`/service-areas/${city.slug}`} className="py-1 text-white/80" onClick={() => setMobileOpen(false)}>
                  {city.name}
                </Link>
              ))}
            </div>
          </details>
          <Link href="/projects" onClick={() => setMobileOpen(false)} className="block border-b border-white/10 py-3 font-semibold text-white">
            Our work
          </Link>
          <Link href="/reviews" onClick={() => setMobileOpen(false)} className="block border-b border-white/10 py-3 font-semibold text-white">
            Reviews
          </Link>
          <Link href="/about" onClick={() => setMobileOpen(false)} className="block border-b border-white/10 py-3 font-semibold text-white">
            About us
          </Link>
          <Link href="/blog" onClick={() => setMobileOpen(false)} className="block border-b border-white/10 py-3 font-semibold text-white">
            Blog
          </Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="block border-b border-white/10 py-3 font-semibold text-white">
            Contact
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block rounded-md bg-rust px-5 py-3 text-center font-bold text-white"
          >
            Get free quote
          </Link>
        </nav>
      )}
    </header>
  );
}
