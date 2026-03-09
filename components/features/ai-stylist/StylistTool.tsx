"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Sparkles, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Typewriter ───────────────────────────────────────────────── */

const DEFAULT_PROMPTS = [
  "Black dress for dinner date...",
  "Casual office look for Friday...",
  "Beach vacation, keep it chic...",
  "Winter party outfit...",
  "Something cozy for the weekend...",
  "Date night, effortlessly minimal...",
];

function useTypewriter(active: boolean, prompts: string[]) {
  const [displayed, setDisplayed] = useState("");
  const promptIdx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const tick = useCallback(() => {
    const current = prompts[promptIdx.current % prompts.length];
    if (!deleting.current) {
      charIdx.current += 1;
      setDisplayed(current.slice(0, charIdx.current));
      if (charIdx.current === current.length) {
        deleting.current = true;
        timer.current = setTimeout(tick, 2000);
        return;
      }
      timer.current = setTimeout(tick, 60);
    } else {
      charIdx.current -= 1;
      setDisplayed(current.slice(0, charIdx.current));
      if (charIdx.current === 0) {
        deleting.current = false;
        promptIdx.current = (promptIdx.current + 1) % prompts.length;
        timer.current = setTimeout(tick, 400);
        return;
      }
      timer.current = setTimeout(tick, 35);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prompts]);

  useEffect(() => {
    if (!active) return;
    timer.current = setTimeout(tick, 800);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [active, tick]);

  return displayed;
}

/* ── Data ─────────────────────────────────────────────────────── */

const DEFAULT_CHIPS = ["Casual", "Office", "Date Night", "Winter", "Party", "Vacation"];

type ChipOutfit = {
  name: string;
  top: string;
  bottom: string;
  shoes: string;
  accessories: string;
};

/* ── Women's chip outfits ─────────────────────────────────────── */
const CHIP_OUTFITS_WOMEN: Record<string, ChipOutfit[]> = {
  Casual: [
    {
      name: "Effortless Everyday",
      top: "White oversized shirt",
      bottom: "Black straight jeans",
      shoes: "White sneakers",
      accessories: "Minimal gold necklace",
    },
    {
      name: "Relaxed Weekend",
      top: "Grey cropped hoodie",
      bottom: "Wide-leg cargo pants",
      shoes: "Clean low-top sneakers",
      accessories: "Baseball cap, simple ring",
    },
    {
      name: "Easy Layered Look",
      top: "Striped long-sleeve tee",
      bottom: "Relaxed mom jeans",
      shoes: "Canvas slip-ons",
      accessories: "Tortoiseshell sunglasses",
    },
  ],
  Office: [
    {
      name: "Modern Professional",
      top: "Fitted white button-down",
      bottom: "Tailored charcoal trousers",
      shoes: "Pointed-toe kitten heels",
      accessories: "Delicate chain necklace, structured tote",
    },
    {
      name: "Polished Softness",
      top: "Ivory silk blouse",
      bottom: "A-line midi skirt",
      shoes: "Block-heel loafers",
      accessories: "Pearl studs, leather belt",
    },
    {
      name: "Sharp & Minimal",
      top: "Blazer over fitted turtleneck",
      bottom: "Wide-leg dress pants",
      shoes: "Chelsea boots",
      accessories: "Minimal watch, simple ring",
    },
  ],
  "Date Night": [
    {
      name: "Effortless Romance",
      top: "Off-shoulder crop top",
      bottom: "Satin midi skirt",
      shoes: "Strappy heeled sandals",
      accessories: "Gold hoops, small clutch",
    },
    {
      name: "Sleek & Sultry",
      top: "Fitted bodysuit",
      bottom: "High-waist leather-look trousers",
      shoes: "Pointed mules",
      accessories: "Layered necklaces, mini shoulder bag",
    },
    {
      name: "Understated Chic",
      top: "Wrap silk blouse",
      bottom: "Tailored wide-leg pants",
      shoes: "Block-heel ankle boots",
      accessories: "Delicate bracelet, small evening bag",
    },
  ],
  Winter: [
    {
      name: "Cosy & Considered",
      top: "Chunky knit sweater",
      bottom: "Straight-leg jeans",
      shoes: "Knee-high leather boots",
      accessories: "Cashmere scarf, minimal studs",
    },
    {
      name: "Layered Editorial",
      top: "Wool oversized coat over turtleneck",
      bottom: "Slim trousers",
      shoes: "Ankle boots",
      accessories: "Leather gloves, structured tote",
    },
    {
      name: "Textured & Warm",
      top: "Ribbed mock-neck top",
      bottom: "Plaid midi skirt",
      shoes: "Lug-sole loafers",
      accessories: "Cosy beret, gold rings",
    },
  ],
  Party: [
    {
      name: "Night Out Glam",
      top: "Sequin slip tank",
      bottom: "Tailored mini skirt",
      shoes: "Strappy heeled boots",
      accessories: "Drop earrings, mini bag",
    },
    {
      name: "Bold Statement",
      top: "Cut-out bodysuit",
      bottom: "High-waist flared pants",
      shoes: "Platform heels",
      accessories: "Layered chains, small clutch",
    },
    {
      name: "Metallic Moment",
      top: "Fitted metallic top",
      bottom: "Draped midi skirt",
      shoes: "Strappy block heels",
      accessories: "Statement earrings, wristlet bag",
    },
  ],
  Vacation: [
    {
      name: "Resort Chic",
      top: "Linen crop top",
      bottom: "Wide-leg linen trousers",
      shoes: "Leather flat sandals",
      accessories: "Shell necklace, straw hat",
    },
    {
      name: "Beachy Easy",
      top: "Floral wrap top",
      bottom: "Flowy midi skirt",
      shoes: "Espadrille wedges",
      accessories: "Layered anklets, canvas tote",
    },
    {
      name: "Sun-Ready Look",
      top: "Breezy oversized button-down",
      bottom: "Denim cutoff shorts",
      shoes: "Slip-on sneakers",
      accessories: "Woven bucket hat, oversized sunglasses",
    },
  ],
  Beach: [
    {
      name: "Sun & Sand",
      top: "Breezy linen shirt (open)",
      bottom: "High-waist bikini bottoms",
      shoes: "Leather slide sandals",
      accessories: "Straw hat, shell necklace",
    },
    {
      name: "Resort Easy",
      top: "Crochet cover-up top",
      bottom: "Flowy wrap skirt",
      shoes: "Flat raffia sandals",
      accessories: "Oversized sunglasses, canvas tote",
    },
    {
      name: "Beach Chic",
      top: "Striped linen crop top",
      bottom: "Wide-leg linen trousers",
      shoes: "Espadrille wedges",
      accessories: "Gold anklet, woven clutch",
    },
  ],
};

/* ── Men's chip outfits ───────────────────────────────────────── */
const CHIP_OUTFITS_MEN: Record<string, ChipOutfit[]> = {
  Casual: [
    {
      name: "Clean & Easy",
      top: "White fitted crew-neck tee",
      bottom: "Slim straight dark jeans",
      shoes: "White leather sneakers",
      accessories: "Minimal watch, simple bracelet",
    },
    {
      name: "Relaxed Streetwear",
      top: "Oversized graphic hoodie",
      bottom: "Tapered cargo joggers",
      shoes: "Chunky low-top sneakers",
      accessories: "Cap, small crossbody bag",
    },
    {
      name: "Weekend Layered",
      top: "Grey crewneck sweatshirt over white tee",
      bottom: "Relaxed chinos",
      shoes: "Canvas low-tops",
      accessories: "Tortoiseshell sunglasses",
    },
  ],
  Office: [
    {
      name: "Sharp Professional",
      top: "Fitted white Oxford shirt",
      bottom: "Tailored navy trousers",
      shoes: "Leather derby shoes",
      accessories: "Leather belt, minimal watch",
    },
    {
      name: "Modern Business Casual",
      top: "Merino polo",
      bottom: "Slim chinos",
      shoes: "Suede loafers",
      accessories: "Minimalist watch, leather card holder",
    },
    {
      name: "Blazer Look",
      top: "Unstructured blazer over crew-neck tee",
      bottom: "Tailored slim trousers",
      shoes: "Chelsea boots",
      accessories: "Pocket square, simple ring",
    },
  ],
  "Date Night": [
    {
      name: "Effortlessly Sharp",
      top: "Black fitted turtleneck",
      bottom: "Tailored dark trousers",
      shoes: "Leather Chelsea boots",
      accessories: "Minimal watch, subtle cologne",
    },
    {
      name: "Smart Casual",
      top: "Open-collar linen shirt",
      bottom: "Slim dark jeans",
      shoes: "Suede loafers",
      accessories: "Leather bracelet, watch",
    },
    {
      name: "Elevated Look",
      top: "Fitted blazer over white tee",
      bottom: "Black slim trousers",
      shoes: "Pointed-toe leather shoes",
      accessories: "Silver ring, minimal clutch bag",
    },
  ],
  Winter: [
    {
      name: "Cosy Classic",
      top: "Chunky cable-knit sweater over collared shirt",
      bottom: "Dark straight jeans",
      shoes: "Leather lace-up boots",
      accessories: "Wool scarf, leather gloves",
    },
    {
      name: "Layered Sharp",
      top: "Wool overcoat over turtleneck",
      bottom: "Slim tailored trousers",
      shoes: "Suede Chelsea boots",
      accessories: "Beanie, minimal watch",
    },
    {
      name: "Textured Warmth",
      top: "Shearling bomber jacket over henley",
      bottom: "Relaxed cargo trousers",
      shoes: "Lug-sole boots",
      accessories: "Knit beanie, simple ring",
    },
  ],
  Party: [
    {
      name: "Night Out Edge",
      top: "Satin shirt (partially unbuttoned)",
      bottom: "Black slim trousers",
      shoes: "Leather Chelsea boots",
      accessories: "Chain necklace, minimal ring",
    },
    {
      name: "Bold Statement",
      top: "Graphic oversized shirt (tucked)",
      bottom: "Wide-leg tailored pants",
      shoes: "Platform leather boots",
      accessories: "Layered chains, leather band watch",
    },
    {
      name: "Sharp & Minimal",
      top: "Black fitted blazer over black tee",
      bottom: "Black slim trousers",
      shoes: "Pointed leather shoes",
      accessories: "Silver watch, subtle ring",
    },
  ],
  Vacation: [
    {
      name: "Resort Easy",
      top: "Linen short-sleeve shirt (open)",
      bottom: "Linen drawstring trousers",
      shoes: "Leather sandals",
      accessories: "Straw hat, woven bracelet",
    },
    {
      name: "Tropical Casual",
      top: "Printed camp collar shirt",
      bottom: "Tailored swim shorts",
      shoes: "Slip-on sneakers",
      accessories: "Aviator sunglasses, canvas tote",
    },
    {
      name: "Clean & Light",
      top: "White crew-neck tee",
      bottom: "Relaxed linen shorts",
      shoes: "White leather sandals",
      accessories: "Bucket hat, minimal watch",
    },
  ],
  Beach: [
    {
      name: "Shore Ready",
      top: "Linen shirt (open) over bare chest",
      bottom: "Tailored swim shorts",
      shoes: "Leather flip flops",
      accessories: "Woven hat, shell bracelet",
    },
    {
      name: "Casual Cool",
      top: "Relaxed terry cloth polo",
      bottom: "Board shorts",
      shoes: "Suede slide sandals",
      accessories: "Aviator sunglasses, canvas bag",
    },
    {
      name: "Beach Chic",
      top: "Striped oversized linen tee",
      bottom: "Linen drawstring shorts",
      shoes: "Leather sandals",
      accessories: "Straw hat, woven bracelet",
    },
  ],
};

/* ── Emoji map for chips ──────────────────────────────────────── */
const CHIP_EMOJI: Record<string, string> = {
  Casual:       "👟",
  Office:       "💼",
  "Date Night": "🌙",
  Winter:       "❄️",
  Party:        "🎉",
  Vacation:     "🌴",
  Beach:        "🏖️",
};

/* ── Custom query results ─────────────────────────────────────── */
const OUTFIT_RESULTS_WOMEN = [
  {
    tag: "Top Pick",
    name: "Effortless Evening",
    pieces: ["Black slip dress", "Strappy heeled mules", "Micro leather bag", "Gold hoop earrings"],
    swatches: ["#1a1a1a", "#c0c0c0", "#e8d5b7"],
  },
  {
    tag: "Alternative",
    name: "Sharp & Chic",
    pieces: ["Fitted blazer", "Silk cami", "Tailored trousers", "Pointed-toe flats"],
    swatches: ["#2d2d2d", "#f0f0f0", "#808080"],
  },
  {
    tag: "Bold Choice",
    name: "Statement Look",
    pieces: ["Wrap midi skirt", "Fitted turtleneck", "Block-heel boots", "Structured tote"],
    swatches: ["#3a3a3a", "#d4d4d4", "#a0a0a0"],
  },
];

const OUTFIT_RESULTS_MEN = [
  {
    tag: "Top Pick",
    name: "Clean & Considered",
    pieces: ["Black fitted turtleneck", "Tailored dark trousers", "Leather Chelsea boots", "Minimal watch"],
    swatches: ["#1a1a1a", "#3a3a3a", "#808080"],
  },
  {
    tag: "Alternative",
    name: "Smart Casual",
    pieces: ["Linen shirt", "Slim chinos", "Suede loafers", "Leather card holder"],
    swatches: ["#d4c4a8", "#4a3f35", "#c0c0c0"],
  },
  {
    tag: "Bold Choice",
    name: "Statement Look",
    pieces: ["Oversized blazer", "White crew-neck tee", "Wide-leg trousers", "Platform sneakers"],
    swatches: ["#2d2d2d", "#f0f0f0", "#6a6a6a"],
  },
];

/* ── Outfit field row ─────────────────────────────────────────── */
function OutfitRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3 text-sm">
      <span className="w-24 shrink-0 text-white/30 font-medium">{label}</span>
      <span className="text-white/75 leading-snug">{value}</span>
    </div>
  );
}

