"use client";

import { useState, useEffect, useRef, type ComponentType, type CSSProperties } from "react";
import Link from "next/link";
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  Calculator,
  Home,
  Building2,
  Sofa,
  Tag,
  ChefHat,
  Award,
  Weight,
  Zap,
  Trash2,
  Star,
  ShieldCheck,
  Users,
  Briefcase,
  BookOpen,
  BookMarked,
  HelpCircle,
  Mail,
  FileText,
  Lock,
  ScrollText,
  MapPin,
  Globe,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

type IconProps = { size?: number; className?: string; style?: CSSProperties };

function FlagAT({ size = 20, className, style }: IconProps) {
  const height = Math.round((size * 16) / 24);
  return (
    <svg width={size} height={height} viewBox="0 0 24 16" className={className} style={{ borderRadius: "2px", display: "block", ...style }}>
      <rect width="24" height="5.33" y="0" fill="#ED2939" />
      <rect width="24" height="5.33" y="5.33" fill="#FFFFFF" />
      <rect width="24" height="5.34" y="10.66" fill="#ED2939" />
    </svg>
  );
}

function FlagDE({ size = 20, className, style }: IconProps) {
  const height = Math.round((size * 16) / 24);
  return (
    <svg width={size} height={height} viewBox="0 0 24 16" className={className} style={{ borderRadius: "2px", display: "block", ...style }}>
      <rect width="24" height="5.33" y="0" fill="#000000" />
      <rect width="24" height="5.33" y="5.33" fill="#DD0000" />
      <rect width="24" height="5.34" y="10.66" fill="#FFCE00" />
    </svg>
  );
}

function FlagCH({ size = 20, className, style }: IconProps) {
  const side = Math.round((size * 16) / 24);
  return (
    <svg width={side} height={side} viewBox="0 0 32 32" className={className} style={{ borderRadius: "2px", display: "block", ...style }}>
      <rect width="32" height="32" fill="#D52B1E" />
      <rect x="13" y="6" width="6" height="20" fill="#FFFFFF" />
      <rect x="6" y="13" width="20" height="6" fill="#FFFFFF" />
    </svg>
  );
}

