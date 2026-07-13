"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface PricingTabProps {
  text: string;
  selected: boolean;
  onSelect: () => void;
}

export function PricingTab({ text, selected, onSelect }: PricingTabProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "relative flex-1 whitespace-nowrap px-3 py-2 text-xs font-semibold transition-colors sm:flex-none sm:px-6 sm:text-sm",
        selected ? "text-white" : "text-[#4B5563]"
      )}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pricing-tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-full"
          style={{ backgroundColor: "#C2410C" }}
        />
      )}
    </button>
  );
}

export default PricingTab;
