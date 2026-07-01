# Eugen Krieger – Entrümpelung & Service

Ultra-premium, conversion-focused one-page website for **Eugen Krieger –
Entrümpelung & Service** in Bornheim. Built with Next.js (App Router),
TypeScript, Tailwind CSS and Framer Motion.

> **Wir schaffen Platz.** — Schnell. Sauber. Zuverlässig.

## ✨ Features

- **Apple × Porsche luxury aesthetic** — dark navy (`#0B1E3B`), white & orange
  (`#F58220`), generous whitespace, large typography, glassmorphism, rounded
  corners.
- **Premium animations** — animated hero, mouse-parallax aurora background,
  scroll-reveal, animated counters, premium loader, floating CTA, micro
  interactions (Framer Motion).
- **Full booking system** — calendar + time-slot picker, all customer fields,
  photo upload and instant e-mail notification to the owner (`/api/booking`).
- **Before / After gallery** — interactive drag slider comparison + lightbox,
  using self-contained on-brand SVG illustrations (no external image
  dependency, perfect for Lighthouse).
- **SEO + GEO optimised** — schema.org JSON-LD (LocalBusiness, Service, FAQ,
  Breadcrumb, WebSite), OpenGraph, sitemap, robots (AI crawlers welcomed),
  semantic HTML, machine-readable summary block, German `de-DE`.
- **Mobile-first, accessible, lightning-fast** — ~145 kB first-load JS,
  `prefers-reduced-motion` support, keyboard-friendly.

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

## 📬 Booking notifications (owner receives every booking)

Bookings are sent to the owner by e-mail through the `/api/booking` route.

1. Copy `.env.example` to `.env.local`.
2. Create a free account at [resend.com](https://resend.com), add an API key
   and verify your sending domain.
3. Fill in:
   ```
   RESEND_API_KEY=re_xxxxxxxx
   BOOKING_NOTIFY_EMAIL=eugenkrieger.entruempelung@gmail.com
   BOOKING_FROM_EMAIL=buchung@deine-domain.de
   ```

If no provider is configured, bookings are still accepted and logged to the
server console (useful for local development) — but **configure Resend in
production so no booking is lost.**

## 🌐 Deployment

Optimised for [Vercel](https://vercel.com) (zero-config for Next.js). Set the
environment variables from `.env.example` in the project settings, including
`NEXT_PUBLIC_SITE_URL` (your final domain) for correct canonical URLs and
structured data.

## 🗂 Project structure

```
app/                 Routes, layout, metadata, sitemap/robots/manifest, /api/booking
components/          UI sections (Hero, Services, Booking, Gallery, …)
components/booking/  Calendar + booking form
lib/site.ts          Single source of truth: NAP, hours, service areas
lib/content.ts       Services, reviews, FAQ, process, gallery
lib/schema.ts        schema.org JSON-LD (SEO + GEO)
public/gallery/      Before/after SVG illustrations
```

## ✏️ Editing content

Almost all copy lives in `lib/site.ts` and `lib/content.ts` — edit there and
every section, the metadata and the structured data update together.

---

© Eugen Krieger – Entrümpelung & Service · Herderstraße 91, 53332 Bornheim
