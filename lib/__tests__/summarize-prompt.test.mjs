import assert from "node:assert/strict";
import {
  cleanPathname,
  getCanonicalUrl,
  getPageType,
  getPageInstruction,
  getKnownMetadata,
  buildSummarizePrompt,
  getProviderLinks,
  isHiddenRoute,
  PROMPT_ENDING,
} from "../summarize-prompt.ts";

console.log("Starting AI Summarize Prompt tests...\n");

// 1. Mandatory ending check
const EXPECTED_ENDING =
  "Use the linked page as your primary source and cite it. If you can’t access it, say so. If a public description is provided below, label your answer as based on that description and limit it to what the description supports.";
assert.equal(PROMPT_ENDING, EXPECTED_ENDING, "PROMPT_ENDING must match spec verbatim");

// 2. Hidden routes check
assert.equal(isHiddenRoute("/login"), true);
assert.equal(isHiddenRoute("/login?redirect=/blog"), true);
assert.equal(isHiddenRoute("/account"), true);
assert.equal(isHiddenRoute("/account/profile"), true);
assert.equal(isHiddenRoute("/preview"), true);
assert.equal(isHiddenRoute("/preview/draft-post"), true);
assert.equal(isHiddenRoute("/api/mcp"), true);
assert.equal(isHiddenRoute("/_not-found"), true);
assert.equal(isHiddenRoute("/error"), true);
assert.equal(isHiddenRoute("/404"), true);
assert.equal(getPageType("/login"), "hidden");
console.log("✓ Hidden routes check passed");

// 3. Clean URL & Canonical Slidez URL checks
assert.equal(cleanPathname("/"), "/");
assert.equal(cleanPathname("///"), "/");
assert.equal(cleanPathname("/blog/"), "/blog");
assert.equal(cleanPathname("/blog/how-ai-outfit-generators-work?foo=bar#section"), "/blog/how-ai-outfit-generators-work");
assert.equal(getCanonicalUrl("/"), "https://www.slidez.social");
assert.equal(getCanonicalUrl("/blog/post?query=123#frag"), "https://www.slidez.social/blog/post");
console.log("✓ Canonical URL normalization check passed");

// 4. Test the 6 required page types
const testPages = [
  {
    name: "Homepage",
    path: "/",
    expectedType: "homepage",
    expectedInstruction:
      "Explain what Slidez does, who it’s for, and how AI styling and virtual try-on work together. Include how to get started if the page explains it.",
    shouldHaveFallbackDescription: false,
  },
  {
    name: "Feature Page",
    path: "/ai-stylist",
    expectedType: "product-feature",
    expectedInstruction:
      "Explain what this specific feature does, how to use it, and what the user can expect from it.",
    shouldHaveFallbackDescription: false,
  },
  {
    name: "Outfit Guide",
    path: "/date-night-outfit-ideas",
    expectedType: "outfit-guide",
    expectedInstruction:
      "Pull out practical outfit combinations and advice on dress code, weather, or occasion where the page covers them.",
    shouldHaveFallbackDescription: false,
  },
  {
    name: "Blog Article",
    path: "/blog/how-ai-outfit-generators-work",
    expectedType: "blog-article",
    expectedInstruction:
      "Give a short TL;DR and 3–5 actionable takeaways from this exact article. Cite the article for any claims or figures it supports.",
    shouldHaveFallbackDescription: false,
  },
  {
    name: "Legal Page",
    path: "/privacy",
    expectedType: "privacy-terms",
    expectedInstruction:
      "Summarize the policy in plain language and link to the original page for the exact wording.",
    shouldHaveFallbackDescription: false,
  },
  {
    name: "Interactive Tool Page",
    path: "/ai-outfit-generator",
    expectedType: "interactive-tool",
    expectedInstruction:
      "Summarize how the public tool works. Explain what this specific feature does, how to use it, and what the user can expect from it.",
    shouldHaveFallbackDescription: true,
  },
];

