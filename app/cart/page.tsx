// app/cart/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/components/cart/cart-context";

export default function CartPage() {
  // alles aus dem Context holen, items bekommt Default-Array
  const { items = [], removeItem, clearCart, totalAmount }: any = useCart() ?? {
    items: [],
  };

  // Fallback, falls totalAmount im Context noch nicht definiert ist
  const computedTotal =
    typeof totalAmount === "number"
      ? totalAmount
      : items.reduce(
          (sum: number, item: any) =>
            sum + (item.price || 0) * (item.quantity ?? 1),
          0
        );

  const safeTotal = Number.isFinite(computedTotal) ? computedTotal : 0;
  const hasItems = items.length > 0;

  // EIN gemeinsamer Card-Style
  const panelClass =
    [
      "rounded-3xl px-4 py-4 text-sm",
      // light
      "bg-[#F7F4EF] text-neutral-800 shadow-md shadow-black/5 ring-1 ring-black/5",
      // dark
      "dark:bg-[#020617] dark:text-slate-100 dark:shadow-black/50 dark:ring-slate-700",
    ].join(" ");

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-6 text-2xl font-semibold tracking-tight text-[#1E1B18] dark:text-slate-50">
        Warenkorb
      </h1>

      {!hasItems ? (
        <div className={panelClass + " mt-6"}>
          <p className="text-sm">Dein Warenkorb ist noch leer.</p>
          <Link
            href="/products"
            className="mt-4 inline-flex items-center rounded-full bg-[#C57A3B] px-5 py-2 text-xs font-semibold text-white shadow-md shadow-[#C57A3B]/40 transition hover:bg-[#8B4F22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF77]"
          >
            Zum Shop
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.8fr)]">
          {/* Linke Spalte: Positionen */}
          <div className="space-y-4">
            {items.map((item: any) => (
              <div
                key={item.id}
                className={panelClass + " flex items-center gap-4"}
              >
                <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-[#111217]">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-1">
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-neutral-500 dark:text-slate-400">
                    Menge: {item.quantity ?? 1}
                  </p>
                  <button
                    type="button"
                    onClick={() => removeItem?.(item.id)}
                    className="self-start text-xs text-neutral-500 underline-offset-2 hover:text-[#C0572A] hover:underline dark:text-slate-400 dark:hover:text-[#FBBF77]"
                  >
                    Entfernen
                  </button>
                </div>

                <div className="text-right">
                  <p className="text-sm font-semibold text-[#111827] dark:text-slate-50">
                    {(item.price * (item.quantity ?? 1)).toFixed(2)} CHF
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Rechte Spalte: Zusammenfassung */}
          <aside className={panelClass + " flex flex-col gap-4 px-6 py-6"}>
            <h2 className="text-base font-semibold tracking-tight">
              Zusammenfassung
            </h2>

            <div className="flex items-center justify-between text-sm">
              <span>Zwischensumme</span>
              <span className="font-semibold">
                {safeTotal.toFixed(2)} CHF
              </span>
            </div>

            <p className="text-[11px] text-neutral-500 dark:text-slate-400">
              Versandkosten und Steuern werden im nächsten Schritt berechnet.
            </p>

            {/* Zur Kasse */}
           <Link
  href="/checkout"
  className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-[#4B5563] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-black/25 transition hover:bg-[#111827] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF77] dark:bg-[#FBBF77] dark:text-[#1F2933] dark:hover:bg-[#F59E0B]"
>
  Zur Kasse
</Link>


            {/* Warenkorb leeren */}
            <button
              type="button"
              onClick={clearCart}
              className="inline-flex w-full items-center justify-center rounded-full border border-neutral-300 bg-transparent px-6 py-2 text-xs font-medium text-neutral-700 transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C57A3B] dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-900/70"
            >
              Warenkorb leeren
            </button>

           
          </aside>
        </div>
      )}
    </main>
  );
}
