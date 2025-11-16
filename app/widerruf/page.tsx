// app/widerruf/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Widerrufsrecht | Steinschmuck Baumgartner Schweiz",
  description:
    "Informationen zum freiwilligen Widerrufsrecht für Bestellungen bei Steinschmuck Baumgartner Schweiz.",
};

export default function WiderrufPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 space-y-12">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
          Widerrufsrecht
        </h1>
        <p className="text-sm text-neutral-700 dark:text-neutral-300 max-w-prose">
          In der Schweiz besteht kein gesetzliches Widerrufsrecht bei
          Onlinebestellungen. Wir bieten dir dennoch ein freiwilliges und
          kundenfreundliches Rückgaberecht an.
        </p>
      </header>

      {/* Freiwilliges Rückgaberecht */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          Freiwilliges Rückgaberecht (14 Tage)
        </h2>
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Du kannst nicht getragene, unbeschädigte Produkte innerhalb von{" "}
          <strong>14 Tagen</strong> nach Erhalt der Ware an uns zurücksenden.
          Bitte stelle sicher, dass:
        </p>

        <ul className="list-disc pl-5 text-sm text-neutral-800 dark:text-neutral-200 space-y-1">
          <li>das Produkt unbenutzt und ungetragen ist,</li>
          <li>sich kein Parfum, Kosmetik oder Hautfett darauf befindet,</li>
          <li>alle Etiketten und die Originalverpackung vorhanden sind.</li>
        </ul>
      </section>

      {/* Ausnahmen */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          Vom Widerruf ausgeschlossen
        </h2>
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Aus hygienischen Gründen können wir folgende Artikel nicht
          zurücknehmen:
        </p>

        <ul className="list-disc pl-5 text-sm text-neutral-800 dark:text-neutral-200 space-y-1">
          <li>Ohrringe / Piercings</li>
          <li>
            Schmuckstücke, die individuell angepasst oder personalisiert wurden
          </li>
          <li>
            Produkte, die sichtbare Gebrauchsspuren oder Beschädigungen
            aufweisen
          </li>
        </ul>
      </section>

      {/* Ablauf */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          So läuft die Rückgabe ab
        </h2>

        <ol className="list-decimal pl-5 text-sm text-neutral-800 dark:text-neutral-200 space-y-1">
          <li>Sende uns eine kurze Nachricht per E-Mail (siehe unten).</li>
          <li>
            Du erhältst von uns die Rücksendeadresse sowie eine einfache
            Anleitung.
          </li>
          <li>
            Sende das Produkt gut verpackt innerhalb von 14 Tagen zurück.
          </li>
          <li>
            Nach Erhalt und Prüfung erstatten wir dir den Kaufbetrag zurück.
          </li>
        </ol>

        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Die Rücksendekosten trägst du als Käufer, ausser es handelt sich um
          einen Fehler unsererseits.
        </p>
      </section>

      {/* Kontakt */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          Kontakt für Rücksendungen
        </h2>
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          <strong>Steinschmuck Baumgartner Schweiz</strong>
          <br />
          Sonvilier, Schweiz  
          <br />
          E-Mail: bruno@brainbloom.ch
        </p>

        <Link
          href="/kontakt"
          className="inline-block rounded-full bg-[#C57A3B] px-5 py-2 text-sm font-medium text-white shadow-md shadow-[#C57A3B]/40 hover:bg-[#8B4F22] dark:hover:bg-amber-400 dark:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C57A3B]"
        >
          Kontakt aufnehmen
        </Link>
      </section>
    </main>
  );
}
