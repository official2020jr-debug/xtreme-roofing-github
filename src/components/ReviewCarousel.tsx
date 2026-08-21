"use client";

import { useRef } from "react";

type Review = { quote: string; name: string; source: string; rating: number };

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-rust" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="h-4 w-4"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={i < rating ? 0 : 1.2}
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.9l-5.2 2.62.99-5.8-4.21-4.1 5.82-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewCarousel({ items }: { items: Review[] }) {
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
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((t, i) => (
          <figure
            key={t.name + i}
            className="flex w-80 shrink-0 snap-start flex-col gap-4 rounded-lg bg-white p-6 shadow-lg"
          >
            <Stars rating={t.rating} />
            <blockquote className="flex-1 text-ink-soft">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="flex items-center gap-2 text-sm font-semibold text-ink">
              {t.name}
              <span className="rounded bg-limestone-dark px-2 py-0.5 text-xs font-normal text-ink-soft">
                {t.source}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <button
        type="button"
        aria-label="Scroll reviews left"
        onClick={() => scrollBy(-1)}
        className="absolute -left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-white shadow-lg sm:flex"
      >
        <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor">
          <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 010 1.06L9.06 10l3.73 3.71a.75.75 0 11-1.06 1.06l-4.25-4.25a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0z" clipRule="evenodd" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Scroll reviews right"
        onClick={() => scrollBy(1)}
        className="absolute -right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-white shadow-lg sm:flex"
      >
        <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor">
          <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 010-1.06L10.94 10 7.21 6.29a.75.75 0 111.06-1.06l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}
