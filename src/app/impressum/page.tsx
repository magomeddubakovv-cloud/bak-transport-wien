import type { Metadata } from "next";
import { ImpressumPageClient } from "./ImpressumPageClient";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von BAK Transport Wien – Angaben gemäß § 25 Mediengesetz.",
  alternates: { canonical: "https://www.baktransport.at/impressum" },
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return <ImpressumPageClient />;
}
