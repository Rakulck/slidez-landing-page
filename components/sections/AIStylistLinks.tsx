import { ArrowRight } from "lucide-react";

const LINKS = [
  { label: "Outfit Ideas",            href: "/outfit-ideas"            },
  { label: "What Should I Wear",      href: "/what-to-wear"            },
  { label: "Date Night Outfit Ideas", href: "/date-night-outfit-ideas" },
  { label: "Winter Outfit Ideas",     href: "/winter-outfit-ideas"     },
];

export default function AIStylistLinks() {
  return (
    <section aria-label="AI Stylist pages" className="bg-white py-10 px-6 border-b border-black/[0.05]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center gap-5">

        {/* Label */}
        <div className="shrink-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/30 mb-0.5">
            AI Stylist
          </p>
          <p className="text-sm font-medium text-black leading-snug">
            Not sure what to wear?
          </p>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px h-8 bg-black/[0.08] shrink-0" />

        {/* Links */}
        <div className="flex flex-wrap gap-2">
          {LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="px-3.5 py-1.5 rounded-full border border-black/[0.08] bg-[#fafafa] text-sm text-black/55
                hover:border-black/20 hover:bg-white hover:text-black hover:shadow-sm
                transition-all duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Explore all */}
        <a
          href="/outfit-ideas"
          className="sm:ml-auto shrink-0 inline-flex items-center gap-1 text-sm text-black/35 hover:text-black transition-colors duration-200"
        >
          Explore all
          <ArrowRight className="w-3.5 h-3.5" />
        </a>

      </div>
    </section>
  );
}
