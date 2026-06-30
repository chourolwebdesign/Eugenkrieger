/**
 * All page content (services, trust badges, process, reviews, FAQ).
 * Kept here so copy can be edited without touching components and so the
 * same data feeds both the UI and the structured data (schema.org).
 */

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string; // key resolved in components/Icon.tsx
};

export const services: Service[] = [
  {
    slug: "entruempelung",
    title: "Entrümpelung",
    short: "Entrümpelungen aller Art",
    description:
      "Schnelle und gründliche Entrümpelung von Wohnungen, Häusern und Gewerbeflächen – inklusive fachgerechter Entsorgung.",
    icon: "box",
  },
  {
    slug: "haushaltsaufloesung",
    title: "Haushaltsauflösung",
    short: "Komplette Haushaltsauflösungen",
    description:
      "Diskrete und vollständige Auflösung kompletter Haushalte – einfühlsam, zuverlässig und besenrein übergeben.",
    icon: "home",
  },
  {
    slug: "wohnungsraeumung",
    title: "Wohnungsräumung",
    short: "Wohnungsräumungen",
    description:
      "Professionelle Räumung von Wohnungen jeder Größe – termingerecht und ohne Stress für Sie.",
    icon: "key",
  },
  {
    slug: "kellerraeumung",
    title: "Keller",
    short: "Kellerräumungen",
    description:
      "Wir befreien Ihren Keller von Gerümpel und Altlasten – sauber, sicher und vollständig.",
    icon: "stairs",
  },
  {
    slug: "dachbodenraeumung",
    title: "Dachboden",
    short: "Dachbodenräumungen",
    description:
      "Platz schaffen unterm Dach: Wir räumen Ihren Dachboden gründlich und entsorgen alles fachgerecht.",
    icon: "roof",
  },
  {
    slug: "garagenraeumung",
    title: "Garage",
    short: "Garagenräumungen",
    description:
      "Garagen, Stellplätze und Lager – wir schaffen schnell und sauber wieder freien Raum.",
    icon: "garage",
  },
  {
    slug: "bueroaufloesung",
    title: "Büro",
    short: "Büroauflösungen",
    description:
      "Büroauflösungen für Unternehmen – effizient, diskret und mit fachgerechter Entsorgung von Mobiliar und Technik.",
    icon: "briefcase",
  },
  {
    slug: "gewerbeaufloesung",
    title: "Gewerbe",
    short: "Gewerbeauflösungen",
    description:
      "Komplette Gewerbe- und Ladenauflösungen – planbar, termintreu und nach Festpreis.",
    icon: "store",
  },
  {
    slug: "umzug",
    title: "Umzug",
    short: "Umzüge",
    description:
      "Stressfreie Umzüge in Bornheim und Umgebung – von der Verpackung bis zum Aufbau am neuen Ort.",
    icon: "truck",
  },
];

export const trustBadges: { label: string }[] = [
  { label: "Festpreis" },
  { label: "Kostenlose Besichtigung" },
  { label: "Besenreine Übergabe" },
  { label: "Zuverlässig" },
  { label: "Schnell" },
  { label: "Freundliches Team" },
  { label: "Umweltgerechte Entsorgung" },
  { label: "Kurzfristige Termine" },
];

export const processSteps: { step: string; title: string; text: string }[] = [
  {
    step: "01",
    title: "Anfrage",
    text: "Sie kontaktieren uns telefonisch, per WhatsApp oder über das Formular – ganz unverbindlich.",
  },
  {
    step: "02",
    title: "Kostenlose Besichtigung",
    text: "Wir verschaffen uns vor Ort einen Überblick – schnell, unkompliziert und kostenlos.",
  },
  {
    step: "03",
    title: "Festpreis",
    text: "Sie erhalten ein transparentes Festpreis-Angebot ohne versteckte Kosten.",
  },
  {
    step: "04",
    title: "Durchführung",
    text: "Unser eingespieltes Team räumt zügig, sauber und mit größter Sorgfalt.",
  },
  {
    step: "05",
    title: "Besenreine Übergabe",
    text: "Wir übergeben die Fläche besenrein – bereit für den nächsten Schritt.",
  },
];