export function Navbar() {
  const { lang } = useLang();
  const t = translations[lang];

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  type NavItem = { label: string; href: string; icon: ComponentType<IconProps>; flag?: boolean };
  type NavGroup = { category?: string; items: NavItem[] };
  type NavLink = { label: string; href: string; align?: "left" | "right"; columns: NavGroup[][] };

  const NAV_LINKS: NavLink[] = [
    {
      label: t.nav_leistungen,
      href: "#",
      columns: [
        [
          {
            category: lang === "en" ? "MOVING" : "UMZUG",
            items: [
              { label: lang === "en" ? "Moving Prices" : "Umzug Preise", href: "/leistungen/umzug-preise", icon: Calculator },
              { label: t.nav_privatumzug, href: "/leistungen/privatumzug", icon: Home },
              { label: t.nav_firmenumzug, href: "/leistungen/firmenumzug", icon: Building2 },
            ],
          },
          {
            category: lang === "en" ? "MORE" : "WEITERE",
            items: [
              { label: t.nav_schwerlasttransport, href: "/leistungen/schwerlasttransport", icon: Weight },
              { label: t.nav_notfallumzug, href: "/leistungen/notfallumzug", icon: Zap },
              { label: t.nav_entruempelung, href: "/leistungen/entruempelung", icon: Trash2 },
            ],
          },
        ],
        [
          {
            category: lang === "en" ? "ASSEMBLY" : "MONTAGE",
            items: [
              { label: t.nav_moebelmontage, href: "/leistungen/moebelmontage", icon: Sofa },
              { label: lang === "en" ? "Furniture Brands" : "Möbelmarken", href: "/leistungen/moebelmontage/marken", icon: Tag },
              { label: t.nav_kuechenmontage, href: "/leistungen/kuechenmontage", icon: ChefHat },
              { label: lang === "en" ? "Kitchen Brands" : "Küchenmarken", href: "/leistungen/kuechenmontage/marken", icon: Award },
            ],
          },
        ],
      ],
    },
    {
      label: t.nav_regionen,
      href: "#",
      columns: [
        [
          {
            items: [
              { label: t.nav_wien, href: "/regionen/wien", icon: MapPin },
              { label: t.nav_niederoesterreich, href: "/regionen/niederoesterreich", icon: MapPin },
              { label: t.nav_oesterreich, href: "/regionen/oesterreich", icon: FlagAT, flag: true },
              { label: t.nav_deutschland, href: "/regionen/deutschland", icon: FlagDE, flag: true },
              { label: t.nav_schweiz, href: "/regionen/schweiz", icon: FlagCH, flag: true },
              { label: t.nav_grenzueberschreitend, href: "/regionen/grenzueberschreitend", icon: Globe },
            ],
          },
        ],
      ],
    },
    {
      label: t.nav_unternehmen,
      href: "#",
      align: "right",
      columns: [
        [
          {
            category: lang === "en" ? "COMPANY" : "UNTERNEHMEN",
            items: [
              { label: lang === "en" ? "Advantages" : "Vorteile", href: "/vorteile", icon: Star },
              { label: lang === "en" ? "Insurance" : "Versicherung", href: "/versicherung", icon: ShieldCheck },
              { label: t.nav_ueber_uns, href: "/ueber-uns", icon: Users },
              { label: t.nav_karriere, href: "/karriere", icon: Briefcase },
              { label: t.nav_kontakt, href: "/kontakt", icon: Mail },
            ],
          },
        ],
        [
          {
            category: lang === "en" ? "GUIDE & HELP" : "RATGEBER & HILFE",
            items: [
              { label: lang === "en" ? "Guide" : "Ratgeber", href: "/ratgeber", icon: BookOpen },
              { label: lang === "en" ? "Glossary" : "Glossar", href: "/glossar", icon: BookMarked },
              { label: t.nav_faq, href: "/faq", icon: HelpCircle },
            ],
          },
          {
            category: lang === "en" ? "LEGAL" : "RECHTLICHES",
            items: [
              { label: t.nav_impressum, href: "/impressum", icon: FileText },
              { label: t.nav_datenschutz, href: "/datenschutz", icon: Lock },
              { label: t.nav_agb, href: "/agb", icon: ScrollText },
            ],
          },
        ],
      ],
    },
  ];

  const flattenGroups = (columns: NavGroup[][]): NavGroup[] => {
    const maxRows = Math.max(0, ...columns.map((c) => c.length));
    const result: NavGroup[] = [];
    for (let row = 0; row < maxRows; row++) {
      for (const column of columns) {
        if (column[row]) result.push(column[row]);
      }
    }
    return result;
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      style={{
        backgroundColor: "#FFFFFF",
        height: "88px",
        boxShadow: scrolled ? "0 4px 16px rgba(0,0,0,0.1)" : "0 1px 0 #E5E7EB",
      }}
    >
      <div ref={navRef} className="max-w-7xl mx-auto pl-2 pr-2 sm:pl-3 md:px-6 h-full flex items-center justify-between gap-2">
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center" style={{ lineHeight: 0 }}>
          <Logo variant="dark" size="sm" className="w-[124px] sm:w-[150px] md:w-[160px] h-auto" />
        </Link>

        {/* Desktop nav with dropdowns */}
        <nav className="hidden md:flex items-center" style={{ gap: "8px" }}>
          {NAV_LINKS.map((link) => {
            const isOpen = openDropdown === link.label;
            return (
              <div key={link.label} className="relative">
                <button
                  onClick={() => setOpenDropdown(isOpen ? null : link.label)}
                  className="flex items-center gap-1 rounded-md px-3 py-2 transition-colors duration-150 hover:text-[#C2410C] hover:bg-orange-50"
                  style={{ color: "#374151", fontSize: "15px", fontWeight: 500, background: "none", border: "none", cursor: "pointer" }}
                >
                  {link.label}
                  <ChevronDown size={14} style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
                </button>
                {isOpen && (
                  <div
                    className={`absolute top-full mt-1.5 flex gap-1 rounded-xl p-3 shadow-2xl z-50 ${link.align === "right" ? "right-0" : "left-0"}`}
                    style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB" }}
                  >
                    {link.columns.map((column, colIdx) => (
                      <div key={colIdx} style={{ minWidth: "224px" }}>
                        {column.map((group, groupIdx) => (
                          <div key={groupIdx} className={groupIdx > 0 ? "mt-3" : ""}>
                            {group.category && (
                              <p
                                className="px-3 pb-1.5 text-[11px] font-bold uppercase"
                                style={{ color: "#9CA3AF", letterSpacing: "0.08em" }}
                              >
                                {group.category}
                              </p>
                            )}
                            {group.items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <a
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setOpenDropdown(null)}
                                  className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-orange-50 hover:text-[#C2410C]"
                                  style={{ color: "#374151", textDecoration: "none", fontWeight: 500 }}
                                >
                                  {item.flag ? (
                                    <Icon size={18} className="shrink-0" />
                                  ) : (
                                    <Icon size={16} className="shrink-0" style={{ color: "#C2410C" }} />
                                  )}
                                  {item.label}
                                </a>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <LanguageSwitcher />
          {/* Phone button — square on mobile, full width on desktop */}
          <a
            href="tel:+4368110723047"
            className="flex items-center justify-center rounded-md transition-colors duration-150 hover:bg-[#C2410C] w-[44px] h-[44px] md:w-auto md:h-auto md:px-3 md:py-2 md:gap-2"
            style={{ backgroundColor: "#C2410C", color: "#FFFFFF", fontWeight: 700, textDecoration: "none", flexShrink: 0 }}
            aria-label={lang === "en" ? "Call Us" : "Anrufen"}
          >
            <Phone size={17} />
            <span className="hidden md:inline" style={{ fontSize: "15px", whiteSpace: "nowrap" }}>{lang === "en" ? "Call Us" : "Anrufen"}</span>
          </a>

          {/* WhatsApp button — square on mobile, full width on desktop */}
          <a
            href="https://wa.me/4368110723047"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-md transition-colors duration-150 hover:bg-[#16a34a] w-[44px] h-[44px] md:w-auto md:h-auto md:px-3 md:py-2 md:gap-2"
            style={{ backgroundColor: "#22C55E", color: "#FFFFFF", fontWeight: 700, textDecoration: "none", flexShrink: 0 }}
            aria-label="WhatsApp"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="hidden md:inline" style={{ fontSize: "15px", whiteSpace: "nowrap" }}>WhatsApp</span>
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex h-11 w-11 items-center justify-center rounded-md transition-colors hover:bg-orange-50"
            style={{ color: "#374151" }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            type="button"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden w-full overflow-y-auto max-h-[80vh]" style={{ backgroundColor: "#FFFFFF" }}>
          <nav className="flex flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <div className="py-3 font-bold text-base border-b" style={{ borderColor: "#E5E7EB", color: "#C2410C" }}>
                  {link.label}
                </div>
                {flattenGroups(link.columns).map((group, groupIdx) => (
                  <div key={groupIdx} className={groupIdx > 0 ? "mt-2" : ""}>
                    {group.category && (
                      <p
                        className="pl-3 pt-3 pb-1 text-[11px] font-bold uppercase"
                        style={{ color: "#9CA3AF", letterSpacing: "0.08em" }}
                      >
                        {group.category}
                      </p>
                    )}
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center gap-2.5 py-3 pl-3 text-base transition-colors hover:text-[#C2410C]"
                          style={{ color: "#4B5563", textDecoration: "none" }}
                        >
                          {item.flag ? (
                            <Icon size={19} className="shrink-0" />
                          ) : (
                            <Icon size={17} className="shrink-0" style={{ color: "#C2410C" }} />
                          )}
                          {item.label}
                        </a>
                      );
                    })}
                  </div>
                ))}
              </div>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="tel:+4368110723047"
                className="flex items-center justify-center gap-2 rounded-md font-bold text-white"
                style={{ backgroundColor: "#C2410C", padding: "14px 24px", fontSize: "16px", textDecoration: "none" }}
                onClick={() => setMenuOpen(false)}
              >
                <Phone size={18} />
                {lang === "en" ? "Call Us" : "Anrufen"}
              </a>
              <a
                href="https://wa.me/4368110723047"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-md font-bold text-white"
                style={{ backgroundColor: "#22C55E", padding: "14px 24px", fontSize: "16px", textDecoration: "none" }}
                onClick={() => setMenuOpen(false)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
