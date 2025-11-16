// app/components/products/product-filter-grid.tsx
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

type ColorTheme =
  | "amber"
  | "blue"
  | "green"
  | "pearl"
  | "red"
  | "turquoise"
  | "diamond"
  | "black"
  | "violet"
  | undefined;

type MetalType = "gold" | "silver" | undefined;
type Category = "necklace" | "pendant" | "ring" | undefined;

type Product = {
  _id: string;
  title: string;
  slug: string;
  price: number;
  images?: string[];
  stone?: string;
  metalType?: MetalType | null;
  colorTheme?: string | null;
  category?: Category | null;
};

type ColorFilterId =
  | "all"
  | "amber"
  | "blue"
  | "green"
  | "pearl"
  | "red"
  | "turquoise"
  | "diamond"
  | "black"
  | "violet";

type MetalFilterId = "all" | "gold" | "silver";
type CategoryFilterId = "all" | "necklace" | "pendant" | "ring";

const COLOR_FILTERS: { id: ColorFilterId; label: string }[] = [
  { id: "all", label: "Alle Farben" },
  { id: "amber", label: "Bernstein" },
  { id: "blue", label: "Blau" },
  { id: "green", label: "Grün" },
  { id: "pearl", label: "Perlmutt" },
  { id: "red", label: "Rot" },
  { id: "turquoise", label: "Türkis" },
  { id: "diamond", label: "Diamant/Klar" },
  { id: "black", label: "Schwarz" },
  { id: "violet", label: "Violett" },
];

const METAL_FILTERS: { id: MetalFilterId; label: string }[] = [
  { id: "all", label: "Alle Metalle" },
  { id: "gold", label: "Gold" },
  { id: "silver", label: "Silber" },
];

const CATEGORY_FILTERS: { id: CategoryFilterId; label: string }[] = [
  { id: "all", label: "Alle Kategorien" },
  { id: "necklace", label: "Ketten" },
  { id: "pendant", label: "Anhänger" },
  { id: "ring", label: "Ringe" },
];

// Sanity-String → internes ColorTheme
function normalizeColorTheme(raw?: string | null): ColorTheme {
  if (!raw) return undefined;
  const t = raw.toString().toLowerCase().trim();

  if (t === "amber" || t === "bernstein") return "amber";
  if (t === "blue" || t === "blau") return "blue";
  if (t === "green" || t === "grün" || t === "gruen") return "green";
  if (t === "pearl" || t === "perlmutt") return "pearl";
  if (t === "red" || t === "rot") return "red";
  if (t === "turquoise" || t === "türkis" || t === "tuerkis") return "turquoise";
  if (t === "diamond" || t === "diamant") return "diamond";
  if (t === "black" || t === "schwarz") return "black";
  if (t === "violet" || t === "violett") return "violet";
  return undefined;
}

// Karten-Styling je nach Farbwelt
function getCardTheme(theme: ColorTheme) {
  switch (theme) {
    case "blue":
      return {
        cardBg: "bg-[#E7F0FF] dark:bg-slate-900",
        cardRing: "ring-[#3B82F6]/50",
        priceText: "text-[#123976] dark:text-sky-200",
      };
    case "green":
      return {
        cardBg: "bg-[#E6F4EC] dark:bg-emerald-950",
        cardRing: "ring-[#22C55E]/40",
        priceText: "text-[#145C32] dark:text-emerald-200",
      };
    case "pearl":
      return {
        cardBg: "bg-[#F8F7F4] dark:bg-slate-900",
        cardRing: "ring-[#E0DED6]/60",
        priceText: "text-[#5B5546] dark:text-slate-100",
      };
    case "red":
      return {
        cardBg: "bg-[#FEE2E2] dark:bg-rose-950",
        cardRing: "ring-[#F97373]/50",
        priceText: "text-[#7F1D1D] dark:text-rose-200",
      };
    case "turquoise":
      return {
        cardBg: "bg-[#E0F7F7] dark:bg-teal-950",
        cardRing: "ring-[#14B8A6]/50",
        priceText: "text-[#0F766E] dark:text-teal-200",
      };
    case "diamond":
      return {
        cardBg: "bg-[#EEF2FF] dark:bg-slate-900",
        cardRing: "ring-[#6366F1]/50",
        priceText: "text-[#312E81] dark:text-indigo-200",
      };
    case "black":
      return {
        cardBg: "bg-[#F4F4F5] dark:bg-black",
        cardRing: "ring-neutral-500/50",
        priceText: "text-neutral-900 dark:text-neutral-100",
      };
    case "violet":
      return {
        cardBg: "bg-[#F3E8FF] dark:bg-violet-950",
        cardRing: "ring-[#8B5CF6]/50",
        priceText: "text-[#5B21B6] dark:text-violet-200",
      };
    case "amber":
    default:
      return {
        cardBg: "bg-[#F7F4EF] dark:bg-slate-900",
        cardRing: "ring-[#E1D5C5]/70",
        priceText: "text-[#1E1B18] dark:text-amber-200",
      };
  }
}

