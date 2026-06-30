/**
 * Central single source of truth for all company / NAP (Name, Address, Phone)
 * data. Used across UI, metadata and structured data so everything stays
 * consistent — important for local SEO and AI search engines (GEO).
 */

export const site = {
  name: "Eugen Krieger",
  brand: "Entrümpelung & Service",
  legalName: "Eugen Krieger – Entrümpelung & Service",
  slogan: "Wir schaffen Platz.",
  subline: "Schnell. Sauber. Zuverlässig.",
  description:
    "Professionelle Entrümpelung, Haushaltsauflösung, Wohnungsräumung und Umzüge in Bornheim und Umgebung. Festpreis, kostenlose Besichtigung und besenreine Übergabe.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.eugen-krieger-entruempelung.de",
  phone: {
    display: "0176 84043191",
    href: "tel:+4917684043191",
    international: "+49 176 84043191",
  },
  whatsapp: {
    // wa.me requires international format without "+" or spaces
    href: "https://wa.me/4917684043191",
  },
  email: "eugen_krieger@gmx.de",
  address: {
    street: "Herderstraße 91",
    postalCode: "53332",
    city: "Bornheim",
    region: "Nordrhein-Westfalen",
    country: "Deutschland",
    countryCode: "DE",
    full: "Herderstraße 91, 53332 Bornheim, Deutschland",
  },
  geo: {
    // Bornheim, NRW (approximate municipal centre)
    latitude: 50.7596,
    longitude: 6.9869,
  },
  maps: {
    embed:
      "https://www.google.com/maps?q=Herderstra%C3%9Fe%2091%2C%2053332%20Bornheim&output=embed",
    link: "https://www.google.com/maps/search/?api=1&query=Herderstra%C3%9Fe+91%2C+53332+Bornheim",
  },
  openingHours: [
    { day: "Montag – Freitag", time: "07:00 – 20:00 Uhr" },
    { day: "Samstag", time: "08:00 – 18:00 Uhr" },
    { day: "Sonntag", time: "Nach Vereinbarung" },
  ],
  // Machine-readable opening hours for schema.org
  openingHoursSpec: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "20:00",
    },
    { days: ["Saturday"], opens: "08:00", closes: "18:00" },
  ],
  serviceAreas: [
    "Bornheim",
    "Bonn",
    "Köln",
    "Brühl",
    "Wesseling",
    "Alfter",
    "Hürth",
    "Roisdorf",
    "Sechtem",
    "Hersel",
    "Rhein-Sieg-Kreis",
    "Rhein-Erft-Kreis",
  ],
  ratingValue: "5.0",
  reviewCount: "47",
} as const;

export type Site = typeof site;
