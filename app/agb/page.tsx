// app/agb/page.tsx
import Link from "next/link";

export const metadata = {
  title: "AGB | Steinschmuck Baumgartner Schweiz",
  description:
    "Allgemeine Geschäftsbedingungen von Steinschmuck Baumgartner Schweiz – faire, klare und transparente Regelungen zu Bestellung, Versand, Rückgabe und Haftung.",
};

export default function AgbPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 space-y-16">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>
        <p className="text-sm text-neutral-700 dark:text-neutral-300 max-w-prose">
          Diese AGB regeln die Grundlage für Bestellungen und Lieferungen bei
          Steinschmuck Baumgartner Schweiz. Sie dienen der Klarheit,
          Transparenz und einem fairen Umgang miteinander.
        </p>
      </header>

      {/* Abschnitt 1 */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          1. Geltungsbereich
        </h2>
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Diese AGB gelten für alle Bestellungen über unseren Online-Shop. Mit
          einer Bestellung akzeptierst du diese Bedingungen in ihrer jeweils
          gültigen Fassung.
        </p>
      </section>

      {/* Abschnitt 2 */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          2. Produkte & Verfügbarkeit
        </h2>
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Unsere Schmuckstücke bestehen aus echten Natursteinen sowie aus
          925-Sterlingsilber oder vergoldetem Silber. Jedes Stück ist ein
          Unikat. Leichte Abweichungen in Farbe, Maserung oder Form sind
          naturbedingt und stellen keinen Mangel dar.
        </p>
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Falls ein Produkt wider Erwarten nicht verfügbar ist, informieren wir
          dich so schnell wie möglich.
        </p>
      </section>

      {/* Abschnitt 3 */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          3. Preise & Zahlung
        </h2>
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Alle Preise sind in CHF angegeben und verstehen sich inklusive
          gesetzlicher Mehrwertsteuer (wo anwendbar).
        </p>
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Die Zahlung erfolgt über Stripe (Kreditkarte, Debitkarte oder weitere
          Zahlungsmethoden). Deine Daten werden sicher und verschlüsselt
          übertragen.
        </p>
      </section>

      {/* Abschnitt 4 */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          4. Versand & Lieferung
        </h2>
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Wir versenden aus der Schweiz. Die Lieferzeit beträgt in der Regel
          2–5 Werktage. Verzögerungen durch externe Dienstleister (z. B.
          Post/DPD) liegen ausserhalb unseres Einflussbereichs.
        </p>
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Versandkosten werden im Checkout ausgewiesen.
        </p>
      </section>

      {/* Abschnitt 5 */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          5. Rückgabe & Umtausch
        </h2>
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Aus hygienischen Gründen können Ohrringe, Ketten, Ringe und Anhänger
          nur in ungetragenem Zustand und in Originalverpackung zurückgegeben
          werden.
        </p>

        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Rückgaben sind innerhalb von 14 Tagen nach Erhalt möglich. Die
          Versandkosten für Rücksendungen trägt die Kundin / der Kunde.
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Bitte kontaktiere uns vorab per E-Mail, um die Rückgabe anzumelden.
        </p>
      </section>

      {/* Abschnitt 6 */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          6. Haftung
        </h2>
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Für Schäden, die durch unsachgemässe Nutzung, unsachgerechte Pflege
          oder natürlichen Verschleiss entstehen, übernehmen wir keine Haftung.
        </p>
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Für technische Störungen des Online-Shops oder externe Probleme (z. B.
          Serverausfälle) wird keine Gewährleistung übernommen.
        </p>
      </section>

      {/* Abschnitt 7 */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          7. Datenschutz
        </h2>
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Persönliche Daten werden ausschliesslich zur Abwicklung der Bestellung
          genutzt und nicht an Dritte weitergegeben – ausser dies ist für die
          Lieferung notwendig (z. B. Post).
        </p>
        <p className="text-xs text-neutral-600 dark:text-neutral-400">
          Siehe auch unsere Datenschutzbestimmungen.
        </p>
      </section>

      {/* Abschnitt 8 */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          8. Gerichtsstand
        </h2>
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Es gilt Schweizer Recht. Gerichtsstand ist Bern.
        </p>
      </section>

      {/* Abschluss */}
      <section className="space-y-3">
        <p className="text-sm text-neutral-700 dark:text-neutral-300">
          Wenn du Fragen zu unseren AGB hast, kannst du dich jederzeit melden.
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
