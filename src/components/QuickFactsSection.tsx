"use client";

import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const trustLogos = [
  { src: "/images/logowko-transport.png", alt: "WKO Transport Logo", height: 50, width: 160 },
  { src: "/images/firmenabc.png", alt: "FirmenABC Logo", height: 45, width: 140 },
  { src: "/images/VC_KV3_pos_RGB.png", alt: "Vorteilsclub Logo", height: 50, width: 160 },
];

export function QuickFactsSection() {
  const { lang } = useLang();
  const t = translations[lang];

  const facts = [
    t.quickfact1,
    t.quickfact2,
    t.quickfact3,
    t.quickfact4,
  ];

  return (
    <section className="w-full py-12" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2
          className="font-bold text-center mb-6"
          style={{ color: "#1B3A6B", fontSize: "22px" }}
        >
          {t.quickfacts_h2}
        </h2>

        {/* Facts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {facts.map((fact) => (
            <div key={fact} className="flex items-start gap-2">
              {/* Checkmark */}
              <span
                className="flex-shrink-0 font-bold text-lg leading-snug"
                style={{ color: "#F97316" }}
              >
                ✓
              </span>
              <span style={{ color: "#374151", fontSize: "16px" }}>{fact}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="my-8" style={{ borderColor: "#E2E8F0" }} />

        {/* Trust logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
          {trustLogos.map((logo) => (
            <div
              key={logo.alt}
              className="transition-all duration-300 grayscale hover:grayscale-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain"
                style={{ height: `${logo.height}px`, width: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuickFactsSection;
