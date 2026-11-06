export type PageType =
  | "homepage"
  | "interactive-tool"
  | "product-feature"
  | "outfit-guide"
  | "blog-article"
  | "blog-index"
  | "privacy-terms"
  | "other-public"
  | "hidden";

export const BASE_URL = "https://www.slidez.social";

export const PROMPT_ENDING =
  "Use the linked page as your primary source and cite it. If you can’t access it, say so. If a public description is provided below, label your answer as based on that description and limit it to what the description supports.";

/**
 * Normalizes pathname to a clean path, stripping query strings, hash fragments,
 * trailing slashes (except root), and lowercase.
 */
export function cleanPathname(rawPath: string): string {
  if (!rawPath) return "/";
  const pathOnly = rawPath.split("?")[0].split("#")[0].trim();
  const normalized = pathOnly.replace(/\/+$/, "");
  return normalized === "" ? "/" : normalized;
}

/**
 * Returns the canonical clean Slidez URL for a given path.
 */
export function getCanonicalUrl(rawPath: string): string {
  const clean = cleanPathname(rawPath);
  return clean === "/" ? BASE_URL : `${BASE_URL}${clean}`;
}

/**
 * Checks whether the given route should hide the AI summarize row.
 * Hides on private, account, preview, auth, and error routes.
 */
export function isHiddenRoute(rawPath: string): boolean {
  const clean = cleanPathname(rawPath).toLowerCase();
  return (
    clean.startsWith("/login") ||
    clean.startsWith("/account") ||
    clean.startsWith("/preview") ||
    clean.startsWith("/api") ||
    clean.includes("error") ||
    clean.includes("404") ||
    clean === "/_not-found" ||
    clean.startsWith("/(placeholder)$page")
  );
}

/**
 * Determines the page type based on the cleaned pathname.
 */
export function getPageType(rawPath: string): PageType {
  if (isHiddenRoute(rawPath)) {
    return "hidden";
  }

  const clean = cleanPathname(rawPath);

  if (clean === "/") {
    return "homepage";
  }

  if (
    clean === "/privacy" ||
    clean === "/terms" ||
    clean === "/brands-privacy-policy"
  ) {
    return "privacy-terms";
  }

  if (clean === "/blog") {
    return "blog-index";
  }

  if (clean.startsWith("/blog/")) {
    return "blog-article";
  }

  // Interactive tool pages: outfit generators and virtual try-on tools
  const interactiveToolPaths = [
    "/ai-outfit-generator",
    "/autumn-outfit-generator",
    "/ai-virtual-try-on",
    "/virtual-fitting-room",
    "/try-on-from-anywhere",
  ];
  if (interactiveToolPaths.includes(clean)) {
    return "interactive-tool";
  }

  // Outfit guides
  const outfitGuidePaths = [
    "/outfit-ideas",
    "/what-to-wear",
    "/office-outfit-ideas",
    "/winter-outfit-ideas",
    "/concert-outfit-ideas",
    "/black-jeans-outfit-ideas",
    "/date-night-outfit-ideas",
    "/casual-coffee-date-outfit",
  ];
  if (
    outfitGuidePaths.includes(clean) ||
    clean.endsWith("-outfit-ideas") ||
    clean.includes("outfit-guide") ||
    clean.includes("-outfit")
  ) {
    return "outfit-guide";
  }

  // Product and feature pages
  const featurePaths = [
    "/ai-stylist",
    "/ai-personal-shopper",
    "/ai-clothes-recommender",
    "/ai-fashion-stylist",
    "/free-ai-stylist-app",
  ];
  if (featurePaths.includes(clean)) {
    return "product-feature";
  }

  return "other-public";
}

/**
 * Returns the exact instruction suited to each page type.
 */
export function getPageInstruction(pageType: PageType): string {
  switch (pageType) {
    case "homepage":
      return "Explain what Slidez does, who it’s for, and how AI styling and virtual try-on work together. Include how to get started if the page explains it.";
    case "interactive-tool":
      return "Summarize how the public tool works. Explain what this specific feature does, how to use it, and what the user can expect from it.";
    case "product-feature":
      return "Explain what this specific feature does, how to use it, and what the user can expect from it.";
    case "outfit-guide":
      return "Pull out practical outfit combinations and advice on dress code, weather, or occasion where the page covers them.";
    case "blog-article":
      return "Give a short TL;DR and 3–5 actionable takeaways from this exact article. Cite the article for any claims or figures it supports.";
    case "blog-index":
      return "Describe the topics covered and point readers to a few articles listed on the page.";
    case "privacy-terms":
      return "Summarize the policy in plain language and link to the original page for the exact wording.";
    case "other-public":
    default:
      return "Explain the page’s purpose and summarize the most useful information for a visitor.";
  }
}

