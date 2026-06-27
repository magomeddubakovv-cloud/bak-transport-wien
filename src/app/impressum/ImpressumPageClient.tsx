"use client";

import { PageLayout } from "@/components/PageLayout";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function ImpressumPageClient() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <PageLayout label={t.impressum_label} title={t.impressum_title}>
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6 prose" style={{ color: "#374151", lineHeight: "1.8" }}>
          <h2 style={{ color: "#F9FAFB" }}>{t.impressum_h2_1}</h2>
          <p><strong>BAK Transport GmbH</strong><br />Musterstraße 12<br />1010 Wien<br />Österreich</p>
          <p><strong>{t.impressum_tel}</strong> +43 676 123 45 67<br /><strong>{t.impressum_email_label}</strong> office@baktransport.at</p>
          <p><strong>{t.impressum_subject}</strong> {t.impressum_subject_value}</p>
          <p><strong>{t.impressum_uid}</strong> ATU12345678</p>
          <p><strong>{t.impressum_fn}</strong> FN 123456 a</p>
          <p><strong>{t.impressum_fng}</strong> {t.impressum_fng_value}</p>
          <p><strong>{t.impressum_authority}</strong> {t.impressum_authority_value}</p>
          <h2 style={{ color: "#F9FAFB" }}>{t.impressum_h2_2}</h2>
          <p>{t.impressum_liability}</p>
          <h2 style={{ color: "#F9FAFB" }}>{t.impressum_h2_3}</h2>
          <p>{t.impressum_copyright_text}</p>
        </div>
      </section>
    </PageLayout>
  );
}
