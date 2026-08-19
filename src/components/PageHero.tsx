import ProjectPhoto from "./ProjectPhoto";
import LeadForm from "./LeadForm";
import type { ProjectImage } from "@/data/siteConfig";

/**
 * Full-bleed page hero — no page-width container around it, so the photo
 * fills the entire viewport width edge-to-edge with no white/dark gutters
 * on either side, matching the treatment used on the homepage video hero.
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  image: ProjectImage;
}) {
  return (
    <section className="relative overflow-hidden">
      <ProjectPhoto image={image} priority fill />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/25 lg:bg-gradient-to-r" />

      <div className="relative grid min-h-[32rem] gap-8 px-4 py-10 sm:px-6 lg:min-h-[36rem] lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-10 lg:py-16">
        <div>
          {eyebrow && (
            <span className="text-sm font-bold tracking-wide text-rust">{eyebrow}</span>
          )}
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-white/85">{subtitle}</p>
        </div>

        <LeadForm variant="dark" title="Get a free quote" />
      </div>
    </section>
  );
}
