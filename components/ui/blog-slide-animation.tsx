"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

type BlogSlideAnimationProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function BlogSlideAnimation({ src, alt, className = "" }: BlogSlideAnimationProps) {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch(src)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setAnimationData(data);
      })
      .catch(() => {
        if (!cancelled) setAnimationData(null);
      });

    return () => {
      cancelled = true;
    };
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-black/10 shadow-sm bg-[#f5f5f5] ${className}`}
      role="img"
      aria-label={alt}
      aria-busy={!animationData}
    >
      {animationData ? (
        <Lottie animationData={animationData} loop autoplay className="w-full h-auto" />
      ) : (
        <div className="w-full aspect-[372/466] animate-pulse bg-black/5" />
      )}
    </div>
  );
}
