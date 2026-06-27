"use client";

import { Check, Phone } from "lucide-react";
import Image from "next/image";
import { PageLayout } from "@/components/PageLayout";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function FirmenumzugPageClient() {
  const { lang } = useLang();
  const t = translations[lang];

  const checklistItems = [
    t.firm_page_check1, t.firm_page_check2, t.firm_page_check3,
    t.firm_page_check4, t.firm_page_check5, t.firm_page_check6,
  ];
  const cards = [
    { title: t.firm_page_card1_title, text: t.firm_page_card1_text },
    { title: t.firm_page_card2_title, text: t.firm_page_card2_text },
    { title: t.firm_page_card3_title, text: t.firm_page_card3_text },
  ];
  const pricing = [
    { label: t.firm_page_p1_label, price: t.firm_page_p1_price, detail: t.firm_page_p1_detail },
    { label: t.firm_page_p2_label, price: t.firm_page_p2_price, detail: t.firm_page_p2_detail },
    { label: t.firm_page_p3_label, price: t.firm_page_p3_price, detail: t.firm_page_p3_detail },
  ];
  const faqs = [
    { q: t.firm_page_faq1_q, a: t.firm_page_faq1_a },
    { q: t.firm_page_faq2_q, a: t.firm_page_faq2_a },
    { q: t.firm_page_faq3_q, a: t.firm_page_faq3_a },
  ];

  return (
    <PageLayout label={t.firm_page_label} title={t.firm_page_title} subtitle={t.firm_page_subtitle}>
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#F9FAFB" }}>{t.firm_page_h2}</h2>
              <p className="mb-4" style={{ color: "#6B7280", lineHeight: "1.75" }}>{t.firm_page_p1}</p>
              <p className="mb-4" style={{ color: "#6B7280", lineHeight: "1.75" }}>{t.firm_page_p2}</p>
              <p style={{ color: "#6B7280", lineHeight: "1.75" }}>{t.firm_page_p3}</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative rounded-2xl overflow-hidden h-48 md:h-72">
                <Image src="/images/photos/firmenumzug.jpg" alt="Firmenumzug Wien mit BAK Transport" fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover object-center" />
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
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12" style={{ color: "#F9FAFB" }}>{t.sub_why_bak}</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-white">{t.firm_page_price_h2}</h2>
          <p className="text-center mb-12" style={{ color: "#9CA3AF" }}>{t.firm_page_price_footnote}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((p) => (
              <div key={p.label} className="rounded-2xl p-8 text-center" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB" }}>
                <div className="text-lg font-semibold mb-2 text-white">{p.label}</div>
                <div className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#EA580C" }}>{p.price}</div>
                <div style={{ color: "#9CA3AF" }}>{p.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 md:mb-12" style={{ color: "#F9FAFB" }}>{t.firm_page_faq_h2}</h2>
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
      <section className="py-12" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h3 className="text-xl font-bold mb-6" style={{ color: "#F9FAFB" }}>{t.sub_more_services}</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: lang === "en" ? "Private Moving Vienna" : "Privatumzug Wien", href: "/leistungen/privatumzug" },
              { label: lang === "en" ? "Furniture Assembly Vienna" : "Möbelmontage Wien", href: "/leistungen/moebelmontage" },
              { label: lang === "en" ? "Kitchen Assembly Vienna" : "Küchenmontage Wien", href: "/leistungen/kuechenmontage" },
              { label: lang === "en" ? "Heavy Transport Vienna" : "Schwerlasttransport Wien", href: "/leistungen/schwerlasttransport" },
              { label: lang === "en" ? "Emergency Move Vienna" : "Notfallumzug Wien", href: "/leistungen/notfallumzug" },
            ].map((link) => (
              <a key={link.href} href={link.href} className="px-4 py-2 rounded-lg text-sm font-medium"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB", color: "#EA580C", textDecoration: "none" }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20" style={{ backgroundColor: "#EA580C" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{t.firm_page_cta_h2}</h2>
          <p className="mb-8 text-white opacity-90">{t.sub_cta_desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/kontakt" className="inline-block px-8 py-4 rounded-xl font-semibold text-base" style={{ backgroundColor: "#FFFFFF", color: "#EA580C" }}>{t.sub_cta_btn1}</a>
            <a href="tel:+436761234567" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white" style={{ border: "2px solid rgba(255,255,255,0.6)" }}><Phone className="w-5 h-5" />{t.sub_cta_btn2}</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
