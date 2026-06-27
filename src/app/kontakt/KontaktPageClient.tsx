"use client";

import { Phone } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function KontaktPageClient() {
  const { lang } = useLang();
  const t = translations[lang];

  const contacts = [
    { icon: "📞", title: t.kontakt_tel_title, value: "+43 676 123 45 67", sub: t.kontakt_tel_sub, href: "tel:+436761234567" },
    { icon: "✉️", title: t.kontakt_email_title, value: "office@baktransport.at", sub: t.kontakt_email_sub, href: "mailto:office@baktransport.at" },
    { icon: "📍", title: t.kontakt_addr_title, value: "Musterstraße 12, 1010 Wien", sub: t.kontakt_addr_sub, href: null },
  ];

  const cards = [
    { title: t.kontakt_card1_title, text: t.kontakt_card1_text },
    { title: t.kontakt_card2_title, text: t.kontakt_card2_text },
    { title: t.kontakt_card3_title, text: t.kontakt_card3_text },
  ];

  const hours = [
    { day: t.kontakt_day1, time: t.kontakt_time1 },
    { day: t.kontakt_day2, time: t.kontakt_time2 },
    { day: t.kontakt_day3, time: t.kontakt_time3 },
  ];

  return (
    <PageLayout label={t.kontakt_label} title={t.kontakt_title} subtitle={t.kontakt_subtitle}>
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12" style={{ color: "#F9FAFB" }}>{t.kontakt_how_h2}</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12 text-white">{t.kontakt_hours_h2}</h2>
          <div className="max-w-md mx-auto space-y-4">
            {hours.map((row) => (
              <div key={row.day} className="flex justify-between py-3" style={{ borderBottom: "1px solid #E5E7EB" }}>
                <span style={{ color: "#9CA3AF" }}>{row.day}</span>
                <span className="font-semibold text-white">{row.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12" style={{ color: "#F9FAFB" }}>{t.kontakt_reach_h2}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contacts.map((c) => (
              <div key={c.title} className="rounded-2xl p-8 text-center" style={{ backgroundColor: "#F9FAFB", border: "1px solid #E5E7EB" }}>
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#F9FAFB" }}>{c.title}</h3>
                {c.href ? (
                  <a href={c.href} className="block font-semibold mb-1" style={{ color: "#EA580C", textDecoration: "none" }}>{c.value}</a>
                ) : (
                  <p className="font-semibold mb-1" style={{ color: "#EA580C" }}>{c.value}</p>
                )}
                <p style={{ color: "#6B7280", fontSize: "14px" }}>{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20" style={{ backgroundColor: "#EA580C" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{t.kontakt_cta_h2}</h2>
          <p className="mb-8 text-white opacity-90">{t.kontakt_cta_desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:office@baktransport.at" className="inline-block px-8 py-4 rounded-xl font-semibold text-base" style={{ backgroundColor: "#FFFFFF", color: "#EA580C" }}>{t.kontakt_cta_email_btn}</a>
            <a href="tel:+436761234567" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base" style={{ border: "2px solid #EA580C", color: "#EA580C" }}><Phone className="w-5 h-5" />{t.kontakt_cta_call_btn}</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
