import { Mail, Calendar } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { QuickContactSection } from "@/components/QuickContactSection";

interface CtaLink {
  href: string;
  label: string;
}

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  label?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
}

export function PageLayout({ children, title, subtitle, label, primaryCta, secondaryCta }: PageLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="pt-[88px]">
        {/* Page Hero */}
        <section style={{ backgroundColor: "#F9FAFB" }} className="py-10 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <Breadcrumb />
            {label && (
              <p
                className="text-xs md:text-sm uppercase tracking-[0.16em] font-bold mb-3"
                style={{ color: "#C2410C" }}
              >
                {label}
              </p>
            )}
            <h1
              className="font-black text-[2rem] leading-[1.08] sm:text-4xl md:text-5xl"
              style={{ color: "#111827" }}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className="mt-4 text-base md:text-lg max-w-2xl"
                style={{ color: "#6B7280", lineHeight: 1.7 }}
              >
                {subtitle}
              </p>
            )}
            <div
              className="mt-5 md:mt-6"
              style={{
                width: "48px",
                height: "4px",
                backgroundColor: "#C2410C",
                borderRadius: "2px",
              }}
            />
            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                {primaryCta && (
                  <a
                    href={primaryCta.href}
                    className="rounded-lg font-extrabold transition-colors hover:bg-[#C2410C] flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: "#C2410C",
                      color: "#FFFFFF",
                      fontSize: "16px",
                      padding: "16px 32px",
                      textDecoration: "none",
                      minHeight: "48px",
                    }}
                  >
                    <Mail size={20} />
                    {primaryCta.label}
                  </a>
                )}
                {secondaryCta && (
                  <a
                    href={secondaryCta.href}
                    target={secondaryCta.href.startsWith("http") ? "_blank" : undefined}
                    rel={secondaryCta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="rounded-lg font-bold border-2 border-[#C2410C] transition-colors hover:bg-orange-50 flex items-center justify-center gap-2"
                    style={{
                      color: "#C2410C",
                      fontSize: "16px",
                      padding: "16px 32px",
                      textDecoration: "none",
                      minHeight: "48px",
                    }}
                  >
                    <Calendar size={20} />
                    {secondaryCta.label}
                  </a>
                )}
              </div>
            )}
          </div>
        </section>
        {children}
        <QuickContactSection />
      </main>
      <Footer />
    </>
  );
}

export default PageLayout;
