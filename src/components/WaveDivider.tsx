/**
 * Organic wave-shaped divider — the signature transition between full-bleed
 * photo sections and white content sections, matching the live reference site.
 * `flip` mirrors it vertically for use at the bottom of a section.
 */
export default function WaveDivider({
  flip = false,
  color = "var(--color-limestone)",
  className = "absolute inset-x-0 top-0",
}: {
  flip?: boolean;
  color?: string;
  className?: string;
}) {
  return (
    <div className={`wave-divider z-10 ${flip ? "rotate-180" : ""} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" fill={color}>
        <path d="M0,60 C 240,10 480,100 720,55 C 960,10 1200,90 1440,50 L1440,0 L0,0 Z" />
      </svg>
    </div>
  );
}
