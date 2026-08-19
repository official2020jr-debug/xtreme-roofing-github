import Link from "next/link";
import PhoneLink from "./PhoneLink";
import type { ProjectImage } from "@/data/siteConfig";

/**
 * Full-bleed closing CTA on a solid dark background — headline + call/quote
 * buttons only. The lead form itself now lives inside ReviewsSection
 * (which appears right before this on every page) instead of its own
 * separate block, so the bottom of the page isn't a long stretch of
 * mostly-empty white space.
 */
export default function CTASection({
  headline = "Ready to take the next step?",
  subheadline = "Get a free quote today!",
}: {
  headline?: string;
  subheadline?: string;
  /** No longer used (photo background removed) — kept optional so existing call sites don't need to change. */
  image?: ProjectImage;
}) {
  return (
    <section className="bg-ink py-20 text-center sm:py-24">
      <div className="px-6">
        <h2 className="text-3xl font-extrabold leading-snug text-white sm:text-4xl">
          {headline}
          <br />
          {subheadline}
        </h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="rounded bg-rust px-8 py-4 font-bold tracking-wide text-white hover:bg-rust-dark"
          >
            Get a free quote
          </Link>
          <PhoneLink className="rounded border border-white/50 px-8 py-4 font-bold tracking-wide text-white hover:bg-white/10" />
        </div>
      </div>
    </section>
  );
}
