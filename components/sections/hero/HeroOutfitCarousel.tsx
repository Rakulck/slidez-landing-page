"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export type OutfitPod = {
  src: string;
  label: string;
  pos: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

export type OutfitSlide = {
  id: string;
  gender: "Men" | "Women";
  brand: string;
  brandLogo: string;
  modelImage: string;
  isFullHero?: boolean;
  pods?: OutfitPod[];
};

// 8 outfits: 4 Men, 4 Women, interleaved
export const OUTFIT_SLIDES: OutfitSlide[] = [
  // 1. Men 1 (H&M)
  {
    id: "men-1",
    gender: "Men",
    brand: "H&M",
    brandLogo: "/hero-carousel/paywall_hm_logo.png",
    modelImage: "/hero-carousel/paywall_men1_model.png",
    pods: [
      { src: "/hero-carousel/paywall_men1_shirt.png", label: "Linen Shirt", pos: "top-left" },
      { src: "/hero-carousel/paywall_men1_sunglasses.png", label: "Sunglasses", pos: "top-right" },
      { src: "/hero-carousel/paywall_men1_shorts.png", label: "Shorts", pos: "bottom-left" },
      { src: "/hero-carousel/paywall_men1_sandals.png", label: "Sandals", pos: "bottom-right" },
    ],
  },
  // 2. Women 1 (Mango)
  {
    id: "women-mango",
    gender: "Women",
    brand: "Mango",
    brandLogo: "/hero-carousel/paywall_mango_logo.png",
    modelImage: "/hero-carousel/paywall_mango_model.png",
    pods: [
      { src: "/hero-carousel/paywall_mango_top.png", label: "Top", pos: "top-left" },
      { src: "/hero-carousel/paywall_mango_bag.png", label: "Bag", pos: "top-right" },
      { src: "/hero-carousel/paywall_mango_skirt.png", label: "Midi Skirt", pos: "bottom-left" },
      { src: "/hero-carousel/paywall_mango_heels.png", label: "Heels", pos: "bottom-right" },
    ],
  },
  // 3. Men 2 (Lululemon)
  {
    id: "men-2",
    gender: "Men",
    brand: "Lululemon",
    brandLogo: "/hero-carousel/paywall_lululemon_logo.png",
    modelImage: "/hero-carousel/paywall_men2_model.png",
    pods: [
      { src: "/hero-carousel/paywall_men2_jacket.png", label: "Jacket", pos: "top-left" },
      { src: "/hero-carousel/paywall_men2_tee.png", label: "Tech Tee", pos: "top-right" },
      { src: "/hero-carousel/paywall_men2_jeans.png", label: "Slim Fit", pos: "bottom-left" },
      { src: "/hero-carousel/paywall_men2_sneakers.png", label: "Sneakers", pos: "bottom-right" },
    ],
  },
  // 4. Women 2 (Lululemon)
  {
    id: "women-lululemon",
    gender: "Women",
    brand: "Lululemon",
    brandLogo: "/hero-carousel/paywall_lululemon_logo.png",
    modelImage: "/hero-carousel/paywall_lululemon_model.png",
    isFullHero: true,
  },
  // 5. Men 3 (Mango Man)
  {
    id: "men-3",
    gender: "Men",
    brand: "Mango",
    brandLogo: "/hero-carousel/paywall_mango_logo.png",
    modelImage: "/hero-carousel/paywall_men3_model.png",
    pods: [
      { src: "/hero-carousel/paywall_men3_jacket.png", label: "Blazer", pos: "top-left" },
      { src: "/hero-carousel/paywall_men3_sunglasses.png", label: "Glasses", pos: "top-right" },
      { src: "/hero-carousel/paywall_men3_turtleneck.png", label: "Knitwear", pos: "bottom-left" },
      { src: "/hero-carousel/paywall_men3_pants.png", label: "Trousers", pos: "bottom-right" },
    ],
  },
  // 6. Women 3 (H&M)
  {
    id: "women-hm",
    gender: "Women",
    brand: "H&M",
    brandLogo: "/hero-carousel/paywall_hm_logo.png",
    modelImage: "/hero-carousel/paywall_hm_model.png",
    pods: [
      { src: "/hero-carousel/paywall_hm_jacket.png", label: "Utility Jacket", pos: "top-left" },
      { src: "/hero-carousel/paywall_hm_top.png", label: "Top", pos: "top-right" },
      { src: "/hero-carousel/paywall_hm_jeans.png", label: "Denim", pos: "bottom-left" },
      { src: "/hero-carousel/paywall_hm_sneakers.png", label: "Retro Kicks", pos: "bottom-right" },
    ],
  },
  // 7. Men 4 (H&M)
  {
    id: "men-4",
    gender: "Men",
    brand: "H&M",
    brandLogo: "/hero-carousel/paywall_hm_logo.png",
    modelImage: "/hero-carousel/paywall_men4_model.png",
    pods: [
      { src: "/hero-carousel/paywall_men4_quarterzip.png", label: "Quarter-Zip", pos: "top-left" },
      { src: "/hero-carousel/paywall_men4_tote.png", label: "Tote Bag", pos: "top-right" },
      { src: "/hero-carousel/paywall_men4_tee.png", label: "Cotton Tee", pos: "bottom-left" },
      { src: "/hero-carousel/paywall_men4_sneakers.png", label: "Sneakers", pos: "bottom-right" },
    ],
  },
  // 8. Women 4 (Onboarding 2nd screen: AI Stylist)
  {
    id: "women-onboarding-stylist",
    gender: "Women",
    brand: "Slidez AI",
    brandLogo: "/hero-carousel/onboarding_ai_stylist_brand.png",
    modelImage: "/hero-carousel/onboarding_ai_stylist_model.png",
    pods: [
      { src: "/hero-carousel/onboarding_ai_stylist_coat.png", label: "Trench Coat", pos: "top-left" },
      { src: "/hero-carousel/onboarding_ai_stylist_skirt.png", label: "Pleated Skirt", pos: "top-right" },
      { src: "/hero-carousel/onboarding_ai_stylist_top.png", label: "Silk Top", pos: "bottom-left" },
      { src: "/hero-carousel/onboarding_ai_stylist_boots.png", label: "Leather Boots", pos: "bottom-right" },
    ],
  },
];

