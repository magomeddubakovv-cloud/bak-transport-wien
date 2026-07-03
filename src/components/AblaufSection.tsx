interface AblaufStep {
  title: string;
  text: string;
}

interface AblaufSectionProps {
  heading: string;
  steps: AblaufStep[];
}

export function AblaufSection({ heading, steps }: AblaufSectionProps) {
  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.16em] font-bold mb-3" style={{ color: "#C2410C" }}>
          Ablauf
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-7 md:mb-12" style={{ color: "#111827" }}>
          {heading}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="rounded-xl md:rounded-2xl p-4 md:p-6"
              style={{ border: "1px solid #E5E7EB", backgroundColor: "#FFFFFF" }}
            >
              <div
                className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white font-bold text-base mb-3 md:mb-4"
                style={{ backgroundColor: "#C2410C" }}
              >
                {i + 1}
              </div>
              <h3 className="font-semibold text-base mb-2" style={{ color: "#111827" }}>
                {step.title}
              </h3>
              <p className="text-sm" style={{ color: "#6B7280", lineHeight: 1.65 }}>
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AblaufSection;

