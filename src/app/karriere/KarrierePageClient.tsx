"use client";

import { Check, Phone } from "lucide-react";
import Image from "next/image";
import { PageLayout } from "@/components/PageLayout";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function KarrierePageClient() {
  const { lang } = useLang();
  const t = translations[lang];

  const checklistItems = [
    t.karriere_check1, t.karriere_check2, t.karriere_check3,
    t.karriere_check4, t.karriere_check5, t.karriere_check6,
  ];

  const cards = [
    { title: t.karriere_job1_title, text: t.karriere_job1_text },
    { title: t.karriere_job2_title, text: t.karriere_job2_text },
    { title: t.karriere_job3_title, text: t.karriere_job3_text },
  ];

  const faqs = [
    { q: t.karriere_faq1_q, a: t.karriere_faq1_a },
    { q: t.karriere_faq2_q, a: t.karriere_faq2_a },
    { q: t.karriere_faq3_q, a: t.karriere_faq3_a },
  ];

  const whyItems = [
    { icon: "??", title: t.karriere_why1_title, sub: t.karriere_why1_sub },
    { icon: "??", title: t.karriere_why2_title, sub: t.karriere_why2_sub },
    { icon: "??", title: t.karriere_why3_title, sub: t.karriere_why3_sub },
    { icon: "??", title: t.karriere_why4_title, sub: t.karriere_why4_sub },
  ];

  return (
    <PageLayout label={t.karriere_label} title={t.karriere_title} subtitle={t.karriere_subtitle}>
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#111827" }}>{t.karriere_h2}</h2>
              <p className="mb-4" style={{ color: "#6B7280", lineHeight: "1.75" }}>{t.karriere_p1}</p>
              <p className="mb-4" style={{ color: "#6B7280", lineHeight: "1.75" }}>{t.karriere_p2}</p>
              <p style={{ color: "#6B7280", lineHeight: "1.75" }}>{t.karriere_p3}</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative rounded-2xl overflow-hidden h-48 md:h-72">
                <Image src="/images/photos/team.jpg" alt="BAK Transport Team Wien" fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover object-center" />
              </div>
              <ul className="space-y-4">
                {checklistItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 shrink-0" style={{ color: "#EA580C" }} />
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
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12" style={{ color: "#111827" }}>{t.karriere_jobs_h2}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-8 shadow-sm" style={{ border: "1px solid #E5E7EB" }}>
                <div className="w-2 h-8 rounded mb-4" style={{ backgroundColor: "#EA580C" }} />
                <h3 className="text-xl font-semibold mb-3" style={{ color: "#111827" }}>{card.title}</h3>
                <p style={{ color: "#6B7280", lineHeight: "1.75" }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12 text-gray-900">{t.karriere_why_h2}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {whyItems.map((item) => (
              <div key={item.title} className="rounded-2xl p-6 text-center" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB" }}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-bold text-gray-900 mb-1">{item.title}</div>
                <div style={{ color: "#9CA3AF", fontSize: "15px" }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 md:mb-12" style={{ color: "#111827" }}>{t.karriere_faq_h2}</h2>
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
      <section className="py-12 md:py-20" style={{ backgroundColor: "#EA580C" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{t.karriere_cta_h2}</h2>
          <p className="mb-8 text-white opacity-90">{t.karriere_cta_desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:office@baktransport.at" className="inline-block px-8 py-4 rounded-xl font-semibold text-base" style={{ backgroundColor: "#FFFFFF", color: "#EA580C" }}>{t.karriere_cta_btn1}</a>
            <a href="tel:+4368110723047" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base" style={{ border: "2px solid #EA580C", color: "#EA580C" }}><Phone className="w-5 h-5" />{t.karriere_cta_btn2}</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
