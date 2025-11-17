// app/about-us/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Über uns | Steinschmuck Baumgartner Schweiz",
  description:
    "Erfahre mehr über Steinschmuck Baumgartner aus der Schweiz: Wer wir sind, wie wir arbeiten und welche Werte hinter unserem ruhigen, zeitlosen Schmuck stehen.",
};

export default function AboutUsPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-16 px-4 py-10">
      {/* Hero-Bereich */}
      <section className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8B4F22] dark:text-amber-300">
          Über uns
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl">
          Steinschmuck Baumgartner
          <br />
          aus der Schweiz.
        </h1>

        <p className="max-w-3xl text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Steinschmuck Baumgartner ist eine kleine, unabhängige Marke aus der
          Schweiz. Im Zentrum steht ruhiger, zeitloser Schmuck – klare Formen,
          natürliche Materialien und Stücke, die dich im Alltag begleiten,
          ohne laut zu sein.
        </p>

        <p className="max-w-3xl text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Die Idee dahinter: ehrlicher Schmuck, bei dem du weißt, woher er
          kommt, wie er gefertigt wird und wer dahintersteht. Kein anonymer
          Großkonzern, sondern ein bewusst geführtes, persönliches Projekt.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/products"
            className="rounded-full bg-[#C57A3B] px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-[#C57A3B]/40 hover:bg-[#8B4F22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C57A3B]"
          >
            Kollektion ansehen
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-neutral-700 underline-offset-4 hover:text-[#8B4F22] hover:underline dark:text-slate-200 dark:hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C57A3B]"
          >
            Mehr über unseren Schmuck
          </Link>
        </div>
      </section>

      {/* Wer steht dahinter? */}
      <section className="grid gap-8 rounded-3xl bg-[#F7F4EF] p-6 text-sm text-neutral-900 ring-1 ring-black/5 dark:bg-[#020617] dark:text-slate-100 dark:ring-slate-800 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
            Wer hinter Steinschmuck Baumgartner steht
          </h2>
          <p className="leading-relaxed text-neutral-800 dark:text-slate-200">
            Hinter diesem Projekt steht Bruno Baumgartner aus der Schweiz.
            Steinschmuck ist für ihn mehr als ein Produkt – es ist eine ruhige,
            haptische Form von Ästhetik, die etwas aus der Natur in den
            Alltag holt.
          </p>
          <p className="leading-relaxed text-neutral-800 dark:text-slate-200">
            Die Marke ist bewusst klein gehalten. Dadurch kann jede Entscheidung
            – von der Materialwahl über die Farbwelten bis hin zur Verpackung –
            sorgfältig getroffen werden. Qualität, Transparenz und Fairness
            stehen vor schnellem Wachstum.
          </p>
        </div>

        <div className="space-y-3 text-sm text-neutral-800 dark:text-slate-200">
          <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
            Unsere Haltung
          </h3>
          <ul className="space-y-2">
            <li>• Ruhige, zeitlose Designs statt kurzlebiger Trends.</li>
            <li>• Klare Informationen zur Herkunft der Stücke.</li>
            <li>• Kleine, kuratierte Auswahl statt Überangebot.</li>
            <li>• Respektvoller Umgang mit Kund:innen und Partnern.</li>
          </ul>
        </div>
      </section>

      {/* Herkunft & Transparenz */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          Herkunft & Transparenz
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Die Schmuckstücke entstehen in einer Manufaktur in Pakistan. Dort
          werden die Steine ausgewählt, gefasst und vorbereitet. Anschließend wird in die Schweiz importiert, wo
          Lagerung, finale Kontrolle und Versand stattfinden.
        </p>
        <p className="max-w-3xl text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Dieser Weg wird bewusst offen kommuniziert – damit klar ist, welche
          Menschen und welche Stationen hinter jedem Stück stehen.
        </p>
      </section>

      {/* Werte-Bereich */}
      <section className="grid gap-6 text-sm sm:grid-cols-3">
        <div className="rounded-3xl bg-[#F7F4EF] p-4 ring-1 ring-black/5 dark:bg-[#020617] dark:ring-slate-800">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
            Ruhe & Reduktion
          </h3>
          <p className="mt-2 text-neutral-800 dark:text-slate-200">
            Formen, die nicht überladen sind. Schmuck, der dir Raum lässt und
            sich deinem Alltag anpasst.
          </p>
        </div>
        <div className="rounded-3xl bg-[#F7F4EF] p-4 ring-1 ring-black/5 dark:bg-[#020617] dark:ring-slate-800">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
            Ehrliche Materialien
          </h3>
          <p className="mt-2 text-neutral-800 dark:text-slate-200">
            Metalle wie Silber oder Gold in Kombination mit echten Steinen
            und sichtbarer Struktur – keine Plastik-Illusion.
          </p>
        </div>
        <div className="rounded-3xl bg-[#F7F4EF] p-4 ring-1 ring-black/5 dark:bg-[#020617] dark:ring-slate-800">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
            Transparente Wege
          </h3>
          <p className="mt-2 text-neutral-800 dark:text-slate-200">
            Von der Manufaktur in Pakistan über uns bis zu dir in der
            Schweiz – offen kommuniziert, nachvollziehbar gedacht.
          </p>
        </div>
      </section>

      {/* Kontakt / Abschluss */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          Kontakt & Fragen
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Wenn du Fragen zu einem Stück, zu Materialien oder zur Herkunft hast,
          kannst du gerne Kontakt aufnehmen. Rückfragen sind ausdrücklich
          erwünscht – sie gehören zu einer transparenten Arbeitsweise dazu.
        </p>
        {/* Wenn du später eine /kontakt Seite hast, Link dahin ändern */}
        <a
          href="mailto:bruno@brainbloom.ch"
          className="inline-flex items-center justify-center rounded-full bg-[#C57A3B] px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-[#C57A3B]/40 hover:bg-[#8B4F22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C57A3B]"
        >
          E-Mail schreiben
        </a>
      </section>
    </main>
  );
}
 