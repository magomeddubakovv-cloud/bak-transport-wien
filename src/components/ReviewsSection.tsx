"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const reviews = [
  {
    name: "Gerhard Strobl",
    initial: "G",
    color: "#E8430A",
    time: "Vor 2 Monaten",
    text: "Sehr professionelle Umsetzung des Umzugs. Herr Bak war zu allen Terminen sehr pünktlich und hat alle Zusagen eingehalten. Auch das Preis-Leistungs-Verhältnis war perfekt. Die Firma kann ich nur weiterempfehlen!",
    stars: 5,
  },
  {
    name: "Christoph Trummer",
    initial: "C",
    color: "#374151",
    time: "Vor 2 Monaten",
    text: "Top Service! Der Umzug hat sich zwar aufgrund unvorhersehbarer äußerer Umstände verzögert, aber das Team blieb durchgehend professionell, effizient und lösungsorientiert. Klare Empfehlung.",
    stars: 5,
  },
  {
    name: "Josef Ossovsky",
    initial: "J",
    color: "#111827",
    time: "Vor 3 Monaten",
    text: "Bin mit der gesamten Abwicklung des Auftrages sehr zufrieden. Sehr höflich und zuvorkommend! Saubere und schnelle Arbeit! Jederzeit gerne wieder!",
    stars: 5,
  },
  {
    name: "Maria Huber",
    initial: "M",
    color: "#EA580C",
    time: "Vor 1 Monat",
    text: "Absolut reibungsloser Ablauf von Anfang bis Ende. Das Team war freundlich, schnell und hat alles sorgfältig behandelt. Kein einziger Kratzer an den Möbeln. Sehr empfehlenswert!",
    stars: 5,
  },
  {
    name: "Thomas Weinberger",
    initial: "T",
    color: "#047857",
    time: "Vor 3 Wochen",
    text: "Firmenumzug mit BAK Transport – lief wie am Schnürchen. Pünktlich, professionell, kein Stress. Preis war fair und transparent. Definitiv wieder!",
    stars: 5,
  },
  {
    name: "Sandra Koller",
    initial: "S",
    color: "#7C3AED",
    time: "Vor 5 Monaten",
    text: "Die Möbelmontage wurde sehr sauber und schnell erledigt. Alle Möbel wurden perfekt aufgebaut, Verpackungsmaterial wurde mitgenommen. Super Team!",
    stars: 5,
  },
  {
    name: "Andreas Fuchs",
    initial: "A",
    color: "#B45309",
    time: "Vor 2 Wochen",
    text: "Notfallumzug kurzfristig organisiert und perfekt abgewickelt. Innerhalb von 24 Stunden alles erledigt. Das Team hat mich wirklich beeindruckt. Danke BAK Transport!",
    stars: 5,
  },
  {
    name: "Elena Müller",
    initial: "E",
    color: "#0369A1",
    time: "Vor 1 Woche",
    text: "Küchenmontage top erledigt! Alles passt perfekt, Anschlüsse sitzen, keine Macken. Das Team war auch sehr nett und hat den Bereich danach sauber hinterlassen.",
    stars: 5,
  },
  {
    name: "Peter Gruber",
    initial: "P",
    color: "#BE185D",
    time: "Vor 6 Monaten",
    text: "Umzug von Wien nach München super abgewickelt. Alles pünktlich geliefert, kein einziger Schaden. Für internationale Umzüge absolute Empfehlung!",
    stars: 5,
  },
  {
    name: "Katrin Bauer",
    initial: "K",
    color: "#065F46",
    time: "Vor 4 Monaten",
    text: "Zweimal mit BAK Transport umgezogen – beide Male perfekt. Freundliches Team, faire Preise, keine Überraschungen auf der Rechnung. Mehr kann man nicht verlangen.",
    stars: 5,
  },
  {
    name: "Michael Steiner",
    initial: "M",
    color: "#92400E",
    time: "Vor 3 Wochen",
    text: "Klaviertransport in den 4. Stock ohne Aufzug – hat geklappt! Profis die wissen was sie tun. Klavier ist heil angekommen, Team war super entspannt und kompetent.",
    stars: 5,
  },
  {
    name: "Julia Reiter",
    initial: "J",
    color: "#9D174D",
    time: "Vor 1 Monat",
    text: "Ich war skeptisch ob ein Umzug in 2 Tagen machbar ist – BAK Transport hat es problemlos geschafft. Sehr organisiert, kein Chaos, alles ordentlich verpackt. Danke!",
    stars: 5,
  },
  {
    name: "Robert Langer",
    initial: "R",
    color: "#1D4ED8",
    time: "Vor 7 Monaten",
    text: "Tresor transportiert worden – 400 kg, 3. Stock, kein Lift. Das Team hat das mit Spezialausrüstung einwandfrei gelöst. Sehr professionell, absolut weiterempfehlenswert.",
    stars: 5,
  },
  {
    name: "Anna Schwarz",
    initial: "A",
    color: "#6D28D9",
    time: "Vor 2 Wochen",
    text: "Privatumzug innerhalb Wiens sehr angenehm abgewickelt. Das Team hat auf jedes Möbelstück geachtet, alles mit Decken geschützt. Preis genau wie vereinbart – top!",
    stars: 5,
  },
  {
    name: "Markus Hofer",
    initial: "M",
    color: "#C2410C",
    time: "Vor 5 Monaten",
    text: "Büroumzug am Wochenende damit der Betrieb Montag wieder läuft – hat perfekt funktioniert. Schnell, leise, diskret. Unsere Mitarbeiter haben kaum etwas bemerkt.",
    stars: 5,
  },
  {
    name: "Sabine Wagner",
    initial: "S",
    color: "#0F766E",
    time: "Vor 3 Monaten",
    text: "IKEA Möbel aufbauen lassen – sehr zügig und sauber gearbeitet. Alle Kartons mitgenommen, keine Schrauben übrig. Werde BAK Transport an alle weiterempfehlen!",
    stars: 5,
  },
  {
    name: "Florian Mayr",
    initial: "F",
    color: "#1E3A5F",
    time: "Vor 6 Wochen",
    text: "Umzug Wien nach Graz mit vollem LKW. Alles kam heil und pünktlich an. Der Preis war fair kalkuliert und blieb auch so. Sehr gute Erfahrung, gerne wieder!",
    stars: 5,
  },
  {
    name: "Christine Hofmann",
    initial: "C",
    color: "#7F1D1D",
    time: "Vor 2 Monaten",
    text: "Notfallumzug wegen Wasserschaden – innerhalb von 3 Stunden war das Team da. Ruhig, professionell, schnell. In einer stressigen Situation wirklich eine große Hilfe!",
    stars: 5,
  },
  {
    name: "David Nowak",
    initial: "D",
    color: "#134E4A",
    time: "Vor 1 Monat",
    text: "Zweizimmerwohnung in einem Tag komplett umgezogen. Möbel ab- und wieder aufgebaut, alles verpackt. Für den Preis absolut unschlagbar. Sehr zufrieden!",
    stars: 5,
  },
  {
    name: "Verena Zimmer",
    initial: "V",
    color: "#4C1D95",
    time: "Vor 3 Wochen",
    text: "Umzug von Niederösterreich nach Wien perfekt organisiert. Das Team kannte die Strecke gut, war pünktlich und hat alles sicher transportiert. 5 Sterne verdient!",
    stars: 5,
  },
];

