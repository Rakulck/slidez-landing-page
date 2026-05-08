"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Sparkles, ArrowRight, X, Upload } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  analyzeClothingImageCallable,
  analyzeOutfitIntentCallable,
  detectPersonGenderCallable,
  ensureAnonymousUserId,
  executeMultiItemTryOnCallable,
  fetchOutfitProductsCallable,
  fetchImageBase64,
  setupPersonPhoto,
} from "@/lib/slidezCallableFunctions";

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

  const tick = useCallback(function tick() {
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

/* ── Readymade prompts for chips ──────────────────────────────── */
const CHIP_PROMPTS: Record<string, string> = {
  Casual:       "Going out for a casual day with friends",
  Office:       "Going to the office, business casual look",
  "Date Night": "Going on a date night, make it stylish and special",
  Winter:       "Winter outfit, cosy and warm but still stylish",
  Party:        "Going to a party, make it fun and bold",
  Vacation:     "Going on a vacation, resort chic and relaxed",
  Beach:        "Going to the beach, light and breezy",
};


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

type TryOnCard = {
  category: string;
  resultImageUrl: string;
};

type ProductInfo = {
  category: string;
  name: string;
  imageUrl: string | null;
  productLink: string | null;
};

function ProductCard({ item }: { item: ProductInfo }) {
  const CardContent = (
    <>
      {item.imageUrl ? (
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-11 h-11 rounded-lg object-cover shrink-0 border border-white/[0.06]"
        />
      ) : (
        <div className="w-11 h-11 rounded-lg bg-[rgba(192,192,192,0.08)] shrink-0 flex items-center justify-center">
          <span className="text-[9px] font-bold text-white/20 uppercase">{item.category.slice(0, 1)}</span>
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-semibold text-white/80 leading-tight line-clamp-2">{item.name}</p>
        <p className="text-[9px] text-white/30 mt-0.5 uppercase tracking-wide truncate">{item.category}</p>
      </div>
      <ArrowRight className="w-3 h-3 text-white/25 shrink-0" />
    </>
  );

  if (item.productLink) {
    return (
      <motion.a
        href={item.productLink}
        target="_blank"
        rel="noopener noreferrer"
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-2.5 w-full p-2.5 rounded-xl border border-[rgba(192,192,192,0.12)] bg-[rgba(255,255,255,0.03)] hover:border-[rgba(192,192,192,0.28)] hover:bg-[rgba(255,255,255,0.06)] transition-colors text-left cursor-pointer"
      >
        {CardContent}
      </motion.a>
    );
  }

  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      className="flex items-center gap-2.5 w-full p-2.5 rounded-xl border border-[rgba(192,192,192,0.12)] bg-[rgba(255,255,255,0.03)] text-left"
    >
      {CardContent}
    </motion.div>
  );
}

const OVERLAY_CONTAINER_VARIANTS = {
  hidden: {},
  show: { transition: { staggerChildren: 0.32, delayChildren: 0.2 } },
};
const OVERLAY_CARD_VARIANTS = (i: number) => ({
  hidden: { x: i % 2 === 0 ? -70 : 70, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
});

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
  const [showModelPicker, setShowModelPicker] = useState(false);
  const [pickerStep,      setPickerStep]      = useState<"gender" | "models">("gender");
  const [pickerGender,    setPickerGender]    = useState<Gender | null>(null);
  const [showOutfitDialog, setShowOutfitDialog] = useState(false);
  const [outfitImagePreview, setOutfitImagePreview] = useState<string | null>(null);
  const [outfitImageBase64, setOutfitImageBase64] = useState<string | null>(null);
  const [outfitImageMimeType, setOutfitImageMimeType] = useState<string>("image/jpeg");
  const [showIconTooltip, setShowIconTooltip] = useState(false);
  const [tryOnItems, setTryOnItems] = useState<TryOnCard[]>([]);
  const [tryOnFinalImageUrl, setTryOnFinalImageUrl] = useState<string | null>(null);
  const [tryOnStage, setTryOnStage] = useState<string | null>(null);
  const [tryOnError, setTryOnError] = useState<string | null>(null);
  const [selectedModelSrc, setSelectedModelSrc] = useState<string | null>(null);
  const [productItems, setProductItems] = useState<ProductInfo[]>([]);
  const outfitFileRef = useRef<HTMLInputElement>(null);
  const photoFileRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const tryOnRunSeqRef = useRef(0);

  // Auto-show tooltip on mount, dismiss after 4s
  useEffect(() => {
    const show = setTimeout(() => setShowIconTooltip(true), 1200);
    const hide = setTimeout(() => setShowIconTooltip(false), 5000);
    return () => { clearTimeout(show); clearTimeout(hide); };
  }, []);
  const placeholder = useTypewriter(!input && !results && tryOnItems.length === 0 && !showModelPicker, prompts);


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
    const prompt = CHIP_PROMPTS[chip] ?? chip;
    setInput(prompt);
    setActiveChip(chip);
    setChipResults(null);
    setResults(false);
    setShowModelPicker(false);
    setQuery(prompt);
    setTryOnItems([]);
    setTryOnFinalImageUrl(null);
    setTryOnError(null);
    setTryOnStage(null);
    setProductItems([]);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowModelPicker(true);
    }, 250);
  };

  const handleSubmit = () => {
    if (!input.trim() || loading) return;
    setQuery(input.trim());
    setChipResults(null);
    setActiveChip(null);
    setResults(false);
    setShowModelPicker(false);
    setTryOnItems([]);
    setTryOnFinalImageUrl(null);
    setTryOnError(null);
    setTryOnStage(null);
    setProductItems([]);
    setLoading(true);
    setTimeout(() => { setLoading(false); setShowModelPicker(true); }, 250);
  };

  async function generateTryOn(args: { prompt: string; selectedGender: Gender; userProvidedItems?: Array<{ category: string; imageBase64: string; mimeType?: string }> }) {
    const runSeq = ++tryOnRunSeqRef.current;
    setResults(false);
    setTryOnItems([]);
    setTryOnFinalImageUrl(null);
    setTryOnError(null);

    if (!args.prompt.trim()) {
      setTryOnError("Please enter an occasion prompt first.");
      setResults(true);
      return;
    }

    setLoading(true);
    setTryOnStage("Analyzing your style...");

    try {
      const userId = await ensureAnonymousUserId();

      // If user attached an outfit image, analyze it now as part of the flow
      let analyzedImages: Array<{ category: string; color?: string; style?: string }> | undefined;
      if (outfitImageBase64) {
        try {
          setTryOnStage("Analyzing your outfit image...");
          const result = await analyzeClothingImageCallable({ imageBase64: outfitImageBase64, mimeType: outfitImageMimeType, analyzeAll: true });
          if (Array.isArray(result) && result.length > 0) {
            analyzedImages = result as typeof analyzedImages;
          } else if (result && typeof result === "object" && "items" in result && Array.isArray((result as { items: unknown[] }).items)) {
            analyzedImages = (result as { items: typeof analyzedImages }).items;
          }
        } catch {
          // Analysis failed — continue without outfit context
        }
        if (runSeq !== tryOnRunSeqRef.current) return;
        setTryOnStage("Analyzing your style...");
      }

      const intent = await analyzeOutfitIntentCallable({
        prompt: args.prompt,
        gender: args.selectedGender,
        analyzedImages,
      });

      if (runSeq !== tryOnRunSeqRef.current) return;

      setTryOnStage("Finding matching outfits...");
      const products = (await fetchOutfitProductsCallable({
        intent,
        productsPerCategory: 3,
        userId,
      })) as { recommendations?: unknown[] };

      const recommendations = Array.isArray(products.recommendations) ? products.recommendations : [];

      console.log("🔍 DEBUG: recommendations length", recommendations.length);
      if (recommendations.length > 0) {
        const first = recommendations[0] as Record<string, unknown>;
        console.log("🔍 DEBUG: first rec category", first["category"]);
        console.log("🔍 DEBUG: first rec products", first["products"]);
      }

      const productInfos: ProductInfo[] = recommendations.flatMap((rec) => {
        const r = rec as Record<string, unknown>;
        const category = (typeof r["category"] === "string" ? r["category"] : null) ?? "Product";
        const nested = Array.isArray(r["products"]) ? r["products"] : [];
        if (nested.length === 0) {
          // flat structure fallback
          const str = (k: string) => (typeof r[k] === "string" ? (r[k] as string) : null);
          return [{
            category,
            name: str("name") ?? str("title") ?? str("productName") ?? category,
            imageUrl: str("imageUrl") ?? str("image") ?? str("thumbnail") ?? str("productImageUrl"),
            productLink: str("productLink") ?? str("link") ?? str("url") ?? str("sourceUrl") ?? str("productUrl") ?? str("shopUrl"),
          }];
        }
        return nested.slice(0, 1).map((prod) => {
          const p = prod as Record<string, unknown>;
          const str = (k: string) => (typeof p[k] === "string" ? (p[k] as string) : null);
          return {
            category,
            name: str("name") ?? str("title") ?? str("productName") ?? category,
            imageUrl: str("imageUrl") ?? str("image") ?? str("thumbnail") ?? str("productImageUrl"),
            productLink: str("productLink") ?? str("link") ?? str("url") ?? str("sourceUrl") ?? str("productUrl") ?? str("shopUrl"),
          };
        });
      });
      console.log("🔍 DEBUG: productInfos extracted", productInfos);
      setProductItems(productInfos);

      if (runSeq !== tryOnRunSeqRef.current) return;

      setTryOnStage("Generating your try-on images...");
      const tryOn = (await executeMultiItemTryOnCallable({
        recommendations,
        userId,
        userProvidedItems: args.userProvidedItems,
      })) as { finalImageUrl?: unknown; itemResults?: unknown[] };

      if (runSeq !== tryOnRunSeqRef.current) return;

      const finalImageUrl = typeof tryOn.finalImageUrl === "string" ? tryOn.finalImageUrl : null;

      const itemResults: unknown[] = Array.isArray(tryOn.itemResults) ? tryOn.itemResults : [];

      const cards: TryOnCard[] = itemResults
        .map((it) => {
          const itObj = it as Record<string, unknown>;
          const resultImageUrl =
            typeof itObj?.resultImageUrl === "string" ? itObj.resultImageUrl : null;
          if (!resultImageUrl) return null;
          return {
            category: typeof itObj?.category === "string" ? itObj.category : "Outfit",
            resultImageUrl,
          } satisfies TryOnCard;
        })
        .filter(Boolean) as TryOnCard[];

      setTryOnFinalImageUrl(finalImageUrl);
      setTryOnItems(cards);
      setTryOnStage(null);
      setResults(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to generate your try-on. Please try again.";
      setTryOnError(message);
      setTryOnStage(null);
      setTryOnItems([]);
      setResults(true); // Show fallback UI if the pipeline fails.
    } finally {
      if (runSeq === tryOnRunSeqRef.current) setLoading(false);
    }
  }

  const handleModelPick = async (g: Gender, modelSrc: string) => {
    setGender(g);
    setShowModelPicker(false);
    setPickerStep("gender");
    setPickerGender(null);
    const prompt = (query || input).trim();
    setLoading(true);
    setTryOnStage("Setting up model...");
    try {
      setSelectedModelSrc(modelSrc);
      const { imageBase64, mimeType } = await fetchImageBase64(modelSrc);
      const userId = await ensureAnonymousUserId();
      await setupPersonPhoto(userId, imageBase64, mimeType);
    } catch {
      // If setup fails, continue anyway — backend may still have a photo
    }
    await generateTryOn({ prompt, selectedGender: g });
  };

  const handlePhotoUpload = () => {
    photoFileRef.current?.click();
  };

  const handlePhotoFileChange = async () => {
    const file_ = photoFileRef.current?.files?.[0] ?? null;
    if (!file_) return;

    setShowModelPicker(false);
    setTryOnItems([]);
    setTryOnFinalImageUrl(null);
    setTryOnStage(null);
    setTryOnError(null);

    const prompt = (query || input).trim();
    setLoading(true);
    setTryOnStage("Detecting gender from photo...");

    try {
      const dataUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result));
        reader.onerror = () => reject(new Error("Failed to read image."));
        reader.readAsDataURL(file_);
      });
      const commaIdx = dataUrl.indexOf(",");
      const imageBase64 = commaIdx >= 0 ? dataUrl.slice(commaIdx + 1) : dataUrl;
      const mimeType = file_.type || "image/jpeg";
      setSelectedModelSrc(dataUrl);

      const detected = await detectPersonGenderCallable({ imageBase64, mimeType });
      const mappedGender: Gender | null = detected === "male" ? "Men" : detected === "female" ? "Women" : null;
      if (!mappedGender) throw new Error("Could not detect gender from your photo. Please try a clearer photo.");

      setGender(mappedGender);
      setTryOnStage("Uploading your photo...");

      const userId = await ensureAnonymousUserId();
      await setupPersonPhoto(userId, imageBase64, mimeType);

      await generateTryOn({ prompt, selectedGender: mappedGender });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to process your photo. Please try again.";
      setTryOnError(message);
      setTryOnStage(null);
      setResults(true);
    } finally {
      setLoading(false);
    }
  };

  const handleOutfitFileChange = async () => {
    const file = outfitFileRef.current?.files?.[0] ?? null;
    if (!file) return;
    const dataUrl = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = () => reject(new Error("Failed to read image."));
      reader.readAsDataURL(file);
    });
    const commaIdx = dataUrl.indexOf(",");
    const imageBase64 = commaIdx >= 0 ? dataUrl.slice(commaIdx + 1) : dataUrl;
    const mimeType = file.type || "image/jpeg";
    setOutfitImageBase64(imageBase64);
    setOutfitImageMimeType(mimeType);
    setOutfitImagePreview(URL.createObjectURL(file));
    setShowOutfitDialog(false);
  };

  const handleReset = () => {
    setInput("");
    setResults(false);
    setLoading(false);
    setQuery("");
    setChipResults(null);
    setActiveChip(null);
    setShowModelPicker(false);
    setTryOnItems([]);
    setTryOnFinalImageUrl(null);
    setTryOnStage(null);
    setTryOnError(null);
    setSelectedModelSrc(null);
    setOutfitImageBase64(null);
    setOutfitImageMimeType("image/jpeg");
    setOutfitImagePreview(null);
    setProductItems([]);
    inputRef.current?.focus();
  };

  const hasAnyResults = results || tryOnItems.length > 0 || chipResults !== null || showModelPicker;

  return (
    <div className="w-full max-w-2xl mx-auto">

      {/* ── Input box (single line pill) ─────────────────────────── */}
      <div className="relative" style={{ isolation: "isolate" }}>
        <div
          className={`flex items-center gap-3 px-5 py-3.5 rounded-full border transition-all duration-300 ${
            hasAnyResults
              ? "border-[rgba(192,192,192,0.3)] bg-[rgba(255,255,255,0.05)]"
              : "border-[rgba(192,192,192,0.18)] bg-[rgba(255,255,255,0.03)] focus-within:border-[rgba(192,192,192,0.42)] focus-within:bg-[rgba(255,255,255,0.05)]"
          }`}
        >

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
            className="flex-1 bg-transparent text-white text-base outline-none placeholder:text-white/25 min-w-0"
            suppressHydrationWarning
          />
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
                <X className="w-3.5 h-3.5" />
              </motion.button>
            )}
          </AnimatePresence>
          <button
            onClick={handleSubmit}
            disabled={!input.trim() || loading}
            aria-label={submitLabel}
            className="shrink-0 w-8 h-8 rounded-full gradient-silver flex items-center justify-center disabled:opacity-25 hover:opacity-85 transition-opacity"
          >
            {loading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="w-3.5 h-3.5 rounded-full border-2 border-black border-t-transparent"
              />
            ) : (
              <Sparkles className="w-3.5 h-3.5 text-black" />
            )}
          </button>
        </div>
        {/* Blinking cursor on typewriter */}
        {!input && !results && !chipResults && (
          <span
            className="absolute left-[3.25rem] top-1/2 -translate-y-1/2 w-px h-4 pointer-events-none"
            style={{ marginLeft: `${placeholder.length * 7.2}px` }}
          >
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
              className="block w-full h-full bg-white/30"
            />
          </span>
        )}

        {/* ── Outfit upload popover (above input box) ──────────────── */}
        <AnimatePresence>
          {showOutfitDialog && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="fixed inset-0 z-[40]"
                onClick={() => setShowOutfitDialog(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-[calc(100%+12px)] left-0 z-[50] w-1/5 min-w-[200px]"
              >
                <div className="relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[rgba(14,14,14,0.97)] backdrop-blur-2xl shadow-[0_32px_64px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.04),inset_0_1px_0_rgba(255,255,255,0.08)]">
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(192,192,192,0.2)] to-transparent" />
                  <div className="flex items-center justify-between px-3.5 pt-3.5 pb-2.5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-md bg-[rgba(192,192,192,0.08)] flex items-center justify-center">
                        <Image src="/tshirt.svg" alt="outfit" width={11} height={11} className="opacity-70" />
                      </div>
                      <p className="text-[11px] font-semibold text-white/75 tracking-tight">Style with outfit</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setShowOutfitDialog(false)}
                      className="w-5 h-5 rounded-md flex items-center justify-center text-white/20 hover:text-white/50 hover:bg-white/[0.06] transition-all"
                    >
                      <X className="w-3 h-3" />
                    </motion.button>
                  </div>
                  <div className="h-px bg-[rgba(255,255,255,0.05)] mx-3.5" />

                  {/* Attached preview */}
                  {outfitImagePreview && (
                    <div className="mx-3.5 mt-3 mb-1 flex items-center gap-2 p-2 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.04]">
                      <img
                        src={outfitImagePreview}
                        alt="Outfit reference"
                        className="w-10 h-10 rounded-lg object-cover border border-white/10 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-semibold text-emerald-400 leading-tight">Outfit attached</p>
                        <p className="text-[9px] text-white/30 mt-0.5">AI will style around this</p>
                      </div>
                      <button
                        onClick={() => { setOutfitImageBase64(null); setOutfitImagePreview(null); }}
                        className="shrink-0 text-white/20 hover:text-white/50 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  )}

                  <div className="p-3.5">
                    <input ref={outfitFileRef} type="file" accept="image/*" className="hidden" onChange={handleOutfitFileChange} />
                    <motion.button
                      whileHover={{ scale: 1.01, borderColor: "rgba(192,192,192,0.3)" }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => outfitFileRef.current?.click()}
                      className="flex flex-col items-center gap-1.5 w-full rounded-xl border border-dashed border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.04)] px-3 py-3 transition-colors duration-200"
                    >
                      <div className="w-6 h-6 rounded-lg bg-[rgba(192,192,192,0.07)] flex items-center justify-center">
                        <svg className="w-3 h-3 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                      </div>
                      <span className="text-[10px] text-white/35 font-medium leading-tight text-center">
                        {outfitImagePreview ? "Replace image" : "Upload from computer"}
                      </span>
                    </motion.button>
                  </div>

                  <div className="absolute -bottom-[5px] left-5 w-2.5 h-2.5 rotate-45 border-r border-b border-[rgba(255,255,255,0.08)] bg-[#0e0e0e]" />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
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

      {/* ── Model picker (shown after submit, before results) ────── */}
      <AnimatePresence>
        {showModelPicker && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-sm mx-auto"
          >
            <input ref={photoFileRef} type="file" accept="image/*" className="hidden" onChange={handlePhotoFileChange} />

            <AnimatePresence mode="wait">
              {pickerStep === "gender" ? (

                /* ── Step 1: Gender ── */
                <motion.div
                  key="picker-gender"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-3"
                >
                  <p className="text-xs text-white/35 uppercase tracking-widest mb-1 font-medium text-center">
                    Who&apos;s wearing it?
                  </p>
                  {(["Women", "Men"] as const).map((g) => (
                    <motion.button
                      key={g}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => { setPickerGender(g); setPickerStep("models"); }}
                      className="group flex items-center justify-between w-full px-5 py-4 rounded-xl border border-[rgba(192,192,192,0.12)] bg-[rgba(255,255,255,0.03)] hover:border-[rgba(192,192,192,0.4)] hover:bg-[rgba(255,255,255,0.06)] transition-all duration-200 cursor-pointer"
                    >
                      <span className="text-[15px] font-semibold text-white/80 group-hover:text-white transition-colors">{g}</span>
                      <svg className="w-4 h-4 text-white/25 group-hover:text-white/60 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  ))}
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-px bg-[rgba(192,192,192,0.08)]" />
                    <span className="text-[9px] text-white/20 uppercase tracking-widest">or use your photo</span>
                    <div className="flex-1 h-px bg-[rgba(192,192,192,0.08)]" />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                    onClick={handlePhotoUpload}
                    className="group flex items-center gap-3 w-full rounded-xl border border-dashed border-[rgba(192,192,192,0.3)] bg-[rgba(255,255,255,0.03)] hover:border-[rgba(192,192,192,0.6)] hover:bg-[rgba(255,255,255,0.07)] px-4 py-3 transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[rgba(255,255,255,0.07)] group-hover:bg-[rgba(255,255,255,0.12)] transition-colors flex-shrink-0">
                      <Upload className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-[13px] font-semibold text-white leading-tight">Upload Your Photo</p>
                      <p className="text-[10px] text-white/45 mt-0.5">Auto-detects gender</p>
                    </div>
                  </motion.button>
                </motion.div>

              ) : (

                /* ── Step 2: 2 model cards ── */
                <motion.div
                  key={`picker-models-${pickerGender}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-3"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <button
                      onClick={() => setPickerStep("gender")}
                      className="flex items-center gap-1 text-white/40 hover:text-white/80 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                      <span className="text-[11px] font-medium">Back</span>
                    </button>
                    <p className="text-xs text-white/35 uppercase tracking-widest font-medium ml-auto">
                      Pick a model
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {({
                      Women: [
                        { id: "blonde-woman",   src: "/models/blonde-woman.png"   },
                        { id: "brunette-woman", src: "/models/brunette-woman.png" },
                      ],
                      Men: [
                        { id: "blonde-white-man", src: "/models/blonde-white-man.png" },
                        { id: "black-man",        src: "/models/black-man.png"        },
                      ],
                    }[pickerGender ?? "Men"]).map((model, i) => (
                      <motion.button
                        key={model.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: i * 0.07 }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => handleModelPick(pickerGender ?? "Men", model.src)}
                        className="group relative rounded-xl overflow-hidden border border-[rgba(192,192,192,0.12)] hover:border-[rgba(192,192,192,0.45)] transition-all duration-200 cursor-pointer"
                      >
                        <div className="relative w-full h-[160px]">
                          <Image src={model.src} alt="model" fill className="object-cover object-top" sizes="160px" />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                    onClick={handlePhotoUpload}
                    className="group flex items-center gap-3 w-full rounded-xl border border-dashed border-[rgba(192,192,192,0.3)] bg-[rgba(255,255,255,0.03)] hover:border-[rgba(192,192,192,0.6)] hover:bg-[rgba(255,255,255,0.07)] px-4 py-3 transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[rgba(255,255,255,0.07)] group-hover:bg-[rgba(255,255,255,0.12)] transition-colors flex-shrink-0">
                      <Upload className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-[13px] font-semibold text-white leading-tight">Upload Your Photo</p>
                      <p className="text-[10px] text-white/45 mt-0.5">Auto-detects gender</p>
                    </div>
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {loading && !showModelPicker && !results && (
          <motion.div
            key="loading-block"
            className="mt-6"
            exit={{ x: 90, opacity: 0, transition: { duration: 0.45, ease: [0.4, 0, 1, 1] } }}
          >
            {selectedModelSrc ? (
              <div className="relative max-w-[280px] mx-auto">
                {/* Inner div keeps overflow-hidden for image rounded corners */}
                <div className="rounded-2xl overflow-hidden border border-[rgba(192,192,192,0.15)]">
                  <motion.img
                    src={selectedModelSrc}
                    alt="Selected model"
                    className="w-full h-auto block"
                    animate={{
                      filter: [
                        "blur(6px) brightness(0.75)",
                        "blur(2px) brightness(1.08)",
                        "blur(6px) brightness(0.75)",
                      ],
                      scale: [1.05, 1.07, 1.05],
                    }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  {/* Loading pill overlay at the top of the image */}
                  <div className="absolute inset-x-0 top-0 flex justify-center pt-4 z-10">
                    <div
                      className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10"
                      style={{ background: "rgba(0,0,0,0.72)", backdropFilter: "blur(10px)" }}
                    >
                      <motion.span
                        animate={{ opacity: [0.35, 1, 0.35] }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                        className="block w-1.5 h-1.5 rounded-full bg-[#c0c0c0] shrink-0"
                      />
                      <span className="text-[11px] text-white/70 font-medium whitespace-nowrap">
                        {tryOnStage ?? "Generating try-on…"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Product cards overlaid over the blurred image, outside overflow-hidden so they can slide from sides */}
                <AnimatePresence>
                  {productItems.length > 0 && (
                    <motion.div
                      key="overlay-cards"
                      className="absolute inset-x-2 bottom-2 z-20 flex flex-col gap-1"
                      variants={OVERLAY_CONTAINER_VARIANTS}
                      initial="hidden"
                      animate="show"
                    >
                      {productItems.map((item, i) => (
                        <motion.div
                          key={i}
                          variants={OVERLAY_CARD_VARIANTS(i)}
                          className="relative"
                        >
                          {item.productLink ? (
                            <a
                              href={item.productLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-2.5 py-2 rounded-xl border border-white/10 bg-[rgba(10,10,10,0.78)] hover:bg-[rgba(20,20,20,0.85)] hover:border-white/20 transition-all cursor-pointer"
                              style={{ backdropFilter: "blur(8px)" }}
                            >
                              {item.imageUrl ? (
                                <img
                                  src={item.imageUrl}
                                  alt={item.name}
                                  className="w-8 h-8 rounded-lg object-cover shrink-0 border border-white/[0.06]"
                                />
                              ) : (
                                <div className="w-8 h-8 rounded-lg bg-white/5 shrink-0 flex items-center justify-center">
                                  <span className="text-[8px] font-bold text-white/20 uppercase">{item.category.slice(0, 1)}</span>
                                </div>
                              )}
                              <div className="flex-1 min-w-0">
                                <p className="text-[10px] font-semibold text-white/80 leading-tight line-clamp-1">{item.name}</p>
                                <p className="text-[8px] text-white/30 uppercase tracking-wide truncate">{item.category}</p>
                              </div>
                            </a>
                          ) : (
                            <div
                              className="flex items-center gap-2 px-2.5 py-2 rounded-xl border border-white/10 bg-[rgba(10,10,10,0.78)]"
                              style={{ backdropFilter: "blur(8px)" }}
                            >
                              {item.imageUrl ? (
                                <img
                                  src={item.imageUrl}
                                  alt={item.name}
                                  className="w-8 h-8 rounded-lg object-cover shrink-0 border border-white/[0.06]"
                                />
                              ) : (
                                <div className="w-8 h-8 rounded-lg bg-white/5 shrink-0 flex items-center justify-center">
                                  <span className="text-[8px] font-bold text-white/20 uppercase">{item.category.slice(0, 1)}</span>
                                </div>
                              )}
                              <div className="flex-1 min-w-0">
                                <p className="text-[10px] font-semibold text-white/80 leading-tight line-clamp-1">{item.name}</p>
                                <p className="text-[8px] text-white/30 uppercase tracking-wide truncate">{item.category}</p>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="text-center text-white/35 text-xs uppercase tracking-widest">
                {tryOnStage ?? "Generating..."}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

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

                    <div className="mt-8 text-center">
              <p className="text-white/55 text-sm mb-1 leading-snug">
                See it on you — not a hanger
              </p>
              <p className="text-white/30 text-xs mb-6 leading-relaxed">
                Upload your photo and try any outfit instantly.
              </p>
              <a
                href="https://linkly.link/2FWYm"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black text-sm font-semibold rounded-full
                  shadow-[0_2px_16px_rgba(255,255,255,0.28),0_1px_4px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.9)]
                  hover:shadow-[0_4px_24px_rgba(255,255,255,0.45)] hover:scale-[1.05] hover:-translate-y-px
                  active:scale-[0.97] transition-all duration-200"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download App Free
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

            {tryOnFinalImageUrl && (
              <motion.div
                className={`mb-8 ${productItems.length > 0 ? "flex gap-4 items-start" : "flex justify-center"}`}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={`relative group cursor-pointer shrink-0 ${productItems.length > 0 ? "w-[55%]" : "w-full max-w-[300px]"}`}>
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
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 border border-white/10"
                      style={{ backdropFilter: "blur(12px)" }}>
                      <Sparkles className="w-2.5 h-2.5 text-white/60" />
                      <span className="text-[9px] font-semibold text-white/60 tracking-[0.15em] uppercase">Your Look</span>
                    </div>

                    {/* Image */}
                    <img
                      src={tryOnFinalImageUrl}
                      alt="Generated try-on preview"
                      className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.02]"
                      loading="lazy"
                    />

                    {/* Bottom glass overlay */}
                    <div className="absolute bottom-0 inset-x-0 px-4 pt-10 pb-4 bg-gradient-to-t from-black/75 via-black/30 to-transparent">
                      <p className="text-[9px] text-white/40 uppercase tracking-[0.14em] mb-0.5">AI Try-On</p>
                      <p className="text-[11px] font-medium text-white/80 truncate">{query}</p>
                    </div>
                  </div>
                </div>

                {productItems.length > 0 && (
                  <div className="flex-1 flex flex-col gap-2 min-w-0">
                    <p className="text-[9px] text-white/25 uppercase tracking-widest mb-1 font-medium">
                      Items tried on
                    </p>
                    {productItems.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <ProductCard
                          item={item}
                        />
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {tryOnError && (
              <p className="text-center text-[11px] text-red-400/90 mb-4">
                {tryOnError}
              </p>
            )}


                    <div className="mt-8 text-center">
              <p className="text-white/55 text-sm mb-1 leading-snug">
                See it on you — not a hanger
              </p>
              <p className="text-white/30 text-xs mb-6 leading-relaxed">
                Upload your photo and try any outfit instantly.
              </p>
              <a
                href="https://linkly.link/2FWYm"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black text-sm font-semibold rounded-full
                  shadow-[0_2px_16px_rgba(255,255,255,0.28),0_1px_4px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.9)]
                  hover:shadow-[0_4px_24px_rgba(255,255,255,0.45)] hover:scale-[1.05] hover:-translate-y-px
                  active:scale-[0.97] transition-all duration-200"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download App Free
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
