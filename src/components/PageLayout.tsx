import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  label?: string;
}

export function PageLayout({ children, title, subtitle, label }: PageLayoutProps) {
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
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default PageLayout;
