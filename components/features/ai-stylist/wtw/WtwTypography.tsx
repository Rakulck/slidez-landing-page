"use client";

import { Inter, Roboto_Mono } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-wtw-inter",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-wtw-mono",
  display: "swap",
});

type WtwTypographyProps = {
  children: ReactNode;
  className?: string;
};

export default function WtwTypography({ children, className = "" }: WtwTypographyProps) {
  return (
    <div className={`${inter.variable} ${robotoMono.variable} ${className}`}>
      {children}
    </div>
  );
}

export const wtwFontInter = "font-[family-name:var(--font-wtw-inter)]";
export const wtwFontMono = "font-[family-name:var(--font-wtw-mono)]";
