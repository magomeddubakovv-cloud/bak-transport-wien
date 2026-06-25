"use client";

import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function FinalCTASection() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section className="bg-[#1B3A6B] py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-[22px] md:text-[32px] font-extrabold text-white max-w-3xl mx-auto leading-snug">
          {t.final_cta_h2}
        </h2>
        <p className="text-white/70 mt-4 max-w-xl mx-auto">
          {t.final_cta_desc}
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-[#1B3A6B] rounded-lg px-8 py-4 font-bold text-sm hover:bg-gray-100 transition-colors">
            {t.final_cta_btn1}
          </button>
          <a
            href="tel:+436764429652"
            className="inline-block bg-transparent border-2 border-white text-white rounded-lg px-8 py-4 font-bold text-sm hover:bg-white/10 transition-colors"
          >
            {t.final_cta_btn2}
          </a>
        </div>
      </div>
    </section>
  );
}

export default FinalCTASection;
