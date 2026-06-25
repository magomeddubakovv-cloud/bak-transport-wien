import type { Metadata } from "next";
import { ImpressumPageClient } from "./ImpressumPageClient";

export const metadata: Metadata = {
  title: "Impressum | BAK Transport Wien",
  description: "Impressum der BAK Transport GmbH Wien – Angaben gemäß § 25 Mediengesetz.",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return <ImpressumPageClient />;
}
