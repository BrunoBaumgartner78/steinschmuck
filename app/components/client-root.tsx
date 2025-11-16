"use client";

import type { ReactNode } from "react";
import { CartProvider } from "./cart/cart-context";
import { CartButton } from "./cart/cart-button";

export function ClientRoot({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        {/* Header */}
        <header className="sticky top-0 z-20 border-b border-[#E1D5C5] bg-[#F7F4EF]/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-[#F0E6D9] shadow-inner" />
              <span className="text-sm font-semibold tracking-[0.18em] uppercase text-[#8B4F22]">
                Steinschmuck
              </span>
            </div>

            <nav className="flex items-center gap-4 text-sm">
              <a
                href="/"
                className="text-neutral-700 hover:text-[#8B4F22]"
              >
                Start
              </a>
              <a
                href="/products"
                className="text-neutral-700 hover:text-[#8B4F22]"
              >
                Shop
              </a>
              <CartButton />
            </nav>
          </div>
        </header>

        {/* Inhalt */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="mt-10 border-t border-[#E1D5C5] bg-[#F7F4EF]">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Steinschmuck aus Silber</p>
            <p>Handgefertigt in Italien · Import in die Schweiz</p>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}
