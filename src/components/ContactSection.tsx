"use client";

import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function ContactSection() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-[30px] font-extrabold text-[#1B3A6B]">
          {t.contact_h2}
        </h2>
        <p className="text-[#64748B] mt-3 max-w-lg mx-auto">
          {t.contact_desc}
        </p>

        <div className="inline-flex flex-col gap-2 mt-6 text-left">
          <p className="text-[#374151]">• {t.contact_item1}</p>
          <p className="text-[#374151]">• {t.contact_item2}</p>
          <p className="text-[#374151]">• {t.contact_item3}</p>
        </div>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="tel:+436764429652"
            className="inline-block bg-[#1B3A6B] text-white rounded-lg px-6 py-3 font-semibold text-sm hover:bg-[#162f57] transition-colors"
          >
            {t.contact_call_btn}
          </a>
          <a
            href="mailto:office@stahlundsoehne.at"
            className="inline-block border border-[#1B3A6B] text-[#1B3A6B] rounded-lg px-6 py-3 font-semibold text-sm hover:bg-[#1B3A6B] hover:text-white transition-colors"
          >
            {t.contact_email_btn}
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