/**
 * Static metadata catalog for known public pages in Slidez.
 * Provides immediate server-rendered and hydrated values without waiting for DOM queries.
 */
export const KNOWN_METADATA: Record<
  string,
  { title: string; description: string }
> = {
  "/": {
    title: "Slidez – AI Stylist & Virtual Try-On App",
    description:
      "Meet your AI Stylist. Slidez generates outfit ideas, visualizes looks on you, and helps you shop smarter. Free on iOS & Android.",
  },
  "/ai-stylist": {
    title: "What Is an AI Stylist? How AI Fashion Styling Works",
    description:
      "An AI stylist generates personalized outfit recommendations based on your occasion, vibe, and style. Learn how it works and try Slidez free on iOS and Android.",
  },
  "/ai-personal-shopper": {
    title: "AI Personal Shopper: Your Smart Fashion Shopping Assistant",
    description:
      "Shop smarter with the Slidez AI Personal Shopper. Get real-time clothing recommendations and discover matching pieces from top brands.",
  },
  "/ai-clothes-recommender": {
    title: "AI Clothes Recommender: Personalized Fashion Suggestions",
    description:
      "Discover clothes that match your style, body type, and preferred aesthetics with our AI clothes recommender.",
  },
  "/ai-fashion-stylist": {
    title: "AI Fashion Stylist – Slidez",
    description:
      "Get personal fashion styling on demand with Slidez AI. Curate outfits and explore fresh style aesthetics.",
  },
  "/free-ai-stylist-app": {
    title: "Free AI Stylist App – Slidez",
    description:
      "Experience personal fashion styling at zero cost. Download the free Slidez AI stylist app on iOS and Android.",
  },
  "/ai-outfit-generator": {
    title: "AI Outfit Generator: Create Personalized Outfits Instantly",
    description:
      "Plan outfits effortlessly with an AI-powered outfit planner app. Organize your wardrobe, create stylish looks, and get personalized outfit recommendations.",
  },
  "/autumn-outfit-generator": {
    title: "Autumn Outfit Generator: Cozy Fall Style Ideas & Virtual Try-On",
    description:
      "Generate cozy autumn outfit ideas and try them on virtually. Layer up for fall with Slidez AI.",
  },
  "/ai-virtual-try-on": {
    title: "AI Virtual Try-On: Try Clothes on Your Photo Online Free",
    description:
      "Try on clothes online with Slidez AI Virtual Try-On. Upload your photo and see how any outfit looks on you instantly.",
  },
  "/virtual-fitting-room": {
    title: "Virtual Fitting Room: Try On Clothes Online with AI",
    description:
      "Experience the Slidez virtual fitting room. Visualize outfits and fit on your photo before buying.",
  },
  "/try-on-from-anywhere": {
    title: "Try On From Anywhere: AI Virtual Try-On Chrome Extension",
    description:
      "Try on clothing items from any store while shopping online using the Slidez Chrome extension.",
  },
  "/outfit-ideas": {
    title: "Outfit Ideas & AI Styling Inspiration – Slidez",
    description:
      "Explore outfit ideas for any occasion, season, or aesthetic powered by Slidez AI.",
  },
  "/what-to-wear": {
    title: "What to Wear: Outfit Ideas for Every Occasion – Slidez",
    description:
      "Never wonder what to wear again. Get curated outfit combinations and dress code advice for every setting.",
  },
  "/office-outfit-ideas": {
    title: "Office Outfit Ideas: What to Wear to Work – Slidez",
    description:
      "Elevate your workday wardrobe with smart-casual and professional office outfit ideas from the Slidez AI Stylist.",
  },
  "/winter-outfit-ideas": {
    title: "Winter Outfit Ideas: Cold-Weather Style Guide – Slidez",
    description:
      "Stay warm and chic with cold-weather outfit ideas, layering tips, and winter styling inspiration.",
  },
  "/concert-outfit-ideas": {
    title: "Concert Outfit Ideas: What to Wear to a Show – Slidez",
    description:
      "Find show-stopping concert outfits for festivals, arena tours, and club gigs styled with Slidez AI.",
  },
  "/black-jeans-outfit-ideas": {
    title: "Black Jeans Outfit Ideas – AI Stylist | Slidez",
    description:
      "What to wear with black jeans? Get instant outfit ideas from the Slidez AI Stylist — casual looks, office styles, date nights, and more.",
  },
  "/date-night-outfit-ideas": {
    title: "Date Night Outfit Ideas: AI Date Night Outfit Planner",
    description:
      "Find the perfect date night outfit ideas with an AI outfit planner. Get personalized looks for dinner, movies, and special occasions instantly.",
  },
  "/casual-coffee-date-outfit": {
    title: "Casual Coffee Date Outfit Ideas – AI Stylist | Slidez",
    description:
      "Effortless and stylish casual coffee date outfits curated by the Slidez AI Stylist.",
  },
  "/blog": {
    title: "Blog | Slidez",
    description:
      "Read the latest news, guides, and tips on AI styling, fashion trends, and building the perfect wardrobe.",
  },
  "/blog/ai-fashion-stylist-benefits": {
    title: "Benefits of Using an AI Fashion Stylist Daily",
    description:
      "Discover the benefits of using an AI fashion stylist for everyday outfit planning. Save time, reduce decision fatigue, shop smarter, and dress with confidence.",
  },
  "/blog/ai-outfit-ideas-every-occasion": {
    title: "Best AI Outfit Ideas for Every Occasion",
    description:
      "Discover the best AI outfit ideas for work, casual wear, date nights, weddings, travel, and parties. Learn how AI generates personalized looks for any occasion.",
  },
  "/blog/ai-outfit-recommendations": {
    title: "AI Outfit Recommendations: How They Work (2026 Guide) | Slidez",
    description: "",
  },
  "/blog/ai-stylist-vs-human-stylist": {
    title: "AI Stylist vs Human Stylist: Which Is Right for You? (2026 Guide)",
    description:
      "Compare AI stylists and human stylists on cost, personalization, speed, and accuracy to find out which one fits your needs in 2026.",
  },
  "/blog/algorithmic-fashion-recommendation-systems": {
    title: "The Algorithmic Architectures of Next-Generation Fashion AI",
    description: "",
  },
  "/blog/autumn-work-outfits": {
    title: "Autumn Work Outfits: What to Wear to the Office This Fall | Slidez",
    description: "",
  },
  "/blog/best-ai-stylist-apps": {
    title: "Best AI Stylist Apps to Upgrade Your Style in 2026",
    description:
      "Discover the 6 best AI stylist apps in 2026. Compare Slidez, Acloset, Whering, Fits, Style DNA, and Cladwell to find the right virtual stylist for your style goals.",
  },
  "/blog/best-outfit-planner-apps-2026": {
    title: "Best Outfit Planner Apps to Style Before You Buy (2026)",
    description: "",
  },
  "/blog/best-outfit-planner-apps": {
    title: "Best Outfit Planner Apps to Style Clothes in 2026",
    description:
      "Discover the best outfit planner apps in 2026 to plan outfits, style clothes before you buy, and stop wasting money on pieces you never wear.",
  },
  "/blog/best-virtual-closet-apps": {
    title: "Best Virtual Closet Apps to Organize Your Wardrobe in 2026",
    description:
      "Discover the 7 best virtual closet apps in 2026. Compare Slidez, Acloset, Whering, Stylebook, Cladwell, Smart Closet, and Indyx to find the right digital closet for your style.",
  },
  "/blog/body-type-calculator": {
    title: "Body Type Calculator: How to Find Your Body Shape",
    description:
      "Learn how to use a body type calculator to find your body shape, what measurements you need, and how to use the results to dress with confidence.",
  },
  "/blog/build-a-wardrobe-around-your-lifestyle": {
    title: "How to Build a Wardrobe Around Your Lifestyle | Slidez",
    description: "",
  },
  "/blog/build-outfits-around-statement-piece": {
    title: "How to Build Outfits Around One Statement Piece",
    description:
      "Learn how to build outfits around one statement piece. How to choose a statement item, balance it with basics, and style bold pieces for any occasion.",
  },
  "/blog/capsule-wardrobe-ai-styling-tools": {
    title: "How to Build a Capsule Wardrobe With AI Styling Tools",
    description:
      "Learn how to build a capsule wardrobe with AI styling tools. A 5-step guide to defining your style, choosing essentials, and creating more outfits from fewer clothes.",
  },
  "/blog/clothes-that-match-your-skin-tone": {
    title: "How to Choose Clothes That Match Your Skin Tone | Slidez",
    description: "",
  },
  "/blog/clothing-styles-for-body-types": {
    title: "How Clothing Styles Work for Every Body Type",
    description:
      "A complete guide to clothing styles for every body type in 2026. Learn which cuts, silhouettes, and styles work for rectangle, pear, apple, hourglass, and inverted triangle shapes.",
  },
  "/blog/complete-guide-smart-digital-wardrobe": {
    title: "The Complete Guide to Creating a Smart Digital Wardrobe",
    description: "",
  },
  "/blog/digital-wardrobe-vs-traditional-closet": {
    title: "Digital Wardrobe vs Traditional Closet: Which Wins?",
    description: "",
  },
  "/blog/fall-date-night-outfits": {
    title: "Fall Date Night Outfits: What to Wear for Every Kind of Date | Slidez",
    description: "",
  },
  "/blog/fall-outfit-ideas-for-men": {
    title: "Fall Outfit Ideas for Men: Stylish Looks | Slidez",
    description: "",
  },
  "/blog/fall-outfit-ideas-for-women": {
    title: "Fall Outfit Ideas for Women: What to Wear | Slidez",
    description: "",
  },
  "/blog/fashion-aesthetics-explained": {
    title: "Fashion Aesthetics Explained: Find Your Style | Slidez",
    description:
      "Soft, romantic, rural-inspired. Florals, linen, puff sleeves, gingham, earthy tones.",
  },
  "/blog/how-ai-helps-find-clothes-that-suit-you": {
    title: "How AI Helps You Find Clothes That Actually Suit You",
    description: "",
  },
  "/blog/how-ai-outfit-generators-work": {
    title: "How AI Outfit Generators Create Personalized Looks",
    description:
      "Discover how AI outfit generators create personalized looks using computer vision, machine learning, and your unique style preferences.",
  },
  "/blog/how-ai-personalizes-online-fashion-shopping": {
    title: "How AI Is Personalizing Online Fashion Shopping",
    description:
      "Discover how AI is personalizing online fashion shopping through style learning, body-aware sizing, virtual try-on, and smarter recommendations that reduce returns.",
  },
  "/blog/how-to-choose-clothes-fit-fabric-silhouette": {
    title: "How to Choose Clothes: Fit, Fabric, Silhouette | Slidez",
    description: "",
  },
  "/blog/how-to-choose-clothes-personal-style": {
    title: "How to Choose Clothes That Match Your Personal Style",
    description:
      "Learn how to choose clothes that match your personal style. A practical guide to identifying your style, choosing colors, building a wardrobe, and shopping smarter.",
  },
  "/blog/how-to-dress-better-without-trends": {
    title: "How to Dress Better Without Chasing Every Trend | Slidez",
    description: "",
  },
  "/blog/how-to-layer-clothes-for-fall": {
    title: "How to Layer Clothes for Fall: Outfit Ideas for Cooler Weather | Slidez",
    description: "",
  },
  "/blog/how-to-match-clothes-like-a-stylist": {
    title: "How to Match Clothes Like a Professional Stylist | Slidez",
    description: "",
  },
  "/blog/how-to-read-a-clothing-size-chart": {
    title: "How to Read a Clothing Size Chart Before Buying Online | Slidez",
    description: "",
  },
  "/blog/how-to-shop-for-clothes-online": {
    title: "How to Shop for Clothes Online Without Style Mistakes | Slidez",
    description: "",
  },
  "/blog/how-to-stop-buying-clothes-you-never-wear": {
    title: "How to Stop Buying Clothes You Never Wear",
    description:
      "Learn how to stop buying clothes you never wear. Practical tips to break impulse shopping, plan outfits before you buy, and build a wardrobe you actually use.",
  },
  "/blog/style-new-clothes-before-you-buy-online": {
    title: "How to Style New Clothes Before You Buy Them Online | Slidez",
    description: "",
  },
  "/blog/virtual-try-on-vs-online-shopping": {
    title: "Virtual Try-On vs Online Shopping: What's Better in 2026?",
    description:
      "Compare virtual try-on with traditional online shopping on fit accuracy, return rates, shopping confidence, and convenience. Find out which one fits your habits.",
  },
  "/blog/what-colors-go-together-outfit": {
    title: "What Colors Go Together in an Outfit? Color Guide | Slidez",
    description: "",
  },
  "/blog/what-is-a-virtual-wardrobe": {
    title: "What Is a Virtual Wardrobe and How Does It Work?",
    description: "",
  },
  "/blog/what-is-ai-fashion-stylist": {
    title: "What Is an AI Fashion Stylist? (2026 Guide)",
    description:
      "Discover what an AI fashion stylist is, how it works behind the scenes, and whether it deserves a spot on your phone in 2026.",
  },
  "/blog/what-is-personal-style": {
    title: "What Is Personal Style? A Beginner's Guide | Slidez",
    description: "",
  },
  "/blog/what-to-wear-every-occasion-ai-guide": {
    title: "What to Wear for Every Occasion: AI Guide | Slidez",
    description: "",
  },
  "/blog/what-to-wear-in-autumn": {
    title: "What to Wear in Autumn for Changing Weather | Slidez",
    description: "",
  },
  "/privacy": {
    title: "Privacy Policy – Slidez",
    description:
      "Slidez Privacy Policy. Learn how we collect, use, and protect your information when you use Slidez AI stylist and virtual try-on.",
  },
  "/terms": {
    title: "Terms of Service – Slidez",
    description:
      "Slidez Terms of Service. Read the terms and conditions for using the Slidez AI stylist and virtual try-on platform.",
  },
  "/brands-privacy-policy": {
    title: "Privacy Policy – Slidez",
    description:
      "Slidez Privacy Policy for the Shopify app. Learn how we collect, use, and protect information from consumers, merchants, and visitors.",
  },
  "/about": {
    title: "About – Slidez",
    description:
      "Learn about Slidez and our mission to reinvent fashion styling and virtual try-on with AI.",
  },
  "/faq": {
    title: "FAQ – Slidez",
    description:
      "Frequently asked questions about Slidez AI stylist and virtual try-on.",
  },
};