export const reviews: {
  name: string;
  initials: string;
  location: string;
  rating: number;
  text: string;
}[] = [
  {
    name: "Sabine M.",
    initials: "SM",
    location: "Bornheim",
    rating: 5,
    text: "Absolut professionell und sehr freundlich. Die Wohnung meiner Mutter wurde innerhalb eines Tages komplett entrümpelt und besenrein übergeben. Klare Empfehlung!",
  },
  {
    name: "Thomas K.",
    initials: "TK",
    location: "Bonn",
    rating: 5,
    text: "Schnelle Besichtigung, fairer Festpreis und alles wurde eingehalten. So stelle ich mir einen zuverlässigen Service vor. Vielen Dank an das ganze Team!",
  },
  {
    name: "Andrea L.",
    initials: "AL",
    location: "Brühl",
    rating: 5,
    text: "Von der ersten Anfrage bis zur Übergabe lief alles reibungslos. Sehr diskret bei der Haushaltsauflösung und absolut termintreu. Top!",
  },
  {
    name: "Mehmet Y.",
    initials: "MY",
    location: "Köln",
    rating: 5,
    text: "Kurzfristiger Termin war kein Problem. Keller und Garage in wenigen Stunden geräumt. Preis-Leistung hervorragend, gerne wieder.",
  },
  {
    name: "Petra H.",
    initials: "PH",
    location: "Wesseling",
    rating: 5,
    text: "Ehrlich, pünktlich und sehr sorgfältig. Man merkt, dass hier mit Herz und Verstand gearbeitet wird. Absolut empfehlenswert.",
  },
  {
    name: "Jens R.",
    initials: "JR",
    location: "Alfter",
    rating: 5,
    text: "Büroauflösung perfekt organisiert. Alles fachgerecht entsorgt, nichts blieb liegen. Kommunikation jederzeit freundlich und klar.",
  },
];

export const faqs: { question: string; answer: string }[] = [
  {
    question: "Was kostet eine Entrümpelung?",
    answer:
      "Die Kosten hängen von Umfang, Menge und Art der Gegenstände ab. Nach einer kostenlosen Besichtigung erhalten Sie von uns ein transparentes Festpreis-Angebot – ohne versteckte Kosten. So wissen Sie von Anfang an genau, was die Entrümpelung kostet.",
  },
  {
    question: "Wie schnell können Sie starten?",
    answer:
      "In den meisten Fällen sind kurzfristige Termine möglich – oft schon innerhalb weniger Tage. Bei dringenden Anliegen finden wir gemeinsam eine schnelle Lösung. Rufen Sie uns einfach an: 0176 84043191.",
  },
  {
    question: "Bieten Sie Festpreise an?",
    answer:
      "Ja. Nach der kostenlosen Besichtigung erhalten Sie ein verbindliches Festpreis-Angebot. Es gibt keine Überraschungen oder Nachberechnungen – der vereinbarte Preis gilt.",
  },
  {
    question: "Entsorgen Sie fachgerecht?",
    answer:
      "Selbstverständlich. Wir entsorgen alle Materialien umweltgerecht und nach den geltenden gesetzlichen Vorgaben. Verwertbare Gegenstände werden, wo möglich, einer Wiederverwendung zugeführt.",
  },
  {
    question: "Ist die Besichtigung kostenlos?",
    answer:
      "Ja, die Besichtigung vor Ort ist für Sie vollkommen kostenlos und unverbindlich. Erst danach entscheiden Sie, ob Sie unser Festpreis-Angebot annehmen möchten.",
  },
  {
    question: "In welchem Gebiet sind Sie tätig?",
    answer:
      "Wir sind in Bornheim und der gesamten Umgebung im Einsatz – unter anderem in Bonn, Köln, Brühl, Wesseling, Alfter, Hürth sowie im Rhein-Sieg- und Rhein-Erft-Kreis.",
  },
];

/** Before/after showcase — self-contained on-brand SVG illustrations. */
export const beforeAfter: {
  title: string;
  before: string;
  after: string;
}[] = [
  {
    title: "Kellerräumung",
    before: "/gallery/keller-vorher.svg",
    after: "/gallery/keller-nachher.svg",
  },
  {
    title: "Wohnungsauflösung",
    before: "/gallery/wohnung-vorher.svg",
    after: "/gallery/wohnung-nachher.svg",
  },
  {
    title: "Dachbodenräumung",
    before: "/gallery/dachboden-vorher.svg",
    after: "/gallery/dachboden-nachher.svg",
  },
];

/** Service options offered in the booking form. */
export const bookingServiceOptions = services.map((s) => s.title);
