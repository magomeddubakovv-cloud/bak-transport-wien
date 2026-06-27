"use client";

import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function FAQSection() {
  const { lang } = useLang();
  const t = translations[lang];
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqData = [
    { question: t.faq_q1, answer: t.faq_a1 },
    { question: t.faq_q2, answer: t.faq_a2 },
    { question: t.faq_q3, answer: t.faq_a3 },
    { question: t.faq_q4, answer: t.faq_a4 },
    { question: t.faq_q5, answer: t.faq_a5 },
    { question: t.faq_q6, answer: t.faq_a6 },
    { question: t.faq_q7, answer: t.faq_a7 },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-12 md:py-24" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#EA580C" }}>
            {t.faq_label}
          </p>
          <h2 className="text-2xl md:text-4xl leading-tight" style={{ color: "#111827", fontWeight: 900 }}>
            {t.faq_h2}
          </h2>
        </div>

        <div>
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} style={{ borderBottom: "1px solid #E5E7EB" }}>
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center py-5 text-left min-h-[44px]"
                >
                  <span className="pr-4 text-base md:text-lg" style={{ fontWeight: 700, color: "#111827" }}>
                    {item.question}
                  </span>
                  <span
                    className="flex items-center justify-center shrink-0 rounded-md"
                    style={{ width: "32px", height: "32px", backgroundColor: "#EA580C", color: "#FFFFFF", fontSize: "18px", fontWeight: 300 }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div style={{ maxHeight: isOpen ? "600px" : "0", overflow: "hidden", transition: "max-height 0.35s ease" }}>
                  <p className="pb-6" style={{ color: "#6B7280", fontSize: "16px", lineHeight: 1.8 }}>
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
