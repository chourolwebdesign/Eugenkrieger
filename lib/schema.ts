/**
 * Structured data (schema.org / JSON-LD) for SEO + GEO (AI search engines).
 * Generates LocalBusiness, Service, FAQ and Breadcrumb graphs so ChatGPT,
 * Gemini, Claude and Perplexity can read the business clearly.
 */
import { site } from "./site";
import { services, faqs } from "./content";

const businessId = `${site.url}/#business`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MovingCompany", "HomeAndConstructionBusiness"],
    "@id": businessId,
    name: site.legalName,
    alternateName: `${site.name} ${site.brand}`,
    slogan: site.slogan,
    description: site.description,
    url: site.url,
    telephone: site.phone.international,
    email: site.email,
    image: `${site.url}/og.jpg`,
    logo: `${site.url}/icon.svg`,
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Bar, Überweisung",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    hasMap: site.maps.link,
    areaServed: site.serviceAreas.map((name) => ({
      "@type": "City",
      name,
    })),
    openingHoursSpecification: site.openingHoursSpec.map((o) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: o.days,
      opens: o.opens,
      closes: o.closes,
    })),
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
      },
    })),
  };
}

export function serviceSchema() {
  return services.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    serviceType: s.short,
    description: s.description,
    provider: { "@id": businessId },
    areaServed: site.serviceAreas.map((name) => ({ "@type": "City", name })),
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: site.phone.international,
      serviceUrl: site.url,
    },
  }));
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema() {
  const items = [
    { name: "Startseite", url: site.url },
    { name: "Leistungen", url: `${site.url}/#leistungen` },
    { name: "Ablauf", url: `${site.url}/#ablauf` },
    { name: "Termin buchen", url: `${site.url}/#termin` },
    { name: "Kontakt", url: `${site.url}/#kontakt` },
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.legalName,
    url: site.url,
    inLanguage: "de-DE",
    publisher: { "@id": businessId },
  };
}

/** Combined graph for a single JSON-LD script in <head>. */
export function jsonLdGraph() {
  return [
    localBusinessSchema(),
    websiteSchema(),
    ...serviceSchema(),
    faqSchema(),
    breadcrumbSchema(),
  ];
}