const SLIDE_VARIANTS = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 280, damping: 28 },
      opacity: { duration: 0.35 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    transition: {
      x: { type: "spring", stiffness: 280, damping: 28 },
      opacity: { duration: 0.28 },
    },
  }),
};

// Subtle pod floating variations for organic motion
const POD_FLOAT_TRANSITIONS = [
  { y: [-4, 4, -4], duration: 4.2, delay: 0 },
  { y: [4, -4, 4], duration: 4.8, delay: 0.3 },
  { y: [-5, 5, -5], duration: 4.5, delay: 0.6 },
  { y: [5, -5, 5], duration: 5.0, delay: 0.9 },
];

export default function HeroOutfitCarousel() {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const activeIndex = ((page % OUTFIT_SLIDES.length) + OUTFIT_SLIDES.length) % OUTFIT_SLIDES.length;
  const activeSlide = OUTFIT_SLIDES[activeIndex];

  const paginate = useCallback((newDirection: number) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  }, []);

  const goToSlide = (index: number) => {
    const diff = index - activeIndex;
    if (diff === 0) return;
    setPage(([prevPage]) => [prevPage + diff, diff > 0 ? 1 : -1]);
  };

  // Auto-slide every 3.4s when not hovered
  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      paginate(1);
    }, 3400);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, paginate]);

  // Preload next image and pods for instant transitions
  useEffect(() => {
    const nextIndex = (activeIndex + 1) % OUTFIT_SLIDES.length;
    const nextSlide = OUTFIT_SLIDES[nextIndex];
    if (nextSlide) {
      const img = new window.Image();
      img.src = nextSlide.modelImage;
      if (nextSlide.pods) {
        nextSlide.pods.forEach((p) => {
          const podImg = new window.Image();
          podImg.src = p.src;
        });
      }
    }
  }, [activeIndex]);

  return (
    <div
      className="relative mx-auto flex w-full max-w-[480px] sm:max-w-[520px] md:max-w-[560px] flex-col items-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Full-size Stage — completely transparent, no white card, no background gradient */}
      <div className="relative h-[480px] sm:h-[540px] md:h-[590px] lg:h-[630px] w-full overflow-hidden flex items-end justify-center">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={SLIDE_VARIANTS}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 flex flex-col justify-between items-center cursor-grab active:cursor-grabbing pb-2"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.25}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = offset.x * velocity.x;
              if (offset.x < -50 || swipe < -800) {
                paginate(1);
              } else if (offset.x > 50 || swipe > 800) {
                paginate(-1);
              }
            }}
          >
            {/* Model & Surrounding Outfit Bubbles Canvas */}
            <div className="relative h-full w-full flex-1">
              {/* Main Model Photo — Full size in center */}
              <div
                className={`relative mx-auto h-full flex items-end justify-center ${
                  activeSlide.isFullHero
                    ? "w-full"
                    : "w-[62%] sm:w-[66%]"
                }`}
              >
                <Image
                  src={activeSlide.modelImage}
                  alt={`${activeSlide.brand} outfit`}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 640px) 380px, (max-width: 1024px) 460px, 520px"
                  className="object-contain object-bottom pointer-events-none"
                />
              </div>

              {/* Outfit Bubbles Surrounding the Main Model */}
              {activeSlide.pods && (
                <div className="pointer-events-none absolute inset-0">
                  {activeSlide.pods.map((pod, i) => {
                    const float = POD_FLOAT_TRANSITIONS[i % POD_FLOAT_TRANSITIONS.length];
                    const posClass =
                      pod.pos === "top-left"
                        ? "top-2 sm:top-4 left-1 sm:left-3"
                        : pod.pos === "top-right"
                        ? "top-6 sm:top-8 right-1 sm:right-3"
                        : pod.pos === "bottom-left"
                        ? "bottom-14 sm:bottom-16 left-1 sm:left-3"
                        : "bottom-10 sm:bottom-12 right-1 sm:right-3";

                    return (
                      <motion.div
                        key={pod.src}
                        animate={{ y: float.y }}
                        transition={{
                          duration: float.duration,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: float.delay,
                        }}
                        className={`absolute ${posClass} flex flex-col items-center`}
                      >
                        {/* Raw untouched outfit product image */}
                        <div className="relative h-[85px] w-[85px] sm:h-[100px] sm:w-[100px] md:h-[115px] md:w-[115px]">
                          <Image
                            src={pod.src}
                            alt=""
                            fill
                            unoptimized
                            sizes="115px"
                            className="object-contain pointer-events-none"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Brand Logo cleanly anchored at the bottom */}
            <div className="relative z-10 flex h-7 sm:h-8 w-24 items-center justify-center mt-1">
              <Image
                src={activeSlide.brandLogo}
                alt={activeSlide.brand}
                fill
                unoptimized
                sizes="96px"
                className="object-contain"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Minimal Dots Indicator */}
      <div className="mt-3 flex items-center gap-1.5">
        {OUTFIT_SLIDES.map((slide, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={slide.id}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}: ${slide.brand} ${slide.gender}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                isActive
                  ? "w-6 bg-[#1a1a1e]"
                  : "w-1.5 bg-black/20 hover:bg-black/40"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
