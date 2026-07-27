"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

type MoveType = "privat" | "firma" | "entruempelung";

interface Tier {
  labelKey: string;
  min?: number;
  max?: number;
  fromOnly?: boolean;
}

const TIERS: Record<MoveType, Tier[]> = {
  privat: [
    { labelKey: "rechner_privat_1", min: 350, max: 700 },
    { labelKey: "rechner_privat_2", min: 600, max: 1200 },
    { labelKey: "rechner_privat_3", min: 1000, max: 1800 },
    { labelKey: "rechner_privat_4", min: 1500, max: 2500 },
    { labelKey: "rechner_privat_5", min: 2200, fromOnly: true },
  ],
  firma: [
    { labelKey: "rechner_firma_1", min: 2000, max: 4000 },
    { labelKey: "rechner_firma_2", min: 4000, max: 8000 },
    { labelKey: "rechner_firma_3" },
  ],
  entruempelung: [
    { labelKey: "rechner_entruempelung_1", min: 280, fromOnly: true },
    { labelKey: "rechner_entruempelung_2", min: 650, fromOnly: true },
    { labelKey: "rechner_entruempelung_3" },
  ],
};

export function PriceCalculator() {
  const { lang } = useLang();
  const t = translations[lang];
  const [type, setType] = useState<MoveType>("privat");
  const [sizeIndex, setSizeIndex] = useState(0);

  const tiers = TIERS[type];
  const tier = tiers[sizeIndex] ?? tiers[0];

  const formatEUR = (value: number) =>
    new Intl.NumberFormat(lang === "en" ? "en-US" : "de-AT", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);

  const typeOptions: { value: MoveType; label: string }[] = [
    { value: "privat", label: t.rechner_type_privat },
    { value: "firma", label: t.rechner_type_firma },
    { value: "entruempelung", label: t.rechner_type_entruempelung },
  ];

  const handleTypeChange = (value: MoveType) => {
    setType(value);
    setSizeIndex(0);
  };

  return (
    <div className="mt-10 rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#FFF7ED", border: "1px solid #FED7AA" }}>
      <h2 className="text-xl font-bold md:text-2xl" style={{ color: "#9A3412" }}>
        {t.rechner_heading}
      </h2>
      <p className="mt-2 leading-[1.7]" style={{ color: "#6B7280" }}>
        {t.rechner_intro}
      </p>

      <div className="mt-6">
        <label className="text-sm font-bold uppercase tracking-[0.08em]" style={{ color: "#9A3412" }}>
          {t.rechner_type_label}
        </label>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
          {typeOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => handleTypeChange(opt.value)}
              className="rounded-xl px-4 py-3 text-sm font-bold transition-colors"
              style={
                type === opt.value
                  ? { backgroundColor: "#C2410C", color: "#FFFFFF", border: "1px solid #C2410C" }
                  : { backgroundColor: "#FFFFFF", color: "#9A3412", border: "1px solid #FED7AA" }
              }
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="rechner-size" className="text-sm font-bold uppercase tracking-[0.08em]" style={{ color: "#9A3412" }}>
          {t.rechner_size_label}
        </label>
        <select
          id="rechner-size"
          value={sizeIndex}
          onChange={(e) => setSizeIndex(Number(e.target.value))}
          className="mt-3 w-full rounded-xl px-4 py-3 text-base"
          style={{ backgroundColor: "#FFFFFF", color: "#111827", border: "1px solid #FED7AA" }}
        >
          {tiers.map((sizeTier, i) => (
            <option key={sizeTier.labelKey} value={i}>
              {t[sizeTier.labelKey as keyof typeof t]}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6 rounded-xl p-5" style={{ backgroundColor: "#FFFFFF", border: "1px solid #FED7AA" }}>
        <p className="text-sm font-bold uppercase tracking-[0.08em]" style={{ color: "#9A3412" }}>
          {t.rechner_result_label}
        </p>
        <p className="mt-2 text-3xl font-black" style={{ color: "#C2410C" }}>
          {tier.min === undefined
            ? t.rechner_on_request
            : tier.fromOnly
              ? `${lang === "en" ? "from" : "ab"} ${formatEUR(tier.min)}`
              : `${formatEUR(tier.min)} – ${formatEUR(tier.max ?? tier.min)}`}
        </p>
        <p className="mt-3 text-sm leading-[1.7]" style={{ color: "#6B7280" }}>
          {t.rechner_result_note}
        </p>
      </div>

      <Link
        href="/anfrage"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-5 py-3 font-bold text-white sm:w-auto"
        style={{ backgroundColor: "#C2410C", textDecoration: "none" }}
      >
        {t.rechner_cta}
        <ArrowRight className="h-5 w-5" />
      </Link>
    </div>
  );
}

export default PriceCalculator;
