import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
      <main>
        {/* Page Hero */}
        <section style={{ backgroundColor: "#F9FAFB" }} className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            {label && (
              <p
                className="text-xs uppercase tracking-[4px] font-bold mb-3"
                style={{ color: "#EA580C" }}
              >
                {label}
              </p>
            )}
            <h1
              className="font-black leading-tight text-2xl md:text-4xl lg:text-5xl"
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
              className="mt-6"
              style={{
                width: "48px",
                height: "4px",
                backgroundColor: "#EA580C",
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
