import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const GONE_PATHS = new Set([
  "/team",
  "/features/slidez-ai",
  "/blogs/the-seller-s-guide-to-building-a-gen-z-community-on-slidez-watch-your-brand-go-from-unknown-to-gen-z-s-favorite-the-slidez-success-blueprint",
  "/blog/the-seller-s-guide-to-building-a-gen-z-community-on-slidez-watch-your-brand-go-from-unknown-to-gen-z-s-favorite-the-slidez-success-blueprint",
  "/blogs/what-is-social-shopping-a-gen-z-guide-to-community-driven-fashion-add-to-cart-is-old-news-ask-the-squad-is-the-new-wave",
  "/blog/what-is-social-shopping",
  "/features/slidez-virtual-try-ons",
  "/blogs/customizing-your-template",
  "/blog/customizing-your-template",
]);

export function middleware(request: NextRequest) {
  if (GONE_PATHS.has(request.nextUrl.pathname)) {
    return new NextResponse(null, { status: 410 });
  }
}

export const config = {
  matcher: [
    "/team",
    "/features/slidez-ai",
    "/blogs/the-seller-s-guide-to-building-a-gen-z-community-on-slidez-watch-your-brand-go-from-unknown-to-gen-z-s-favorite-the-slidez-success-blueprint",
    "/blog/the-seller-s-guide-to-building-a-gen-z-community-on-slidez-watch-your-brand-go-from-unknown-to-gen-z-s-favorite-the-slidez-success-blueprint",
    "/blogs/what-is-social-shopping-a-gen-z-guide-to-community-driven-fashion-add-to-cart-is-old-news-ask-the-squad-is-the-new-wave",
    "/blog/what-is-social-shopping",
    "/features/slidez-virtual-try-ons",
    "/blogs/customizing-your-template",
    "/blog/customizing-your-template",
  ],
};
