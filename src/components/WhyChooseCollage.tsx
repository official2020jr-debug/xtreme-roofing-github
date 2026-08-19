import ProjectPhoto from "./ProjectPhoto";
import { whyChooseBullets, business } from "@/data/siteConfig";
import type { ProjectImage } from "@/data/siteConfig";

function Check() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-rust" fill="currentColor">
      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.9 3.9 6.7-6.7a1 1 0 011.4 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function WhyChooseCollage({
  imageLeft,
  imageRight,
}: {
  imageLeft: ProjectImage;
  imageRight: ProjectImage;
}) {
  return (
    <div className="grid items-center gap-6 lg:grid-cols-[1fr_1.2fr_1fr]">
      <ProjectPhoto image={imageLeft} className="hidden aspect-[3/4] rounded-lg lg:block" />

      <div>
        <h2 className="text-center text-3xl font-extrabold text-ink sm:text-4xl">
          Why clients choose <span className="text-rust">{business.shortName}</span>
        </h2>
        <ul className="mt-6 space-y-4">
          {whyChooseBullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-ink-soft">
              <Check />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <ProjectPhoto image={imageRight} className="hidden aspect-[3/4] rounded-lg lg:block" />
    </div>
  );
}
