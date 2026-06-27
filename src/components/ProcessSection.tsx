"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function ProcessSection() {
  const { lang } = useLang();
  const t = translations[lang];
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    { number: 1, title: t.process_step1_title, duration: t.process_step1_duration, content: t.process_step1_content },
    { number: 2, title: t.process_step2_title, tabTitle: t.process_step2_tab, duration: t.process_step2_duration, content: t.process_step2_content },
    { number: 3, title: t.process_step3_title, duration: t.process_step3_duration, content: t.process_step3_content },
    { number: 4, title: t.process_step4_title, duration: t.process_step4_duration, content: t.process_step4_content },
    { number: 5, title: t.process_step5_title, duration: t.process_step5_duration, content: t.process_step5_content },
  ];

  const activeStep = steps[activeIndex];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#F97316] text-xs uppercase tracking-widest font-semibold mb-2">
            {t.process_label}
          </p>
          <h2 className="text-[34px] font-extrabold text-[#1B3A6B]">
            {t.process_h2}
          </h2>
          <p className="text-[#64748B] mt-3 max-w-2xl mx-auto text-base">
            {t.process_desc}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left: Step tabs */}
          <div className="flex flex-col gap-3 md:w-72 shrink-0">
            {steps.map((step, index) => (
              <button
                key={step.number}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "flex items-center gap-4 rounded-lg border p-4 text-left transition-colors cursor-pointer",
                  activeIndex === index
                    ? "bg-[#1B3A6B] border-[#1B3A6B] text-white"
                    : "bg-white border-[#E2E8F0] text-[#0F172A] hover:border-[#1B3A6B]"
                )}
              >
                <span
                  className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full text-lg font-bold shrink-0",
                    activeIndex === index
                      ? "bg-white/20 text-white"
                      : "bg-[#F8FAFC] text-[#1B3A6B]"
                  )}
                >
                  {step.number}
                </span>
                <span className="text-sm font-medium leading-snug">
                  {index === 1 ? (step.tabTitle ?? step.title) : step.title}
                </span>
              </button>
            ))}
          </div>

          {/* Right: Content panel */}
          <div className="flex-1 bg-[#F8FAFC] rounded-2xl p-8 flex flex-col">
            <p className="text-[#64748B] text-base mb-4">
              {t.process_step} {activeStep.number} {t.process_of} {steps.length}
            </p>
            <h3 className="text-[24px] font-bold text-[#1B3A6B] mb-3">
              {activeStep.title}
            </h3>
            <span className="inline-block bg-[#F97316]/10 text-[#F97316] rounded-full px-4 py-1 text-[12px] mb-4">
              {activeStep.duration}
            </span>
            <p className="text-[#E5E7EB] text-[16px] leading-[1.8] flex-1">
              {activeStep.content}
            </p>

            {/* Prev / Next buttons */}
            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
                disabled={activeIndex === 0}
                className="border border-[#E2E8F0] text-[#64748B] rounded-lg px-5 py-2 text-sm font-medium hover:border-[#1B3A6B] hover:text-[#1B3A6B] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                {t.process_prev}
              </button>
              <button
                onClick={() =>
                  setActiveIndex((i) => Math.min(steps.length - 1, i + 1))
                }
                disabled={activeIndex === steps.length - 1}
                className="border border-[#E2E8F0] text-[#64748B] rounded-lg px-5 py-2 text-sm font-medium hover:border-[#1B3A6B] hover:text-[#1B3A6B] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                {t.process_next}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
