import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { jsonLdGraph } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const keywords = [
  "Entrümpelung Bornheim",
  "Haushaltsauflösung Bornheim",
  "Wohnungsräumung Bonn",
  "Entrümpelung Bonn",
  "Kellerräumung",
  "Dachbodenräumung",
  "Garagenräumung",
  "Büroauflösung",
  "Gewerbeauflösung",
  "Umzug Bornheim",
  "Entrümpelung Festpreis",
  "kostenlose Besichtigung Entrümpelung",
  "Entsorgung Rhein-Sieg-Kreis",
];

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – Entrümpelung & Haushaltsauflösung in Bornheim`,
    template: `%s | ${site.name} Entrümpelung & Service`,
  },
  description: site.description,
  keywords,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.legalName,
  applicationName: site.legalName,
  alternates: { canonical: "/" },
  category: "Entrümpelung & Dienstleistungen",
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: site.url,
    siteName: site.legalName,
    title: `${site.name} – Entrümpelung & Haushaltsauflösung in Bornheim`,
    description: site.description,
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: `${site.legalName} – ${site.slogan}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} – Entrümpelung & Service`,
    description: site.description,
    images: ["/og.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/icon.svg",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0B1E3B",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // JSON-LD for SEO + GEO (AI search engines).
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph()) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
