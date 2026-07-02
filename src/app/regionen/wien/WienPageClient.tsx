"use client";

import { Check, Phone , Mail } from "lucide-react";
import Image from "next/image";
import { PageLayout } from "@/components/PageLayout";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function WienPageClient() {
  const { lang } = useLang();
  const t = translations[lang];

  const checklistItems = [
    t.wien_page_check1, t.wien_page_check2, t.wien_page_check3,
    t.wien_page_check4, t.wien_page_check5, t.wien_page_check6,
  ];
  const cards = [
    { title: t.wien_page_card1_title, text: t.wien_page_card1_text },
    { title: t.wien_page_card2_title, text: t.wien_page_card2_text },
    { title: t.wien_page_card3_title, text: t.wien_page_card3_text },
  ];
  const pricing = [
    { label: t.wien_page_p1_label, price: t.wien_page_p1_price, detail: t.wien_page_p1_detail },
    { label: t.wien_page_p2_label, price: t.wien_page_p2_price, detail: t.wien_page_p2_detail },
    { label: t.wien_page_p3_label, price: t.wien_page_p3_price, detail: t.wien_page_p3_detail },
  ];
  const faqs = [
    { q: t.wien_page_faq1_q, a: t.wien_page_faq1_a },
    { q: t.wien_page_faq2_q, a: t.wien_page_faq2_a },
    { q: t.wien_page_faq3_q, a: t.wien_page_faq3_a },
  ];

  const bezirke = [
    { label: "1. Innere Stadt", slug: "innere-stadt" },
    { label: "2. Leopoldstadt", slug: "leopoldstadt" },
    { label: "3. Landstraße", slug: "landstrasse" },
    { label: "4. Wieden", slug: "wieden" },
    { label: "5. Margareten", slug: "margareten" },
    { label: "6. Mariahilf", slug: "mariahilf" },
    { label: "7. Neubau", slug: "neubau" },
    { label: "8. Josefstadt", slug: "josefstadt" },
    { label: "9. Alsergrund", slug: "alsergrund" },
    { label: "10. Favoriten", slug: "favoriten" },
    { label: "11. Simmering", slug: "simmering" },
    { label: "12. Meidling", slug: "meidling" },
    { label: "13. Hietzing", slug: "hietzing" },
    { label: "14. Penzing", slug: "penzing" },
    { label: "15. Rudolfsheim-Fünfhaus", slug: "rudolfsheim-fuenfhaus" },
    { label: "16. Ottakring", slug: "ottakring" },
    { label: "17. Hernals", slug: "hernals" },
    { label: "18. Währing", slug: "waehring" },
    { label: "19. Döbling", slug: "doebling" },
    { label: "20. Brigittenau", slug: "brigittenau" },
    { label: "21. Floridsdorf", slug: "floridsdorf" },
    { label: "22. Donaustadt", slug: "donaustadt" },
    { label: "23. Liesing", slug: "liesing" },
  ];

  return (
    <PageLayout label={t.wien_page_label} title={t.wien_page_title} subtitle={t.wien_page_subtitle}>
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#111827" }}>{t.wien_page_h2}</h2>
              <p className="mb-4" style={{ color: "#6B7280", lineHeight: "1.75" }}>{t.wien_page_p1}</p>
              <p className="mb-4" style={{ color: "#6B7280", lineHeight: "1.75" }}>{t.wien_page_p2}</p>
              <p style={{ color: "#6B7280", lineHeight: "1.75" }}>{t.wien_page_p3}</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative rounded-2xl overflow-hidden h-48 md:h-72">
                <Image src="/images/photos/wien.jpg" alt="Umzug Wien mit BAK Transport" fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover object-center" />
              </div>
              <ul className="space-y-4">
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
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12" style={{ color: "#111827" }}>{t.sub_why_bak}</h2>
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
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#111827" }}>{t.wien_page_districts_h2}</h2>
          <p className="mb-8" style={{ color: "#6B7280", lineHeight: "1.75", maxWidth: "700px" }}>{t.wien_page_districts_desc}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {bezirke.map((bezirk) => (
              <a key={bezirk.slug} href={`/regionen/wien/${bezirk.slug}`}
                className="rounded-lg px-3 py-2 text-sm font-medium text-center transition-colors hover:border-[#C2410C] hover:text-[#C2410C]"
                style={{ backgroundColor: "#F9FAFB", border: "1px solid #E5E7EB", color: "#374151", textDecoration: "none" }}>
                {bezirk.label}
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900">{t.wien_page_price_h2}</h2>
          <p className="text-center mb-12" style={{ color: "#6B7280" }}>{t.wien_page_price_footnote}</p>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-10 md:mb-12" style={{ color: "#111827" }}>{t.wien_page_faq_h2}</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{t.wien_page_cta_h2}</h2>
          <p className="mb-8 text-white opacity-90">{t.sub_cta_desc}</p>
          <div className="grid grid-cols-2 sm:flex sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="/anfrage" className="inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base w-full sm:w-auto" style={{ backgroundColor: "#FFFFFF", color: "#C2410C" }}><Mail className="w-5 h-5" />{t.sub_cta_btn1}</a>
            <a href="tel:+4368110723047" className="inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base w-full sm:w-auto" style={{ border: "2px solid #FFFFFF", color: "#FFFFFF" }}><Phone className="w-5 h-5" />{t.sub_cta_btn2}</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
