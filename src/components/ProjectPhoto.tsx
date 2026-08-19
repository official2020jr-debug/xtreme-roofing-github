import Image from "next/image";
import type { ProjectImage } from "@/data/siteConfig";

/**
 * Renders a real project photo via next/image, or a tasteful placeholder
 * block (clearly marked in code + visibly labeled) when no real photo
 * exists yet for that spot.
 *
 * Positioning is controlled by the `fill` prop, not by passing "absolute"
 * through `className` — this component always sets its own position
 * utility (`relative` or `absolute inset-0`), and Tailwind class strings
 * with two conflicting position utilities (e.g. "relative ... absolute ...")
 * silently pick whichever wins in the compiled stylesheet, not whichever
 * was written last. That exact bug has broken full-bleed backgrounds here
 * twice — `fill` exists specifically so it can't happen a third time.
 */
export default function ProjectPhoto({
  image,
  className = "",
  priority = false,
  sizes = "100vw",
  fill = false,
}: {
  image: ProjectImage;
  className?: string;
  priority?: boolean;
  sizes?: string;
  /** Use for full-bleed background photos (absolutely fills its positioned parent). */
  fill?: boolean;
}) {
  const position = fill ? "absolute inset-0" : "relative";

  if (image.kind === "real") {
    return (
      <div className={`${position} overflow-hidden ${className}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  // REPLACE WITH REAL PROJECT PHOTO: see label below
  return (
    <div
      className={`${position} flex items-center justify-center overflow-hidden bg-[repeating-linear-gradient(135deg,var(--color-stone-light)_0px,var(--color-stone-light)_2px,var(--color-limestone-dark)_2px,var(--color-limestone-dark)_14px)] ${className}`}
    >
      <div className="mx-4 rounded-md bg-ink/80 px-4 py-3 text-center text-sm font-medium text-limestone shadow-lg">
        <span className="block text-xs tracking-wide text-limestone/70">
          Photo coming soon
        </span>
        {image.label}
      </div>
    </div>
  );
}
