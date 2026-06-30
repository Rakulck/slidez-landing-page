const fs = require('fs');
const path = require('path');

const mdPath = "C:\\Users\\Asus\\Downloads\\clothing-styles-for-body-types (1).md";
const content = fs.readFileSync(mdPath, 'utf8');

const lines = content.split('\n');

let inFrontmatter = false;
let title = '';
let description = '';
let bodyLines = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (i === 0 && line === '---') {
    inFrontmatter = true;
    continue;
  }
  if (inFrontmatter && line === '---') {
    inFrontmatter = false;
    continue;
  }
  
  if (inFrontmatter) {
    if (line.startsWith('title:')) {
      title = line.replace('title:', '').trim().replace(/^"|"$/g, '');
    }
    if (line.startsWith('meta_description:')) {
      description = line.replace('meta_description:', '').trim().replace(/^"|"$/g, '');
    }
  } else {
    bodyLines.push(lines[i]);
  }
}

// Custom Markdown Parser for this specific format
let jsxBody = '';
let toc = [];

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const escapeJsx = (text) => {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;')
    // Bold
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" className="text-black underline decoration-black/20 hover:decoration-black transition-all">$1</a>');
};

let i = 0;
while (i < bodyLines.length) {
  let line = bodyLines[i].trim();
  
  if (!line) {
    i++;
    continue;
  }

  // Headings
  if (line.startsWith('# ')) {
    // skip h1 as it is in the hero section
    i++;
    continue;
  }
  
  if (line.startsWith('## ')) {
    let text = line.replace('## ', '');
    let slug = slugify(text);
    toc.push({ text, slug, level: 2 });
    jsxBody += `<h2 id="${slug}" className="text-[2rem] font-bold text-black mb-6 mt-16 tracking-tight scroll-mt-32">${escapeJsx(text)}</h2>\n`;
    i++;
    continue;
  }

  if (line.startsWith('### ')) {
    let text = line.replace('### ', '');
    let slug = slugify(text);
    toc.push({ text, slug, level: 3 });
    jsxBody += `<h3 id="${slug}" className="text-xl font-bold text-black mb-4 mt-10 tracking-tight">${escapeJsx(text)}</h3>\n`;
    i++;
    continue;
  }

  // Blockquote / TLDR / Community insight
  if (line.startsWith('>')) {
    let text = line.replace(/^>\s*/, '');
    if (text.includes('TL;DR:')) {
      text = text.replace(/\*\*TL;DR:\*\*/, '<strong>TL;DR:</strong>');
      jsxBody += `<div className="bg-[#fafafa] p-8 rounded-2xl border border-black/5 my-10 shadow-sm relative overflow-hidden">
  <div className="absolute top-0 left-0 w-1 h-full bg-black/80"></div>
  <p className="font-bold text-black mb-3 text-xl tracking-tight">TL;DR</p>
  <p className="text-[17px] text-black/70 m-0 leading-relaxed">${escapeJsx(text).replace(/&lt;strong&gt;TL;DR:&lt;\/strong&gt;/, '')}</p>
</div>\n`;
    } else {
      jsxBody += `<div className="bg-[#fafafa] p-6 rounded-2xl border-l-4 border-l-black border-y border-r border-black/5 my-8 shadow-sm">
  <p className="text-[17px] text-black/80 m-0 leading-relaxed italic">${escapeJsx(text)}</p>
</div>\n`;
    }
    i++;
    continue;
  }

  // HR
  if (line === '---') {
    jsxBody += `<hr className="my-12 border-black/10" />\n`;
    i++;
    continue;
  }

  // Unordered Lists
  if (line.startsWith('- ')) {
    jsxBody += `<ul className="list-none pl-2 mb-8 space-y-3 text-black/70">\n`;
    while (i < bodyLines.length && bodyLines[i].trim().startsWith('- ')) {
      let listItem = bodyLines[i].trim().replace('- ', '');
      jsxBody += `  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span>${escapeJsx(listItem)}</span></li>\n`;
      i++;
    }
    jsxBody += `</ul>\n`;
    continue;
  }
  
  // Ordered Lists
  if (/^\d+\./.test(line)) {
    jsxBody += `<ol className="list-decimal pl-6 mb-8 space-y-3 text-black/70">\n`;
    while (i < bodyLines.length && /^\d+\./.test(bodyLines[i].trim())) {
      let listItem = bodyLines[i].trim().replace(/^\d+\.\s*/, '');
      jsxBody += `  <li className="pl-2">${escapeJsx(listItem)}</li>\n`;
      i++;
    }
    jsxBody += `</ol>\n`;
    continue;
  }

  // Paragraphs
  jsxBody += `<p className="mb-6">${escapeJsx(line)}</p>\n`;
  i++;
}

// Generate the TOC JSX
let tocJsx = '';
toc.forEach(item => {
  if (item.level === 2) {
    tocJsx += `<a href="#${item.slug}" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200 block truncate">${escapeJsx(item.text)}</a>\n`;
  }
});

const pageContent = `import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import BlogProductLinks from "@/components/sections/BlogProductLinks";

export const metadata: Metadata = {
  title: "${title}",
  description: "${description}",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "https://www.slidez.social/blog/clothing-styles-for-body-types" },
  openGraph: {
    title: "${title}",
    description: "${description}",
    url: "https://www.slidez.social/blog/clothing-styles-for-body-types",
    type: "article",
    siteName: "Slidez",
  },
};

export default function BlogPost() {
  return (
    <main className="overflow-hidden bg-[#fafafa]">
      <Navbar />

      {/* Hero Section */}
      <section data-nav-theme="dark-bg" className="relative pt-40 pb-32 bg-[#080808] px-6 text-center overflow-hidden">
        <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(192,192,192,0.05) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-6">Blog · Guide</p>
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white tracking-tight leading-[1.1] mb-6">
            ${title}
          </h1>
          <div className="mt-10 flex items-center justify-center gap-3 text-white/50 text-sm font-medium">
            <span>By Slidez Team</span>
            <span>·</span>
            <span>June 2026</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section data-nav-theme="light-bg" className="relative z-20 -mt-10 bg-white rounded-t-[2.5rem] px-6 py-16 md:py-24 shadow-sm border-t border-black/5">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar ToC */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-28 bg-[#fafafa] rounded-2xl p-7 border border-black/5 shadow-sm">
              <h3 className="font-semibold text-black mb-5 text-lg">Table of Contents</h3>
              <nav className="flex flex-col gap-3.5 text-sm font-medium">
                ${tocJsx}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <article className="flex-1 max-w-3xl text-black/75 text-lg leading-[1.85]">
            ${jsxBody}
          </article>
        </div>
      </section>

      <BlogProductLinks />
      <Footer />
    </main>
  );
}
`;

const outDir = path.join(__dirname, 'app', 'blog', 'clothing-styles-for-body-types');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}
fs.writeFileSync(path.join(outDir, 'page.tsx'), pageContent, 'utf8');
console.log('Successfully generated blog post at app/blog/clothing-styles-for-body-types/page.tsx');