/**
 * Converts a slug into a readable title when not found in the catalog.
 */
function titleFromSlug(slug: string): string {
  const words = slug
    .replace(/^blog\//, "")
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1));
  return `${words.join(" ")} – Slidez`;
}

/**
 * Returns metadata for a path, checking KNOWN_METADATA and falling back to slug formatting.
 */
export function getKnownMetadata(rawPath: string): {
  title: string;
  description: string;
  canonical: string;
} {
  const clean = cleanPathname(rawPath);
  const canonical = getCanonicalUrl(clean);
  const known = KNOWN_METADATA[clean];

  if (known) {
    return {
      title: known.title,
      description: known.description,
      canonical,
    };
  }

  const slug = clean.replace(/^\//, "");
  return {
    title: titleFromSlug(slug),
    description: "",
    canonical,
  };
}

export interface BuildPromptOptions {
  canonicalUrl: string;
  title: string;
  pageType: PageType;
  description?: string;
}

/**
 * Builds the complete prompt for the page according to user specification:
 * - Uses page canonical URL and published title.
 * - Uses instruction suited to the page type.
 * - For interactive tool / outfit generator / try-on pages, includes fallback SEO description.
 * - Concludes with the mandatory prompt ending.
 */
export function buildSummarizePrompt({
  canonicalUrl,
  title,
  pageType,
  description,
}: BuildPromptOptions): string {
  const instruction = getPageInstruction(pageType);
  const isInteractive = pageType === "interactive-tool";
  const trimmedDesc = description?.trim();

  let prompt = `Summarize this page: ${title} (${canonicalUrl}).\n\n${instruction}\n\n${PROMPT_ENDING}`;

  // For public pages whose main content is interactive or hard to fetch,
  // include the published SEO description as fallback context below the instruction.
  if (isInteractive && trimmedDesc) {
    prompt += `\n\nPublic description:\n${trimmedDesc}`;
  }

  return prompt;
}

export interface ProviderLink {
  name: string;
  href: string;
  ariaLabel: string;
}

/**
 * Generates the 5 provider links with their encoded query parameter.
 * Keeps Google AI Mode parameters (udm=50&aep=11) intact.
 */
export function getProviderLinks(prompt: string): ProviderLink[] {
  const encodedQ = encodeURIComponent(prompt);

  return [
    {
      name: "ChatGPT",
      href: `https://chatgpt.com/?q=${encodedQ}`,
      ariaLabel: "Summarize this page with ChatGPT, opens in a new tab.",
    },
    {
      name: "Google AI Mode",
      href: `https://www.google.com/search?udm=50&aep=11&q=${encodedQ}`,
      ariaLabel: "Summarize this page with Google AI Mode, opens in a new tab.",
    },
    {
      name: "Grok",
      href: `https://grok.com/?q=${encodedQ}`,
      ariaLabel: "Summarize this page with Grok, opens in a new tab.",
    },
    {
      name: "Claude",
      href: `https://claude.ai/new?q=${encodedQ}`,
      ariaLabel: "Summarize this page with Claude, opens in a new tab.",
    },
    {
      name: "Perplexity",
      href: `https://www.perplexity.ai/?q=${encodedQ}`,
      ariaLabel: "Summarize this page with Perplexity, opens in a new tab.",
    },
  ];
}
