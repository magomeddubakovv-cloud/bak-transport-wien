"use client";

import { PageLayout } from "@/components/PageLayout";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function AgbPageClient() {
  const { lang } = useLang();
  const t = translations[lang];

  const sections = [
    [t.agb_h1, t.agb_p1],
    [t.agb_h2, t.agb_p2],
    [t.agb_h3, t.agb_p3],
    [t.agb_h4, t.agb_p4],
    [t.agb_h5, t.agb_p5],
    [t.agb_h6, t.agb_p6],
    [t.agb_h7, t.agb_p7],
    [t.agb_h8, t.agb_p8],
    [t.agb_h9, t.agb_p9],
    [t.agb_h10, t.agb_p10],
  ];

  return (
    <PageLayout label={t.agb_label} title={t.agb_title}>
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6" style={{ color: "#374151", lineHeight: "1.8" }}>
          {sections.map(([heading, body]) => (
            <div key={heading}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#9A3412" }}>{heading}</h2>
              <p className="mb-6">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
