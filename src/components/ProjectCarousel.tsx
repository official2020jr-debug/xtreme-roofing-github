"use client";

import { useRef } from "react";
import Link from "next/link";
import ProjectPhoto from "./ProjectPhoto";
import type { ProjectImage } from "@/data/siteConfig";

export type CarouselItem = {
  key: string;
  tag: string;
  name: string;
  href: string;
  image: ProjectImage;
};

export default function ProjectCarousel({ items }: { items: CarouselItem[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollBy(direction: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * Math.min(360, el.clientWidth * 0.85), behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className="group w-72 shrink-0 snap-start overflow-hidden rounded-lg bg-white/5"
          >
            <ProjectPhoto
              image={item.image}
              className="aspect-[4/3] w-full"
              sizes="288px"
            />
            <div className="p-3">
              <span className="text-xs font-bold tracking-wide text-rust">{item.tag}</span>
              <p className="mt-1 font-bold text-white group-hover:underline">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>

      <button
        type="button"
        aria-label="Scroll projects left"
        onClick={() => scrollBy(-1)}
        className="absolute -left-4 top-1/3 hidden h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-lg sm:flex"
      >
        <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor">
          <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 010 1.06L9.06 10l3.73 3.71a.75.75 0 11-1.06 1.06l-4.25-4.25a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0z" clipRule="evenodd" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Scroll projects right"
        onClick={() => scrollBy(1)}
        className="absolute -right-4 top-1/3 hidden h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-lg sm:flex"
      >
        <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor">
          <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 010-1.06L10.94 10 7.21 6.29a.75.75 0 111.06-1.06l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}
