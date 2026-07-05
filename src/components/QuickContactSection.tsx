"use client";

import { Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function QuickContactSection() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section className="border-y border-[#E5E7EB] py-12 md:py-16" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div>
          <p className="text-lg leading-snug md:text-2xl" style={{ color: "#6B7280" }}>
            {t.regions_question}
          </p>
          <Link
            href="/anfrage"
            className="mt-3 inline-flex text-lg font-black md:text-xl"
            style={{ color: "#C2410C", textDecoration: "none" }}
          >
            {t.regions_contact_link}
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:flex sm:flex-wrap">
          <a
            href="tel:+4368110723047"
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg px-6 py-3 text-lg font-black text-white transition hover:bg-[#9A3412]"
            style={{ backgroundColor: "#C2410C", textDecoration: "none" }}
          >
            <Phone className="h-6 w-6" />
            {t.quick_contact_call}
          </a>
          <a
            href="https://wa.me/4368110723047"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg px-6 py-3 text-lg font-black text-white transition hover:bg-[#16A34A]"
            style={{ backgroundColor: "#25D366", textDecoration: "none" }}
          >
            <MessageCircle className="h-6 w-6" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default QuickContactSection;
