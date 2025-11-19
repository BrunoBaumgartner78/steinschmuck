// app/datenschutz/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Datenschutz | Steinschmuck Baumgartner Schweiz",
  description:
    "Datenschutzrichtlinien von Steinschmuck Baumgartner Schweiz. Transparente Erklärung zur Verarbeitung personenbezogener Daten gemäss Schweizer Datenschutzgesetz (DSG).",
};

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 space-y-16">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
          Datenschutzrichtlinie
        </h1>
        <p className="text-sm text-neutral-700 dark:text-neutral-300 max-w-prose">
          Diese Datenschutzerklärung informiert darüber, wie Steinschmuck
          Baumgartner Schweiz persönliche Daten verarbeitet.  
          Grundlage bildet das revidierte Schweizer Datenschutzgesetz (DSG).
        </p>
      </header>

      {/* Abschnitt 1 */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          1. Verantwortliche Stelle
        </h2>
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Verantwortlich für die Datenverarbeitung ist:
        </p>
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          <strong>Steinschmuck Baumgartner Schweiz</strong>
          <br />
          Sonvilier, Schweiz  
          <br />
          E-Mail: bruno.baumgartner@beryll.ch
        </p>
      </section>

      {/* Abschnitt 2 */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          2. Erhebung personenbezogener Daten
        </h2>
        <p className="text-sm leading-relaxed dark:text-neutral-200 text-neutral-800">
          Wir erheben personenbezogene Daten nur, wenn sie für die Abwicklung
          einer Bestellung notwendig sind oder du sie uns freiwillig mitteilst.
        </p>

        <p className="text-sm leading-relaxed dark:text-neutral-200 text-neutral-800">
          Dazu können gehören:
        </p>

        <ul className="list-disc pl-6 space-y-1 text-sm text-neutral-800 dark:text-neutral-200">
          <li>Name, Adresse, E-Mail, Telefonnummer</li>
          <li>Bestell- und Zahlungsinformationen</li>
          <li>Lieferadresse</li>
          <li>Technische Daten wie IP-Adresse, Browsertyp, Geräteinformationen</li>
        </ul>
      </section>

      {/* Abschnitt 3 */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          3. Zweck der Datenverarbeitung
        </h2>
        <p className="text-sm leading-relaxed dark:text-neutral-200 text-neutral-800">
          Die erfassten Daten werden ausschliesslich verwendet für:
        </p>

        <ul className="list-disc pl-6 space-y-1 text-sm text-neutral-800 dark:text-neutral-200">
          <li>Bearbeitung deiner Bestellung</li>
          <li>Zahlungsabwicklung (über Stripe)</li>
          <li>Versand und Kundenservice</li>
          <li>Technische Sicherheit und Optimierung des Online-Shops</li>
        </ul>
      </section>

      {/* Abschnitt 4 */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          4. Weitergabe an Dritte
        </h2>
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Deine Daten werden ausschliesslich an Dienstleister weitergegeben,
          die zur Abwicklung deiner Bestellung notwendig sind:
        </p>

        <ul className="list-disc pl-6 space-y-1 text-sm text-neutral-800 dark:text-neutral-200">
          <li>Versanddienstleister (z. B. Post)</li>
          <li>Zahlungsanbieter (Stripe)</li>
          <li>Hosting (Vercel)</li>
          <li>Datenverarbeitung über Sanity CMS</li>
        </ul>

        <p className="text-sm text-neutral-700 dark:text-neutral-300">
          Eine Weitergabe zu Werbezwecken findet nicht statt.
        </p>
      </section>

      {/* Abschnitt 5 */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          5. Cookies & Tracking
        </h2>
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Unsere Website verwendet Cookies, um die Nutzung zu verbessern.  
          Dazu gehören:
        </p>

        <ul className="list-disc pl-6 space-y-1 text-sm text-neutral-800 dark:text-neutral-200">
          <li>Session-Cookies (notwendig)</li>
          <li>Funktionale Cookies für Warenkorb & Einstellungen</li>
          <li>Analyse-Cookies (anonymisiert)</li>
        </ul>

        <p className="text-sm text-neutral-700 dark:text-neutral-300">
          Du kannst Cookies im Browser jederzeit deaktivieren.
        </p>
      </section>

      {/* Abschnitt 6 */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          6. Datensicherheit
        </h2>
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Deine Daten werden verschlüsselt übertragen (HTTPS).  
          Wir verwenden sichere Server und moderne Schutzmassnahmen.
        </p>
      </section>

      {/* Abschnitt 7 */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          7. Rechte betroffener Personen
        </h2>
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Du hast jederzeit das Recht auf:
        </p>

        <ul className="list-disc pl-6 space-y-1 text-sm text-neutral-800 dark:text-neutral-200">
          <li>Auskunft über gespeicherte Daten</li>
          <li>Berichtigung falscher Daten</li>
          <li>Löschung (sofern keine Pflicht zur Aufbewahrung besteht)</li>
          <li>Widerruf der Einwilligung zur Verarbeitung</li>
        </ul>
      </section>

      {/* Abschnitt 8 */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          8. Änderungen dieser Richtlinie
        </h2>
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen.  
          Es gilt die jeweils aktuelle Version auf dieser Website.
        </p>
      </section>

      {/* Abschluss */}
      <section className="space-y-3">
        <p className="text-sm text-neutral-700 dark:text-neutral-300">
          Für Fragen zum Datenschutz kannst du uns jederzeit kontaktieren.
        </p>

        <Link
          href="/contact"
          className="inline-block rounded-full bg-[#C57A3B] px-5 py-2 text-sm font-medium text-white shadow-md shadow-[#C57A3B]/40 hover:bg-[#8B4F22] dark:hover:bg-amber-400 dark:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C57A3B]"
        >
          Kontakt aufnehmen
        </Link>
      </section>
    </main>
  );
}
