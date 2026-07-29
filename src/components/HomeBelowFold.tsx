"use client";

import dynamic from "next/dynamic";

const ReviewsSection = dynamic(() => import("@/components/ReviewsSection").then((m) => m.ReviewsSection));
const ServicesSection = dynamic(() => import("@/components/ServicesSection").then((m) => m.ServicesSection));
const WhyUsSection = dynamic(() => import("@/components/WhyUsSection").then((m) => m.WhyUsSection));
const QuoteFormSection = dynamic(() => import("@/components/QuoteFormSection").then((m) => m.QuoteFormSection));
const RegionsSection = dynamic(() => import("@/components/RegionsSection").then((m) => m.RegionsSection));
const PricingSection = dynamic(() => import("@/components/PricingSection").then((m) => m.PricingSection));
const FAQSection = dynamic(() => import("@/components/FAQSection").then((m) => m.FAQSection));
const CTASection = dynamic(() => import("@/components/CTASection").then((m) => m.CTASection));
const QuickContactSection = dynamic(() => import("@/components/QuickContactSection").then((m) => m.QuickContactSection));

export function HomeBelowFold() {
  return (
    <>
      <ReviewsSection />
      <ServicesSection />
      <WhyUsSection />
      <QuoteFormSection />
      <RegionsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <QuickContactSection />
    </>
  );
}

export default HomeBelowFold;
