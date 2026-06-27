"use client";

import { Check, Phone } from "lucide-react";
import Image from "next/image";
import { PageLayout } from "@/components/PageLayout";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function UeberUnsPageClient() {
  const { lang } = useLang();
  const t = translations[lang];

  const checklistItems = [
    t.ueber_check1, t.ueber_check2, t.ueber_check3,
    t.ueber_check4, t.ueber_check5, t.ueber_check6,
  ];

  const cards = [
    { title: t.ueber_card1_title, text: t.ueber_card1_text },
    { title: t.ueber_card2_title, text: t.ueber_card2_text },
    { title: t.ueber_card3_title, text: t.ueber_card3_text },
  ];

  const faqs = [
    { q: t.ueber_faq1_q, a: t.ueber_faq1_a },
    { q: t.ueber_faq2_q, a: t.ueber_faq2_a },
    { q: t.ueber_faq3_q, a: t.ueber_faq3_a },
  ];

  const stats = [
    { value: t.ueber_stat1_value, label: t.ueber_stat1_label },
    { value: t.ueber_stat2_value, label: t.ueber_stat2_label },
    { value: t.ueber_stat3_value, label: t.ueber_stat3_label },
    { value: t.ueber_stat4_value, label: t.ueber_stat4_label },
  ];

  return (
    <PageLayout label={t.ueber_label} title={t.ueber_title} subtitle={t.ueber_subtitle}>
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#F9FAFB" }}>{t.ueber_h2}</h2>
              <p className="mb-4" style={{ color: "#6B7280", lineHeight: "1.75" }}>{t.ueber_p1}</p>
              <p className="mb-4" style={{ color: "#6B7280", lineHeight: "1.75" }}>{t.ueber_p2}</p>
              <p style={{ color: "#6B7280", lineHeight: "1.75" }}>{t.ueber_p3}</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative rounded-2xl overflow-hidden h-48 md:h-72">
                <Image src="/images/photos/about.jpg" alt="BAK Transport Team Wien" fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover object-center" />
              </div>
              <ul className="space-y-4">
                {checklistItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 shrink-0" style={{ color: "#EA580C" }} />
                    <span style={{ color: "#F9FAFB" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12" style={{ color: "#F9FAFB" }}>{t.ueber_why_h2}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-8 shadow-sm" style={{ border: "1px solid #E5E7EB" }}>
                <div className="w-2 h-8 rounded mb-4" style={{ backgroundColor: "#EA580C" }} />
                <h3 className="text-xl font-semibold mb-3" style={{ color: "#F9FAFB" }}>{card.title}</h3>
                <p style={{ color: "#6B7280", lineHeight: "1.75" }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-4xl font-black mb-2" style={{ color: "#EA580C" }}>{stat.value}</div>
                <div style={{ color: "#9CA3AF" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 md:mb-12" style={{ color: "#F9FAFB" }}>{t.ueber_faq_h2}</h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} style={{ borderBottom: "1px solid #E5E7EB", paddingBottom: "2rem" }}>
                <p className="font-semibold mb-2" style={{ color: "#F9FAFB" }}>{faq.q}</p>
                <p style={{ color: "#6B7280", lineHeight: "1.75" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20" style={{ backgroundColor: "#EA580C" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{t.ueber_cta_h2}</h2>
          <p className="mb-8 text-white opacity-90">{t.ueber_cta_desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/kontakt" className="inline-block px-8 py-4 rounded-xl font-semibold text-base" style={{ backgroundColor: "#FFFFFF", color: "#EA580C" }}>{t.ueber_cta_btn1}</a>
            <a href="tel:+436761234567" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white" style={{ border: "2px solid rgba(255,255,255,0.6)" }}><Phone className="w-5 h-5" />{t.ueber_cta_btn2}</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
