import type { Metadata } from "next";
import { RatgeberPageClient } from "./RatgeberPageClient";

export const metadata: Metadata = {
  title: "Umzug Ratgeber Wien | Checklisten & Tipps",
  description:
    "Umzug Ratgeber von BAK Transport Wien: Checklisten, Kosten, Planung, Möbelmontage, Küchenmontage, Versicherung und Tipps für stressfreie Umzüge.",
  alternates: { canonical: "https://www.baktransport.at/ratgeber" },
};

export default function RatgeberPage() {
  return <RatgeberPageClient />;
}
