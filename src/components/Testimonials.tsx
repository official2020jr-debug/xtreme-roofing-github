import { testimonials, business } from "@/data/siteConfig";
import SectionHeading from "./SectionHeading";
import ReviewCarousel from "./ReviewCarousel";

export default function Testimonials({ light = false }: { light?: boolean }) {
  return (
    <section aria-labelledby="reviews-heading">
      <SectionHeading
        label="Discover what our customers have to say about us"
        heading="Reviews"
        light={light}
        action={
          <a
            href={business.googleReviewUrl}
            className={`whitespace-nowrap rounded px-5 py-2.5 text-sm font-bold shadow-md ${
              light ? "bg-white text-ink hover:bg-white/90" : "bg-ink text-white hover:bg-ink/80"
            }`}
          >
            Leave a review →
          </a>
        }
      />
      <ReviewCarousel items={testimonials} />
    </section>
  );
}
