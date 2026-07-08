"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

interface FormState {
  from: string;
  to: string;
  date: string;
  moveType: string;
  apartmentSize: string;
  notes: string;
  name: string;
  phone: string;
  email: string;
}

const inputClass =
  "border border-[#E5E7EB] rounded-lg px-4 py-3 w-full focus:border-[#C2410C] focus:ring-1 focus:ring-[#C2410C] focus:outline-none";
const inputStyle = { fontSize: "16px" } as const;
const labelStyle = { fontSize: "13px", fontWeight: 600, color: "#374151" } as const;

export function QuoteFormSection() {
  const { lang } = useLang();
  const t = translations[lang];

  const MOVE_TYPES = [t.move_type1, t.move_type2, t.move_type3, t.move_type4, t.move_type5];
  const APARTMENT_SIZES = [t.apt_size1, t.apt_size2, t.apt_size3];

  const [form, setForm] = useState<FormState>({
    from: "", to: "", date: "", moveType: "", apartmentSize: "",
    notes: "", name: "", phone: "", email: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "1009093d-4421-4efd-a23b-b210eab10804",
          subject: "Neue Angebotsanfrage – BAK Transport Wien",
          from_name: form.name,
          ...form,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ from: "", to: "", date: "", moveType: "", apartmentSize: "", notes: "", name: "", phone: "", email: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="kontakt" className="py-12 md:py-24" style={{ background: "#F9FAFB" }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          {/* Left column */}
          <div className="w-full md:w-2/5 flex-shrink-0">
            <h2 className="text-2xl md:text-4xl leading-[1.15]" style={{ color: "#111827", fontWeight: 900 }}>
              {t.form_h2}
            </h2>
            <div className="w-12 h-1 bg-[#C2410C] mt-4" style={{ width: "48px", height: "4px" }} />

            <div className="relative hidden md:block rounded-xl overflow-hidden mt-6 mb-8" style={{ height: "220px" }}>
              <Image src="/images/photos/handshake.jpg" alt="BAK Transport Angebot — Vertrauen und Professionalität" title="BAK Transport Wien — Ihr zuverlässiger Umzugspartner" fill className="object-cover object-center" />
              <div className="absolute inset-0" style={{ background: "rgba(17,24,39,0.3)" }} />
            </div>

            <p style={{ color: "#4B5563", fontSize: "16px", lineHeight: 1.7 }}>
              {t.form_desc}
            </p>

            <div className="mt-6 md:mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={18} color="#C2410C" />
                <span style={{ color: "#111827", fontWeight: 600 }}>+43 681 10723047</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} color="#C2410C" />
                <span style={{ color: "#111827", fontWeight: 600 }}>office@baktransport.at</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} color="#C2410C" />
                <span style={{ color: "#4B5563" }}>Wien &amp; ganz Österreich</span>
              </div>
            </div>

            <p className="mt-8 italic" style={{ color: "#6B7280", fontSize: "14px" }}>
              {t.form_disclaimer}
            </p>
          </div>

          {/* Right column */}
          <div className="w-full md:w-3/5">
            <div className="bg-white rounded-2xl p-5 md:p-8 shadow-2xl">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="from" className="block mb-1.5" style={labelStyle}>{t.form_from}</label>
                    <input id="from" name="from" type="text" value={form.from} onChange={handleChange}
                      placeholder={t.form_from_placeholder} className={inputClass} style={inputStyle} />
                  </div>
                  <div>
                    <label htmlFor="to" className="block mb-1.5" style={labelStyle}>{t.form_to}</label>
                    <input id="to" name="to" type="text" value={form.to} onChange={handleChange}
                      placeholder={t.form_to_placeholder} className={inputClass} style={inputStyle} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="date" className="block mb-1.5" style={labelStyle}>{t.form_date}</label>
                    <input id="date" name="date" type="date" value={form.date} onChange={handleChange}
                      className={inputClass} style={inputStyle} />
                  </div>
                  <div>
                    <label htmlFor="moveType" className="block mb-1.5" style={labelStyle}>{t.form_movetype}</label>
                    <select id="moveType" name="moveType" value={form.moveType} onChange={handleChange}
                      className={inputClass} style={inputStyle}>
                      <option value="">{t.form_movetype_placeholder}</option>
                      {MOVE_TYPES.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="block mb-1.5" style={labelStyle}>{t.form_size}</p>
                  <div className="flex gap-2 flex-wrap">
                    {APARTMENT_SIZES.map((size) => {
                      const isSelected = form.apartmentSize === size;
                      return (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setForm((prev) => ({ ...prev, apartmentSize: size }))}
                          className="px-4 py-3 rounded-lg font-semibold transition-colors duration-150"
                          style={{
                            fontSize: "15px",
                            background: isSelected ? "#C2410C" : "transparent",
                            color: isSelected ? "#FFFFFF" : "#374151",
                            border: isSelected ? "1px solid #C2410C" : "1px solid #E5E7EB",
                          }}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="notes" className="block mb-1.5" style={labelStyle}>{t.form_notes}</label>
                  <textarea id="notes" name="notes" rows={3} value={form.notes} onChange={handleChange}
                    placeholder={t.form_notes_placeholder} className={inputClass} style={inputStyle} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block mb-1.5" style={labelStyle}>{t.form_name}</label>
                    <input id="name" name="name" type="text" value={form.name} onChange={handleChange}
                      required className={inputClass} style={inputStyle} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-1.5" style={labelStyle}>{t.form_phone}</label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                      required className={inputClass} style={inputStyle} />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block mb-1.5" style={labelStyle}>{t.form_email}</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
                    required className={inputClass} style={inputStyle} />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 rounded-xl text-white font-extrabold hover:bg-[#C2410C] transition-colors duration-150"
                  style={{ background: "#C2410C", fontSize: "17px", fontWeight: 800, opacity: status === "sending" ? 0.7 : 1 }}
                >
                  {status === "sending" ? "Wird gesendet..." : t.form_submit}
                </button>

                {status === "success" && (
                  <p className="text-center mt-3 font-semibold" style={{ color: "#16a34a", fontSize: "15px" }}>
                    ✓ Anfrage erfolgreich gesendet! Wir melden uns bald.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-center mt-3" style={{ color: "#DC2626", fontSize: "15px" }}>
                    Fehler beim Senden. Bitte versuche es erneut.
                  </p>
                )}

                <p className="text-center mt-3" style={{ color: "#6B7280", fontSize: "12px" }}>
                  {t.form_note}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuoteFormSection;
