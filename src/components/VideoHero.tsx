"use client";

import { useEffect, useRef } from "react";
import LeadForm from "./LeadForm";

/**
 * Full-bleed video hero — edge-to-edge, no page-width container, so it fills
 * the browser viewport with no white gutters. Pauses for anyone who has
 * requested reduced motion (falls back to the video's first frame as a still).
 */
export default function VideoHero({
  src,
  eyebrow,
  title,
  subtitle,
}: {
  src: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
    }
  }, []);

  return (
    <section className="relative overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-ink/30 lg:bg-gradient-to-r" />

      <div className="relative grid min-h-[36rem] gap-8 px-4 py-10 sm:px-6 lg:min-h-[42rem] lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-10 lg:py-16">
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
