import type { ReactNode } from "react";

export default function SectionHeading({
  label,
  heading,
  action,
  light = false,
  align = "left",
}: {
  label?: string;
  heading: string;
  action?: ReactNode;
  light?: boolean;
  align?: "left" | "right";
}) {
  return (
    <div className={`mb-8 ${align === "right" ? "text-right" : ""}`}>
      {label && <span className="section-label mb-4 inline-block">{label}</span>}
      <div className={`flex flex-wrap items-center gap-4 sm:gap-6 ${align === "right" ? "flex-row-reverse" : ""}`}>
        <h2
          className={`text-3xl font-extrabold leading-tight sm:text-4xl ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {heading}
        </h2>
        <span className="h-0.5 min-w-8 flex-1 bg-rust" />
        {action}
      </div>
    </div>
  );
}
