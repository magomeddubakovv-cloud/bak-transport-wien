import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AnnouncementBar } from "@/components/AnnouncementBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.baktransport.at"),
  title: {
    default: "BAK Transport Wien | Umzugsfirma ab €650 | Fixpreis & Vollversicherung",
    template: "%s | BAK Transport Wien",
  },
  description:
    "✓ BAK Transport Wien – Umzugsfirma mit Fixpreis ab €650. Privatumzug, Firmenumzug, Möbelmontage in allen 23 Bezirken. Kostenlose Besichtigung, Rückmeldung in 60 Min, vollversichert.",
  keywords: [
    "Umzugsfirma Wien",
    "Umzug Wien",
    "Privatumzug Wien",
    "Firmenumzug Wien",
    "Umzugsunternehmen Wien",
    "Möbelmontage Wien",
    "Küchenmontage Wien",
    "Umzug Wien Fixpreis",
    "Umzug Wien günstig",
    "Umzug Wien Preise",
    "Umzugsfirma Wien Empfehlung",
    "Umzugshelfer Wien",
    "Möbeltransport Wien",
    "Umzug Österreich",
    "BAK Transport",
    "Umzugsfirma Wien 1. Bezirk",
    "Umzugsfirma Wien alle Bezirke",
    "WKO Umzugsunternehmen Wien",
  ],
  authors: [{ name: "BAK Transport Wien" }],
  creator: "BAK Transport Wien",
  publisher: "BAK Transport Wien",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: "https://www.baktransport.at",
    siteName: "BAK Transport Wien",
    title: "BAK Transport Wien | Umzugsfirma mit Fixpreis",
    description:
      "Professionelle Umzüge in Wien & Österreich. Privatumzüge, Firmenumzüge, Möbel- & Küchenmontage. Fixpreis, vollversichert, 60 Min Rückmeldung.",
    images: [
      {
        url: "/images/photos/hero-movers.png",
        width: 1200,
        height: 630,
        alt: "BAK Transport Wien — Professionelle Umzüge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@baktransport",
    title: "BAK Transport Wien | Umzugsfirma mit Fixpreis",
    description: "Professionelle Umzüge in Wien & Österreich. Fixpreis, vollversichert.",
    images: ["/images/photos/hero-movers.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: {
    canonical: "https://www.baktransport.at",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MovingCompany"],
  "@id": "https://www.baktransport.at/#business",
  name: "BAK Transport Wien",
  alternateName: "BAK Transport",
  description:
    "Professionelle Umzugsfirma in Wien. Privatumzüge, Firmenumzüge, Möbel- und Küchenmontage. Fixpreis nach kostenloser Besichtigung.",
  url: "https://www.baktransport.at",
  telephone: "+4368110723047",
  email: "office@baktransport.at",
  image: "https://www.baktransport.at/images/photos/hero-movers.png",
  logo: "https://www.baktransport.at/images/logo-transparent.png",
  hasMap: "https://maps.google.com/?q=BAK+Transport+Wien",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Zwinzstraße 15",
    addressLocality: "Wien",
    postalCode: "1160",
    addressCountry: "AT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.2082,
    longitude: 16.3738,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Wien" },
    { "@type": "State", name: "Niederösterreich" },
    { "@type": "Country", name: "Österreich" },
  ],
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Bank Transfer",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "87",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.linkedin.com/company/bak-transport",
    "https://www.instagram.com/baktransport",
    "https://www.facebook.com/baktransport",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="apple-touch-icon" href="/icon.png" />
        <StructuredData data={localBusinessSchema} />
        <meta name="geo.region" content="AT-9" />
        <meta name="geo.placename" content="Wien" />
        <meta name="geo.position" content="48.2082;16.3738" />
        <meta name="ICBM" content="48.2082, 16.3738" />
      </head>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <AnnouncementBar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
