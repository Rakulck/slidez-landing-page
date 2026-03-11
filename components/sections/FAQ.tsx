"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ChevronDown } from "lucide-react";
import { faqs } from "@/lib/faq-data";

const INITIAL_COUNT = 5;

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="border-b border-black/[0.08] last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-base md:text-lg font-semibold text-black group-hover:text-black/70 transition-colors duration-200">
          {question}
        </span>
        <span className="shrink-0 w-7 h-7 rounded-full border border-black/10 flex items-center justify-center text-black/40 group-hover:border-black/25 group-hover:text-black/60 transition-all duration-200">
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-black/55 text-base leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [showAll, setShowAll] = useState(false);

  const initial = faqs.slice(0, INITIAL_COUNT);
  const rest    = faqs.slice(INITIAL_COUNT);

  return (
    <section
      id="faq"
      aria-label="AI Stylist and Virtual Try-On FAQs"
      className="bg-[#f5f4f2] py-24 px-6 border-t border-black/[0.06]"
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight">
            AI Stylist & Virtual Try-On FAQs
          </h2>
        </motion.div>

        {/* Accordion */}
        <div>
          {/* Always-visible first 5 */}
          {initial.map((faq, i) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              index={i}
            />
          ))}

          {/* Remaining questions — always in HTML for SEO, animated height for UI */}
          <motion.div
            initial={false}
            animate={{ height: showAll ? "auto" : 0, opacity: showAll ? 1 : 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
            aria-hidden={!showAll}
          >
            {rest.map((faq, i) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                index={INITIAL_COUNT + i}
              />
            ))}
          </motion.div>
        </div>

        {/* Toggle button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-8 flex justify-center"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
            aria-controls="faq-extra"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-black/10 text-black/50 text-sm font-medium
              hover:border-black/25 hover:text-black
              hover:scale-[1.04] hover:-translate-y-px
              active:scale-[0.97]
              transition-all duration-200"
          >
            {showAll ? "View Less" : "See More FAQs"}
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
