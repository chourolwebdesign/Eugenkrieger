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
          Wir speichern Ihre Anfrage, bis der Zweck der Bearbeitung entfällt
          (z. B. nach Abschluss des Auftrags), und löschen sie anschließend,
          sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">
          4. E-Mail-Versand der Anfragen (Resend)
        </h2>
        <p className="mt-3">
          Zur zuverlässigen Zustellung der Formularanfragen an uns setzen wir den
          E-Mail-Dienst Resend (Resend, Inc., USA) ein. Die von Ihnen im Formular
          eingegebenen Daten werden ausschließlich zur Zustellung Ihrer Anfrage
          verarbeitet. Mit dem Anbieter besteht ein Vertrag zur
          Auftragsverarbeitung gemäß Art. 28 DSGVO; eine etwaige Übermittlung in
          die USA wird durch die EU-Standardvertragsklauseln abgesichert.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und f DSGVO.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">
          5. Hosting &amp; Server-Logfiles
        </h2>
        <p className="mt-3">
          Diese Website wird bei Vercel (Vercel Inc., USA) gehostet. Beim Aufruf
          der Website werden durch den Hosting-Provider automatisch Informationen
          in Server-Logfiles gespeichert (z. B. IP-Adresse, Browsertyp,
          Betriebssystem, Referrer-URL, Uhrzeit). Dies ist zur sicheren und
          stabilen Bereitstellung der Website technisch erforderlich.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Mit dem Anbieter
          besteht ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO; eine
          Übermittlung in die USA wird durch die EU-Standardvertragsklauseln
          abgesichert.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">
          6. Verschlüsselung &amp; Schriftarten
        </h2>
        <p className="mt-3">
          Diese Website nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung
          (erkennbar an „https“ und dem Schloss-Symbol in der Adressleiste).
          Verwendete Schriftarten werden lokal von unserem Server ausgeliefert
          (kein Verbindungsaufbau zu Google Fonts). Es werden keine Cookies zu
          Analyse- oder Marketingzwecken und keine externen Tracking-Dienste
          eingesetzt.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">
          7. Eingebundene Karte (Google Maps)
        </h2>
        <p className="mt-3">
          Zur Anzeige unseres Standorts können wir eine Karte von Google Maps
          einbinden (Anbieter: Google Ireland Limited). Die Karte wird jedoch
          erst geladen, nachdem Sie aktiv auf „Karte laden“ geklickt haben. Vor
          Ihrer Einwilligung werden keine Daten an Google übertragen. Erst mit
          dem Laden wird u. a. Ihre IP-Adresse an Google übermittelt;
          Rechtsgrundlage ist dann Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a
          DSGVO, die Sie jederzeit mit Wirkung für die Zukunft widerrufen können.
          Weitere Informationen finden Sie in der Datenschutzerklärung von
          Google.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">8. Ihre Rechte</h2>
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
        Stand: {new Date().toLocaleDateString("de-DE", {
          month: "long",
          year: "numeric",
        })}
        . Diese Datenschutzerklärung wird bei Änderungen unserer Dienste oder der
        Rechtslage aktualisiert.
      </p>
    </LegalShell>
  );
}
