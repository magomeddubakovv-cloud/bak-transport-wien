"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";
import { PricingTab } from "@/components/ui/pricing-tab";

export function PricingSection() {
  const { lang } = useLang();
  const t = translations[lang];
  const [activeTab, setActiveTab] = useState<"umzug" | "montage">("umzug");

  const umzugCards = [
    {
      title: "BAK Basis",
      forText: t.p1_for,
      price: "ab €650",
      features: [t.p1_f1, t.p1_f2, t.p1_f3, t.p1_f4, t.p1_f5, t.p1_f6],
      ctaLabel: t.cta_quote_btn,
      featured: false,
    },
    {
      title: "BAK Standard",
      forText: t.p2_for,
      price: "ab €950",
      features: [t.p2_f1, t.p2_f2, t.p2_f3, t.p2_f4, t.p2_f5, t.p2_f6, t.p2_f7],
      ctaLabel: t.cta_request_btn,
      featured: true,
    },
    {
      title: "BAK Premium",
      forText: t.p3_for,
      price: "ab €1.350",
      features: [t.p3_f1, t.p3_f2, t.p3_f3, t.p3_f4, t.p3_f5, t.p3_f6, t.p3_f7],
      ctaLabel: t.cta_quote_btn,
      featured: false,
    },
  ];

  const montageCards = [
    {
      title: t.moebel_page_p1_label,
      forText: t.moebel_page_p1_detail,
      price: t.moebel_page_p1_price,
      features: [t.moebel_page_check1, t.moebel_page_check3, t.moebel_page_check4, t.moebel_page_check5],
      ctaLabel: t.cta_quote_btn,
      featured: false,
    },
    {
      title: t.moebel_page_p2_label,
      forText: t.moebel_page_p2_detail,
      price: t.moebel_page_p2_price,
      features: [t.moebel_page_check1, t.moebel_page_check2, t.moebel_page_check3, t.moebel_page_check4, t.moebel_page_check5],
      ctaLabel: t.cta_request_btn,
      featured: true,
    },
    {
      title: t.moebel_page_p3_label,
      forText: t.moebel_page_p3_detail,
      price: t.moebel_page_p3_price,
      features: [t.moebel_page_check1, t.moebel_page_check2, t.moebel_page_check3, t.moebel_page_check4, t.moebel_page_check6],
      ctaLabel: t.cta_quote_btn,
      featured: false,
    },
  ];

  const cards = activeTab === "umzug" ? umzugCards : montageCards;

  return (
    <section className="py-10 md:py-24" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#C2410C" }}>
            {t.pricing_label}
          </p>
          <h2 className="text-2xl md:text-4xl leading-tight" style={{ color: "#9A3412", fontWeight: 900 }}>
            {t.pricing_h2}
          </h2>
          <p className="mt-3 text-base md:text-xl" style={{ color: "#6B7280" }}>
            {t.pricing_subtext}
          </p>

          <div
            className="mx-auto mt-6 flex w-full max-w-xs rounded-full p-1 sm:mt-8 sm:w-fit sm:max-w-none"
            style={{ backgroundColor: "#F3F4F6" }}
          >
            <PricingTab
              text={t.pricing_tab_umzug}
              selected={activeTab === "umzug"}
              onSelect={() => setActiveTab("umzug")}
            />
            <PricingTab
              text={t.pricing_tab_montage}
              selected={activeTab === "montage"}
              onSelect={() => setActiveTab("montage")}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`rounded-2xl p-5 md:p-8 relative ${card.featured ? "mt-6 md:mt-0" : ""}`}
              style={{
                backgroundColor: card.featured ? "#C2410C" : "#FFFFFF",
                border: card.featured ? "none" : "1px solid #E5E7EB",
              }}
            >
              {card.featured && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 -top-4 rounded-full px-5 py-1.5 text-sm font-bold shadow"
                  style={{ backgroundColor: "#FFFFFF", color: "#C2410C", whiteSpace: "nowrap" }}
                >
                  {t.pricing_badge}
                </div>
              )}

              <p style={{ color: card.featured ? "#FFFFFF" : "#111827", fontSize: "22px", fontWeight: 800 }}>{card.title}</p>
              <p className="mt-1" style={{ color: card.featured ? "#FFFFFF" : "#6B7280", fontSize: "14px" }}>
                {card.forText}
              </p>

              <p className="mt-8 text-3xl md:text-[42px]" style={{ color: card.featured ? "#FFFFFF" : "#111827", fontWeight: 900, lineHeight: 1 }}>
                {card.price}
                <span style={{ color: card.featured ? "#FFFFFF" : "#6B7280", fontSize: "14px", fontWeight: 400, marginLeft: "6px" }}>
                  {t.pricing_per}
                </span>
              </p>

              <div className="mt-6 mb-6" style={{ borderTop: card.featured ? "1px solid rgba(255,255,255,0.2)" : "1px solid #E5E7EB" }} />

              <ul className="space-y-3">
                {card.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check size={16} style={{ color: card.featured ? "#FFFFFF" : "#C2410C", flexShrink: 0 }} />
                    <span style={{ color: card.featured ? "#FFFFFF" : "#374151", fontSize: "15px" }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="/anfrage"
                className="block text-center rounded-xl py-3 w-full mt-8 font-semibold transition-colors"
                style={
                  card.featured
                    ? { backgroundColor: "#FFFFFF", color: "#C2410C", fontWeight: 700 }
                    : { border: "1px solid #E5E7EB", color: "#111827" }
                }
              >
                {card.ctaLabel}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center" style={{ color: "#6B7280", fontSize: "12px" }}>
          {activeTab === "umzug" ? t.pricing_footnote : t.moebel_page_price_footnote}
        </p>
        <p className="mt-2 text-center" style={{ color: "#6B7280", fontSize: "15px" }}>
          {t.pricing_hourly}
        </p>
      </div>
    </section>
  );
}

export default PricingSection;
