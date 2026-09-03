"use client";

import { ArrowRight } from "lucide-react";
import { occasionFromPrompt, inferBrandFromLink, openExternalLinksInNewTabs, type WtwProductItem } from "./wtw-utils";

const APP_STORE_URL = "https://linkly.link/2FWYm";

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

type WtwResultProps = {
  query: string;
  gender: string;
  modelName: string;
  tryOnFinalImageUrl: string | null;
  productItems: WtwProductItem[];
  tryOnError: string | null;
  onRestart: () => void;
};

function WtwPieceRow({ item }: { item: WtwProductItem }) {
  const tag = item.category.slice(0, 8).toUpperCase();
  const brand = item.brand ?? inferBrandFromLink(item.productLink);

  return (
    <div className="group relative flex items-center gap-3.5 p-3 sm:p-3.5 mb-2.5 rounded-2xl border border-black/[0.08] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] hover:border-black/15 hover:-translate-y-0.5 transition-all duration-200">
      <div className="relative w-[52px] h-[64px] rounded-xl overflow-hidden shrink-0 border border-black/[0.06] bg-[#f7f7f8] shadow-xs">
        {item.imageUrl ? (
          <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-black/[0.03]">
            <span className="text-[11px] font-bold text-black/25 uppercase font-mono">{tag.slice(0, 2)}</span>
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0 text-left">
        <div className="flex items-center gap-2 min-w-0">
          {item.brandLogoUrl ? (
            <img
              src={item.brandLogoUrl}
              alt={brand ?? "Brand"}
              className="h-4 w-auto max-w-[54px] rounded-xs object-contain shrink-0"
            />
          ) : brand ? (
            <span className="px-2 py-0.5 rounded-md bg-black/[0.06] text-[10px] font-bold uppercase tracking-wider text-black/75 shrink-0 max-w-[84px] truncate">
              {brand}
            </span>
          ) : null}
          <span className="text-[14px] sm:text-[15px] font-semibold text-[#1a1a1e] tracking-[-0.01em] truncate group-hover:text-black transition-colors">
            {item.name}
          </span>
        </div>
        <p className="text-[10px] font-mono font-medium uppercase tracking-[0.06em] text-black/40 mt-1 truncate">
          {tag}
        </p>
      </div>

      {item.productLink && (
        <a
          href={item.productLink}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 w-8 h-8 rounded-full border border-black/10 bg-black/[0.02] flex items-center justify-center text-black/50 group-hover:text-black group-hover:border-black/30 group-hover:bg-black/[0.06] group-hover:scale-105 active:scale-95 transition-all shadow-xs"
          aria-label={`Shop ${item.name}`}
        >
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      )}
    </div>
  );
}

export default function WtwResult({
  query,
  gender,
  modelName,
  tryOnFinalImageUrl,
  productItems,
  tryOnError,
  onRestart,
}: WtwResultProps) {
  const occasion = occasionFromPrompt(query);
  const title = `Your ${occasion.toLowerCase()} look`;
  const validProductItems = productItems.filter(
    (item) =>
      Boolean(item.imageUrl) ||
      Boolean(item.productLink) ||
      (Boolean(item.name) && item.name.trim().toLowerCase() !== item.category.trim().toLowerCase())
  );
  const shopLinks = validProductItems
    .map((p) => p.productLink)
    .filter((link): link is string => Boolean(link));

  const handleShopLook = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    openExternalLinksInNewTabs(shopLinks);
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-6 md:gap-9 px-1 md:px-2 pt-2 md:pt-4 items-stretch">
      {/* Your look — left (Raised card) */}
      <div className="relative order-1 md:order-1 md:flex-[0_0_42%] min-h-[340px] md:min-h-[480px] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.06)] border border-black/[0.08] bg-[#f2f3f5]">
        {tryOnFinalImageUrl ? (
          <img
            src={tryOnFinalImageUrl}
            alt="Generated try-on preview"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        ) : (
          <div
            className="absolute inset-0 bg-[#e8e9ec]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(0,0,0,0.03) 0 11px, transparent 11px 22px)",
            }}
          />
        )}

        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-[10px] font-mono font-semibold uppercase tracking-[0.14em] text-white bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-lg whitespace-nowrap">
          Try-on render · {modelName}
        </span>
      </div>

      {/* Details + CTAs — right */}
      <div className="order-2 md:order-2 flex-1 min-w-0 flex flex-col text-left">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-black/45">
            Your look · {occasion}
          </p>
          <button
            type="button"
            onClick={onRestart}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/10 bg-black/[0.03] text-black/70 hover:text-black hover:border-black/25 hover:bg-black/[0.06] transition-all cursor-pointer shadow-2xs"
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="text-black/60">
              <path
                d="M13 8 L3 8 M7 4 L3 8 L7 12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[10px] font-mono font-medium uppercase tracking-[0.12em]">
              New look
            </span>
          </button>
        </div>

        <h2 className="mt-3 mb-0 font-bold text-[#1a1a1e] text-2xl sm:text-3xl md:text-[2.35rem] leading-[1.08] tracking-[-0.03em] text-pretty">
          {title}
        </h2>

        {query && (
          <p
            className="mt-2.5 mb-1 font-sacramento text-2xl sm:text-3xl md:text-[2.2rem] font-normal tracking-normal text-black leading-tight"
            style={{ fontFamily: "var(--font-sacramento), cursive" }}
          >
            &ldquo;{query}&rdquo;
          </p>
        )}

        {tryOnError && (
          <div className="mt-3 p-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-600">
            {tryOnError}
          </div>
        )}

        <div className="h-4 sm:h-5" />

        {validProductItems.length > 0 ? (
          <>
            <div className="flex items-baseline justify-between mb-2">
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-black/50">
                The pieces
              </p>
              <p className="text-[11px] font-mono font-medium uppercase tracking-[0.1em] text-black/40">
                {validProductItems.length} piece{validProductItems.length !== 1 ? "s" : ""} · {gender}
              </p>
            </div>

            <div className="flex-1 min-h-0 space-y-1">
              {validProductItems.map((item, i) => (
                <WtwPieceRow key={`${item.category}-${i}`} item={item} />
              ))}
            </div>
          </>
        ) : null}

        <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-5">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-[52px] flex-1 rounded-full bg-[#1a1a1e] text-white text-sm font-semibold tracking-[-0.01em] inline-flex items-center justify-center gap-2 shadow-[0_4px_18px_rgba(0,0,0,0.14)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.2)] hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <AppleIcon className="w-4 h-4 shrink-0" />
            <span>Download Slidez</span>
          </a>
          <button
            type="button"
            onClick={handleShopLook}
            disabled={shopLinks.length === 0}
            className={`h-[52px] flex-1 rounded-full border text-sm font-semibold tracking-[-0.01em] inline-flex items-center justify-center gap-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer ${
              shopLinks.length > 0
                ? "border-black/15 bg-white text-black hover:border-black/30 hover:bg-black/[0.02]"
                : "border-black/10 bg-black/5 text-black/30 cursor-not-allowed shadow-none"
            }`}
          >
            <span>Shop the look</span>
            {shopLinks.length > 0 && <ArrowRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}
