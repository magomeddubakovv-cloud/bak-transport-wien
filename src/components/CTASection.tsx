"use client";

import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function CTASection() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: "#EA580C" }}>
      <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-4xl leading-tight" style={{ color: "#FFFFFF", fontWeight: 900 }}>
          {t.cta_h2}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>
          {t.cta_desc}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#kontakt"
            className="rounded-xl transition-colors text-center"
            style={{ backgroundColor: "#FFFFFF", color: "#EA580C", padding: "16px 32px", fontSize: "17px", fontWeight: 800, display: "block", minHeight: "44px" }}
          >
            {t.cta_btn1}
          </a>
          <a
            href="tel:+4368110723047"
            className="rounded-xl transition-colors text-center"
            style={{ border: "2px solid #FFFFFF", color: "#FFFFFF", padding: "16px 32px", fontSize: "17px", fontWeight: 700, display: "block", minHeight: "44px" }}
          >
            {t.kontakt_cta_call_btn}
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
