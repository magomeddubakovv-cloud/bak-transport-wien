"use client";

import { MapPin, Phone } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const areaTags = [
  { label: "Wien", labelEn: "Vienna", highlight: true },
  { label: "Niederösterreich", labelEn: "Lower Austria", highlight: false },
  { label: "Burgenland", labelEn: "Burgenland", highlight: false },
  { label: "Steiermark", labelEn: "Styria", highlight: false },
  { label: "Salzburg", labelEn: "Salzburg", highlight: false },
  { label: "Oberösterreich", labelEn: "Upper Austria", highlight: false },
  { label: "Tirol", labelEn: "Tyrol", highlight: false },
  { label: "Vorarlberg", labelEn: "Vorarlberg", highlight: false },
  { label: "Kärnten", labelEn: "Carinthia", highlight: false },
  { label: "Deutschland", labelEn: "Germany", highlight: false },
  { label: "Schweiz", labelEn: "Switzerland", highlight: false },
];

export function RegionsSection() {
  const { lang } = useLang();
  const t = translations[lang];

  const regionCards = [
    { title: t.region1_title, text: t.region1_text },
    { title: t.region2_title, text: t.region2_text },
    { title: t.region3_title, text: t.region3_text },
  ];

  return (
    <section className="py-12 md:py-24" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "#C2410C" }}
          >
            {t.regions_label}
          </p>
          <h2
            className="text-2xl md:text-4xl leading-tight"
            style={{ color: "#111827", fontWeight: 900 }}
          >
            {t.regions_h2}
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto"
            style={{ color: "#6B7280", fontSize: "16px", lineHeight: 1.7 }}
          >
            {t.regions_desc}
          </p>
        </div>

        {/* Two columns */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left column — 45% */}
          <div className="flex flex-col gap-6 lg:w-[45%]">
            {regionCards.map((card) => (
              <div
                key={card.title}
                className="flex items-start gap-4 rounded-xl p-6"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB" }}
              >
                <MapPin
                  size={24}
                  style={{ color: "#C2410C", marginTop: "2px", flexShrink: 0 }}
                />
                <div>
                  <p style={{ fontWeight: 700, color: "#111827", fontSize: "17px" }}>
                    {card.title}
                  </p>
                  <p
                    className="mt-1"
                    style={{ color: "#6B7280", fontSize: "15px", lineHeight: 1.6 }}
                  >
                    {card.text}
                  </p>
                </div>
              </div>
            ))}

            {/* Below cards link */}
            <div className="mt-8">
              <p style={{ color: "#6B7280", fontSize: "15px" }}>
                {t.regions_question}
              </p>
              <a
                href="#kontakt"
                className="hover:underline"
                style={{ color: "#C2410C", fontWeight: 700, fontSize: "15px" }}
              >
                {t.regions_contact_link}
              </a>
              <div className="flex gap-2 mt-4">
                <a
                  href="tel:+4368110723047"
                  className="flex items-center justify-center gap-2 rounded-md font-bold transition-colors duration-150 hover:bg-[#C2410C]"
                  style={{ backgroundColor: "#C2410C", color: "#FFFFFF", fontWeight: 700, textDecoration: "none", padding: "10px 16px", fontSize: "15px" }}
                  aria-label="Anrufen"
                >
                  <Phone size={17} />
                  Anrufen
                </a>
                <a
                  href="https://wa.me/4368110723047"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-md font-bold transition-colors duration-150 hover:bg-[#16a34a]"
                  style={{ backgroundColor: "#22C55E", color: "#FFFFFF", fontWeight: 700, textDecoration: "none", padding: "10px 16px", fontSize: "15px" }}
                  aria-label="WhatsApp"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right column — 55% */}
          <div className="lg:w-[55%]">
            <div
              className="rounded-2xl p-6 md:p-10"
              style={{ backgroundColor: "#F9FAFB" }}
            >
              <p
                className="mb-6"
                style={{ color: "#111827", fontSize: "22px", fontWeight: 700 }}
              >
                {t.regions_area_title}
              </p>

              <div className="flex flex-wrap gap-2">
                {areaTags.map((tag) => (
                  <span
                    key={tag.label}
                    className="rounded-full px-4 py-2"
                    style={{
                      backgroundColor: tag.highlight ? "#C2410C" : "#FFFFFF",
                      color: tag.highlight ? "#FFFFFF" : "#374151",
                      fontSize: "14px",
                      border: tag.highlight ? "none" : "1px solid #E5E7EB",
                    }}
                  >
                    {lang === "en" ? tag.labelEn : tag.label}
                  </span>
                ))}
              </div>

              <p
                className="mt-8 text-center italic"
                style={{ color: "#6B7280", fontSize: "12px" }}
              >
                {t.regions_cross_border}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegionsSection;
