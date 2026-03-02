"use client";

import { Sparkles, Zap, ShoppingBag, Shirt, Search, Star } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export function GlowingEffectDemo() {
  return (
    <section className="bg-[#080808] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#808080]">
            Why Slidez
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight text-white">
            Style, instantly.
          </h2>
        </div>

        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Sparkles className="h-4 w-4" />}
            title="AI Stylist, always on"
            description="Describe your vibe and get a full outfit in seconds — no scrolling, no guessing."
          />
          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Shirt className="h-4 w-4" />}
            title="Virtual try-on"
            description="See exactly how each piece looks on you before you buy. No more returns."
          />
          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Zap className="h-4 w-4" />}
            title="One prompt. Full look."
            description="From shoes to accessories — Slidez builds complete outfits around your wardrobe and budget."
          />
          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<ShoppingBag className="h-4 w-4" />}
            title="Shop without leaving"
            description="The Chrome extension works on any store — Zara, ASOS, H&M. Try on as you browse."
          />
          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Star className="h-4 w-4" />}
            title="Loved by 10,000+ shoppers"
            description="4.9 stars from people who finally stopped dreading getting dressed."
          />
        </ul>
      </div>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-border bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2 text-foreground">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl font-semibold leading-[1.375rem] tracking-[-0.04em] text-balance text-foreground font-sans md:text-2xl md:leading-[1.875rem]">
                {title}
              </h3>
              <p className="font-sans text-sm leading-[1.125rem] text-muted-foreground md:text-base md:leading-[1.375rem]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
