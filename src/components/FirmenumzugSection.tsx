"use client";

import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function FirmenumzugSection() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section className="py-20" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Section label */}
        <p
          className="text-xs uppercase tracking-widest font-semibold mb-2"
          style={{ color: "#F97316" }}
        >
          {t.firmen_label}
        </p>

        {/* Desktop: image left, text right; mobile: image first, text below */}
        <div className="flex flex-col md:flex-row md:gap-12 items-start">
          {/* Image column — left on desktop, top on mobile */}
          <div className="md:w-[45%] w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <Image
                src="/images/firmenumzug.png"
                alt="Firmenumzug Wien"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </div>

          {/* Text column — right on desktop, below on mobile */}
          <div className="md:w-[55%] mt-8 md:mt-0">
            <h2
              className="font-extrabold mb-6 text-2xl md:text-[32px] leading-tight"
              style={{ color: "#C2410C" }}
            >
              {t.firmen_h2}
            </h2>

            <p
              className="mt-4 text-base leading-[1.8]"
              style={{ color: "#374151" }}
            >
              {t.firmen_p1}
            </p>
            <p
              className="mt-4 text-base leading-[1.8]"
              style={{ color: "#374151" }}
            >
              {t.firmen_p2}
            </p>
            <p
              className="mt-4 text-base leading-[1.8]"
              style={{ color: "#374151" }}
            >
              {t.firmen_p3}
            </p>

            {/* Button row */}
            <div className="mt-8 flex flex-wrap gap-3 items-center">
              <a
                href="tel:+436764429652"
                className="inline-flex items-center justify-center rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-[#C2410C] hover:text-white"
                style={{ borderColor: "#C2410C", color: "#C2410C" }}
              >
                {t.firmen_btn_call}
              </a>
              <a
                href="/anfrage"
                className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-colors hover:opacity-90"
                style={{ backgroundColor: "#F97316" }}
              >
                {t.firmen_btn_contact}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirmenumzugSection;
