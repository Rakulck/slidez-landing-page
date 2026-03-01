"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Try it. Fall in love.",
    cta: "Get Started",
    features: [
      "5 virtual try-ons per day",
      "AI Stylist (3 prompts/day)",
      "Basic outfit catalog",
      "Save up to 10 looks",
      "Social feed access",
    ],
    highlight: false,
  },
  {
    name: "Style",
    price: "$12",
    period: "/ month",
    description: "For fashion lovers who want it all.",
    cta: "Start Free Trial",
    features: [
      "Unlimited virtual try-ons",
      "Full AI Stylist access",
      "Import outfits from anywhere",
      "Occasion-based styling",
      "Direct product purchase links",
      "Save unlimited looks",
      "Priority processing",
    ],
    highlight: true,
    badge: "Most popular",
  },
  {
    name: "Premium",
    price: "$29",
    period: "/ month",
    description: "For the truly style-obsessed.",
    cta: "Contact Us",
    features: [
      "Everything in Style",
      "Exclusive brand collections",
      "Personal style memory & profile",
      "Early access to new AI features",
      "Dedicated style concierge",
      "Family sharing (up to 5)",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#080808] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c0c0c0] mb-5">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            Simple, honest pricing.
          </h2>
          <p className="text-white/45 text-lg max-w-md mx-auto">
            Start free. Upgrade when you're hooked. No surprise charges.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col gap-7 ${
                plan.highlight
                  ? "bg-white/[0.06] border border-[rgba(192,192,192,0.3)]"
                  : "bg-white/[0.025] border border-white/[0.07]"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 gradient-silver rounded-full text-black text-xs font-bold whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              {/* Plan info */}
              <div>
                <p className="text-white/50 text-sm font-medium mb-3">{plan.name}</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-bold text-white tracking-tight">{plan.price}</span>
                  <span className="text-white/35 text-sm">{plan.period}</span>
                </div>
                <p className="text-white/40 text-sm">{plan.description}</p>
              </div>

              {/* CTA */}
              <a
                href="#"
                className={`block w-full py-3 text-sm font-semibold rounded-full text-center transition-colors ${
                  plan.highlight
                    ? "bg-white text-black hover:bg-[#e8e8e8]"
                    : "border border-white/15 text-white/70 hover:border-white/30 hover:text-white"
                }`}
              >
                {plan.cta}
              </a>

              {/* Features */}
              <ul className="flex flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/55">
                    <Check className="w-4 h-4 text-[#c0c0c0] mt-0.5 shrink-0" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
