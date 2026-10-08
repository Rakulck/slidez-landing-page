import { NextResponse } from "next/server";

const BASE_URL = "https://www.slidez.social";

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /account/
Disallow: /dashboard/
Disallow: /checkout/
Disallow: /login/
Content-Signal: ai-train=yes, search=yes, ai-input=yes

User-agent: GPTBot
Allow: /
Content-Signal: ai-train=yes, search=yes, ai-input=yes

User-agent: OAI-SearchBot
Allow: /
Content-Signal: ai-train=yes, search=yes, ai-input=yes

User-agent: ChatGPT-User
Allow: /
Content-Signal: ai-train=yes, search=yes, ai-input=yes

User-agent: ClaudeBot
Allow: /
Content-Signal: ai-train=yes, search=yes, ai-input=yes

User-agent: Claude-User
Allow: /
Content-Signal: ai-train=yes, search=yes, ai-input=yes

User-agent: PerplexityBot
Allow: /
Content-Signal: ai-train=yes, search=yes, ai-input=yes

User-agent: Perplexity-User
Allow: /
Content-Signal: ai-train=yes, search=yes, ai-input=yes

User-agent: Google-Extended
Allow: /
Content-Signal: ai-train=yes, search=yes, ai-input=yes

User-agent: Applebot-Extended
Allow: /
Content-Signal: ai-train=yes, search=yes, ai-input=yes

User-agent: meta-externalagent
Allow: /
Content-Signal: ai-train=yes, search=yes, ai-input=yes

User-agent: CCBot
Allow: /
Content-Signal: ai-train=yes, search=yes, ai-input=yes

User-agent: Bytespider
Allow: /
Content-Signal: ai-train=yes, search=yes, ai-input=yes

User-agent: DeepSeekBot
Allow: /
Content-Signal: ai-train=yes, search=yes, ai-input=yes

User-agent: MistralAI-User
Allow: /
Content-Signal: ai-train=yes, search=yes, ai-input=yes

User-agent: Amazonbot
Allow: /
Content-Signal: ai-train=yes, search=yes, ai-input=yes

User-agent: Cohere-AI
Allow: /
Content-Signal: ai-train=yes, search=yes, ai-input=yes

Sitemap: ${BASE_URL}/sitemap.xml
Sitemap: ${BASE_URL}/blog/sitemap.xml
Agentmap: ${BASE_URL}/.well-known/ai-catalog.json
`;

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
