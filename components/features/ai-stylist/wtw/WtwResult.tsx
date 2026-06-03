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
  const tag = item.category.slice(0, 6).toUpperCase();
  const brand = item.brand ?? inferBrandFromLink(item.productLink);

  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-[#ececec] last:border-b-0">
      <div className="relative w-[46px] h-[58px] rounded-lg overflow-hidden shrink-0 shadow-[inset_0_0_0_1px_#ececec] bg-[#fafaf9]">
        {item.imageUrl ? (
          <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
        ) : (
          <div
            className="absolute inset-0 opacity-100"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, #efe9e1 0 11px, #e7e0d6 11px 22px)",
            }}
          />
        )}
      </div>
      <div className="flex-1 min-w-0 text-left">
        <div className="flex items-center gap-2 min-w-0">
          {item.brandLogoUrl ? (
            <img
              src={item.brandLogoUrl}
              alt={brand ?? "Brand"}
              className="w-5 h-5 rounded-sm object-contain shrink-0 bg-white"
            />
          ) : brand ? (
            <span className="text-[10px] font-semibold uppercase tracking-[0.06em] text-[#6b6b6b] shrink-0 max-w-[72px] truncate">
              {brand}
            </span>
          ) : null}
          <span className="text-[14.5px] font-medium text-[#0a0a0a] tracking-[-0.01em] truncate">
            {item.name}
          </span>
        </div>
        <p className="text-[9.5px] font-mono uppercase tracking-[0.04em] text-[#6b6b6b] mt-0.5 truncate">
          {tag}
        </p>
      </div>
      {item.productLink && (
        <a
          href={item.productLink}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-[#0a0a0a] hover:opacity-60 transition-opacity"
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
  const shopLinks = productItems
    .map((p) => p.productLink)
    .filter((link): link is string => Boolean(link));

  const handleShopLook = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    openExternalLinksInNewTabs(shopLinks);
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-6 md:gap-9 px-1 md:px-2 pt-2 md:pt-4 items-stretch">
      {/* Your look — left */}
      <div className="relative order-1 md:order-1 md:flex-[0_0_42%] min-h-[280px] md:min-h-[420px] rounded-3xl overflow-hidden shadow-[0_34px_60px_-34px_rgba(20,20,20,0.45)] bg-[#fafaf9]">
        {tryOnFinalImageUrl ? (
          <img
            src={tryOnFinalImageUrl}
            alt="Generated try-on preview"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, #f3e9e6 0 11px, #ecdfdb 11px 22px)",
            }}
          />
        )}

        <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 bg-white/92 backdrop-blur-sm rounded-full px-3 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4caf50]" />
          <span className="text-[9.5px] font-mono uppercase tracking-[0.12em] text-[#0a0a0a]">
            Tried on you
          </span>
        </div>

        <span className="absolute bottom-3.5 left-1/2 -translate-x-1/2 z-10 text-[9px] font-mono uppercase tracking-[0.14em] text-[#6b6b6b] bg-white/82 backdrop-blur-sm px-2 py-1 rounded-full whitespace-nowrap">
          Try-on render · {modelName}
        </span>
      </div>

      {/* Details + CTAs — right */}
      <div className="order-2 md:order-2 flex-1 min-w-0 flex flex-col text-left">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#6b6b6b]">
            Your look · {occasion}
          </p>
          <button
            type="button"
            onClick={onRestart}
            className="inline-flex items-center gap-1.5 border-none bg-transparent cursor-pointer hover:opacity-70 transition-opacity"
          >
            <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true">
              <path
                d="M13 8 L3 8 M7 4 L3 8 L7 12"
                stroke="#0a0a0a"
                strokeWidth="1.6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[9.5px] font-mono uppercase tracking-[0.12em] text-[#0a0a0a]">
              New look
            </span>
          </button>
        </div>

        <h2 className="mt-3.5 mb-0 font-semibold text-[#0a0a0a] text-2xl md:text-4xl leading-[1.02] tracking-[-0.04em] text-pretty">
          {title}
        </h2>

        {query && (
          <div className="flex gap-2.5 mt-3.5 items-start">
            <div
              className="w-[34px] h-[34px] rounded-full shrink-0 shadow-[inset_0_0_0_1px_#ececec]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, #ededeb 0 11px, #e3e3e0 11px 22px)",
              }}
            />
            <p className="m-0 text-[15.5px] italic text-[#1a1a1a]/90 leading-snug tracking-[-0.01em] max-w-[460px]">
              &ldquo;{query}&rdquo;
            </p>
          </div>
        )}

        {tryOnError && (
          <p className="mt-4 text-sm text-red-600/90">{tryOnError}</p>
        )}

        <div className="h-5 md:h-6" />

        <div className="flex items-baseline justify-between mb-1">
          <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#6b6b6b]">
            The pieces
          </p>
          <p className="text-[10px] font-mono uppercase tracking-[0.1em] text-[#9a9a9a]">
            {productItems.length} piece{productItems.length !== 1 ? "s" : ""} · {gender}
          </p>
        </div>

        <div className="flex-1 min-h-0">
          {productItems.length > 0 ? (
            productItems.map((item, i) => <WtwPieceRow key={`${item.category}-${i}`} item={item} />)
          ) : (
            <p className="text-sm text-[#9a9a9a] py-4">No product details available for this look.</p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-5">
          <button
            type="button"
            onClick={handleShopLook}
            disabled={shopLinks.length === 0}
            className={`h-[54px] flex-1 rounded-full border text-base font-medium tracking-[-0.01em] inline-flex items-center justify-center gap-2.5 transition-all cursor-pointer ${
              shopLinks.length > 0
                ? "border-[#e3e3e3] bg-white text-[#0a0a0a] hover:bg-[#fafaf9]"
                : "border-[#e3e3e3] bg-[#fafaf9] text-[#c4c2bd] cursor-not-allowed"
            }`}
          >
            <span>Shop the look</span>
            {shopLinks.length > 0 && <ArrowRight className="w-4 h-4" />}
          </button>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-[54px] flex-1 rounded-full bg-[#0a0a0a] text-white text-base font-medium tracking-[-0.01em] inline-flex items-center justify-center gap-2.5 shadow-[0_14px_30px_-12px_rgba(10,10,10,0.5)] hover:bg-[#222] transition-colors"
          >
            <AppleIcon className="w-4 h-4 shrink-0" />
            <span>Download Slidez</span>
          </a>
        </div>
      </div>
    </div>
  );
}
