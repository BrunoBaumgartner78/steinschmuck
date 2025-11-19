// app/not-found.tsx
'use client'
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col items-center justify-center px-4 py-10">
      {/* Neumorph-Karte */}
      <div className="w-full max-w-md rounded-3xl bg-[#F7F4EF] p-8 text-center shadow-[0_18px_40px_rgba(0,0,0,0.15)] ring-1 ring-black/5 dark:bg-[#020617] dark:ring-slate-800">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C57A3B] to-[#FBBF77] shadow-md shadow-black/40">
          <span
            aria-hidden="true"
            className="text-2xl text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
          >
            404
          </span>
        </div>

        <h1 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
          Seite nicht gefunden
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-slate-300">
          Das Schmuckstück oder die Seite, die du suchst, gibt es nicht
          (mehr) – oder der Link war nicht korrekt.
        </p>

        <div className="mt-6 flex flex-col gap-3 text-sm">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[#C57A3B] px-5 py-2 font-medium text-white shadow-md shadow-[#C57A3B]/40 hover:bg-[#8B4F22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C57A3B] focus-visible:ring-offset-[#F7F4EF] dark:focus-visible:ring-offset-[#020617]"
          >
            Zur Startseite
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-full border border-[#C57A3B]/40 px-5 py-2 font-medium text-[#8B4F22] hover:border-[#8B4F22] hover:text-[#8B4F22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C57A3B] focus-visible:ring-offset-[#F7F4EF] dark:text-amber-300 dark:border-amber-400/50 dark:hover:border-amber-300 dark:focus-visible:ring-offset-[#020617]"
          >
            Zum Schmuck entdecken
          </Link>
        </div>

        <p className="mt-4 text-[11px] text-neutral-500 dark:text-slate-400">
          Wenn du einen fehlerhaften Link entdeckt hast, freuen wir uns über
          einen kurzen Hinweis über die Kontaktseite.
        </p>
      </div>
    </main>
  );
}