for (const tp of testPages) {
  const meta = getKnownMetadata(tp.path);
  const type = getPageType(tp.path);
  assert.equal(type, tp.expectedType, `${tp.name} should have type ${tp.expectedType}`);

  const instruction = getPageInstruction(type);
  assert.equal(instruction, tp.expectedInstruction, `${tp.name} instruction match`);

  const prompt = buildSummarizePrompt({
    canonicalUrl: meta.canonical,
    title: meta.title,
    pageType: type,
    description: meta.description,
  });

  // Verify prompt begins with title and canonical URL
  assert.ok(prompt.startsWith(`Summarize this page: ${meta.title} (${meta.canonical}).`), `${tp.name} prompt header`);
  assert.ok(prompt.includes(instruction), `${tp.name} prompt instruction`);
  assert.ok(prompt.includes(PROMPT_ENDING), `${tp.name} prompt ending text`);

  if (tp.shouldHaveFallbackDescription) {
    assert.ok(prompt.includes("Public description:\n"), `${tp.name} should include fallback context`);
    assert.ok(prompt.includes(meta.description), `${tp.name} should include SEO description`);
  } else {
    assert.equal(prompt.includes("Public description:"), false, `${tp.name} should not have fallback context`);
    assert.ok(prompt.endsWith(PROMPT_ENDING), `${tp.name} should end with mandatory prompt ending`);
  }

  // Verify provider links
  const links = getProviderLinks(prompt);
  assert.equal(links.length, 5, "5 provider links");

  const [chatgpt, google, grok, claude, perplexity] = links;

  assert.equal(chatgpt.name, "ChatGPT");
  assert.ok(chatgpt.href.startsWith("https://chatgpt.com/?q="));
  assert.equal(chatgpt.ariaLabel, "Summarize this page with ChatGPT, opens in a new tab.");

  assert.equal(google.name, "Google AI Mode");
  assert.ok(google.href.startsWith("https://www.google.com/search?udm=50&aep=11&q="));
  assert.ok(google.href.includes("udm=50&aep=11"), "Google AI Mode params intact");
  assert.equal(google.ariaLabel, "Summarize this page with Google AI Mode, opens in a new tab.");

  assert.equal(grok.name, "Grok");
  assert.ok(grok.href.startsWith("https://grok.com/?q="));
  assert.equal(grok.ariaLabel, "Summarize this page with Grok, opens in a new tab.");

  assert.equal(claude.name, "Claude");
  assert.ok(claude.href.startsWith("https://claude.ai/new?q="));
  assert.equal(claude.ariaLabel, "Summarize this page with Claude, opens in a new tab.");

  assert.equal(perplexity.name, "Perplexity");
  assert.ok(perplexity.href.startsWith("https://www.perplexity.ai/?q="));
  assert.equal(perplexity.ariaLabel, "Summarize this page with Perplexity, opens in a new tab.");

  // Verify query param decoding matches prompt
  for (const l of links) {
    const url = new URL(l.href);
    const q = url.searchParams.get("q");
    assert.equal(q, prompt, `${l.name} q parameter must match prompt exactly`);
  }

  console.log(`✓ ${tp.name} (${tp.path}) tests passed`);
}

// 5. Test blog index
const blogIndexMeta = getKnownMetadata("/blog");
const blogIndexType = getPageType("/blog");
assert.equal(blogIndexType, "blog-index");
const blogIndexPrompt = buildSummarizePrompt({
  canonicalUrl: blogIndexMeta.canonical,
  title: blogIndexMeta.title,
  pageType: blogIndexType,
  description: blogIndexMeta.description,
});
assert.ok(blogIndexPrompt.includes("Describe the topics covered and point readers to a few articles listed on the page."));
assert.ok(blogIndexPrompt.endsWith(PROMPT_ENDING));
console.log("✓ Blog index (/blog) test passed");

// 6. Test automatic inheritance for new blog post
const newBlogPath = "/blog/how-to-style-leather-jackets-in-2027";
const newBlogType = getPageType(newBlogPath);
assert.equal(newBlogType, "blog-article");
const newBlogPrompt = buildSummarizePrompt({
  canonicalUrl: getCanonicalUrl(newBlogPath),
  title: "How to Style Leather Jackets in 2027 – Slidez",
  pageType: newBlogType,
  description: "A comprehensive guide to styling leather jackets.",
});
assert.ok(newBlogPrompt.includes("Give a short TL;DR and 3–5 actionable takeaways from this exact article. Cite the article for any claims or figures it supports."));
assert.ok(newBlogPrompt.endsWith(PROMPT_ENDING));
console.log("✓ New blog post inheritance test passed");

console.log("\nAll prompt and link tests passed successfully!");

