"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function PrivatumzugSection() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section label */}
        <p
          className="text-xs uppercase tracking-widest font-semibold mb-2"
          style={{ color: "#F97316" }}
        >
          {t.privat_label}
        </p>

        {/* Desktop: two-column grid; mobile: stacked (image first via order) */}
        <div className="flex flex-col-reverse md:flex-row md:gap-12 items-start">
          {/* Text column — bottom on mobile (flex-col-reverse makes text second = visually below) */}
          <div className="md:w-[55%] mt-8 md:mt-0">
            <h2
              className="font-extrabold mb-6 text-2xl md:text-[32px] leading-tight"
              style={{ color: "#1B3A6B" }}
            >
              {t.privat_h2}
            </h2>

            <p
              className="mt-4 text-base leading-[1.8]"
              style={{ color: "#374151" }}
            >
              {t.privat_p1}
            </p>
            <p
              className="mt-4 text-base leading-[1.8]"
              style={{ color: "#374151" }}
            >
              {t.privat_p2}
            </p>
            <p
              className="mt-4 text-base leading-[1.8]"
              style={{ color: "#374151" }}
            >
              {t.privat_p3}
            </p>

            {/* Button row */}
            <div className="mt-8 flex flex-wrap gap-3 items-center">
              <a
                href="tel:+436764429652"
                className="inline-flex items-center justify-center rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-[#1B3A6B] hover:text-white"
                style={{ borderColor: "#1B3A6B", color: "#1B3A6B" }}
              >
                {t.privat_btn_call}
              </a>
              <a
                href="/anfrage"
                className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-colors hover:opacity-90"
                style={{ backgroundColor: "#F97316" }}
              >
                {t.privat_btn_offer}
              </a>
              <Link
                href="/leistungen/privatumzug"
                className="text-sm font-medium underline underline-offset-4 transition-colors hover:opacity-75"
                style={{ color: "#1B3A6B" }}
              >
                {t.privat_btn_more}
              </Link>
              <Link
                href="/anfrage"
                className="text-sm font-medium underline underline-offset-4 transition-colors hover:opacity-75"
                style={{ color: "#1B3A6B" }}
              >
                {t.privat_btn_visit}
              </Link>
            </div>
          </div>

          {/* Image column — top on mobile (first in DOM with flex-col-reverse = visually first) */}
          <div className="md:w-[45%] w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/2] md:aspect-[4/3]">
              <Image
                src="/images/privatumzug.png"
                alt="Privatumzug Wien"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivatumzugSection;
