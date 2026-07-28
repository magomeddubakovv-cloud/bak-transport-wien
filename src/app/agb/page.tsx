import type { Metadata } from "next";
import { AgbPageClient } from "./AgbPageClient";

export const metadata: Metadata = {
  title: "AGB | Allgemeine Geschäftsbedingungen",
  description: "Allgemeine Geschäftsbedingungen von BAK Transport Wien.",
  alternates: { canonical: "https://www.baktransport.at/agb" },
  robots: { index: false, follow: false },
};

export default function AgbPage() {
  return <AgbPageClient />;
}
