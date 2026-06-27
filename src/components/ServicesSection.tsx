"use client";

import Image from "next/image";
import { Home, Building2, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function ServicesSection() {
  const { lang } = useLang();
  const t = translations[lang];

  const services: { Icon: LucideIcon; title: string; description: string; features: string[]; photo: string; photoAlt: string; href: string }[] = [
    {
      Icon: Home,
      title: t.svc1_title,
      description: t.svc1_desc,
      features: [t.svc1_f1, t.svc1_f2, t.svc1_f3, t.svc1_f4],
      photo: "/images/photos/privatumzug.jpg",
      photoAlt: "Private move",
      href: "/leistungen/privatumzug",
    },
    {
      Icon: Building2,
      title: t.svc2_title,
      description: t.svc2_desc,
      features: [t.svc2_f1, t.svc2_f2, t.svc2_f3, t.svc2_f4],
      photo: "/images/photos/firmenumzug.jpg",
      photoAlt: "Office move",
      href: "/leistungen/firmenumzug",
    },
    {
      Icon: Wrench,
      title: t.svc3_title,
      description: t.svc3_desc,
      features: [t.svc3_f1, t.svc3_f2, t.svc3_f3, t.svc3_f4],
      photo: "/images/photos/moebelmontage.jpg",
      photoAlt: "Assembly & transport",
      href: "/leistungen/moebelmontage",
    },
  ];

  return (
    <section className="bg-[#F9FAFB] py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-xs font-bold uppercase mb-3" style={{ color: "#EA580C", letterSpacing: "4px" }}>
            {t.services_label}
          </p>
          <h2 className="text-2xl md:text-4xl leading-[1.1]" style={{ color: "#F9FAFB", fontWeight: 900 }}>
            {t.services_h2}
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base md:text-lg" style={{ color: "#6B7280" }}>
            {t.services_desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const { Icon, title, description, features, photo, photoAlt, href } = service;
            return (
              <div
                key={title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-default"
              >
                <div className="h-2 w-full bg-[#EA580C]" />
                <div className="relative w-full h-48">
                  <Image src={photo} alt={photoAlt} fill className="object-cover" />
                </div>
                <div className="p-6 md:p-8">
                  <div className="w-14 h-14 bg-[#FEF2F2] rounded-2xl flex items-center justify-center mb-6">
                    <Icon size={28} color="#EA580C" />
                  </div>
                  <h3 className="mb-3" style={{ color: "#F9FAFB", fontSize: "22px", fontWeight: 800 }}>
                    {title}
                  </h3>
                  <p className="mb-6" style={{ color: "#6B7280", fontSize: "15px", lineHeight: 1.7 }}>
                    {description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#EA580C] rounded-sm flex-shrink-0" />
                        <span style={{ color: "#E5E7EB", fontSize: "14px" }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={href} className="hover:underline" style={{ color: "#EA580C", fontWeight: 700, fontSize: "14px" }}>
                    {t.services_learn_more}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
