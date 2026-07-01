"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Calendar from "./Calendar";
import BookingSuccess from "./BookingSuccess";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import Icon from "../Icon";
import { bookingServiceOptions } from "@/lib/content";
import { site } from "@/lib/site";

const TIME_SLOTS = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

const MAX_PHOTO_BYTES = 5 * 1024 * 1024; // 5 MB per file

type Status = "idle" | "submitting" | "success" | "error";

function formatDate(iso: string) {
  if (!iso) return "";
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString("de-DE", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function Booking() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState(bookingServiceOptions[0]);
  const [photos, setPhotos] = useState<File[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function handlePhotos(files: FileList | null) {
    if (!files) return;
    const valid: File[] = [];
    for (const f of Array.from(files).slice(0, 6)) {
      if (f.size <= MAX_PHOTO_BYTES && f.type.startsWith("image/")) {
        valid.push(f);
      }
    }
    setPhotos(valid);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFieldErrors({});
    const form = e.currentTarget;
    const fd = new FormData(form);

    const errs: Record<string, string> = {};
    if (!date) errs.date = "Bitte wählen Sie ein Datum.";
    if (!time) errs.time = "Bitte wählen Sie eine Uhrzeit.";
    if (!String(fd.get("name") || "").trim()) errs.name = "Bitte Namen angeben.";
    if (!String(fd.get("phone") || "").trim()) errs.phone = "Bitte Telefonnummer angeben.";
    const email = String(fd.get("email") || "").trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Bitte gültige E-Mail angeben.";

    if (Object.keys(errs).length) {
      setFieldErrors(errs);
      const first = document.getElementById(`field-${Object.keys(errs)[0]}`);
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    fd.set("date", date);
    fd.set("time", time);
    fd.set("service", service);
    fd.delete("photos");
    photos.forEach((p) => fd.append("photos", p));

    setStatus("submitting");
    setErrorMsg("");

    // Never let the button hang forever: abort after 25s.
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 25000);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        body: fd,
        signal: controller.signal,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Senden fehlgeschlagen.");
      setStatus("success");
      form.reset();
      setPhotos([]);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error && err.name === "AbortError"
          ? "Zeitüberschreitung. Bitte prüfen Sie Ihre Verbindung oder rufen Sie uns an."
          : err instanceof Error
            ? err.message
            : "Es ist ein Fehler aufgetreten. Bitte rufen Sie uns an.",
      );
    } finally {
      clearTimeout(timeout);
    }
  }

  const inputBase =
    "w-full rounded-2xl border bg-white/[0.04] px-4 py-3.5 text-white placeholder-white/35 outline-none transition-colors focus:border-orange focus:bg-white/[0.06]";

  return (
    <section id="termin" className="section-pad scroll-mt-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Termin buchen"
          title={
            <>
              In 60 Sekunden zum{" "}
              <span className="text-gradient-orange">Wunschtermin</span>
            </>
          }
          subtitle="Wählen Sie Datum und Uhrzeit, beschreiben Sie kurz Ihr Anliegen – wir melden uns umgehend zur Bestätigung."
        />

        <Reveal>
          <div className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-2 shadow-premium">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange/15 blur-3xl" />

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <BookingSuccess onReset={() => setStatus("idle")} />
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid grid-cols-1 gap-6 p-6 sm:p-8 lg:grid-cols-2"
                  noValidate
                >
                  {/* Honeypot anti-spam field — hidden from real users */}
                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
                  />

                  {/* Left: date + time */}
                  <div className="space-y-5">
                    <div id="field-date">
                      <label className="mb-2 block text-sm font-semibold text-white">
                        1. Wunschdatum
                      </label>
                      <Calendar value={date} onChange={setDate} />
                      {fieldErrors.date && (
                        <p className="mt-2 text-sm text-orange-300">
                          {fieldErrors.date}
                        </p>
                      )}
                    </div>

                    <div id="field-time">
                      <label className="mb-2 block text-sm font-semibold text-white">
                        2. Wunschuhrzeit
                      </label>
                      <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-4">
                        {TIME_SLOTS.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setTime(t)}
                            className={`rounded-xl px-2 py-2.5 text-sm font-medium transition-all ${
                              time === t
                                ? "bg-orange text-white shadow-glow"
                                : "border border-white/10 bg-white/[0.03] text-white/80 hover:border-orange/40 hover:bg-white/[0.06]"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                      {fieldErrors.time && (
                        <p className="mt-2 text-sm text-orange-300">
                          {fieldErrors.time}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right: details */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div id="field-name">
                        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white/80">
                          Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          autoComplete="name"
                          placeholder="Max Mustermann"
                          className={`${inputBase} ${
                            fieldErrors.name ? "border-orange/60" : "border-white/10"
                          }`}
                        />
                        {fieldErrors.name && (
                          <p className="mt-1 text-xs text-orange-300">
                            {fieldErrors.name}
                          </p>
                        )}
                      </div>
                      <div id="field-phone">
                        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-white/80">
                          Telefon *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="0176 84043191"
                          className={`${inputBase} ${
                            fieldErrors.phone ? "border-orange/60" : "border-white/10"
                          }`}
                        />
                        {fieldErrors.phone && (
                          <p className="mt-1 text-xs text-orange-300">
                            {fieldErrors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div id="field-email">
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white/80">
                        E-Mail
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="max@beispiel.de"
                        className={`${inputBase} ${
                          fieldErrors.email ? "border-orange/60" : "border-white/10"
                        }`}
                      />
                      {fieldErrors.email && (
                        <p className="mt-1 text-xs text-orange-300">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="address" className="mb-1.5 block text-sm font-medium text-white/80">
                        Adresse des Objekts
                      </label>
                      <input
                        id="address"
                        name="address"
                        autoComplete="street-address"
                        placeholder="Straße, PLZ, Ort"
                        className={`${inputBase} border-white/10`}
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-white/80">
                        Art der Leistung
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className={`${inputBase} appearance-none border-white/10 pr-10`}
                        >
                          {bookingServiceOptions.map((o) => (
                            <option key={o} value={o} className="bg-navy text-white">
                              {o}
                            </option>
                          ))}
                        </select>
                        <Icon
                          name="chevron"
                          className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="description" className="mb-1.5 block text-sm font-medium text-white/80">
                        Beschreibung
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={3}
                        placeholder="z. B. 3-Zimmer-Wohnung im 2. OG, Keller inklusive …"
                        className={`${inputBase} resize-none border-white/10`}
                      />
                    </div>

                    {/* Photo upload */}
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-white/80">
                        Fotos hochladen (optional)
                      </label>
                      <label
                        htmlFor="photos"
                        className="flex cursor-pointer items-center gap-3 rounded-2xl border border-dashed border-white/20 bg-white/[0.03] px-4 py-4 text-sm text-white/60 transition-colors hover:border-orange/50 hover:text-white"
                      >
                        <Icon name="upload" className="h-5 w-5 text-orange" />
                        {photos.length > 0
                          ? `${photos.length} Foto(s) ausgewählt`
                          : "Bilder auswählen (max. 6, je 5 MB)"}
                        <input
                          id="photos"
                          name="photos"
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={(e) => handlePhotos(e.target.files)}
                          className="hidden"
                        />
                      </label>
                      {photos.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {photos.map((p, i) => (
                            <span
                              key={i}
                              className="inline-flex max-w-[10rem] items-center gap-1.5 truncate rounded-full bg-white/5 px-3 py-1 text-xs text-white/70"
                            >
                              <Icon name="check" className="h-3.5 w-3.5 text-orange" />
                              <span className="truncate">{p.name}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Summary + submit (full width) */}
                  <div className="lg:col-span-2">
                    {(date || time) && (
                      <div className="mb-4 flex flex-wrap items-center gap-3 rounded-2xl border border-orange/20 bg-orange/5 px-4 py-3 text-sm text-white/80">
                        <Icon name="calendar" className="h-5 w-5 text-orange" />
                        <span>
                          {date ? formatDate(date) : "Datum wählen"}
                          {time ? ` · ${time} Uhr` : ""}
                          {service ? ` · ${service}` : ""}
                        </span>
                      </div>
                    )}

                    {status === "error" && (
                      <div className="mb-4 rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                        {errorMsg}{" "}
                        <a href={site.phone.href} className="underline">
                          Oder rufen Sie uns direkt an.
                        </a>
                      </div>
                    )}

                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                      <p className="text-xs text-white/45">
                        Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten
                        gemäß{" "}
                        <a href="/datenschutz" className="underline hover:text-white">
                          Datenschutz
                        </a>{" "}
                        zu. * Pflichtfelder.
                      </p>
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="btn-primary w-full shrink-0 sm:w-auto disabled:opacity-70"
                      >
                        {status === "submitting" ? (
                          <>
                            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                            Wird gesendet …
                          </>
                        ) : (
                          <>
                            <Icon name="calendar" className="h-5 w-5" />
                            Termin anfragen
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
