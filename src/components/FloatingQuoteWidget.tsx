"use client";

import { useState } from "react";
import LeadForm from "./LeadForm";

/**
 * Floating bottom-right quote widget — desktop/tablet only (`lg:` and up).
 * On mobile, MobileStickyBar already covers the same "quick access to a
 * quote" job, so this would just duplicate it in cramped space.
 */
export default function FloatingQuoteWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden lg:block">
      {open && (
        <div className="absolute bottom-[calc(100%+0.75rem)] right-0 w-80 origin-bottom-right animate-[fadeInUp_0.2s_ease-out]">
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close quote form"
              className="absolute -right-2 -top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-ink text-white shadow-lg hover:bg-ink/80"
            >
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                <path d="M4.22 4.22a.75.75 0 011.06 0L10 8.94l4.72-4.72a.75.75 0 111.06 1.06L11.06 10l4.72 4.72a.75.75 0 11-1.06 1.06L10 11.06l-4.72 4.72a.75.75 0 01-1.06-1.06L8.94 10 4.22 5.28a.75.75 0 010-1.06z" />
              </svg>
            </button>
            <LeadForm variant="dark" title="Get a free quote" compact />
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close quote form" : "Open quote form"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-rust text-white shadow-2xl transition-transform hover:scale-105 hover:bg-rust-dark motion-reduce:hover:scale-100"
      >
        {open ? (
          <svg aria-hidden="true" viewBox="0 0 20 20" className="h-6 w-6" fill="currentColor">
            <path d="M4.22 4.22a.75.75 0 011.06 0L10 8.94l4.72-4.72a.75.75 0 111.06 1.06L11.06 10l4.72 4.72a.75.75 0 11-1.06 1.06L10 11.06l-4.72 4.72a.75.75 0 01-1.06-1.06L8.94 10 4.22 5.28a.75.75 0 010-1.06z" />
          </svg>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
            <path d="M12 2C6.48 2 2 5.94 2 10.8c0 2.76 1.44 5.22 3.7 6.83-.13.94-.5 2.28-1.44 3.7a.5.5 0 00.56.77c2.2-.62 3.8-1.5 4.75-2.13.78.16 1.6.24 2.43.24 5.52 0 10-3.94 10-8.8C22 5.94 17.52 2 12 2z" />
          </svg>
        )}
      </button>
    </div>
  );
}
