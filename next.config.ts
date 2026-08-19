import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // [REPLACE] Old-site URLs still indexed by Google (from before this site
  // replaced a previous one) that don't map 1:1 to a current route by casing
  // alone. Add entries here as old broken links turn up when going live —
  // cheap insurance for preserving whatever search ranking those pages
  // already earned. Example:
  // async redirects() {
  //   return [
  //     { source: "/old-about-page", destination: "/about", permanent: true },
  //   ];
  // },
};

export default nextConfig;
