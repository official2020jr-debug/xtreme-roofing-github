import type { Faq } from "@/data/siteConfig";

export default function FAQ({ items, title = "Frequently asked questions" }: { items: Faq[]; title?: string }) {
  return (
    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-3xl font-extrabold text-ink sm:text-4xl">
        {title}
      </h2>
      <div className="mt-3 h-0.5 w-full bg-rust" />
      <div className="mt-6 divide-y divide-stone-light">
        {items.map((item) => (
          <details key={item.q} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center gap-3 font-bold text-ink marker:content-none">
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-4 w-4 shrink-0 text-ink transition-transform group-open:rotate-180"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
              {item.q}
            </summary>
            <p className="mt-3 pl-7 text-ink-soft">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
