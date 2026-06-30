import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: `Datenschutzerklärung von ${site.legalName}.`,
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalShell title="Datenschutzerklärung">
      <section>
        <h2 className="text-xl font-semibold text-white">
          1. Datenschutz auf einen Blick
        </h2>
        <p className="mt-3">
          Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen.
          Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO, BDSG)
          sowie dieser Datenschutzerklärung.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">
          2. Verantwortliche Stelle
        </h2>
        <p className="mt-3">
          {site.name} – {site.brand}
          <br />
          {site.address.street}, {site.address.postalCode} {site.address.city}
          <br />
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
        <h2 className="text-xl font-semibold text-white">
          3. Erhebung von Daten über das Buchungsformular
        </h2>
        <p className="mt-3">
          Wenn Sie uns über das Termin- bzw. Kontaktformular eine Anfrage
          zukommen lassen, werden Ihre Angaben (Name, Telefonnummer, E-Mail,
          Adresse, gewünschter Termin, Beschreibung sowie optional hochgeladene
          Fotos) zum Zweck der Bearbeitung Ihrer Anfrage und für den Fall von
          Anschlussfragen bei uns gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1
          lit. b DSGVO (Anbahnung bzw. Erfüllung eines Vertrags) sowie Art. 6
          Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von
          Anfragen). Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">
          4. E-Mail-Versand der Anfragen
        </h2>
        <p className="mt-3">
          Zur Zustellung der Formularanfragen kann ein E-Mail-Dienstleister
          eingesetzt werden. Mit diesem besteht eine Vereinbarung zur
          Auftragsverarbeitung gemäß Art. 28 DSGVO. Die übermittelten Daten
          werden ausschließlich zur Zustellung der Anfrage verarbeitet.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">
          5. Server-Logfiles &amp; Hosting
        </h2>
        <p className="mt-3">
          Beim Aufruf dieser Website werden durch den Hosting-Provider
          automatisch Informationen in Server-Logfiles gespeichert (z. B.
          Browsertyp, Betriebssystem, Referrer-URL, Uhrzeit). Diese Daten sind
          nicht bestimmten Personen zuordenbar und dienen der technischen
          Sicherheit und Stabilität. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
          DSGVO.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">
          6. Eingebundene Karte (Google Maps)
        </h2>
        <p className="mt-3">
          Zur Anzeige unseres Standorts binden wir eine Karte von Google Maps
          ein. Anbieter ist die Google Ireland Limited. Beim Aufruf kann Google
          Daten (u. a. Ihre IP-Adresse) verarbeiten. Weitere Informationen
          finden Sie in der Datenschutzerklärung von Google.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">7. Ihre Rechte</h2>
        <p className="mt-3">
          Sie haben jederzeit das Recht auf Auskunft (Art. 15 DSGVO),
          Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der
          Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie
          Widerspruch (Art. 21). Zudem steht Ihnen ein Beschwerderecht bei einer
          Aufsichtsbehörde zu. Wenden Sie sich hierzu an die oben genannten
          Kontaktdaten.
        </p>
      </section>

      <p className="text-sm text-white/40">
        Hinweis: Diese Datenschutzerklärung ist eine Vorlage und sollte vor
        Veröffentlichung an Ihre tatsächlich eingesetzten Dienste angepasst und
        ggf. rechtlich geprüft werden.
      </p>
    </LegalShell>
  );
}
