"use client";

import Link from "next/link";
import { Logo } from "@/components/Logo";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function Footer() {
  const { lang } = useLang();
  const t = translations[lang];

  const leistungen = [
    { label: lang === "en" ? "Transport Vienna" : "Transport Wien", href: "/leistungen/transport-wien" },
    { label: lang === "en" ? "Moving Prices" : "Umzug Preise", href: "/leistungen/umzug-preise" },
    { label: t.nav_privatumzug, href: "/leistungen/privatumzug" },
    { label: t.nav_firmenumzug, href: "/leistungen/firmenumzug" },
    { label: t.nav_moebelmontage, href: "/leistungen/moebelmontage" },
    { label: lang === "en" ? "Furniture Brands" : "Möbelmarken", href: "/leistungen/moebelmontage/marken" },
    { label: t.nav_kuechenmontage, href: "/leistungen/kuechenmontage" },
    { label: lang === "en" ? "Kitchen Brands" : "Küchenmarken", href: "/leistungen/kuechenmontage/marken" },
    { label: t.nav_schwerlasttransport, href: "/leistungen/schwerlasttransport" },
    { label: t.nav_notfallumzug, href: "/leistungen/notfallumzug" },
    { label: t.nav_entruempelung, href: "/leistungen/entruempelung" },
  ];

  const regionen = [
    { label: t.nav_wien, href: "/regionen/wien" },
    { label: t.nav_niederoesterreich, href: "/regionen/niederoesterreich" },
    { label: t.nav_oesterreich, href: "/regionen/oesterreich" },
    { label: t.nav_deutschland, href: "/regionen/deutschland" },
    { label: t.nav_schweiz, href: "/regionen/schweiz" },
    { label: t.nav_grenzueberschreitend, href: "/regionen/grenzueberschreitend" },
  ];

  const unternehmen = [
    { label: lang === "en" ? "Advantages" : "Vorteile", href: "/vorteile" },
    { label: lang === "en" ? "Insurance" : "Versicherung", href: "/versicherung" },
    { label: lang === "en" ? "Guide" : "Ratgeber", href: "/ratgeber" },
    { label: lang === "en" ? "Glossary" : "Glossar", href: "/glossar" },
    { label: t.nav_ueber_uns, href: "/ueber-uns" },
    { label: t.nav_kontakt, href: "/kontakt" },
    { label: t.nav_faq, href: "/faq" },
    { label: t.nav_karriere, href: "/karriere" },
    { label: t.nav_impressum, href: "/impressum" },
    { label: t.nav_datenschutz, href: "/datenschutz" },
    { label: t.nav_agb, href: "/agb" },
  ];

  return (
    <footer style={{ backgroundColor: "#1C0F00", color: "#FFFFFF" }}>
      <div className="py-16" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" style={{ lineHeight: 0, display: "inline-block" }}>
              <Logo variant="light" size="md" />
            </Link>
            <p className="mt-3" style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px" }}>
              {t.footer_tagline}
            </p>
            <p className="mt-4" style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", lineHeight: 1.7 }}>
              {t.footer_desc}
            </p>

            <div className="mt-6 flex gap-3">
              {[
                { Icon: LinkedInIcon, label: "LinkedIn", href: "https://www.linkedin.com/company/bak-transport" },
                { Icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/baktransport" },
                { Icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/baktransport" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-lg p-2.5 transition-colors"
                  style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "#FFFFFF" }}
                >
                  <Icon />
                </a>
              ))}
            </div>

            <address
              className="mt-4 not-italic"
              style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", lineHeight: 1.7 }}
              itemScope
              itemType="https://schema.org/LocalBusiness"
            >
              <span itemProp="name" style={{ display: "none" }}>BAK Transport Wien</span>
              <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="streetAddress">Zwinzstraße 15</span><br />
                <span itemProp="postalCode">1160</span>{" "}
                <span itemProp="addressLocality">Wien</span>
              </span>
              <br />
              <a
                href="tel:+4368110723047"
                itemProp="telephone"
                style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none" }}
              >
                +43 681 10723047
              </a>
            </address>
          </div>

          {/* Column 2 — Leistungen */}
          <div>
            <p className="mb-5 uppercase tracking-wider" style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "12px" }}>
              {t.footer_leistungen}
            </p>
            <ul className="space-y-3">
              {leistungen.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", textDecoration: "none" }}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Regionen */}
          <div>
            <p className="mb-5 uppercase tracking-wider" style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "12px" }}>
              {t.footer_regionen}
            </p>
            <ul className="space-y-3">
              {regionen.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", textDecoration: "none" }}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Unternehmen */}
          <div>
            <p className="mb-5 uppercase tracking-wider" style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "12px" }}>
              {t.footer_unternehmen}
            </p>
            <ul className="space-y-3">
              {unternehmen.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", textDecoration: "none" }}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="py-6" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "12px" }}>
            {t.footer_copyright}
          </p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "12px" }}>
            office@baktransport.at · +43 681 10723047
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
