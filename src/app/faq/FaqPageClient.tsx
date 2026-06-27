"use client";

import { Phone } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function FaqPageClient() {
  const { lang } = useLang();
  const t = translations[lang];

  const faqs = [
    { q: t.faqpage_q1, a: t.faqpage_a1 },
    { q: t.faqpage_q2, a: t.faqpage_a2 },
    { q: t.faqpage_q3, a: t.faqpage_a3 },
    { q: t.faqpage_q4, a: t.faqpage_a4 },
    { q: t.faqpage_q5, a: t.faqpage_a5 },
    { q: t.faqpage_q6, a: t.faqpage_a6 },
    { q: t.faqpage_q7, a: t.faqpage_a7 },
    { q: t.faqpage_q8, a: t.faqpage_a8 },
  ];

  return (
    <PageLayout label={t.faqpage_label} title={t.faqpage_title} subtitle={t.faqpage_subtitle}>
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} style={{ borderBottom: "1px solid #E5E7EB", paddingBottom: "2rem" }}>
                <p className="font-semibold text-lg mb-2" style={{ color: "#111827" }}>{faq.q}</p>
                <p style={{ color: "#6B7280", lineHeight: "1.75" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20" style={{ backgroundColor: "#EA580C" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{t.faqpage_cta_h2}</h2>
          <p className="mb-8 text-white opacity-90">{t.faqpage_cta_desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/kontakt" className="inline-block px-8 py-4 rounded-xl font-semibold text-base" style={{ backgroundColor: "#FFFFFF", color: "#EA580C" }}>{t.faqpage_cta_btn1}</a>
            <a href="tel:+436761234567" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base" style={{ border: "2px solid #EA580C", color: "#EA580C" }}><Phone className="w-5 h-5" />{t.faqpage_cta_btn2}</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
