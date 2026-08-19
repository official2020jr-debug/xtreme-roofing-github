import Link from "next/link";
import ProjectPhoto from "./ProjectPhoto";
import type { ProjectImage } from "@/data/siteConfig";

export default function ServiceCard({
  href,
  name,
  image,
}: {
  href: string;
  name: string;
  oneLiner?: string;
  image: ProjectImage;
}) {
  return (
    <Link href={href} className="group relative block aspect-[4/3] overflow-hidden">
      <ProjectPhoto
        image={image}
        className="h-full w-full transition-transform duration-500 group-hover:scale-105 motion-reduce:group-hover:scale-100"
        sizes="(min-width: 1024px) 34vw, (min-width: 640px) 50vw, 100vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      <span className="absolute left-4 top-4 rounded bg-ink px-4 py-2 text-sm font-bold text-white">
        {name}
      </span>
      <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded bg-ink px-4 py-2 text-sm font-bold text-white">
        View More
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rust">
          <svg aria-hidden="true" viewBox="0 0 20 20" className="h-3 w-3 text-white" fill="currentColor">
            <path d="M4.5 10a.75.75 0 01.75-.75h8.19L10.72 6.53a.75.75 0 111.06-1.06l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 11-1.06-1.06l2.72-2.72H5.25A.75.75 0 014.5 10z" />
          </svg>
        </span>
      </span>
    </Link>
  );
}