function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 150;
  const displayText = !expanded && isLong ? review.text.slice(0, 150) + "…" : review.text;

  return (
    <div
      className="flex-shrink-0 flex flex-col justify-between rounded-2xl p-5 bg-white"
      style={{
        width: "300px",
        minHeight: "200px",
        border: "1px solid #E5E7EB",
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
      }}
    >
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base shrink-0"
            style={{ backgroundColor: review.color }}
          >
            {review.initial}
          </div>
          <div>
            <p className="font-semibold text-sm" style={{ color: "#111827" }}>{review.name}</p>
            <p className="text-xs" style={{ color: "#6B7280" }}>{review.time}</p>
          </div>
        </div>

        {/* Text */}
        <p className="text-base leading-relaxed mb-1" style={{ color: "#374151" }}>
          {displayText}
        </p>
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs font-medium"
            style={{ color: "#6B7280" }}
          >
            {expanded ? "Weniger anzeigen" : "Mehr anzeigen"}
          </button>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-0.5">
          {Array.from({ length: review.stars }).map((_, i) => <StarIcon key={i} />)}
        </div>
        <GoogleIcon />
      </div>
    </div>
  );
}

export function ReviewsSection() {
  const { lang } = useLang();
  const t = translations[lang];
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-widest font-bold mb-1" style={{ color: "#C2410C" }}>
              {t.reviews_label}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#111827" }}>
              {t.reviews_h2}
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
              </div>
              <span className="text-sm font-semibold" style={{ color: "#111827" }}>5,0</span>
              <span className="text-sm" style={{ color: "#6B7280" }}>{t.reviews_count}</span>
            </div>
          </div>

          {/* Arrow buttons — desktop */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-gray-200"
              style={{ backgroundColor: "#E5E7EB" }}
              aria-label="Zurück"
            >
              <ChevronLeft size={20} color="#374151" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-gray-200"
              style={{ backgroundColor: "#E5E7EB" }}
              aria-label="Weiter"
            >
              <ChevronRight size={20} color="#374151" />
            </button>
          </div>
        </div>

        {/* Scrollable row */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
        </div>

        {/* Arrow buttons — mobile */}
        <div className="flex md:hidden justify-center gap-3 mt-4">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#E5E7EB" }}
            aria-label="Zurück"
          >
            <ChevronLeft size={20} color="#374151" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#E5E7EB" }}
            aria-label="Weiter"
          >
            <ChevronRight size={20} color="#374151" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
