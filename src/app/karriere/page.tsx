import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { KarrierePageClient } from "./KarrierePageClient";

export const metadata: Metadata = {
  title: "Karriere | Jobs & Stellenangebote",
  description: "Jobs bei BAK Transport Wien: Umzugshelfer, LKW-Fahrer, Montagetechniker. Faire Bezahlung, stabiles Team, modernes Equipment.",
  alternates: { canonical: "https://www.baktransport.at/karriere" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Karriere", item: "https://www.baktransport.at/karriere" },
  ],
};

const hiringOrganization = {
  "@type": "Organization",
  name: "BAK Transport Wien",
  sameAs: "https://www.baktransport.at",
};

const jobLocation = {
  "@type": "Place",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Zwinzstraße 15",
    addressLocality: "Wien",
    addressRegion: "Wien",
    postalCode: "1160",
    addressCountry: "AT",
  },
};

const jobPostingSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Umzugshelfer (m/w/d)",
    description:
      "Auch ohne Erfahrung willkommen. Wir schulen Sie ein und geben Ihnen von Anfang an die Werkzeuge, die Sie brauchen.",
    datePosted: "2026-07-13",
    validThrough: "2026-10-11",
    employmentType: "FULL_TIME",
    hiringOrganization,
    jobLocation,
  },
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "LKW-Fahrer (m/w/d)",
    description:
      "Führerschein Klasse C/CE und Berufskraftfahrerkompetenznachweis (BKF) erforderlich. Gute Deutschkenntnisse von Vorteil.",
    datePosted: "2026-07-13",
    validThrough: "2026-10-11",
    employmentType: "FULL_TIME",
    hiringOrganization,
    jobLocation,
  },
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Montagetechniker (m/w/d)",
    description:
      "Erfahrung im Möbel- oder Küchenaufbau? Dann sind Sie bei uns genau richtig. Werkzeug wird gestellt.",
    datePosted: "2026-07-13",
    validThrough: "2026-10-11",
    employmentType: "FULL_TIME",
    hiringOrganization,
    jobLocation,
  },
];

export default function KarrierePage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      {jobPostingSchemas.map((schema) => (
        <StructuredData key={schema.title} data={schema} />
      ))}
      <KarrierePageClient />
    </>
  );
}
