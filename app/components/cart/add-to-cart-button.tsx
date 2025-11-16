// app/components/cart/add-to-cart-button.tsx
"use client";

import { useState } from "react";
import { useCart } from "./cart-context";

type AddToCartButtonProps = {
  product: {
    id: string;
    title: string;
    price: number;
    image?: string;
  };
};

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    addItem(product, quantity);
  };

  const dec = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
  const inc = () => setQuantity((q) => q + 1);

  return (
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
  );
}
