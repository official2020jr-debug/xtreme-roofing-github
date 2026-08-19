import { NextResponse, type NextRequest } from "next/server";

/**
 * The previous website (indexed by Google before this site replaced it) used
 * mixed-case URLs, e.g. /Landscape-Designer. This site's routes are all
 * lowercase, and Next.js routing is case-sensitive, so any old capitalized
 * link Google still has indexed would otherwise 404 instead of reaching the
 * real (lowercase) page. This permanently redirects any request whose path
 * differs only in case to its lowercase equivalent, preserving old inbound
 * links and search rankings instead of losing them to a dead page.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const lower = pathname.toLowerCase();

  if (pathname !== lower) {
    const url = request.nextUrl.clone();
    url.pathname = lower;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Skip Next.js internals and static files — only rewrite real page paths.
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
