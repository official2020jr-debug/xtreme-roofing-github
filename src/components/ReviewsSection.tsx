import Testimonials from "./Testimonials";
import Container from "./Container";
import type { ProjectImage } from "@/data/siteConfig";

/**
 * Reviews at full width (matches the original layout — a review carousel
 * squeezed into a narrow grid column loses its own contained horizontal
 * scroll and blows out the whole page's width instead). No form here —
 * every page already has one in its hero and, where present, its CTA.
 */
export default function ReviewsSection({}: {
  /** No longer used (photo background removed) — kept optional so existing call sites don't need to change. */
  image?: ProjectImage;
}) {
  return (
    <section className="bg-ink py-20">
      <Container>
        <Testimonials light />
      </Container>
    </section>
  );
}
