// app/api/checkout/create-session/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs"; // Wichtig: kein Edge-Runtime für Stripe

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  // Wird beim Build / auf Vercel ins Log geschrieben
  console.error("⚠️ STRIPE_SECRET_KEY ist nicht gesetzt!");
}

const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey, {
      apiVersion: "2024-06-20",
    })
  : null;

type CheckoutItem = {
  id: string;
  title: string;
  price: number;      // in CHF
  quantity: number;
};

export async function POST(req: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json(
        { error: "Stripe ist serverseitig nicht konfiguriert (STRIPE_SECRET_KEY fehlt)." },
        { status: 500 }
      );
    }

    const body = (await req.json()) as { items?: CheckoutItem[] };

    if (!body.items || !Array.isArray(body.items) || body.items.length === 0) {
      return NextResponse.json(
        { error: "Der Warenkorb ist leer oder ungültig." },
        { status: 400 }
      );
    }

    const lineItems = body.items.map((item) => ({
      price_data: {
        currency: "chf",
        product_data: {
          name: item.title,
        },
        // Preis in Rappen
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity ?? 1,
    }));

    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.beryll.ch";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: lineItems,
      shipping_address_collection: {
        allowed_countries: ["CH", "DE", "AT", "LI", "FR", "IT"],
      },
      // hier kannst du später noch Versandkosten / Steuern ergänzen
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout/cancel`,
      allow_promotion_codes: true,
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Keine Checkout-URL von Stripe erhalten." },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    console.error("❌ Stripe-Checkout-Fehler:", err);
    const message =
      err instanceof Error ? err.message : "Unerwarteter Serverfehler.";
    return NextResponse.json(
      { error: `Stripe-Fehler: ${message}` },
      { status: 500 }
    );
  }
}
