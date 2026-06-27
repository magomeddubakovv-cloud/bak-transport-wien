"use client";

import { useState, FormEvent } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

// ─── Types ────────────────────────────────────────────────────────────────────

interface AddressFields {
  adresse: string;
  hausnr: string;
  plz: string;
  stockwerk: string;
  aufzug: "ja" | "nein" | "";
}

type UmzugGroesse = "Klein" | "Mittel" | "Groß" | "";

// ─── Sub-components ───────────────────────────────────────────────────────────

interface LabelProps {
  htmlFor?: string;
  children: React.ReactNode;
}
function FieldLabel({ htmlFor, children }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-1"
      style={{ fontSize: "13px", fontWeight: 600, color: "#E5E7EB" }}
    >
      {children}
    </label>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
}
function Input({ className = "", style, ...props }: InputProps) {
  return (
    <input
      className={`w-full rounded-md px-4 outline-none transition-all focus:ring-1 ${className}`}
      style={{
        border: "1px solid #E2E8F0",
        fontSize: "15px",
        paddingTop: "10px",
        paddingBottom: "10px",
        ...style,
      }}
      onFocus={(e) => {
        e.currentTarget.style.borderColor = "#1B3A6B";
        e.currentTarget.style.boxShadow = "0 0 0 1px #1B3A6B";
        props.onFocus?.(e);
      }}
      onBlur={(e) => {
        e.currentTarget.style.borderColor = "#E2E8F0";
        e.currentTarget.style.boxShadow = "none";
        props.onBlur?.(e);
      }}
      {...props}
    />
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}
function Select({ className = "", style, children, ...props }: SelectProps) {
  return (
    <select
      className={`w-full rounded-md px-4 outline-none transition-all focus:ring-1 bg-white ${className}`}
      style={{
        border: "1px solid #E2E8F0",
        fontSize: "15px",
        paddingTop: "10px",
        paddingBottom: "10px",
        ...style,
      }}
      onFocus={(e) => {
        e.currentTarget.style.borderColor = "#1B3A6B";
        e.currentTarget.style.boxShadow = "0 0 0 1px #1B3A6B";
        props.onFocus?.(e);
      }}
      onBlur={(e) => {
        e.currentTarget.style.borderColor = "#E2E8F0";
        e.currentTarget.style.boxShadow = "none";
        props.onBlur?.(e);
      }}
      {...props}
    >
      {children}
    </select>
  );
}

// ─── Address Block ─────────────────────────────────────────────────────────────

interface AddressBlockProps {
  prefix: string;
  label: string;
  fields: AddressFields;
  onChange: (updated: AddressFields) => void;
  t: ReturnType<typeof translations[keyof typeof translations] extends infer R ? () => R : never> extends never ? typeof translations["de"] : typeof translations["de"];
}

function AddressBlock({ prefix, label, fields, onChange, t }: AddressBlockProps) {
  const set =
    <K extends keyof AddressFields>(key: K) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange({ ...fields, [key]: e.target.value });
    };

  return (
    <div className="col-span-2 space-y-4">
      <p className="font-bold" style={{ color: "#1B3A6B", fontSize: "16px" }}>
        {label}
      </p>

      {/* Row 1: Adresse + Hausnr */}
      <div className="flex gap-3">
        <div className="flex-1">
          <FieldLabel htmlFor={`${prefix}-adresse`}>{t.reqform_address}</FieldLabel>
          <Input
            id={`${prefix}-adresse`}
            placeholder={t.reqform_street_placeholder}
            value={fields.adresse}
            onChange={set("adresse")}
          />
        </div>
        <div style={{ width: "192px" }}>
          <FieldLabel htmlFor={`${prefix}-hausnr`}>{t.reqform_hausnr}</FieldLabel>
          <Input
            id={`${prefix}-hausnr`}
            placeholder={t.reqform_hausnr_placeholder}
            value={fields.hausnr}
            onChange={set("hausnr")}
          />
        </div>
      </div>

      {/* Row 2: PLZ + Stockwerk */}
      <div className="flex gap-3">
        <div style={{ width: "128px" }}>
          <FieldLabel htmlFor={`${prefix}-plz`}>{t.reqform_plz}</FieldLabel>
          <Input
            id={`${prefix}-plz`}
            placeholder="1010"
            value={fields.plz}
            onChange={set("plz")}
          />
        </div>
        <div className="flex-1">
          <FieldLabel htmlFor={`${prefix}-stockwerk`}>{t.reqform_stockwerk}</FieldLabel>
          <Input
            id={`${prefix}-stockwerk`}
            placeholder={t.reqform_stockwerk_placeholder}
            value={fields.stockwerk}
            onChange={set("stockwerk")}
          />
        </div>
      </div>

      {/* Row 3: Aufzug radio */}
      <div>
        <p className="mb-2" style={{ fontSize: "13px", fontWeight: 600, color: "#E5E7EB" }}>
          {t.reqform_aufzug}
        </p>
        <div className="flex gap-6">
          {(["ja", "nein"] as const).map((val) => (
            <label key={val} className="flex items-center gap-2 cursor-pointer" style={{ fontSize: "15px", color: "#E5E7EB" }}>
              <input
                type="radio"
                name={`${prefix}-aufzug`}
                value={val}
                checked={fields.aufzug === val}
                onChange={() => onChange({ ...fields, aufzug: val })}
                className="accent-[#1B3A6B]"
              />
              {val === "ja" ? t.reqform_ja : t.reqform_nein}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

const emptyAddress = (): AddressFields => ({
  adresse: "",
  hausnr: "",
  plz: "",
  stockwerk: "",
  aufzug: "",
});

export function RequestFormSection() {
  const { lang } = useLang();
  const t = translations[lang];

  // Address state
  const [von, setVon] = useState<AddressFields>(emptyAddress());
  const [nach, setNach] = useState<AddressFields>(emptyAddress());

  // Details state
  const [umzugsdatum, setUmzugsdatum] = useState("");
  const [art, setArt] = useState("Privatumzug");
  const [groesse, setGroesse] = useState<UmzugGroesse>("");
  const [umfang, setUmfang] = useState("");

  // Kontakt state
  const [name, setName] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");

  // Datenschutz
  const [datenschutz, setDatenschutz] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const groesseOptions: { key: UmzugGroesse; label: string }[] = [
    { key: "Klein", label: t.reqform_groesse_klein },
    { key: "Mittel", label: t.reqform_groesse_mittel },
    { key: "Groß", label: t.reqform_groesse_gross },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: "#1B3A6B" }}>
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2
            className="font-extrabold text-white"
            style={{ fontSize: "clamp(24px, 4vw, 32px)" }}
          >
            {t.reqform_h2}
          </h2>
          <p
            className="mt-3"
            style={{ color: "#374151", fontSize: "16px" }}
          >
            {t.reqform_desc}
          </p>
        </div>

        {/* Form card */}
        <div
          className="bg-white rounded-2xl shadow-2xl"
          style={{ padding: "clamp(20px, 5vw, 32px)" }}
        >
          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            {/* Von-Adresse */}
            <div className="grid grid-cols-2 gap-4">
              <AddressBlock
                prefix="von"
                label={t.reqform_von_label}
                fields={von}
                onChange={setVon}
                t={t}
              />
            </div>

            {/* Nach-Adresse */}
            <div className="grid grid-cols-2 gap-4">
              <AddressBlock
                prefix="nach"
                label={t.reqform_nach_label}
                fields={nach}
                onChange={setNach}
                t={t}
              />
            </div>

            {/* Details */}
            <div className="space-y-4">
              <p className="font-bold" style={{ color: "#1B3A6B", fontSize: "16px" }}>
                {t.reqform_details}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Umzugsdatum */}
                <div>
                  <FieldLabel htmlFor="umzugsdatum">{t.reqform_date}</FieldLabel>
                  <Input
                    id="umzugsdatum"
                    type="date"
                    value={umzugsdatum}
                    onChange={(e) => setUmzugsdatum(e.target.value)}
                  />
                </div>

                {/* Art des Umzugs */}
                <div>
                  <FieldLabel htmlFor="art">{t.reqform_art}</FieldLabel>
                  <Select
                    id="art"
                    value={art}
                    onChange={(e) => setArt(e.target.value)}
                  >
                    <option value="Privatumzug">{t.reqform_art_privat}</option>
                    <option value="Firmenumzug">{t.reqform_art_firma}</option>
                  </Select>
                </div>
              </div>

              {/* Größe */}
              <div>
                <p className="mb-2" style={{ fontSize: "13px", fontWeight: 600, color: "#E5E7EB" }}>
                  {t.reqform_groesse}
                </p>
                <div className="flex gap-3 flex-wrap">
                  {groesseOptions.map((opt) => {
                    const selected = groesse === opt.key;
                    return (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => setGroesse(opt.key)}
                        className="px-6 py-2.5 rounded-md font-semibold transition-colors duration-150"
                        style={{
                          fontSize: "15px",
                          border: "1px solid #E2E8F0",
                          backgroundColor: selected ? "#1B3A6B" : "#FFFFFF",
                          color: selected ? "#FFFFFF" : "#E5E7EB",
                        }}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Umfang / Besonderheiten */}
              <div>
                <FieldLabel htmlFor="umfang">{t.reqform_umfang}</FieldLabel>
                <textarea
                  id="umfang"
                  rows={3}
                  value={umfang}
                  onChange={(e) => setUmfang(e.target.value)}
                  className="w-full rounded-md px-4 py-2.5 outline-none transition-all resize-none"
                  style={{ border: "1px solid #E2E8F0", fontSize: "15px" }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#1B3A6B";
                    e.currentTarget.style.boxShadow = "0 0 0 1px #1B3A6B";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#E2E8F0";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  placeholder={t.reqform_umfang_placeholder}
                />
              </div>
            </div>

            {/* Kontaktdaten */}
            <div className="space-y-4">
              <p className="font-bold" style={{ color: "#1B3A6B", fontSize: "16px" }}>
                {t.reqform_kontakt}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <FieldLabel htmlFor="name">{t.reqform_name}</FieldLabel>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.reqform_name_placeholder}
                  />
                </div>
                <div>
                  <FieldLabel htmlFor="telefon">{t.reqform_telefon}</FieldLabel>
                  <Input
                    id="telefon"
                    type="tel"
                    value={telefon}
                    onChange={(e) => setTelefon(e.target.value)}
                    placeholder="+43..."
                  />
                </div>
              </div>

              <div>
                <FieldLabel htmlFor="email">{t.reqform_email}</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.reqform_email_placeholder}
                />
              </div>
            </div>

            {/* Datenschutz */}
            <div className="flex gap-3 items-start">
              <input
                id="datenschutz"
                type="checkbox"
                checked={datenschutz}
                onChange={(e) => setDatenschutz(e.target.checked)}
                className="mt-0.5 accent-[#1B3A6B] shrink-0"
                style={{ width: "16px", height: "16px" }}
              />
              <label
                htmlFor="datenschutz"
                className="cursor-pointer"
                style={{ fontSize: "13px", color: "#64748B", lineHeight: 1.6 }}
              >
                {t.reqform_datenschutz}{" "}
                <a
                  href="/datenschutz"
                  style={{ color: "#1B3A6B", textDecoration: "underline" }}
                >
                  {t.reqform_datenschutz_link}
                </a>
                .
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg text-white font-bold transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "#F97316",
                paddingTop: "16px",
                paddingBottom: "16px",
                fontSize: "18px",
              }}
            >
              {t.reqform_submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RequestFormSection;
