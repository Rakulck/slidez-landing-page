"use client";

import React, { useEffect, useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import {
  buildSummarizePrompt,
  getPageType,
  getKnownMetadata,
  getCanonicalUrl,
  getProviderLinks,
  cleanPathname,
  ProviderLink,
} from "@/lib/summarize-prompt";

// 1. ChatGPT: Official OpenAI rosette mark
function ChatGPTIcon({ className = "w-[22px] h-[22px]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.677l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
    </svg>
  );
}

// 2. Google AI Mode: 4-pointed radiant sparkle star with blue-to-purple gradient
function GoogleAIModeIcon({ className = "w-[22px] h-[22px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="google-ai-mode-sparkle" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="55%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
      </defs>
      <path
        d="M12 2C12.5 7.5 16.5 11.5 22 12C16.5 12.5 12.5 16.5 12 22C11.5 16.5 7.5 12.5 2 12C7.5 11.5 11.5 7.5 12 2Z"
        fill="url(#google-ai-mode-sparkle)"
      />
    </svg>
  );
}

// 3. Grok: Official xAI Grok slashed-circle mark from grok.com
function GrokIcon({ className = "w-[22px] h-[22px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 34 33" className={className} fill="currentColor" aria-hidden="true">
      <path d="M13.2371 21.0407L24.3186 12.8506C24.8619 12.4491 25.6384 12.6057 25.8973 13.2294C27.2597 16.5185 26.651 20.4712 23.9403 23.1851C21.2297 25.8989 17.4581 26.4941 14.0108 25.1386L10.2449 26.8843C15.6463 30.5806 22.2053 29.6665 26.304 25.5601C29.5551 22.3051 30.562 17.8683 29.6205 13.8673L29.629 13.8758C28.2637 7.99809 29.9647 5.64871 33.449 0.844576C33.5314 0.730667 33.6139 0.616757 33.6964 0.5L29.1113 5.09055V5.07631L13.2343 21.0436" />
      <path d="M10.9503 23.0313C7.07343 19.3235 7.74185 13.5853 11.0498 10.2763C13.4959 7.82722 17.5036 6.82767 21.0021 8.2971L24.7595 6.55998C24.0826 6.07017 23.215 5.54334 22.2195 5.17313C17.7198 3.31926 12.3326 4.24192 8.67479 7.90126C5.15635 11.4239 4.0499 16.8403 5.94992 21.4622C7.36924 24.9165 5.04257 27.3598 2.69884 29.826C1.86829 30.7002 1.0349 31.5745 0.36364 32.5L10.9474 23.0341" />
    </svg>
  );
}

// 4. Claude: Official Anthropic Claude starburst in coral/terracotta (#D97757)
function ClaudeIcon({ className = "w-[22px] h-[22px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="#D97757" aria-hidden="true">
      <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z" />
    </svg>
  );
}

// 5. Perplexity: Official Perplexity line-art mark
function PerplexityIcon({ className = "w-[22px] h-[22px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 36" className={className} aria-hidden="true">
      <path
        d="m23.566,1.398l-9.495,9.504h9.495V1.398v2.602V1.398Zm-9.496,9.504L4.574,1.398v9.504h9.496Zm-.021-10.902v36m9.517-15.596l-9.495-9.504v13.625l9.495,9.504v-13.625Zm-18.991,0l9.496-9.504v13.625l-9.496,9.504v-13.625ZM.5,10.9v13.57h4.074v-4.066l9.496-9.504H.5Zm13.57,0l9.495,9.504v4.066h4.075v-13.57h-13.57Z"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeMiterlimit="10"
      />
    </svg>
  );
}

export default function SummarizePageWithAI() {
  const pathname = usePathname() || "/";
  const clean = cleanPathname(pathname);
  const pageType = getPageType(clean);

  // Initial metadata from known registry to prevent SSR hydration flash
  const initialKnown = useMemo(() => getKnownMetadata(clean), [clean]);

  const [pageMetadata, setPageMetadata] = useState<{
    title: string;
    description: string;
    canonicalUrl: string;
  }>({
    title: initialKnown.title,
    description: initialKnown.description,
    canonicalUrl: initialKnown.canonical,
  });

  useEffect(() => {
    if (pageType === "hidden") return;

    const resolveMetadata = () => {
      // 1. Title: check document.title first, fallback to known metadata
      const docTitle =
        typeof document !== "undefined" && document.title
          ? document.title.trim()
          : "";
      const finalTitle = docTitle || initialKnown.title;

      // 2. Canonical: check <link rel="canonical">, fallback to clean URL
      const canonicalTag =
        typeof document !== "undefined"
          ? document
              .querySelector('link[rel="canonical"]')
              ?.getAttribute("href")
          : null;
      const cleanCanonical = canonicalTag
        ? canonicalTag.split("?")[0].split("#")[0].replace(/\/+$/, "")
        : getCanonicalUrl(clean);

      // 3. Description: check meta tag first, fallback to known metadata
      const metaDesc =
        typeof document !== "undefined"
          ? document
              .querySelector('meta[name="description"]')
              ?.getAttribute("content")
          : "";
      const finalDesc = metaDesc ? metaDesc.trim() : initialKnown.description;

      setPageMetadata({
        title: finalTitle,
        description: finalDesc,
        canonicalUrl: cleanCanonical,
      });
    };

    resolveMetadata();

    // Re-check after client-side route navigation settles
    const timer = setTimeout(resolveMetadata, 80);
    return () => clearTimeout(timer);
  }, [clean, initialKnown, pageType]);

  // Hide the row on private, account, preview, and error routes
  if (pageType === "hidden") {
    return null;
  }

  const prompt = buildSummarizePrompt({
    canonicalUrl: pageMetadata.canonicalUrl,
    title: pageMetadata.title,
    pageType,
    description: pageMetadata.description,
  });

  const providers = getProviderLinks(prompt);

  const iconForProvider = (name: string) => {
    switch (name) {
      case "ChatGPT":
        return <ChatGPTIcon className="w-[22px] h-[22px] text-white" />;
      case "Google AI Mode":
        return <GoogleAIModeIcon className="w-[22px] h-[22px]" />;
      case "Grok":
        return <GrokIcon className="w-[22px] h-[22px] text-white" />;
      case "Claude":
        return <ClaudeIcon className="w-[22px] h-[22px]" />;
      case "Perplexity":
        return <PerplexityIcon className="w-[22px] h-[22px]" />;
      default:
        return null;
    }
  };

  return (
    <div
      data-testid="summarize-page-with-ai"
      className="flex flex-col gap-2.5 select-none"
    >
      {/* Title matching Drivetrain interaction reference */}
      <p className="text-white text-[13.5px] sm:text-sm font-normal tracking-normal text-left">
        Ask AI to generate a summary for this page
      </p>

      {/* Provider icons row */}
      <nav
        className="flex items-center gap-4 sm:gap-4.5 flex-wrap"
        aria-label="Ask AI to generate a summary for this page"
      >
        {providers.map((provider: ProviderLink) => (
          <a
            key={provider.name}
            href={provider.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={provider.ariaLabel}
            title={provider.ariaLabel}
            className="inline-flex items-center justify-center min-w-[24px] min-h-[24px] p-0.5 rounded transition-all duration-200 hover:scale-110 opacity-85 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
          >
            {iconForProvider(provider.name)}
          </a>
        ))}
      </nav>
    </div>
  );
}
