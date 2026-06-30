"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Icon from "../Icon";

const WEEKDAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
const MONTHS = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function toISO(d: Date) {
  // Local date as YYYY-MM-DD (avoids timezone shift)
  const m = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

type Props = {
  value: string;
  onChange: (iso: string) => void;
};

/** Accessible month calendar. Past days and Sundays are disabled. */
export default function Calendar({ value, onChange }: Props) {
  const today = startOfDay(new Date());
  const [view, setView] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));

  const days = useMemo(() => {
    const year = view.getFullYear();
    const month = view.getMonth();
    const first = new Date(year, month, 1);
    // Monday-first offset
    const offset = (first.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells: (Date | null)[] = [];
    for (let i = 0; i < offset; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
    return cells;
  }, [view]);

  const canGoPrev =
    view.getFullYear() > today.getFullYear() ||
    (view.getFullYear() === today.getFullYear() &&
      view.getMonth() > today.getMonth());

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
      <div className="mb-4 flex items-center justify-between">
        <button
          type="button"
          aria-label="Vorheriger Monat"
          disabled={!canGoPrev}
          onClick={() => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white transition-colors enabled:hover:bg-white/10 disabled:opacity-30"
        >
          <Icon name="chevron" className="h-5 w-5 rotate-90" />
        </button>
        <span className="text-base font-semibold text-white">
          {MONTHS[view.getMonth()]} {view.getFullYear()}
        </span>
        <button
          type="button"
          aria-label="Nächster Monat"
          onClick={() => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/10"
        >
          <Icon name="chevron" className="h-5 w-5 -rotate-90" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-white/40">
        {WEEKDAYS.map((w) => (
          <span key={w} className="py-1">
            {w}
          </span>
        ))}
      </div>

      <div className="mt-1 grid grid-cols-7 gap-1">
        {days.map((d, i) => {
          if (!d) return <span key={`e${i}`} />;
          const iso = toISO(d);
          const isPast = d < today;
          const isSunday = d.getDay() === 0;
          const disabled = isPast || isSunday;
          const selected = iso === value;
          const isToday = iso === toISO(today);
          return (
            <button
              key={iso}
              type="button"
              disabled={disabled}
              onClick={() => onChange(iso)}
              className={`relative aspect-square rounded-xl text-sm font-medium transition-all ${
                selected
                  ? "bg-orange text-white shadow-glow"
                  : disabled
                    ? "cursor-not-allowed text-white/20"
                    : "text-white/80 hover:bg-white/10"
              }`}
            >
              {selected && (
                <motion.span
                  layoutId="cal-selected"
                  className="absolute inset-0 rounded-xl bg-orange"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{d.getDate()}</span>
              {isToday && !selected && (
                <span className="absolute bottom-1 left-1/2 z-10 h-1 w-1 -translate-x-1/2 rounded-full bg-orange" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
