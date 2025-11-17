// components/layout/site-header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Start" },
  { href: "/products", label: "Shop" },
  // falls du später Seiten wie /about hast, hier ergänzen:
  // { href: "/about", label: "Über" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Menü schließen, wenn Route wechselt
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#050608]/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2">
<span className="flex h-7 w-7 items-center justify-center rounded-full shadow-md shadow-black/40 gradient-orb" />
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-neutral-100">
            Beryll.ch
          </span>
        </Link>

        {/* Desktop-Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "text-xs font-medium tracking-[0.18em] uppercase transition",
                  isActive
                    ? "text-[#FBBF77]"
                    : "text-neutral-300 hover:text-[#FBBF77]",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/cart"
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium tracking-[0.18em] uppercase text-neutral-100 shadow-sm shadow-black/30 hover:border-[#FBBF77]/60 hover:text-[#FBBF77]"
          >
            Warenkorb
          </Link>
        </nav>

        {/* Mobile: Hamburger */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-100 shadow-sm shadow-black/40 md:hidden"
          aria-label="Navigation öffnen"
          aria-expanded={open}
        >
          <span className="relative flex h-3 w-4 flex-col justify-between">
            <span
              className={`h-0.5 w-full rounded-full bg-current transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-current transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-current transition-transform ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile-Menü */}
      {open && (
        <div className="border-t border-white/5 bg-[#050608]/95 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "rounded-xl px-3 py-2 text-xs font-medium tracking-[0.18em] uppercase",
                    isActive
                      ? "bg-white/10 text-[#FBBF77]"
                      : "text-neutral-200 hover:bg-white/5 hover:text-[#FBBF77]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/cart"
              className="mt-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium tracking-[0.18em] uppercase text-neutral-100 hover:border-[#FBBF77]/60 hover:text-[#FBBF77]"
            >
              Warenkorb
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
