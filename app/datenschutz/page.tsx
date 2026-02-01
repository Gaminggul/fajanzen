import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Noel Janzen.",
  alternates: {
    canonical: "/datenschutz",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function DatenschutzPage() {
  return (
    <main
      id="content"
      tabIndex={-1}
      className="min-h-screen max-w-3xl mx-auto px-6 py-16 text-slate-200"
    >
      <h1 className="font-display text-3xl text-white mb-6">
        Datenschutzerklärung
      </h1>

      <section className="space-y-4 text-sm leading-relaxed text-slate-300">
        <h2 className="font-display text-2xl text-white">1. Verantwortlicher</h2>
        <p>
          Noel Janzen
          <br />
          Haardtring 15
          <br />
          64295 Darmstadt
          <br />
          Deutschland
          <br />
          E-Mail:{" "}
          <a
            href="mailto:noel@fajanzen.de"
            className="text-emerald-200 hover:text-amber-200"
          >
            noel@fajanzen.de
          </a>
        </p>

        <h2 className="font-display text-2xl text-white mt-6">
          2. Erfassung allgemeiner Informationen
        </h2>
        <p>
          Beim Zugriff auf diese Website werden durch den Hosting-Anbieter
          (Vercel Inc.) automatisch Informationen erfasst, die Ihr Browser
          übermittelt. Diese sogenannten Server-Logfiles beinhalten in der Regel:
        </p>
        <ul className="list-disc pl-6">
          <li>IP-Adresse des Geräts (in gekürzter, anonymisierter Form)</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Name und URL der abgerufenen Datei</li>
          <li>Referrer-URL (Website, von der aus der Zugriff erfolgt)</li>
          <li>Verwendeter Browser und Betriebssystem</li>
        </ul>
        <p>
          Diese Daten sind technisch erforderlich, um die Website korrekt
          auszuliefern, und werden nach kurzer Zeit automatisch gelöscht. Eine
          Zusammenführung dieser Daten mit anderen Datenquellen erfolgt nicht.
        </p>

        <h2 className="font-display text-2xl text-white mt-6">
          3. Verwendung von Cookies und Analyse-Tools
        </h2>
        <p>
          Diese Website verwendet keine Cookies, keine Tracking-Tools und keine
          Analyse-Dienste wie Google Analytics oder Matomo.
        </p>

        <h2 className="font-display text-2xl text-white mt-6">
          4. Einbindung externer Dienste
        </h2>
        <p>
          Diese Website wird über den Dienst <strong>Vercel</strong> gehostet
          (Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA). Der
          Anbieter kann im Rahmen des Serverbetriebs technische Daten (siehe
          oben) verarbeiten. Weitere Informationen finden Sie in der
          Datenschutzrichtlinie von Vercel:{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-200 hover:text-amber-200"
          >
            https://vercel.com/legal/privacy-policy
          </a>
          .
        </p>

        <h2 className="font-display text-2xl text-white mt-6">
          5. Kontaktaufnahme
        </h2>
        <p>
          Wenn Sie mir per E-Mail Kontakt aufnehmen, werden die angegebenen
          personenbezogenen Daten (z. B. Name, E-Mail-Adresse, Nachrichtentext)
          ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an
          Dritte weitergegeben.
        </p>

        <h2 className="font-display text-2xl text-white mt-6">
          6. Ihre Rechte
        </h2>
        <p>
          Sie haben jederzeit das Recht auf Auskunft, Berichtigung oder Löschung
          Ihrer gespeicherten personenbezogenen Daten, sofern keine gesetzliche
          Aufbewahrungspflicht besteht. Hierzu genügt eine formlose Mitteilung
          per E-Mail an{" "}
          <a
            href="mailto:noel@fajanzen.de"
            className="text-emerald-200 hover:text-amber-200"
          >
            noel@fajanzen.de
          </a>
          .
        </p>

        <h2 className="font-display text-2xl text-white mt-6">
          7. Änderungen dieser Datenschutzerklärung
        </h2>
        <p>
          Ich behalte mir vor, diese Datenschutzerklärung bei Bedarf
          anzupassen, um sie an aktuelle rechtliche Anforderungen oder
          technische Änderungen anzupassen.
        </p>
      </section>
    </main>
  );
}
