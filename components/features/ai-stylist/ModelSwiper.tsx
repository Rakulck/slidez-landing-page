"use client";

import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Upload } from "lucide-react";
import type { Gender } from "@/lib/slidezCallableFunctions";
import { WTW_PICKER_MODELS } from "@/lib/preset-models";

export type SwiperCard =
  | {
      type: "model";
      id: string;
      name: string;
      src: string;
      gender: Gender;
    }
  | {
      type: "upload";
      id: "upload";
      name: string;
      src: string | null;
      gender: Gender;
    };

export interface ModelSwiperProps {
  gender: Gender;
  selectedId: string | null;
  selectedSrc: string | null;
  onSelectModel: (id: string, src: string | null) => void;
  onUploadClick: () => void;
  uploadedPhotoSrc: string | null;
  onClearUploadedPhoto: () => void;
}

export default function ModelSwiper({
  gender,
  selectedId,
  selectedSrc,
  onSelectModel,
  onUploadClick,
  uploadedPhotoSrc,
  onClearUploadedPhoto,
}: ModelSwiperProps) {
  // 3 cards per gender: Model 1, Model 2, Upload Photo
  const cards = useMemo<SwiperCard[]>(() => {
    const models = WTW_PICKER_MODELS[gender].map((m) => ({
      type: "model" as const,
      id: m.id,
      name: m.name,
      src: m.src,
      gender,
    }));
    const uploadCard: SwiperCard = {
      type: "upload" as const,
      id: "upload",
      name: "Use your photo",
      src: uploadedPhotoSrc,
      gender,
    };
    return [...models, uploadCard];
  }, [gender, uploadedPhotoSrc]);

  // Active card index (0, 1, or 2)
  const [activeIndex, setActiveIndex] = useState(() => {
    if (selectedId === "upload") return 2;
    const idx = cards.findIndex((c) => c.id === selectedId);
    return idx >= 0 ? idx : 0;
  });

  const prevActiveIndexRef = useRef(activeIndex);
  const isDraggingRef = useRef(false);

  // Keep prevActiveIndexRef updated
  useEffect(() => {
    prevActiveIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Sync activeIndex when gender or selectedId changes
  useEffect(() => {
    if (selectedId === "upload") {
      setActiveIndex(2);
      return;
    }
    const idx = cards.findIndex((c) => c.id === selectedId);
    if (idx >= 0 && idx !== activeIndex) {
      setActiveIndex(idx);
    }
  }, [selectedId, cards, activeIndex]);

  const handleCardActive = useCallback(
    (index: number) => {
      const target = cards[index];
      if (!target) return;
      setActiveIndex(index);
      if (target.type === "model") {
        onSelectModel(target.id, target.src);
      } else {
        onSelectModel("upload", uploadedPhotoSrc);
      }
    },
    [cards, onSelectModel, uploadedPhotoSrc]
  );

  const goPrev = () => {
    const nextIdx = (activeIndex - 1 + cards.length) % cards.length;
    handleCardActive(nextIdx);
  };

  const goNext = () => {
    const nextIdx = (activeIndex + 1) % cards.length;
    handleCardActive(nextIdx);
  };

  const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 50);

    const threshold = 35;
    const velocityThreshold = 200;
    if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
      goPrev();
    } else if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) {
      goNext();
    }
  };

  const activeCard = cards[activeIndex];

  return (
    <div className="w-full select-none">
      {/* ── Immersive Avatar Stage: Seamless white canvas, avatars standing directly in space ── */}
      <div className="relative w-full h-[400px] sm:h-[450px] md:h-[490px] flex items-end justify-center overflow-x-clip py-1">
        {/* Draggable Stage Container */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.25}
          onDragStart={() => {
            isDraggingRef.current = true;
          }}
          onDragEnd={handleDragEnd}
          className="relative w-[230px] sm:w-[270px] md:w-[300px] h-full flex items-end justify-center cursor-grab active:cursor-grabbing"
        >
          {cards.map((card, i) => {
            let offset = i - activeIndex;
            if (offset === 2) offset = -1;
            if (offset === -2) offset = 1;

            let prevOffset = i - prevActiveIndexRef.current;
            if (prevOffset === 2) prevOffset = -1;
            if (prevOffset === -2) prevOffset = 1;

            // Detect wrap-around to prevent sliding across the active avatar
            const isWrapAround = Math.abs(offset - prevOffset) === 2;

            const isCenter = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;

            return (
              <motion.div
                key={card.id}
                animate={{
                  x: isCenter ? "0%" : isLeft ? "-82%" : isRight ? "82%" : "0%",
                  scale: isCenter ? 1 : 0.92,
                  opacity: 1,
                  zIndex: isCenter ? 20 : 10,
                }}
                transition={
                  isWrapAround
                    ? { duration: 0 }
                    : {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        mass: 0.8,
                      }
                }
                onClick={() => {
                  if (isDraggingRef.current) return;
                  if (!isCenter) {
                    handleCardActive(i);
                  } else if (card.type === "upload" && !uploadedPhotoSrc) {
                    onUploadClick();
                  }
                }}
                className={`absolute inset-0 flex items-end justify-center bg-transparent ${
                  isCenter ? "cursor-default" : "cursor-pointer"
                }`}
              >
                {card.type === "model" ? (
                  /* ── Immersive Avatar: Crisp, no blur/fading, standing directly on white floor ── */
                  <div className="relative w-full h-full flex items-end justify-center">
                    <Image
                      src={card.src}
                      alt={card.name}
                      fill
                      unoptimized
                      priority
                      sizes="(max-width: 640px) 270px, 300px"
                      className="object-contain object-bottom mix-blend-multiply select-none pointer-events-none"
                    />
                  </div>
                ) : (
                  /* ── Empty / Upload Card: Pure white, borderless, zero grey overlay ── */
                  <div className="relative w-full h-full flex items-center justify-center p-2">
                    {uploadedPhotoSrc ? (
                      <div className="relative w-full h-[320px] sm:h-[380px] rounded-3xl overflow-hidden shadow-xs">
                        <img
                          src={uploadedPhotoSrc}
                          alt="Your uploaded photo"
                          className="w-full h-full object-cover object-top select-none pointer-events-none"
                        />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onClearUploadedPhoto();
                          }}
                          aria-label="Remove uploaded photo"
                          className="absolute top-3 left-3 z-20 w-6 h-6 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onUploadClick();
                        }}
                        className="w-full h-[320px] sm:h-[380px] flex flex-col items-center justify-center p-6 rounded-3xl bg-white transition-all cursor-pointer group"
                      >
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-neutral-100/90 group-hover:bg-neutral-200/80 flex items-center justify-center mb-3 text-neutral-600 transition-all duration-200 group-hover:scale-105">
                          <Upload className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                        </div>
                        <span className="text-sm font-semibold text-neutral-900 text-center leading-tight">
                          Use your photo
                        </span>
                        <span className="text-xs text-neutral-400 text-center mt-1">
                          Tap to upload
                        </span>
                      </button>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* ── Carousel Indicator: — ━━ — ── */}
      <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
        {cards.map((c, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => handleCardActive(idx)}
              aria-label={`Select ${c.name}`}
              className="py-2 px-0.5 cursor-pointer focus:outline-none"
            >
              <span
                className={`block h-1 sm:h-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-7 sm:w-8 bg-[#0d0d0d]"
                    : "w-4 sm:w-5 bg-neutral-200 hover:bg-neutral-300"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Active Model Name label underneath */}
      <div className="mt-1 text-center">
        <p className="text-xs sm:text-sm font-semibold text-neutral-900 tracking-tight leading-tight">
          {activeCard?.name ?? ""}
        </p>
      </div>
    </div>
  );
}
