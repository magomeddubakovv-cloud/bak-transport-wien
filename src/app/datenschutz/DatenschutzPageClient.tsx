"use client";

import { PageLayout } from "@/components/PageLayout";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function DatenschutzPageClient() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <PageLayout label={t.datenschutz_label} title={t.datenschutz_title}>
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6" style={{ color: "#374151", lineHeight: "1.8" }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#111827" }}>{t.datenschutz_h1}</h2>
          <p className="mb-6">{t.datenschutz_p1}</p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#111827" }}>{t.datenschutz_h2}</h2>
          <p className="mb-4"><strong>{t.datenschutz_responsible_q}</strong><br />{t.datenschutz_responsible_a}</p>
          <p className="mb-6"><strong>{t.datenschutz_collect_q}</strong><br />{t.datenschutz_collect_a}</p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#111827" }}>{t.datenschutz_h3}</h2>
          <p className="mb-6">{t.datenschutz_rights}</p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#111827" }}>{t.datenschutz_h4}</h2>
          <p className="mb-6">{t.datenschutz_hosting}</p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#111827" }}>{t.datenschutz_h5}</h2>
          <p>{t.datenschutz_contact}</p>
        </div>
      </section>
    </PageLayout>
  );
}
