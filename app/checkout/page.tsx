// app/checkout/page.tsx
"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useCart } from "@/app/components/cart/cart-context";

type CustomerForm = {
  name: string;
  email: string;
  address: string;
  zip: string;
  city: string;
  country: string;
};

export default function CheckoutPage() {
  // flexibel typisieren, damit TS nicht nervt, egal wie dein Context genau aussieht
  const { items = [], clearCart }: any = useCart();

  const [form, setForm] = useState<CustomerForm>({
    name: "",
    email: "",
    address: "",
    zip: "",
    city: "",
    country: "Schweiz",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const hasItems = items.length > 0;

  const handleChange = (
    field: keyof CustomerForm,
    value: string
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!hasItems) {
      setErrorMsg("Dein Warenkorb ist leer.");
      return;
    }

    if (!form.name || !form.email || !form.address || !form.city || !form.zip) {
      setErrorMsg("Bitte alle Pflichtfelder ausfüllen.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/checkout/create-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: form,
          items: items.map((item: any) => ({
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: item.quantity ?? 1,
          })),
        }),
      });

      let data: any = {};
      try {
        data = await res.json();
      } catch {
        // falls keine JSON-Antwort kam
      }

      if (!res.ok) {
        throw new Error(
          data.error ||
            `Checkout fehlgeschlagen (Status ${res.status}).`
        );
      }

      // ✅ Jetzt: Fake-Erfolg – später durch Stripe-URL ersetzen
      if (data.url) {
        // Warenkorb leeren
        clearCart?.();
        window.location.href = data.url;
        return;
      }

      setErrorMsg("Es wurde keine Weiterleitungs-URL vom Server zurückgegeben.");
    } catch (err: any) {
      console.error("Checkout-Fehler:", err);
      setErrorMsg(err.message || "Unbekannter Fehler beim Checkout.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-2 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
        Checkout
      </h1>
      <p className="mb-6 text-sm text-neutral-600 dark:text-neutral-300">
        Bitte gib deine Kontaktdaten und Lieferadresse ein. Die eigentliche
        Stripe-Zahlung wird später integriert – aktuell wird der Checkout
        testweise abgeschlossen.
      </p>

      {!hasItems && (
        <div className="mb-6 rounded-2xl bg-amber-50 px-4 py-3 text-sm text-amber-900 ring-1 ring-amber-200 dark:bg-amber-900/20 dark:text-amber-100 dark:ring-amber-700/60">
          Dein Warenkorb ist leer.{" "}
          <Link
            href="/products"
            className="font-medium underline underline-offset-2"
          >
            Zurück zum Shop
          </Link>
        </div>
      )}

      {errorMsg && (
        <div
          className="mb-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-900 ring-1 ring-red-200 dark:bg-red-900/20 dark:text-red-100 dark:ring-red-700/60"
          role="alert"
        >
          {errorMsg}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-3xl bg-[#F7F4EF] p-6 text-sm text-neutral-800 shadow-sm ring-1 ring-black/5 dark:bg-[#020617] dark:text-slate-100 dark:ring-slate-800"
        noValidate
      >
        <section className="space-y-3">
          <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
            Kontaktdaten
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label
                htmlFor="name"
                className="block text-xs font-medium text-neutral-700 dark:text-slate-300"
              >
                Name *
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-[#C57A3B] focus:ring-2 focus:ring-[#FBBF77] dark:border-slate-600 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-amber-300 dark:focus:ring-amber-400"
                autoComplete="name"
                required
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="email"
                className="block text-xs font-medium text-neutral-700 dark:text-slate-300"
              >
                E-Mail *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-[#C57A3B] focus:ring-2 focus:ring-[#FBBF77] dark:border-slate-600 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-amber-300 dark:focus:ring-amber-400"
                autoComplete="email"
                required
              />
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
            Lieferadresse
          </h2>
          <div className="space-y-3">
            <div className="space-y-1">
              <label
                htmlFor="address"
                className="block text-xs font-medium text-neutral-700 dark:text-slate-300"
              >
                Strasse & Hausnummer *
              </label>
              <input
                id="address"
                name="address"
                value={form.address}
                onChange={(e) => handleChange("address", e.target.value)}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-[#C57A3B] focus:ring-2 focus:ring-[#FBBF77] dark:border-slate-600 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-amber-300 dark:focus:ring-amber-400"
                autoComplete="street-address"
                required
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-[0.6fr_1.4fr]">
              <div className="space-y-1">
                <label
                  htmlFor="zip"
                  className="block text-xs font-medium text-neutral-700 dark:text-slate-300"
                >
                  PLZ *
                </label>
                <input
                  id="zip"
                  name="zip"
                  value={form.zip}
                  onChange={(e) => handleChange("zip", e.target.value)}
                  className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-[#C57A3B] focus:ring-2 focus:ring-[#FBBF77] dark:border-slate-600 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-amber-300 dark:focus:ring-amber-400"
                  autoComplete="postal-code"
                  required
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="city"
                  className="block text-xs font-medium text-neutral-700 dark:text-slate-300"
                >
                  Ort *
                </label>
                <input
                  id="city"
                  name="city"
                  value={form.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-[#C57A3B] focus:ring-2 focus:ring-[#FBBF77] dark:border-slate-600 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-amber-300 dark:focus:ring-amber-400"
                  autoComplete="address-level2"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="country"
                className="block text-xs font-medium text-neutral-700 dark:text-slate-300"
              >
                Land *
              </label>
              <input
                id="country"
                name="country"
                value={form.country}
                onChange={(e) => handleChange("country", e.target.value)}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-[#C57A3B] focus:ring-2 focus:ring-[#FBBF77] dark:border-slate-600 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-amber-300 dark:focus:ring-amber-400"
                autoComplete="country-name"
                required
              />
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-3 pt-2">
          <button
            type="submit"
            disabled={isSubmitting || !hasItems}
            className="inline-flex items-center justify-center rounded-full bg-[#4B5563] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-black/25 transition hover:bg-[#111827] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF77] disabled:cursor-not-allowed disabled:opacity-60 dark:bg-[#FBBF77] dark:text-[#1F2933] dark:hover:bg-[#F59E0B]"
          >
            {isSubmitting ? "Wird gesendet …" : "Zur Zahlung (Testabschluss)"}
          </button>

          <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
            Die Stripe-Zahlung wird im nächsten Schritt integriert. Aktuell
            werden die Daten nur testweise verarbeitet.
          </p>

          <Link
            href="/cart"
            className="text-xs text-neutral-500 underline underline-offset-2 hover:text-[#8B4F22] dark:text-slate-400 dark:hover:text-amber-300"
          >
            Zurück zum Warenkorb
          </Link>
        </div>
      </form>
    </main>
  );
}
