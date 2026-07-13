"use client";

import { Mail, Calendar } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function FaqPageClient() {
  const { lang } = useLang();
  const t = translations[lang];

  const categories = [
    {
      id: "ablauf",
      label: t.faqpage_cat1_label,
      subtitle: t.faqpage_cat1_subtitle,
      faqs: [
        { q: t.faqpage_q2, a: t.faqpage_a2 },
        { q: t.faqpage_q6, a: t.faqpage_a6 },
        { q: t.faqpage_q8, a: t.faqpage_a8 },
        { q: t.faqpage_q9, a: t.faqpage_a9 },
        { q: t.faqpage_q15, a: t.faqpage_a15 },
      ],
    },
    {
      id: "preise",
      label: t.faqpage_cat2_label,
      subtitle: t.faqpage_cat2_subtitle,
      faqs: [
        { q: t.faqpage_q1, a: t.faqpage_a1 },
        { q: t.faqpage_q5, a: t.faqpage_a5 },
        { q: t.faqpage_q12, a: t.faqpage_a12 },
      ],
    },
    {
      id: "vorbereitung",
      label: t.faqpage_cat3_label,
      subtitle: t.faqpage_cat3_subtitle,
      faqs: [
        { q: t.faqpage_q10, a: t.faqpage_a10 },
        { q: t.faqpage_q11, a: t.faqpage_a11 },
      ],
    },
    {
      id: "montage",
      label: t.faqpage_cat4_label,
      subtitle: t.faqpage_cat4_subtitle,
      faqs: [
        { q: t.faqpage_q7, a: t.faqpage_a7 },
        { q: t.faqpage_q16, a: t.faqpage_a16 },
      ],
    },
    {
      id: "versicherung",
      label: t.faqpage_cat5_label,
      subtitle: t.faqpage_cat5_subtitle,
      faqs: [
        { q: t.faqpage_q3, a: t.faqpage_a3 },
        { q: t.faqpage_q13, a: t.faqpage_a13 },
        { q: t.faqpage_q14, a: t.faqpage_a14 },
      ],
    },
    {
      id: "ausland",
      label: t.faqpage_cat6_label,
      subtitle: t.faqpage_cat6_subtitle,
      faqs: [{ q: t.faqpage_q4, a: t.faqpage_a4 }],
    },
  ];

  return (
    <PageLayout label={t.faqpage_label} title={t.faqpage_title} subtitle={t.faqpage_subtitle}>
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          {/* Intro box */}
          <div
            className="rounded-2xl p-6 md:p-8 mb-10"
            style={{ backgroundColor: "#F9FAFB", borderLeft: "4px solid #C2410C" }}
          >
            <h2 className="text-xl md:text-2xl font-black mb-2" style={{ color: "#9A3412" }}>
              {t.faqpage_intro_h2}
            </h2>
            <p style={{ color: "#6B7280", lineHeight: "1.75" }}>{t.faqpage_intro_text}</p>
          </div>

          {/* Quick nav */}
          <div className="flex flex-wrap gap-2 mb-14">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:bg-orange-50"
                style={{ border: "1px solid #E5E7EB", color: "#C2410C" }}
              >
                {cat.label}
              </a>
            ))}
          </div>

          {/* Categories */}
          <div className="space-y-16">
            {categories.map((cat) => (
              <div key={cat.id} id={cat.id} style={{ scrollMarginTop: "100px" }}>
                <h2 className="text-2xl md:text-3xl font-black mb-2" style={{ color: "#9A3412" }}>
                  {cat.label}
                </h2>
                <p className="mb-6 md:mb-8" style={{ color: "#6B7280" }}>{cat.subtitle}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {cat.faqs.map((faq) => (
                    <div
                      key={faq.q}
                      className="rounded-2xl bg-white p-6 shadow-sm"
                      style={{ border: "1px solid #E5E7EB" }}
                    >
                      <p className="font-bold text-lg mb-2" style={{ color: "#111827" }}>{faq.q}</p>
                      <p style={{ color: "#6B7280", lineHeight: "1.75" }}>{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20" style={{ backgroundColor: "#C2410C" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{t.faqpage_cta_h2}</h2>
          <p className="mb-8 text-white opacity-95">{t.faqpage_cta_desc}</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="/kontakt" className="inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base w-full sm:w-auto" style={{ backgroundColor: "#FFFFFF", color: "#C2410C" }}><Mail className="w-5 h-5" />{t.faqpage_cta_btn1}</a>
            <a href="https://calendly.com/baktransport/besichtigung-in-wien-umgebung" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base w-full sm:w-auto" style={{ border: "2px solid #FFFFFF", color: "#FFFFFF" }}><Calendar className="w-5 h-5" />{t.faqpage_cta_btn2}</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
