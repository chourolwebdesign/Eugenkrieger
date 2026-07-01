"use client";

import { forwardRef } from "react";

const base =
  "peer w-full rounded-2xl border bg-white/[0.04] px-4 text-white placeholder-transparent outline-none transition-all duration-200 focus:bg-white/[0.07]";
const labelBase =
  "pointer-events-none absolute left-4 z-10 font-medium transition-all duration-200";

function borderClass(error?: string) {
  return error
    ? "border-orange/60 focus:border-orange"
    : "border-white/10 focus:border-orange";
}

type InputProps = {
  id: string;
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

/** Premium floating-label text input. */
export const FloatingInput = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error, className, ...props }, ref) => (
    <div className="relative">
      <input
        id={id}
        ref={ref}
        placeholder={label}
        className={`${base} ${borderClass(error)} pt-6 pb-2 ${className ?? ""}`}
        {...props}
      />
      <label
        htmlFor={id}
        className={`${labelBase} top-2 text-xs text-white/45 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/35 peer-focus:top-2 peer-focus:text-xs peer-focus:text-orange-300`}
      >
        {label}
      </label>
    </div>
  ),
);
FloatingInput.displayName = "FloatingInput";

type TextareaProps = {
  id: string;
  label: string;
  error?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

/** Premium floating-label textarea. */
export const FloatingTextarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ id, label, error, className, ...props }, ref) => (
    <div className="relative">
      <textarea
        id={id}
        ref={ref}
        placeholder={label}
        className={`${base} ${borderClass(error)} resize-none pt-7 pb-3 ${className ?? ""}`}
        {...props}
      />
      <label
        htmlFor={id}
        className={`${labelBase} top-2.5 text-xs text-white/45 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/35 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-orange-300`}
      >
        {label}
      </label>
    </div>
  ),
);
FloatingTextarea.displayName = "FloatingTextarea";
