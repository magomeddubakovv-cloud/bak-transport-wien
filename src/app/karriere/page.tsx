import type { Metadata } from "next";
import { KarrierePageClient } from "./KarrierePageClient";

export const metadata: Metadata = {
  title: "Karriere bei BAK Transport Wien | Jobs & Stellenangebote",
  description: "Jobs bei BAK Transport Wien: Umzugshelfer, LKW-Fahrer, Montagetechniker. Faire Bezahlung, stabiles Team, modernes Equipment.",
  alternates: { canonical: "https://www.baktransport.at/karriere" },
};

export default function KarrierePage() {
  return <KarrierePageClient />;
}
