import type { Metadata } from "next";
import { VersicherungPageClient } from "./VersicherungPageClient";

export const metadata: Metadata = {
  title: "Umzugsversicherung Wien | BAK Transport",
  description:
    "Umzug vollversichert durchführen: BAK Transport erklärt Schutz, Verantwortung, Möbeldecken, Folierung und sicheren Transport in Wien.",
  alternates: { canonical: "https://www.baktransport.at/versicherung" },
};

export default function VersicherungPage() {
  return <VersicherungPageClient />;
}
