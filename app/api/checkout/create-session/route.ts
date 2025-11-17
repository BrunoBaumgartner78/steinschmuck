// app/api/checkout/create-session/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY ist nicht gesetzt");
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2024-06-20",
});

type CheckoutItem = {
  id: string;
  title: string;
  price: number;
  quantity?: number;
  image?: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const items: CheckoutItem[] = body.items ?? [];
    const customer = body.customer ?? {};

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "Keine Positionen im Warenkorb." },
        { status: 400 }
      );
    }

    const origin =
      process.env.NEXT_PUBLIC_SITE_URL ||
      req.headers.get("origin") ||
      "https://beryll.ch";

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map(
      (item) => ({
        quantity: item.quantity ?? 1,
        price_data: {
          currency: "chf",
          unit_amount: Math.round((item.price || 0) * 100),
          product_data: {
            name: item.title,
            images: item.image ? [item.image] : undefined,
          },
        },
      })
    );

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: lineItems,
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel`,
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["CH", "DE", "AT", "IT"],
      },
      metadata: {
        customer_name: customer.fullName || "",
        customer_email: customer.email || "",
        customer_phone: customer.phone || "",
        customer_note: customer.note || "",
        shipping_street: customer.street || "",
        shipping_zip: customer.zip || "",
        shipping_city: customer.city || "",
        shipping_country: customer.country || "",
      },
    });

    return NextResponse.json({ id: session.id, url: session.url });
  } catch (err: any) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "Fehler beim Erstellen der Checkout-Session." },
      { status: 500 }
    );
  }
}
