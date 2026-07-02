"use client";

import { Clock, Calendar, BadgeEuro, Shield } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const iconCircle = (Icon: React.ElementType) => (
  <div className="inline-flex items-center justify-center rounded-full p-3" style={{ backgroundColor: "#FFF7ED" }}>
    <Icon size={32} color="#F97316" />
  </div>
);

export function BenefitsSection() {
  const { lang } = useLang();
  const t = translations[lang];

  const benefits = [
    { icon: iconCircle(Clock), title: t.benefit1_title, text: t.benefit1_text },
    { icon: iconCircle(Calendar), title: t.benefit2_title, text: t.benefit2_text },
    { icon: iconCircle(BadgeEuro), title: t.benefit3_title, text: t.benefit3_text },
    { icon: iconCircle(Shield), title: t.benefit4_title, text: t.benefit4_text },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <p
            className="uppercase tracking-widest font-semibold mb-2"
            style={{ color: "#F97316", fontSize: "12px" }}
          >
            {t.benefits_label}
          </p>
          <h2
            className="font-extrabold"
            style={{ color: "#C2410C", fontSize: "clamp(26px, 4vw, 36px)" }}
          >
            {t.benefits_h2}
          </h2>
          <p
            className="mx-auto mt-4"
            style={{
              color: "#64748B",
              fontSize: "16px",
              maxWidth: "560px",
              lineHeight: 1.65,
            }}
          >
            {t.benefits_desc}
          </p>
        </div>

        {/* Benefit cards 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-xl p-8 transition-shadow duration-200 hover:shadow-md"
              style={{ border: "1px solid #E2E8F0" }}
            >
              {card.icon}
              <h3
                className="font-bold mt-4"
                style={{ color: "#C2410C", fontSize: "20px" }}
              >
                {card.title}
              </h3>
              <p
                className="mt-3"
                style={{ color: "#374151", fontSize: "16px", lineHeight: 1.7 }}
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
