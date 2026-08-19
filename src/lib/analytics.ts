// Thin wrappers around GA4 and Meta Pixel client-side event calls.
// Both services are loaded as globals in the root layout (see layout.tsx).
// Safe to call even before the scripts load — they no-op if the global isn't present yet.

type Gtag = (...args: unknown[]) => void;
type Fbq = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: Gtag;
    fbq?: Fbq;
  }
}

/** Fires on successful lead-form submission. */
export function trackLeadSubmit() {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "generate_lead", {
    event_category: "engagement",
    event_label: "lead_form_submit",
  });
  // META PIXEL: Lead event fires here on successful form submission
  window.fbq?.("track", "Lead");
}

/** Fires on tap of any tel: link. */
export function trackPhoneTap() {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "contact", {
    event_category: "engagement",
    event_label: "phone_tap",
  });
  // META PIXEL: Contact event fires here on phone number tap
  window.fbq?.("track", "Contact");
}
