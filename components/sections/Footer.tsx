import { Sparkles } from "lucide-react";

const links = [
  { group: "Product", items: ["Virtual Try-On", "AI Stylist", "Chrome Extension", "Import Outfits"] },
  { group: "Company", items: ["About", "Blog", "Careers", "Press"] },
  { group: "Legal", items: ["Privacy Policy", "Terms of Service", "Cookies"] },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.06] px-6 pt-16 pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 font-bold text-lg text-white mb-4">
              <span className="w-7 h-7 rounded-lg gradient-silver flex items-center justify-center shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-black" />
              </span>
              Slidez
            </a>
            <p className="text-white/30 text-sm leading-relaxed max-w-[180px]">
              The AI virtual fitting room. Try on anything before you buy.
            </p>
          </div>

          {/* Link columns */}
          {links.map(({ group, items }) => (
            <div key={group}>
              <p className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
                {group}
              </p>
              <ul className="flex flex-col gap-3.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/35 text-sm hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm">
            © {new Date().getFullYear()} Slidez, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Instagram", "TikTok", "Twitter"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-white/25 text-sm hover:text-white transition-colors duration-200"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
