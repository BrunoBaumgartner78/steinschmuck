// app/checkout/cancel/page.tsx

import Link from "next/link";

export default function CheckoutCancelPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-3xl flex-col justify-center px-4 py-12">
      <div className="rounded-3xl bg-[#FFF7ED] p-8 text-sm text-neutral-800 shadow-md ring-1 ring-[#FBBF77]/60 dark:bg-[#111827] dark:text-slate-100 dark:ring-amber-700/80">
        {/* Icon / Badge */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#FDBA74] to-[#F97316] text-white shadow-md shadow-black/40">
            <span className="text-lg" aria-hidden="true">
              !
            </span>
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600 dark:text-slate-400">
            Zahlung abgebrochen
          </p>
        </div>

        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
          Du hast den Checkout abgebrochen.
        </h1>

        <p className="mt-3 leading-relaxed text-neutral-700 dark:text-slate-200">
          Keine Sorge – es wurde keine Zahlung ausgelöst. Dein Warenkorb bleibt
          vorerst erhalten, damit du deine Auswahl noch einmal in Ruhe prüfen
          oder anpassen kannst.
        </p>

        <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-slate-300">
          Wenn du Fragen zu einem Schmuckstück oder zum Versand hast, kannst du
          uns jederzeit über die Kontaktseite erreichen.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/cart"
            className="inline-flex items-center justify-center rounded-full bg-[#4B5563] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-black/30 transition hover:bg-[#111827] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FBBF77] focus-visible:ring-offset-[#FFF7ED] dark:bg-[#FBBF77] dark:text-[#1F2933] dark:hover:bg-[#F59E0B] dark:focus-visible:ring-offset-[#111827]"
          >
            Zurück zum Warenkorb
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-transparent px-6 py-2 text-xs font-medium text-neutral-700 transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C57A3B] focus-visible:ring-offset-[#FFF7ED] dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-900/70 dark:focus-visible:ring-offset-[#111827]"
          >
            Zurück zum Shop
          </Link>

          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-full border border-dashed border-neutral-300 bg-transparent px-6 py-2 text-xs font-medium text-neutral-700 transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C57A3B] focus-visible:ring-offset-[#FFF7ED] dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-900/70 dark:focus-visible:ring-offset-[#111827]"
          >
            Kontakt aufnehmen
          </Link>
        </div>

        <p className="mt-6 text-[11px] text-neutral-500 dark:text-slate-400">
          Du kannst den Checkout jederzeit erneut starten, sobald du bereit
          bist, deine Bestellung abzuschließen.
        </p>
      </div>
    </main>
  );
}
