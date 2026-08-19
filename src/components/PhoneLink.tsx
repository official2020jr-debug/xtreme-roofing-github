"use client";

import { business } from "@/data/siteConfig";
import { trackPhoneTap } from "@/lib/analytics";

export default function PhoneLink({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={business.phoneHref}
      onClick={trackPhoneTap}
      className={className}
    >
      {children ?? business.phoneDisplay}
    </a>
  );
}
