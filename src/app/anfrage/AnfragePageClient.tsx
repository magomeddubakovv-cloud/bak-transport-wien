"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { QuoteFormSection } from "@/components/QuoteFormSection";
import { QuickContactSection } from "@/components/QuickContactSection";
import { Check } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function AnfragePageClient() {
  const { lang } = useLang();
  const t = translations[lang];

  const TRUST = [
    t.anfrage_trust1,
    t.anfrage_trust2,
    t.anfrage_trust3,
    t.anfrage_trust4,
    t.anfrage_trust5,
  ];

  const steps = [
    { step: "1", title: t.anfrage_step1_title, text: t.anfrage_step1_text },
    { step: "2", title: t.anfrage_step2_title, text: t.anfrage_step2_text },
    { step: "3", title: t.anfrage_step3_title, text: t.anfrage_step3_text },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-[88px]">
        {/* Hero Banner */}
        <section style={{ backgroundColor: "#C2410C" }} className="py-8 md:py-14">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <p className="text-[11px] md:text-xs uppercase tracking-[3px] md:tracking-[4px] font-bold mb-3" style={{ color: "#FED7AA" }}>
              {t.anfrage_hero_badge}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              {t.anfrage_hero_title}
            </h1>
            <p className="text-base md:text-lg mb-6 md:mb-8 max-w-xl mx-auto" style={{ color: "#FFEDD5" }}>
              {t.anfrage_hero_subtext_pre}
              <strong style={{ color: "#FED7AA" }}>{t.anfrage_hero_subtext_bold}</strong>
              {t.anfrage_hero_subtext_post}
            </p>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2.5 sm:gap-3 max-w-xl mx-auto">
              {TRUST.map(item => (
                <div key={item} className="flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-[13px] sm:text-sm font-semibold text-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#FFEDD5" }}>
                  <Check size={13} className="shrink-0" style={{ color: "#FED7AA" }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <QuoteFormSection />

        {/* So geht es weiter */}
        <section className="py-8 md:py-16" style={{ backgroundColor: "#C2410C" }}>
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 md:mb-10 text-center">{t.anfrage_steps_h2}</h2>
            <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 sm:gap-5 md:gap-8">
              {steps.map(({ step, title, text }) => (
                <div
                  key={step}
                  className="min-w-[78%] snap-center rounded-2xl bg-white p-5 text-left shadow-xl sm:min-w-0 sm:p-6"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-black"
                      style={{ backgroundColor: "#C2410C", color: "#FFFFFF" }}
                    >
                      {step}
                    </div>
                    <h3 className="text-lg font-bold leading-tight" style={{ color: "#111827" }}>{title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#4B5563" }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <QuickContactSection />
      </main>
      <Footer />
    </>
  );
}
