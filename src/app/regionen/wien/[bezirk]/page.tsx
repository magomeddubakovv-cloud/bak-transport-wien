import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WIENER_BEZIRKE, getBezirkBySlug } from "@/data/wiener-bezirke";
import { BezirkPageClient } from "@/components/BezirkPageClient";
import { StructuredData } from "@/components/StructuredData";

interface Props {
  params: Promise<{ bezirk: string }>;
}

export async function generateStaticParams() {
  return WIENER_BEZIRKE.map(b => ({ bezirk: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { bezirk: slug } = await params;
  const b = getBezirkBySlug(slug);
  if (!b) return {};

  return {
    title: `Umzug ${b.name} Wien ${b.nr} | Fixpreis | BAK Transport`,
    description: `Professioneller Umzugsservice im ${b.nr} Wien – ${b.name}. Fixpreis ab €650, vollversichert, kostenlose Besichtigung. ✓ Antwort in 60 Minuten.`,
    alternates: { canonical: `https://www.baktransport.at/regionen/wien/${b.slug}` },
    openGraph: {
      title: `Umzug ${b.name} Wien | BAK Transport`,
      description: `Zuverlässiger Umzugsservice im ${b.nr} Wien. Fixpreis, vollversichert, über 1.000 erfolgreiche Umzüge.`,
      url: `https://www.baktransport.at/regionen/wien/${b.slug}`,
      images: [
        {
          url: "/images/photos/hero-movers.png",
          width: 1200,
          height: 630,
          alt: `BAK Transport Wien — Umzug ${b.name}`,
        },
      ],
    },
  };
}

export default async function BezirkPage({ params }: Props) {
  const { bezirk: slug } = await params;
  const b = getBezirkBySlug(slug);
  if (!b) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
      { "@type": "ListItem", position: 2, name: "Wien", item: "https://www.baktransport.at/regionen/wien" },
      { "@type": "ListItem", position: 3, name: `Umzug ${b.name}`, item: `https://www.baktransport.at/regionen/wien/${b.slug}` },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: "BAK Transport Wien",
    url: "https://www.baktransport.at",
    telephone: "+4368110723047",
    areaServed: {
      "@type": "Place",
      name: b.fullName,
    },
    priceRange: "€€",
    description: `Professioneller Umzugsservice im ${b.nr} Wien – ${b.name}. Fixpreis, vollversichert.`,
  };

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={localBusinessSchema} />
      <BezirkPageClient bezirk={b} />
    </>
  );
}
