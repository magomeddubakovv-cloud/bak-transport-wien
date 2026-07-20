"use client";

import { Check, Calendar, Mail } from "lucide-react";
import Image from "next/image";
import { PageLayout } from "@/components/PageLayout";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function GrenzueberschreitendPageClient() {
  const { lang } = useLang();
  const t = translations[lang];

  const checklistItems = [
    t.grenz_page_check1, t.grenz_page_check2, t.grenz_page_check3,
    t.grenz_page_check4, t.grenz_page_check5, t.grenz_page_check6,
  ];
  const cards = [
    { title: t.grenz_page_card1_title, text: t.grenz_page_card1_text },
    { title: t.grenz_page_card2_title, text: t.grenz_page_card2_text },
    { title: t.grenz_page_card3_title, text: t.grenz_page_card3_text },
  ];
  const pricing = [
    { label: t.grenz_page_p1_label, price: t.grenz_page_p1_price, detail: t.grenz_page_p1_detail },
    { label: t.grenz_page_p2_label, price: t.grenz_page_p2_price, detail: t.grenz_page_p2_detail },
    { label: t.grenz_page_p3_label, price: t.grenz_page_p3_price, detail: t.grenz_page_p3_detail },
  ];
  const faqs = [
    { q: t.grenz_page_faq1_q, a: t.grenz_page_faq1_a },
    { q: t.grenz_page_faq2_q, a: t.grenz_page_faq2_a },
    { q: t.grenz_page_faq3_q, a: t.grenz_page_faq3_a },
  ];

  return (
    <PageLayout label={t.grenz_page_label} title={t.grenz_page_title} subtitle={t.grenz_page_subtitle}>
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#9A3412" }}>{t.grenz_page_h2}</h2>
              <p className="mb-4" style={{ color: "#6B7280", lineHeight: "1.75" }}>{t.grenz_page_p1}</p>
              <p className="mb-4" style={{ color: "#6B7280", lineHeight: "1.75" }}>{t.grenz_page_p2}</p>
              <p style={{ color: "#6B7280", lineHeight: "1.75" }}>{t.grenz_page_p3}</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative rounded-2xl overflow-hidden h-48 md:h-72">
                <Image src="/images/photos/regionen-transport.png" alt="Grenzüberschreitende Umzüge mit BAK Transport" fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover object-center" />
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {checklistItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 shrink-0" style={{ color: "#C2410C" }} />
                    <span style={{ color: "#111827" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12" style={{ color: "#9A3412" }}>{t.sub_why_bak}</h2>
          <div className="grid grid-cols-1 min-[520px]:grid-cols-3 gap-4 md:gap-8">
            {cards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-5 md:p-8 shadow-sm" style={{ border: "1px solid #E5E7EB" }}>
                <div className="w-2 h-8 rounded mb-4" style={{ backgroundColor: "#C2410C" }} />
                <h3 className="text-xl font-semibold mb-3" style={{ color: "#111827" }}>{card.title}</h3>
                <p style={{ color: "#6B7280", lineHeight: "1.75" }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900">{t.grenz_page_price_h2}</h2>
          <p className="text-center mb-12" style={{ color: "#6B7280" }}>{t.grenz_page_price_footnote}</p>
          <div className="grid grid-cols-1 min-[520px]:grid-cols-3 gap-4 md:gap-8">
            {pricing.map((p) => (
              <div key={p.label} className="rounded-2xl p-5 md:p-8 text-center" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB" }}>
                <div className="text-lg font-semibold mb-2 text-gray-900">{p.label}</div>
                <div className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#C2410C" }}>{p.price}</div>
                <div style={{ color: "#6B7280" }}>{p.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 md:mb-12" style={{ color: "#9A3412" }}>{t.grenz_page_faq_h2}</h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} style={{ borderBottom: "1px solid #E5E7EB", paddingBottom: "2rem" }}>
                <p className="font-semibold mb-2" style={{ color: "#111827" }}>{faq.q}</p>
                <p style={{ color: "#6B7280", lineHeight: "1.75" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20" style={{ backgroundColor: "#C2410C" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{t.grenz_page_cta_h2}</h2>
          <p className="mb-8 text-white opacity-95">{t.sub_cta_desc}</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="/anfrage" className="inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base w-full sm:w-auto" style={{ backgroundColor: "#FFFFFF", color: "#C2410C" }}><Mail className="w-5 h-5" />{t.sub_cta_btn1}</a>
            <a href="https://calendly.com/baktransport/besichtigung-in-wien-umgebung" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base w-full sm:w-auto" style={{ border: "2px solid #FFFFFF", color: "#FFFFFF" }}><Calendar className="w-5 h-5" />{t.sub_cta_btn2}</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