export function ProductFilterGrid({ products }: { products: Product[] }) {
  const [activeColor, setActiveColor] = useState<ColorFilterId>("all");
  const [activeMetal, setActiveMetal] = useState<MetalFilterId>("all");
  const [activeCategory, setActiveCategory] = useState<CategoryFilterId>("all");

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const color = normalizeColorTheme(p.colorTheme);
      const metal = p.metalType ?? undefined;
      const category = p.category ?? undefined;

      const matchesColor =
        activeColor === "all" || color === activeColor;

      const matchesMetal =
        activeMetal === "all" || metal === activeMetal;

      const matchesCategory =
        activeCategory === "all" || category === activeCategory;

      return matchesColor && matchesMetal && matchesCategory;
    });
  }, [products, activeColor, activeMetal, activeCategory]);

  return (
    <section className="space-y-6">
      {/* Filterleisten */}
      <div className="space-y-2">
        {/* Farben */}
        <div className="flex flex-wrap gap-2">
          {COLOR_FILTERS.map((filter) => {
            const isActive = activeColor === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveColor(filter.id)}
                className={[
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition",
                  isActive
                    ? "border-[#C57A3B] bg-[#C57A3B] text-white shadow-sm"
                    : "border-neutral-300 bg-white text-neutral-700 hover:border-[#C57A3B]/70 hover:text-[#8B4F22] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-amber-400/70",
                ].join(" ")}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Metall */}
        <div className="flex flex-wrap gap-2">
          {METAL_FILTERS.map((filter) => {
            const isActive = activeMetal === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveMetal(filter.id)}
                className={[
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition",
                  isActive
                    ? "border-[#4B5563] bg-[#4B5563] text-white shadow-sm"
                    : "border-neutral-300 bg-white text-neutral-700 hover:border-[#4B5563]/70 hover:text-[#111827] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-300/70",
                ].join(" ")}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Kategorie */}
        <div className="flex flex-wrap gap-2">
          {CATEGORY_FILTERS.map((filter) => {
            const isActive = activeCategory === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveCategory(filter.id)}
                className={[
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition",
                  isActive
                    ? "border-[#8B4F22] bg-[#8B4F22] text-white shadow-sm"
                    : "border-neutral-300 bg-white text-neutral-700 hover:border-[#8B4F22]/70 hover:text-[#8B4F22] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-amber-400/70",
                ].join(" ")}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Produkt-Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-sm text-neutral-500 dark:text-slate-400">
          Für diese Filter-Kombination wurden noch keine Produkte angelegt.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((p) => {
            const theme = getCardTheme(normalizeColorTheme(p.colorTheme));
            const image = p.images?.[0];

            return (
              <Link
                key={p._id}
                href={`/products/${p.slug}`}
                className={[
                  "group flex flex-col rounded-3xl p-4 shadow-sm ring-1 transition hover:-translate-y-1 hover:shadow-lg",
                  theme.cardBg,
                  theme.cardRing,
                ].join(" ")}
              >
                <div className="relative mb-4 aspect-square overflow-hidden rounded-2xl bg-[#E5DED1] dark:bg-neutral-900">
                  {image && (
                    <Image
                      src={image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>

                <div className="flex flex-1 flex-col justify-between gap-2">
                  <div>
                    <h2 className="text-sm font-medium text-[#1E1B18] dark:text-slate-50">
                      {p.title}
                    </h2>
                    {p.stone && (
                      <p className="text-xs text-neutral-500 dark:text-slate-400">
                        {p.stone}
                      </p>
                    )}
                  </div>

                  <div className="mt-2 flex items-center justify-between gap-2">
                    <span
                      className={[
                        "rounded-full px-3 py-1 text-sm font-semibold shadow-inner",
                        theme.priceText,
                        "bg-white/70 dark:bg-black/40",
                      ].join(" ")}
                    >
                      {p.price.toFixed(2)} CHF
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 dark:text-slate-400">
                      Details ansehen
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
