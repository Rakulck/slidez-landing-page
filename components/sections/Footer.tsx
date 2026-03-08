
const links = [
  {
    group: "Product",
    items: [
      { label: "Outfit Ideas",      href: "/outfit-ideas"      },
      { label: "What to Wear",      href: "/what-to-wear"      },
      { label: "Chrome Extension",  href: "https://chromewebstore.google.com/detail/kdcmgmfnnheiegkakcbkdolehlgdlaak?utm_source=item-share-cb" },
    ],
  },
  {
    group: "Legal",
    items: [
      { label: "Privacy Policy",    href: "/privacy"  },
      { label: "Terms of Service",  href: "/terms"    },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.06] px-6 pt-16 pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2.5 font-bold text-lg text-white mb-4">
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
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-white/35 text-sm hover:text-white transition-colors duration-200"
                    >
                      {item.label}
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
            {[
              { label: "Instagram", href: "https://www.instagram.com/slidez_ai_shopping/" },
              { label: "TikTok",    href: "https://www.tiktok.com/@slidez._"              },
              { label: "X",         href: "https://x.com/slidez_social"                   },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/25 text-sm hover:text-white transition-colors duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
