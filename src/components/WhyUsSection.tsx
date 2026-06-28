"use client";

import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function WhyUsSection() {
  const { lang } = useLang();
  const t = translations[lang];

  const reasons = [
    { number: "01", title: t.r1_title, text: t.r1_text },
    { number: "02", title: t.r2_title, text: t.r2_text },
    { number: "03", title: t.r3_title, text: t.r3_text },
    { number: "04", title: t.r4_title, text: t.r4_text },
  ];

  return (
    <section className="bg-white py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-10 md:mb-16 text-center">
          <p className="text-xs font-bold uppercase mb-3" style={{ color: "#C2410C", letterSpacing: "4px" }}>
            {t.whyus_label}
          </p>
          <h2 className="text-2xl md:text-4xl leading-tight" style={{ color: "#111827", fontWeight: 900 }}>
            <strong>{t.whyus_h2}</strong>
          </h2>
          <div className="w-16 h-1 bg-[#C2410C] mx-auto mt-6" />
        </div>

        <p className="text-center max-w-3xl mx-auto mb-10 md:mb-12" style={{ color: "#6B7280", fontSize: "16px", lineHeight: 1.8 }}>
          {t.whyus_body}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="bg-[#F9FAFB] rounded-2xl p-8 border border-[#E5E7EB] flex items-start gap-6"
            >
              <span
                className="leading-none select-none text-4xl md:text-5xl"
                style={{ color: "#C2410C", fontWeight: 900, opacity: 0.9, minWidth: "3rem" }}
              >
                {reason.number}
              </span>
              <div>
                <h3 className="mb-2" style={{ color: "#111827", fontSize: "20px", fontWeight: 800 }}>
                  <strong>{reason.title}</strong>
                </h3>
                <p style={{ color: "#6B7280", fontSize: "16px", lineHeight: 1.7 }}>
                  {reason.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-16 relative rounded-2xl overflow-hidden h-48 md:h-80">
          <Image
            src="/images/photos/banner.jpg"
            alt="BAK Transport Wien — Professionelle Umzugshelfer"
            title="BAK Transport Wien — Professionelle Umzugshelfer"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: "rgba(17,24,39,0.55)" }} />
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div>
              <p className="text-white font-black" style={{ fontSize: "clamp(22px,4vw,36px)" }}>
                {t.whyus_quote}
              </p>
              <p className="mt-3 font-semibold" style={{ color: "#C2410C", fontSize: "16px" }}>BAK Transport Wien</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUsSection;
