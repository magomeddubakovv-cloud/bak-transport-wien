"use client";

import { Calendar, Mail, Check, MapPin, Clock, Shield, Star } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { AblaufSection } from "@/components/AblaufSection";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";
import { WIENER_BEZIRKE, type WienerBezirk } from "@/data/wiener-bezirke";

interface Props {
  bezirk: WienerBezirk;
}

export function BezirkPageClient({ bezirk }: Props) {
  const { lang } = useLang();
  const t = translations[lang];

  const beschreibung = lang === "en" ? bezirk.beschreibungEn : bezirk.beschreibung;
  const besonderheit = lang === "en" ? bezirk.besonderheitEn : bezirk.besonderheit;

  const PRICING = [
    { label: t.bezirk_price1_label, size: t.bezirk_price1_size, price: t.bezirk_price1_price, detail: t.bezirk_price1_detail },
    { label: t.bezirk_price2_label, size: t.bezirk_price2_size, price: t.bezirk_price2_price, detail: t.bezirk_price2_detail },
    { label: t.bezirk_price3_label, size: t.bezirk_price3_size, price: t.bezirk_price3_price, detail: t.bezirk_price3_detail },
  ];

  return (
    <PageLayout
      label={`${t.bezirk_label_prefix} ${bezirk.nr} ${t.bezirk_wien}`}
      title={`${t.bezirk_label_prefix} ${bezirk.name} ${t.bezirk_wien}`}
      subtitle={`${t.bezirk_subtitle_prefix} ${bezirk.nr} ${t.bezirk_subtitle_suffix}`}
    >
      {/* Intro + Trust-Badges */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col items-center text-center">
              <p className="text-xs uppercase tracking-[3px] font-bold mb-3" style={{ color: "#C2410C" }}>
                {bezirk.fullName}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-5" style={{ color: "#111827" }}>
                {`${t.bezirk_intro_h2_prefix} ${bezirk.nr} ${t.bezirk_wien}`}
              </h2>
              <p className="mb-4 text-base leading-relaxed" style={{ color: "#6B7280" }}>
                {beschreibung}
              </p>
              <p className="mb-6 text-base leading-relaxed" style={{ color: "#6B7280" }}>
                {t.bezirk_intro_p2}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { icon: Shield, text: t.bezirk_badge_insured },
                  { icon: Clock, text: t.bezirk_badge_response },
                  { icon: Star, text: t.bezirk_badge_rating },
                  { icon: MapPin, text: besonderheit },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium"
                    style={{ backgroundColor: "#F9FAFB", border: "1px solid #E5E7EB", color: "#374151" }}>
                    <Icon size={14} style={{ color: "#C2410C" }} />
                    {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Checkliste */}
            <div className="rounded-2xl p-8" style={{ backgroundColor: "#F9FAFB", border: "1px solid #E5E7EB" }}>
              <h3 className="text-lg font-bold mb-6" style={{ color: "#111827" }}>
                {t.bezirk_checklist_h3}
              </h3>
              <ul className="space-y-4">
                {[
                  t.bezirk_checklist_1,
                  t.bezirk_checklist_2,
                  t.bezirk_checklist_3,
                  t.bezirk_checklist_4,
                  t.bezirk_checklist_5,
                  t.bezirk_checklist_6,
                  t.bezirk_checklist_7,
                  t.bezirk_checklist_8,
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 shrink-0" style={{ color: "#C2410C" }} />
                    <span style={{ color: "#374151" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Preise */}
      <section className="py-12 md:py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#111827" }}>
              {`${t.bezirk_pricing_h2_prefix} ${bezirk.name} ${t.bezirk_wien}`}
            </h2>
            <p style={{ color: "#6B7280" }}>
              {t.bezirk_pricing_subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {PRICING.map((p) => (
              <div key={p.label}
                className="rounded-2xl p-8 text-center"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB" }}>
                <div className="text-sm font-semibold mb-1" style={{ color: "#C2410C" }}>
                  {p.label}
                </div>
                <div className="text-base mb-1" style={{ color: "#6B7280" }}>{p.size}</div>
                <div className="text-3xl md:text-4xl font-black my-4" style={{ color: "#C2410C" }}>
                  {p.price}
                </div>
                <div className="text-sm mb-6" style={{ color: "#6B7280" }}>{p.detail}</div>
                <a href="/anfrage"
                  className="block w-full py-3 rounded-xl font-semibold text-sm text-center transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#C2410C", color: "#FFFFFF", textDecoration: "none" }}>
                  {t.bezirk_pricing_cta_btn}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-sm" style={{ color: "#9CA3AF" }}>
            {t.bezirk_pricing_footnote}
          </p>
        </div>
      </section>

      {/* Ablauf */}
      <AblaufSection
        heading={`${t.bezirk_ablauf_heading_prefix} ${bezirk.name} ${t.bezirk_ablauf_heading_suffix}`}
        steps={[
          { title: t.bezirk_step1_title, text: t.bezirk_step1_text },
          { title: t.bezirk_step2_title, text: t.bezirk_step2_text },
          { title: t.bezirk_step3_title, text: t.bezirk_step3_text },
          { title: t.bezirk_step4_title, text: t.bezirk_step4_text },
        ]}
      />

      {/* Fixpreis vs Stundenlohn */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: "#111827" }}>
            {t.bezirk_comparison_h2}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fixpreis */}
            <div className="rounded-2xl p-8 bg-white" style={{ border: "1px solid #E5E7EB" }}>
              <div className="w-2 h-8 rounded mb-4" style={{ backgroundColor: "#C2410C" }} />
              <h3 className="text-lg font-bold mb-5" style={{ color: "#111827" }}>{t.bezirk_comparison_fix_title}</h3>
              <ul className="space-y-3">
                {[
                  t.bezirk_comparison_fix_1,
                  t.bezirk_comparison_fix_2,
                  t.bezirk_comparison_fix_3,
                  t.bezirk_comparison_fix_4,
                  t.bezirk_comparison_fix_5,
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#6B7280" }}>
                    <Check size={14} className="mt-0.5 shrink-0" style={{ color: "#C2410C" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stundenlohn */}
            <div className="rounded-2xl p-8" style={{ backgroundColor: "#F9FAFB", border: "1px solid #E5E7EB" }}>
              <div className="w-2 h-8 rounded mb-4" style={{ backgroundColor: "#9CA3AF" }} />
              <h3 className="text-lg font-bold mb-5" style={{ color: "#111827" }}>{t.bezirk_comparison_hourly_title}</h3>
              <ul className="space-y-3">
                {[
                  t.bezirk_comparison_hourly_1,
                  t.bezirk_comparison_hourly_2,
                  t.bezirk_comparison_hourly_3,
                  t.bezirk_comparison_hourly_4,
                  t.bezirk_comparison_hourly_5,
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#6B7280" }}>
                    <span className="mt-0.5 shrink-0 font-bold" style={{ color: "#9CA3AF" }}>✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10" style={{ color: "#111827" }}>
            {`${t.bezirk_faq_h2_prefix} ${bezirk.name}`}
          </h2>
          <div className="space-y-6">
            {bezirk.faq.map((item, i) => (
              <div key={i} className="rounded-2xl p-6 bg-white" style={{ border: "1px solid #E5E7EB" }}>
                <p className="font-semibold mb-3" style={{ color: "#111827" }}>{lang === "en" ? item.qEn : item.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>{lang === "en" ? item.aEn : item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Andere Bezirke */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h3 className="text-xl font-bold mb-6" style={{ color: "#111827" }}>
            {t.bezirk_other_districts_h3}
          </h3>
          <div className="flex flex-wrap gap-2">
            {WIENER_BEZIRKE
              .filter(b => b.slug !== bezirk.slug)
              .map(b => (
                <a key={b.slug} href={`/regionen/wien/${b.slug}`}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:opacity-80"
                  style={{ backgroundColor: "#F3F4F6", color: "#374151", textDecoration: "none" }}>
                  {b.name}
                </a>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20" style={{ backgroundColor: "#C2410C" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {`${t.bezirk_cta_h2_prefix} ${bezirk.name} ${t.bezirk_cta_h2_suffix}`}
          </h2>
          <p className="mb-8 text-white opacity-90">
            {t.bezirk_cta_desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/anfrage"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base w-full sm:w-auto"
              style={{ backgroundColor: "#FFFFFF", color: "#C2410C", textDecoration: "none" }}>
              <Mail className="w-5 h-5" />
              {t.bezirk_cta_btn1}
            </a>
            <a href="https://calendly.com/baktransport/besichtigung-in-wien-umgebung" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base w-full sm:w-auto"
              style={{ border: "2px solid #FFFFFF", color: "#FFFFFF", textDecoration: "none" }}>
              <Calendar className="w-5 h-5" />
              {t.bezirk_cta_btn2}
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
