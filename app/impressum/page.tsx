import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum von ${site.legalName} in ${site.address.city}.`,
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalShell title="Impressum">
      <section>
        <h2 className="text-xl font-semibold text-white">
          Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)
        </h2>
        <p className="mt-3">
          {site.name}
          <br />
          {site.brand}
          <br />
          {site.address.street}
          <br />
          {site.address.postalCode} {site.address.city}
          <br />
          {site.address.country}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Kontakt</h2>
        <p className="mt-3">
          Telefon:{" "}
          <a href={site.phone.href} className="text-orange hover:underline">
            {site.phone.display}
          </a>
          <br />
          E-Mail:{" "}
          <a href={`mailto:${site.email}`} className="text-orange hover:underline">
            {site.email}
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Steuernummer</h2>
        <p className="mt-3">
          Steuernummer: 222/5245/4828
          <br />
          Zuständiges Finanzamt: Finanzamt Sankt Augustin
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </h2>
        <p className="mt-3">
          {site.name}
          <br />
          {site.address.street}, {site.address.postalCode} {site.address.city}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">
          Streitschlichtung
        </h2>
        <p className="mt-3">
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange hover:underline"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          . Wir sind nicht verpflichtet und nicht bereit, an einem
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Haftung für Inhalte</h2>
        <p className="mt-3">
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Haftung für Links</h2>
        <p className="mt-3">
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
          für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
          sind ausschließlich deren Betreiber verantwortlich.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Urheberrecht</h2>
        <p className="mt-3">
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind
          als solche gekennzeichnet.
        </p>
      </section>
    </LegalShell>
  );
}
