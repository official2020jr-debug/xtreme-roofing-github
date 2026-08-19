import { business } from "@/data/siteConfig";

const icons = [
  {
    href: business.googleMapsUrl,
    label: "Google",
    node: (
      <svg viewBox="0 0 48 48" className="h-5 w-5">
        <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z" />
        <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.1 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
        <path fill="#4CAF50" d="M24 44c5.5 0 10.4-2.1 14.1-5.5l-6.5-5.5C29.5 34.9 26.9 36 24 36c-5.3 0-9.7-3.4-11.3-8l-6.6 5.1C9.6 39.6 16.3 44 24 44z" />
        <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.5l6.5 5.5C39.8 37 44 31.4 44 24c0-1.2-.1-2.4-.4-3.5z" />
      </svg>
    ),
  },
  {
    href: business.facebookUrl,
    label: "Facebook",
    node: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#1877F2">
        <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z" />
      </svg>
    ),
  },
  {
    href: business.instagramUrl,
    label: "Instagram",
    node: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="url(#ig-gradient-shared)">
        <defs>
          <linearGradient id="ig-gradient-shared" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFC107" />
            <stop offset="50%" stopColor="#E1306C" />
            <stop offset="100%" stopColor="#7024C4" />
          </linearGradient>
        </defs>
        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.4.5.6.2 1 .5 1.5 1 .4.4.7.9 1 1.5.2.4.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.4-.2.6-.5 1-1 1.5-.4.4-.9.7-1.5 1-.4.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.4-.5-.6-.2-1-.5-1.5-1-.4-.4-.7-.9-1-1.5-.2-.4-.4-1.2-.5-2.4-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-2 .5-2.4.2-.6.5-1 1-1.5.4-.4.9-.7 1.5-1 .4-.2 1.2-.4 2.4-.5 1.3-.1 1.7-.1 4.9-.1zM12 0C8.7 0 8.3 0 7 .1c-1.3.1-2.2.3-3 .6-.8.3-1.5.7-2.2 1.4C1.1 2.8.7 3.5.4 4.3c-.3.8-.5 1.7-.6 3C-.3 8.7 0 9 0 12s0 3.3.1 4.6c.1 1.3.3 2.2.6 3 .3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.8.3 1.7.5 3 .6C8.3 24 8.7 24 12 24s3.3 0 4.6-.1c1.3-.1 2.2-.3 3-.6.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.3-.8.5-1.7.6-3 .1-1.3.1-1.6.1-4.6s0-3.3-.1-4.6c-.1-1.3-.3-2.2-.6-3-.3-.8-.7-1.5-1.4-2.2C20.2 1.1 19.5.7 18.7.4c-.8-.3-1.7-.5-3-.6C15.3 0 15 0 12 0zm0 5.8A6.2 6.2 0 1012 18.2 6.2 6.2 0 0012 5.8zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-10.5a1.4 1.4 0 11-2.9 0 1.4 1.4 0 012.9 0z" />
      </svg>
    ),
  },
];

export default function SocialIcons({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <div className={`flex gap-3 ${className}`}>
      {icons.map((s) => (
        <a
          key={s.label}
          href={s.href}
          aria-label={s.label}
          className={`flex h-9 w-9 items-center justify-center rounded-full border bg-white ${
            dark ? "border-white/20" : "border-ink/15"
          }`}
        >
          {s.node}
        </a>
      ))}
    </div>
  );
}
