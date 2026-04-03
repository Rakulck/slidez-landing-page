"use client";

import { motion } from "framer-motion";
import { Sparkles, ShoppingBag, ExternalLink } from "lucide-react";
import type { Gender } from "@/lib/slidezCallableFunctions";

export type TryOnItem = {
  category: string;
  garmentImageUrl: string | null;
  productPrice?: string | number;
  productShopUrl?: string;
  productImageUrl?: string;
};

type StylistResultDisplayProps = {
  resultsReady: boolean;
  tryOnFinalImageUrl: string | null;
  tryOnItems: TryOnItem[];
  query: string;
  gender: Gender;
};

export default function StylistResultDisplay({
  resultsReady,
  tryOnFinalImageUrl,
  tryOnItems,
  query,
  gender,
}: StylistResultDisplayProps) {
  if (!resultsReady) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mt-8 w-full max-w-6xl mx-auto px-4"
    >
      <p className="text-xs text-center md:text-left text-white/35 uppercase tracking-widest mb-4 font-medium">
        {gender}&rsquo;s outfit ideas for &ldquo;{query}&rdquo;
      </p>

      <div className="flex flex-col md:flex-row gap-8 items-start mb-8 w-full">
        {/* Left Column: Full Try-on Image */}
        {tryOnFinalImageUrl && (
          <motion.div
            className="w-full md:w-7/12 flex justify-center md:sticky md:top-24"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full max-w-[800px] group cursor-pointer">
              {/* Ambient glow behind card */}
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-white/8 via-[rgba(180,180,255,0.06)] to-transparent blur-2xl pointer-events-none transition-opacity duration-500 group-hover:opacity-150" />
              {/* Animated shimmer border */}
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-white/20 via-white/5 to-white/12 pointer-events-none" />

              {/* Glass card */}
              <div
                className="relative rounded-3xl overflow-hidden border border-white/10 bg-[rgba(255,255,255,0.03)]"
                style={{ boxShadow: "0 12px 48px rgba(0,0,0,0.55), 0 0 0 0.5px rgba(255,255,255,0.07), inset 0 1px 0 rgba(255,255,255,0.08)" }}
              >
                {/* Top badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 border border-white/10"
                  style={{ backdropFilter: "blur(12px)" }}>
                  <Sparkles className="w-3 h-3 text-white/60" />
                  <span className="text-[10px] font-semibold text-white/60 tracking-[0.15em] uppercase">Your Look</span>
                </div>

                {/* Image */}
                <img
                  src={tryOnFinalImageUrl}
                  alt="Generated try-on preview"
                  className="w-full min-h-[420px] max-h-[85vh] object-cover block transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />

                {/* Bottom glass overlay */}
                <div className="absolute bottom-0 inset-x-0 px-6 pt-16 pb-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <p className="text-[12px] text-white/40 uppercase tracking-[0.14em] mb-1">AI Try-On</p>
                  <p className="text-[16px] font-medium text-white/90 line-clamp-2">{query}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Right Column: Original Product Breakdowns */}
        {tryOnItems.length > 0 && (
          <motion.div
            className="w-full md:w-5/12 flex flex-col gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 mb-2 px-1">
              <ShoppingBag className="w-4 h-4 text-white/50" />
              <h3 className="text-sm font-semibold tracking-wide text-white/80">Shop the Pieces</h3>
            </div>
            
            {tryOnItems.map((item, idx) => {
              const displayName = item.category.replace(/_/g, " ");
              const displayImg = item.productImageUrl || item.garmentImageUrl;
              const hasLink = !!item.productShopUrl;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                  onClick={() => {
                    if (hasLink) {
                      window.open(item.productShopUrl, "_blank");
                    } else {
                      alert(`Hold tight! The purchase link for '${displayName}' is still syncing from the backend.`);
                    }
                  }}
                  className={`group relative flex items-center gap-4 p-3 rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden transition-all duration-300 ${
                    hasLink 
                      ? "cursor-pointer hover:bg-white/[0.04] hover:border-white/15 hover:shadow-[0_8px_32px_rgba(255,255,255,0.03)]" 
                      : "opacity-70 cursor-not-allowed hover:bg-white/[0.02]"
                  }`}
                >
                  {/* Subtle hover gradient */}
                  {hasLink && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.015] to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  )}

                  {/* Thumbnail */}
                  <div className="relative w-20 h-24 shrink-0 rounded-xl overflow-hidden bg-white/5 flex items-center justify-center">
                    {displayImg ? (
                      <img
                        src={displayImg}
                        alt={displayName}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      />
                    ) : (
                      <span className="text-white/20 text-xs text-center px-2">No Image</span>
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0 py-1">
                    <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-1">
                      {displayName}
                    </p>
                    <p className="text-sm font-medium text-white/90 truncate pr-2">
                      {hasLink ? "View Product" : "Searching styles..."}
                    </p>
                    {item.productPrice && (
                      <p className="text-sm text-white/60 mt-1">${item.productPrice}</p>
                    )}
                  </div>

                  {/* Icon */}
                  <div className="shrink-0 pr-4">
                    {hasLink ? (
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                        <ExternalLink className="w-3.5 h-3.5 text-white/60 group-hover:text-white" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center bg-white/5">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20 animate-pulse" />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
