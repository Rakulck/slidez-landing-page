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
  "/blogs/everything-sellers-need-to-know-about-slidez-s-zero-ad-marketing-your-1-question-answered-how-does-slidez-drive-sales-without-ad-spend",
  "/blog/everything-sellers-need-to-know-about-slidez-s-zero-ad-marketing-your-1-question-answered-how-does-slidez-drive-sales-without-ad-spend",
]);

function htmlToMarkdown(html: string): string {
  let text = html;

  // Remove script, style, svg, noscript tags and content
  text = text.replace(/<script[\s\S]*?<\/script>/gi, "");
  text = text.replace(/<style[\s\S]*?<\/style>/gi, "");
  text = text.replace(/<svg[\s\S]*?<\/svg>/gi, "");
  text = text.replace(/<noscript[\s\S]*?<\/noscript>/gi, "");
  text = text.replace(/<!--[\s\S]*?-->/g, "");

  // Convert headings
  text = text.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, "\n\n# $1\n\n");
  text = text.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, "\n\n## $1\n\n");
  text = text.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, "\n\n### $1\n\n");
  text = text.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, "\n\n#### $1\n\n");
  text = text.replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, "\n\n##### $1\n\n");
  text = text.replace(/<h6[^>]*>([\s\S]*?)<\/h6>/gi, "\n\n###### $1\n\n");

  // Convert links
  text = text.replace(
    /<a[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi,
    (match, href, content) => {
      const cleanContent = content.replace(/<[^>]+>/g, "").trim();
      if (!cleanContent) return "";
      return `[${cleanContent}](${href})`;
    }
  );

  // Convert list items
  text = text.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, "\n- $1");
  text = text.replace(/<\/?(ul|ol)[^>]*>/gi, "\n");

  // Convert paragraphs and breaks
  text = text.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, "\n\n$1\n\n");
  text = text.replace(/<br\s*\/?>/gi, "\n");
  text = text.replace(/<hr\s*\/?>/gi, "\n---\n");

  // Strip remaining HTML tags
  text = text.replace(/<[^>]+>/g, "");

  // Decode common HTML entities
  text = text.replace(/&nbsp;/gi, " ");
  text = text.replace(/&amp;/gi, "&");
  text = text.replace(/&lt;/gi, "<");
  text = text.replace(/&gt;/gi, ">");
  text = text.replace(/&quot;/gi, '"');
  text = text.replace(/&#39;/gi, "'");

  // Collapse multiple blank lines
  text = text.replace(/\n{3,}/g, "\n\n").trim();

  return text;
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (GONE_PATHS.has(pathname)) {
    return new NextResponse(null, { status: 410 });
  }

  const acceptHeader = request.headers.get("accept") || "";
  if (acceptHeader.toLowerCase().includes("text/markdown")) {
    if (
      pathname.endsWith(".txt") ||
      pathname.endsWith(".xml") ||
      pathname.endsWith(".json")
    ) {
      return NextResponse.next();
    }

    try {
      const url = request.nextUrl.clone();
      const headers = new Headers(request.headers);
      headers.set("accept", "text/html");

      const response = await fetch(url.toString(), {
        headers,
        redirect: "manual",
      });

      if (!response.ok) {
        return NextResponse.next();
      }

      const html = await response.text();
      const markdown = htmlToMarkdown(html);
      const tokenCount = Math.ceil(markdown.length / 4);

      return new NextResponse(markdown, {
        status: 200,
        headers: {
          "content-type": "text/markdown; charset=utf-8",
          "x-markdown-tokens": tokenCount.toString(),
          vary: "Accept",
        },
      });
    } catch {
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|css|js|woff|woff2|ttf|eot)).*)",
  ],
};
