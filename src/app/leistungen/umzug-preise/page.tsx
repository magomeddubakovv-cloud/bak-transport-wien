import type { Metadata } from "next";
import { UmzugPreisePageClient } from "./UmzugPreisePageClient";

export const metadata: Metadata = {
  title: "Umzug Preise Wien | Fixpreis statt versteckte Kosten",
  description:
    "Umzug Preise in Wien transparent erklärt: Fixpreis nach Besichtigung, faire Pakete, Versicherung und klare Leistungen mit BAK Transport Wien.",
  alternates: { canonical: "https://www.baktransport.at/leistungen/umzug-preise" },
};

export default function UmzugPreisePage() {
  return <UmzugPreisePageClient />;
}
