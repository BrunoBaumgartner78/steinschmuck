// app/components/cart/cart-button.tsx
"use client";

import Link from "next/link";
import { useCart } from "./cart-context";

export function CartButton() {
  const { totalQuantity } = useCart();
  const count = totalQuantity ?? 0;

  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-3 py-1.5 text-xs font-medium text-neutral-800 shadow-sm hover:border-[#C57A3B] hover:text-[#8B4F22] dark:border-slate-700 dark:bg-[#020617] dark:text-slate-100 dark:hover:border-amber-300"
      aria-label={
        count > 0 ? `Warenkorb (${count} Artikel)` : "Warenkorb (leer)"
      }
    >
      <span>Warenkorb</span>
      {count > 0 && (
        <span className="inline-flex min-w-[1.6rem] items-center justify-center rounded-full bg-[#C57A3B] px-1.5 py-0.5 text-[11px] font-semibold text-white shadow-sm dark:bg-amber-400 dark:text-[#111827]">
          {count}
        </span>
      )}
    </Link>
  );
}
