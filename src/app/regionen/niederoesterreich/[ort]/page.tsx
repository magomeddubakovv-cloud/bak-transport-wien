import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NOE_ORTE, getOrtBySlug } from "@/data/noe-orte";
import { NoeOrtPageClient } from "@/components/NoeOrtPageClient";
import { StructuredData } from "@/components/StructuredData";

interface Props {
  params: Promise<{ ort: string }>;
}

export async function generateStaticParams() {
  return NOE_ORTE.map(o => ({ ort: o.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ort: slug } = await params;
  const o = getOrtBySlug(slug);
  if (!o) return {};

  return {
    title: `Umzug ${o.name} | Fixpreis ab €680 | BAK Transport`,
    description: `Professioneller Umzugsservice von Wien nach ${o.name}. Fixpreis ab €680, vollversichert, kostenlose Besichtigung. ✓ Antwort in 60 Minuten.`,
    alternates: { canonical: `https://www.baktransport.at/regionen/niederoesterreich/${o.slug}` },
    openGraph: {
      title: `Umzug ${o.name} | BAK Transport`,
      description: `Zuverlässiger Umzugsservice von Wien nach ${o.name}. Fixpreis, vollversichert, über 1.000 erfolgreiche Umzüge.`,
      url: `https://www.baktransport.at/regionen/niederoesterreich/${o.slug}`,
      images: [
        {
          url: "/images/photos/hero-movers.jpg",
          width: 1200,
          height: 630,
          alt: `BAK Transport — Umzug ${o.name}`,
        },
      ],
    },
  };
}

export default async function NoeOrtPage({ params }: Props) {
  const { ort: slug } = await params;
  const o = getOrtBySlug(slug);
  if (!o) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
      { "@type": "ListItem", position: 2, name: "Niederösterreich", item: "https://www.baktransport.at/regionen/niederoesterreich" },
      { "@type": "ListItem", position: 3, name: `Umzug ${o.name}`, item: `https://www.baktransport.at/regionen/niederoesterreich/${o.slug}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Umzugsservice ${o.name}`,
    provider: { "@id": "https://www.baktransport.at/#business" },
    areaServed: {
      "@type": "Place",
      name: o.fullName,
    },
    description: `Professioneller Umzugsservice von Wien nach ${o.name}. Fixpreis, vollversichert.`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: o.faq.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={serviceSchema} />
      <StructuredData data={faqSchema} />
      <NoeOrtPageClient ort={o} />
    </>
  );
}
