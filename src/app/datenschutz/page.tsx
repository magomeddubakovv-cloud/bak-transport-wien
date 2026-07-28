import type { Metadata } from "next";
import { DatenschutzPageClient } from "./DatenschutzPageClient";

export const metadata: Metadata = {
  title: "Datenschutz | DSGVO",
  description: "Datenschutzerklärung von BAK Transport Wien gemäß DSGVO.",
  alternates: { canonical: "https://www.baktransport.at/datenschutz" },
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return <DatenschutzPageClient />;
}
