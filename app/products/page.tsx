// app/products/page.tsx
import {sanityClient} from "../../sanity/lib/client";
import {allProductsQuery} from "../../sanity/lib/queries";
import {ProductFilterGrid} from "../components/products/product-filter-grid";

export const revalidate = 60;

export default async function ProductsPage() {
  const products = await sanityClient.fetch(allProductsQuery);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="mb-8 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C57A3B]">
          Shop
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-[#111827] dark:text-slate-50">
          Steinschmuck aus Silber &amp; Gold
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-slate-300">
          Kleine, sorgfältig zusammengestellte Kollektion aus Natursteinen und Edelmetallen.
          Wähle nach Metall und Farbwelt, um dein Lieblingsstück zu finden.
        </p>
      </section>

      <ProductFilterGrid products={products} />
    </main>
  );
}