/* ── Main component ───────────────────────────────────────────── */

type Gender = "Women" | "Men";

type StylistToolProps = {
  /** Text to inject from a parent (e.g. card click). */
  externalPrompt?: string;
  /** Increment each time you want to inject a new prompt. */
  externalPromptKey?: number;
  /** Override the submit button label. Defaults to "Generate Outfit Ideas". */
  submitLabel?: string;
  /** Override the chip set. Defaults to DEFAULT_CHIPS. */
  chips?: string[];
  /** Override typewriter placeholder prompts. Defaults to DEFAULT_PROMPTS. */
  prompts?: string[];
};

export default function StylistTool({
  externalPrompt,
  externalPromptKey,
  submitLabel = "Generate Outfit Ideas",
  chips = DEFAULT_CHIPS,
  prompts = DEFAULT_PROMPTS,
}: StylistToolProps = {}) {
  const [gender, setGender] = useState<Gender>("Women");
  const [input, setInput] = useState("");
  const [results, setResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [chipResults, setChipResults] = useState<ChipOutfit[] | null>(null);
  const [activeChip, setActiveChip] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const placeholder = useTypewriter(!input && !results && !chipResults, prompts);

  const chipOutfits = gender === "Women" ? CHIP_OUTFITS_WOMEN : CHIP_OUTFITS_MEN;
  const outfitResults = gender === "Women" ? OUTFIT_RESULTS_WOMEN : OUTFIT_RESULTS_MEN;

  // Inject external prompt whenever the key increments
  useEffect(() => {
    if (!externalPrompt) return;
    setInput(externalPrompt);
    setResults(false);
    setChipResults(null);
    setActiveChip(null);
    setTimeout(() => inputRef.current?.focus(), 50);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [externalPromptKey]);


  const handleChip = (chip: string) => {
    setInput(chip);
    setActiveChip(chip);
    setChipResults(null);
    if (results) setResults(false);
    inputRef.current?.focus();
  };

  const handleSubmit = () => {
    if (!input.trim() || loading) return;
    setQuery(input.trim());
    setChipResults(null);
    setActiveChip(null);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResults(true);
    }, 900);
  };

  const handleReset = () => {
    setInput("");
    setResults(false);
    setLoading(false);
    setQuery("");
    setChipResults(null);
    setActiveChip(null);
    inputRef.current?.focus();
  };

  const hasAnyResults = results || chipResults !== null;

  return (
    <div className="w-full max-w-2xl mx-auto">

      {/* ── Input box ────────────────────────────────────────────── */}
      <div
        className={`rounded-2xl border transition-all duration-300 ${
          hasAnyResults
            ? "border-[rgba(192,192,192,0.3)] bg-[rgba(255,255,255,0.05)]"
            : "border-[rgba(192,192,192,0.18)] bg-[rgba(255,255,255,0.03)] focus-within:border-[rgba(192,192,192,0.42)] focus-within:bg-[rgba(255,255,255,0.05)]"
        }`}
      >
        {/* Text input row */}
        <div className="relative flex items-center gap-3 px-5 pt-5 pb-3">
          <Sparkles className="w-5 h-5 text-[#808080] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              if (results) setResults(false);
            }}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder={placeholder}
            className="flex-1 bg-transparent text-white text-base md:text-lg outline-none placeholder:text-white/25 min-w-0"
            suppressHydrationWarning
          />
          {/* Blinking cursor on typewriter */}
          {!input && !results && !chipResults && (
            <span
              className="absolute left-[3.4rem] top-1/2 -translate-y-1/2 w-px h-[1.1em] pointer-events-none"
              style={{ marginLeft: `${placeholder.length * 8.1}px` }}
            >
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                className="block w-full h-full bg-white/35"
              />
            </span>
          )}
          <AnimatePresence>
            {(input || hasAnyResults) && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={handleReset}
                className="text-white/25 hover:text-white/50 transition-colors shrink-0"
                aria-label="Clear input"
              >
                <X className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom bar */}
        <div className="px-5 pb-4 flex items-center justify-between gap-3">
          {/* Style selector */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-white/30 font-medium tracking-wide hidden sm:block">Style for</span>
            <div className="flex items-center gap-0.5 p-0.5 rounded-full border border-[rgba(192,192,192,0.14)] bg-[rgba(255,255,255,0.03)]">
              {(["Women", "Men"] as Gender[]).map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                    gender === g
                      ? "bg-[rgba(255,255,255,0.11)] text-white"
                      : "text-white/30 hover:text-white/55"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={handleSubmit}
            disabled={!input.trim() || loading}
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full
              shadow-[0_2px_16px_rgba(255,255,255,0.28),0_1px_4px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.9)]
              hover:shadow-[0_4px_24px_rgba(255,255,255,0.45)] hover:scale-[1.04] hover:-translate-y-px
              active:scale-[0.97] disabled:opacity-30 disabled:cursor-not-allowed
              disabled:hover:scale-100 disabled:hover:translate-y-0 disabled:shadow-none
              transition-all duration-200 ml-auto"
          >
            {loading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  className="w-3.5 h-3.5 rounded-full border-2 border-black border-t-transparent"
                />
                Finding...
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5" />
                {submitLabel}
              </>
            )}
          </button>
        </div>
      </div>

      {/* ── Suggestion chips ─────────────────────────────────────── */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {chips.map((chip) => (
          <button
            key={chip}
            onClick={() => handleChip(chip)}
            className={`px-4 py-2 rounded-full border text-sm transition-all duration-200 flex items-center gap-1.5 ${
              activeChip === chip
                ? "border-[rgba(192,192,192,0.5)] bg-[rgba(192,192,192,0.12)] text-white"
                : "border-[rgba(192,192,192,0.15)] text-white/40 hover:border-[rgba(192,192,192,0.3)] hover:text-white/70"
            }`}
          >
            {CHIP_EMOJI[chip] && (
              <span className="text-base leading-none">{CHIP_EMOJI[chip]}</span>
            )}
            {chip}
          </button>
        ))}
      </div>

      {/* ── Chip-specific outfit suggestions ─────────────────────── */}
      <AnimatePresence mode="wait">
        {chipResults && !results && (
          <motion.div
            key={`${activeChip}-${gender}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <p className="text-xs text-white/35 uppercase tracking-widest mb-4 font-medium">
              {gender}&rsquo;s outfit ideas · {activeChip}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {chipResults.map((outfit, i) => (
                <motion.div
                  key={outfit.name}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="p-4 rounded-xl border border-[rgba(192,192,192,0.14)] bg-[rgba(255,255,255,0.04)]
                    hover:border-[rgba(192,192,192,0.28)] transition-colors group"
                >
                  <p className="text-white font-semibold text-sm mb-4 pb-3 border-b border-[rgba(192,192,192,0.1)]">
                    {outfit.name}
                  </p>
                  <div className="flex flex-col gap-2.5 mb-4">
                    <OutfitRow label="Top" value={outfit.top} />
                    <OutfitRow label="Bottom" value={outfit.bottom} />
                    <OutfitRow label="Shoes" value={outfit.shoes} />
                    <OutfitRow label="Accessories" value={outfit.accessories} />
                  </div>
                  <a
                    href="https://linkly.link/2FWYm"
                    className="text-[11px] text-[#c0c0c0] font-medium group-hover:text-white transition-colors"
                  >
                    Try On →
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 p-5 rounded-xl border border-[rgba(192,192,192,0.1)] bg-[rgba(255,255,255,0.03)] text-center">
              <p className="text-white/40 text-sm mb-3">
                Try these looks on yourself with Slidez virtual try-on
              </p>
              <a
                href="https://linkly.link/2FWYm"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-full
                  shadow-[0_2px_16px_rgba(255,255,255,0.2)] hover:shadow-[0_4px_24px_rgba(255,255,255,0.35)]
                  hover:scale-[1.04] hover:-translate-y-px active:scale-[0.97] transition-all duration-200"
              >
                Download Slidez – Free
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Custom query results ──────────────────────────────────── */}
      <AnimatePresence>
        {results && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <p className="text-xs text-white/35 uppercase tracking-widest mb-4 font-medium">
              {gender}&rsquo;s outfit ideas for &ldquo;{query}&rdquo;
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {outfitResults.map((outfit, i) => (
                <motion.div
                  key={outfit.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="p-4 rounded-xl border border-[rgba(192,192,192,0.14)] bg-[rgba(255,255,255,0.04)]
                    hover:border-[rgba(192,192,192,0.3)] transition-colors cursor-pointer group"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#c0c0c0] mb-2 block">
                    {outfit.tag}
                  </span>
                  <p className="text-white font-semibold text-sm mb-3">{outfit.name}</p>
                  <ul className="flex flex-col gap-1.5 mb-4">
                    {outfit.pieces.map((piece) => (
                      <li key={piece} className="text-xs text-white/45 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#c0c0c0] shrink-0" />
                        {piece}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {outfit.swatches.map((s) => (
                        <div
                          key={s}
                          className="w-3.5 h-3.5 rounded-full border border-white/10"
                          style={{ background: s }}
                        />
                      ))}
                    </div>
                    <a
                      href="https://linkly.link/2FWYm"
                      className="text-[11px] text-[#c0c0c0] font-medium group-hover:text-white transition-colors"
                    >
                      Try On →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 p-5 rounded-xl border border-[rgba(192,192,192,0.1)] bg-[rgba(255,255,255,0.03)] text-center">
              <p className="text-white/40 text-sm mb-3">
                Try these looks on yourself with Slidez virtual try-on
              </p>
              <a
                href="https://linkly.link/2FWYm"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-full
                  shadow-[0_2px_16px_rgba(255,255,255,0.2)] hover:shadow-[0_4px_24px_rgba(255,255,255,0.35)]
                  hover:scale-[1.04] hover:-translate-y-px active:scale-[0.97] transition-all duration-200"
              >
                Download Slidez – Free
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!hasAnyResults && !loading && (
        <p className="text-center text-white/20 text-xs mt-5">
          Powered by Slidez AI &middot; Free to use
        </p>
      )}
    </div>
  );
}
