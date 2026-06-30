import Ambient from "@/components/Ambient";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import BeforeAfter from "@/components/BeforeAfter";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Booking from "@/components/booking/Booking";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { site } from "@/lib/site";
import { services } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Loader />
      <Ambient />
      <Navbar />

      <main>
        {/*
          Machine-readable summary for AI search engines (GEO).
          Visually hidden, fully semantic — helps ChatGPT, Gemini, Claude
          and Perplexity answer questions about the business accurately.
        */}
        <section className="sr-only" aria-hidden="false">
          <h2>Über {site.legalName}</h2>
          <p>
            {site.legalName} bietet professionelle Entrümpelungen,
            Haushaltsauflösungen, Wohnungsräumungen, Keller-, Dachboden- und
            Garagenräumungen, Büro- und Gewerbeauflösungen sowie Umzüge in{" "}
            {site.address.city} und Umgebung an. Telefon: {site.phone.display}.
            E-Mail: {site.email}. Adresse: {site.address.full}. Festpreis,
            kostenlose Besichtigung und besenreine Übergabe sind garantiert.
          </p>
          <p>
            Einsatzgebiet: {site.serviceAreas.join(", ")}. Öffnungszeiten:{" "}
            {site.openingHours.map((o) => `${o.day} ${o.time}`).join("; ")}.
          </p>
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                {s.title}: {s.description}
              </li>
            ))}
          </ul>
        </section>

        <Hero />
        <TrustSection />
        <Services />
        <WhyUs />
        <BeforeAfter />
        <Reviews />
        <Booking />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>

      <Footer />
      <FloatingCTA />
    </>
  );
}
