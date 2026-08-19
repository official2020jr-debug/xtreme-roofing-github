import { trustBadges } from "@/data/siteConfig";

const icons = [
  // map pin
  <svg key="pin" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
    <path fillRule="evenodd" d="M10 18s6-5.686 6-10a6 6 0 10-12 0c0 4.314 6 10 6 10zm0-7a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
  </svg>,
  // people
  <svg key="people" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
    <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM13.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM2 16.5c0-2.5 2.5-4.5 5-4.5s5 2 5 4.5V17H2v-.5zM13.5 12c1.9 0 4.5 1.6 4.5 4v1h-4v-1c0-1.3-.5-2.6-1.4-3.6.3-.2.6-.4.9-.4z" />
  </svg>,
  // tools/wrench
  <svg key="tools" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
    <path d="M14.7 6.3a4 4 0 01-5.4 5.4L5.4 15.6a1.5 1.5 0 01-2.1-2.1l3.9-3.9A4 4 0 0113.6 5.3l-2.1 2.1a.5.5 0 000 .7l1.4 1.4a.5.5 0 00.7 0l2.1-2.1z" />
  </svg>,
  // shield
  <svg key="shield" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
    <path fillRule="evenodd" d="M10 1.5l7 3.2v5.1c0 4.5-3 8.2-7 9.2-4-1-7-4.7-7-9.2V4.7l7-3.2zm3.7 6.7a.75.75 0 00-1.06-1.06L9 10.8 7.36 9.16a.75.75 0 10-1.06 1.06l2.2 2.2c.3.3.77.3 1.06 0l4.14-4.16z" clipRule="evenodd" />
  </svg>,
];

export default function TrustBadges({ className = "" }: { className?: string }) {
  return (
    <ul
      className={`grid grid-cols-2 gap-x-6 gap-y-5 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-10 ${className}`}
    >
      {trustBadges.map((badge, i) => (
        <li key={badge.label} className="flex items-start gap-2 text-ink">
          <span className="mt-0.5 shrink-0 text-ink">{icons[i % icons.length]}</span>
          <span className="text-sm font-extrabold leading-tight">{badge.label}</span>
        </li>
      ))}
    </ul>
  );
}
