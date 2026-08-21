"use client";

import { useEffect, useId, useRef } from "react";
import Image from "next/image";
import { business, GHL_FORM_ID, GHL_FORM_HEIGHT } from "@/data/siteConfig";
import PhoneLink from "./PhoneLink";
import { trackLeadSubmit } from "@/lib/analytics";

/**
 * Embeds the GoHighLevel inline form widget. The same `data-form-id` is reused
 * everywhere (that's the actual GHL form), but the wrapper `id` /
 * `data-layout-iframe-id` must be unique per instance since this form appears
 * more than once per page (hero + bottom CTA) and DOM ids can't repeat.
 *
 * GHL's form_embed.js (loaded once, in the root layout) posts a message to
 * the parent window when a visitor submits the form. We listen for a message
 * whose source is this exact iframe and fire the GA4 / Meta Pixel Lead event.
 * Verify this fires correctly after launch (submit a test lead, check GA4
 * Realtime + Meta Pixel Helper) — GHL's postMessage payload shape isn't
 * publicly documented, so this listens broadly on purpose.
 *
 * `variant="dark"` matches the black quote-card treatment used in the hero on
 * the live reference site (logo + centered heading on a black card).
 */
export default function LeadForm({
  title = "Get a free quote",
  subtitle,
  className = "",
  variant = "light",
  compact = false,
}: {
  title?: string;
  subtitle?: string;
  className?: string;
  variant?: "light" | "dark";
  /** Skips the logo and tightens spacing — for when the form sits inside an
   * already-branded section (e.g. alongside reviews) instead of standing alone. */
  compact?: boolean;
}) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const wrapperId = `inline-${GHL_FORM_ID}-${uid}`;
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const dark = variant === "dark";

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (!iframeRef.current || event.source !== iframeRef.current.contentWindow) return;
      trackLeadSubmit();
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div
      className={`rounded-lg shadow-lg ${compact ? "p-4" : "p-6"} ${
        dark
          ? compact
            ? "border border-white/15 bg-white/5 text-white"
            : "border border-white/15 bg-ink text-white"
          : "border border-stone-light bg-white/95 text-ink"
      } ${className}`}
    >
      {dark && !compact && (
        <div className="mb-4 flex flex-col items-center text-center">
          <Image
            src="/logo-white.png"
            alt={`${business.name} logo`}
            width={321}
            height={147}
            className="h-14 w-auto object-contain"
          />
        </div>
      )}

      {(title || subtitle) && (
        <div className={`${compact ? "mb-3" : "mb-4"} ${dark ? "text-center" : ""}`}>
          {title && (
            <h3 className={`${compact ? "text-base" : "text-lg"} font-extrabold tracking-wide ${dark ? "text-white" : "text-ink"}`}>
              {title}
            </h3>
          )}
          {subtitle && (
            <p className={`mt-1 text-sm ${dark ? "text-white/70" : "text-ink-soft"}`}>{subtitle}</p>
          )}
        </div>
      )}

      <div style={{ height: GHL_FORM_HEIGHT }}>
        <iframe
          ref={iframeRef}
          src={`https://api.leadconnectorhq.com/widget/form/${GHL_FORM_ID}`}
          id={wrapperId}
          style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Form 1"
          data-height={String(GHL_FORM_HEIGHT)}
          data-layout-iframe-id={wrapperId}
          data-form-id={GHL_FORM_ID}
          title="Request a free quote"
        />
      </div>

      <p className={`mt-3 text-xs ${dark ? "text-white/60" : "text-ink-soft"}`}>
        {business.consentLine} For faster service, call{" "}
        <PhoneLink className="font-semibold text-rust underline" />.
      </p>
    </div>
  );
}
