"use client";

import Link from "next/link";
import { useCart } from "./cart-context";

export function CartButton() {
  const { totalQuantity } = useCart();

  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center gap-2 rounded-full border border-[#E1D5C5] bg-[#F7F4EF] px-3 py-1.5 text-xs text-neutral-700 hover:border-[#C57A3B] hover:text-[#8B4F22]"
    >
      <span>Warenkorb</span>
      <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#C57A3B] text-[11px] font-semibold text-white">
        {totalQuantity}
      </span>
    </Link>
  );
}
