"use client";

import { useState } from "react";
import { useCart, RingInfo } from "./cart-context";

type AddToCartButtonProps = {
  product: {
    id: string;
    title: string;
    price: number;
    image?: string;
    category?: string | null; // "ring" etc.
  };
};

const DAMEN_SIZES = ["48", "50", "52", "54", "56", "58"];
const HERREN_SIZES = ["58", "60", "62", "64", "66", "68"];

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const isRing = product.category === "ring";

  const [ringSizeType, setRingSizeType] = useState<"damen" | "herren" | "">(
    ""
  );
  const [ringSize, setRingSize] = useState<string>("");

  const [error, setError] = useState<string | null>(null);

  const dec = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
  const inc = () => setQuantity((q) => q + 1);

  const handleAdd = () => {
    setError(null);

    let ring: RingInfo | undefined;

    if (isRing) {
      if (!ringSizeType || !ringSize) {
        setError("Bitte Ringgrösse (Damen/Herren) auswählen.");
        return;
      }
      ring = {
        sizeType: ringSizeType,
        size: ringSize,
      };
    }

    addItem(
      {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        category: product.category ?? null,
        ring: ring ?? null,
      },
      quantity
    );
  };

  const sizes =
    ringSizeType === "damen"
      ? DAMEN_SIZES
      : ringSizeType === "herren"
      ? HERREN_SIZES
      : [];

  return (
    <div className="space-y-3">
      {/* Ringgrössen-UI nur für Kategorie "ring" */}
      {isRing && (
        <div className="space-y-2 rounded-2xl bg-white/70 p-3 text-xs text-neutral-800 shadow-inner ring-1 ring-black/5 dark:bg-black/40 dark:text-slate-100 dark:ring-slate-700">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-slate-400">
            Ringgrösse wählen
          </p>

          {/* Damen / Herren Toggle */}
          <div className="inline-flex rounded-full bg-neutral-100 p-1 text-xs shadow-inner dark:bg-slate-900">
            <button
              type="button"
              onClick={() => {
                setRingSizeType("damen");
                setRingSize("");
              }}
              className={[
                "px-3 py-1 rounded-full transition",
                ringSizeType === "damen"
                  ? "bg-white text-neutral-900 shadow-sm dark:bg-amber-300 dark:text-slate-900"
                  : "text-neutral-600 hover:text-neutral-900 dark:text-slate-300 dark:hover:text-white",
              ].join(" ")}
            >
              Damen
            </button>
            <button
              type="button"
              onClick={() => {
                setRingSizeType("herren");
                setRingSize("");
              }}
              className={[
                "px-3 py-1 rounded-full transition",
                ringSizeType === "herren"
                  ? "bg-white text-neutral-900 shadow-sm dark:bg-amber-300 dark:text-slate-900"
                  : "text-neutral-600 hover:text-neutral-900 dark:text-slate-300 dark:hover:text-white",
              ].join(" ")}
            >
              Herren
            </button>
          </div>

          {/* Grössen-Auswahl */}
          {ringSizeType && (
            <div className="space-y-1">
              <p className="text-[11px] text-neutral-500 dark:text-slate-400">
                Grösse in EU-Ringgrössen auswählen:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setRingSize(size)}
                    className={[
                      "rounded-full border px-2.5 py-1 text-[11px] font-medium transition",
                      ringSize === size
                        ? "border-[#C57A3B] bg-[#C57A3B] text-white shadow-sm"
                        : "border-neutral-300 bg-white text-neutral-700 hover:border-[#C57A3B]/70 hover:text-[#8B4F22] dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-amber-300/70",
                    ].join(" ")}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {error && (
            <p className="text-[11px] text-red-600 dark:text-red-300">
              {error}
            </p>
          )}
        </div>
      )}

      {/* Menge + In den Warenkorb */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {/* Menge-Control */}
        <div className="inline-flex items-center gap-1 rounded-full border border-neutral-300 bg-white/80 px-2 py-1 text-sm text-neutral-800 shadow-inner shadow-black/5 dark:border-neutral-700 dark:bg-black/50 dark:text-neutral-100 dark:shadow-black/40">
          <button
            type="button"
            onClick={dec}
            className="h-8 w-8 rounded-full text-lg leading-none hover:bg-black/5 dark:hover:bg-white/10"
            aria-label="Menge verringern"
          >
            −
          </button>
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, Number(e.target.value) || 1))
            }
            className="w-10 bg-transparent text-center text-sm outline-none"
          />
          <button
            type="button"
            onClick={inc}
            className="h-8 w-8 rounded-full text-lg leading-none hover:bg-black/5 dark:hover:bg-white/10"
            aria-label="Menge erhöhen"
          >
            +
          </button>
        </div>

        {/* CTA-Button */}
        <button
          type="button"
          onClick={handleAdd}
          className="inline-flex flex-1 items-center justify-center rounded-full bg-[#C57A3B] px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-[#C57A3B]/35 hover:bg-[#8B4F22]"
        >
          In den Warenkorb
        </button>
      </div>
    </div>
  );
}
