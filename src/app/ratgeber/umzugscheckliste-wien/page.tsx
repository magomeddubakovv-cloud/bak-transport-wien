import type { Metadata } from "next";
import { UmzugschecklisteWienPageClient } from "./UmzugschecklisteWienPageClient";

export const metadata: Metadata = {
  title: "Umzugscheckliste Wien | Schritt für Schritt zum Umzug",
  description:
    "Umzugscheckliste Wien: Was 6–8 Wochen, 1 Woche und am Umzugstag zu erledigen ist. Kostenlose Schritt-für-Schritt-Anleitung von BAK Transport Wien.",
  alternates: { canonical: "https://www.baktransport.at/ratgeber/umzugscheckliste-wien" },
};

export default function UmzugschecklisteWienPage() {
  return <UmzugschecklisteWienPageClient />;
}
