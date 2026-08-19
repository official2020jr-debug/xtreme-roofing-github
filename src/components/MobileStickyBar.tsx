import Link from "next/link";
import PhoneLink from "./PhoneLink";

/**
 * Fixed bottom bar, mobile-only. Root layout adds bottom padding to <body>
 * on small screens so this never overlaps page content or a form's submit button.
 */
export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-stone-light/60 bg-ink lg:hidden">
      <PhoneLink className="flex items-center justify-center gap-2 border-r border-white/10 py-3.5 font-semibold text-limestone">
        <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor">
          <path d="M2.75 3.5A1.75 1.75 0 014.5 1.75h1.086c.83 0 1.556.564 1.76 1.368l.63 2.52a1.75 1.75 0 01-.46 1.69l-1.06 1.06a12.06 12.06 0 005.657 5.656l1.06-1.06a1.75 1.75 0 011.69-.46l2.52.63c.804.204 1.368.93 1.368 1.76V16.5a1.75 1.75 0 01-1.75 1.75h-.5C8.663 18.25 1.75 11.337 1.75 2.75v-.5c0-.138.008-.274.023-.408z" />
        </svg>
        Call now
      </PhoneLink>
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 bg-rust py-3.5 font-semibold text-limestone"
      >
        Free quote
      </Link>
    </div>
  );
}
