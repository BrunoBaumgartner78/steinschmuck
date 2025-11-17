// app/api/checkout/create-session/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY ist nicht gesetzt.");
}

// Wichtig: apiVersion auf den von deiner stripe-Version erlaubten Wert setzen
const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2025-10-29.clover",
});

type CheckoutItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { items, customer } = body as {
      items: CheckoutItem[];
      customer?: { name?: string; email?: string };
    };

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "Warenkorb ist leer." },
        { status: 400 }
      );
    }

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] =
      items.map((item) => ({
        quantity: item.quantity ?? 1,
        price_data: {
          currency: "chf",
          unit_amount: Math.round(item.price * 100), // CHF → Rappen
          product_data: {
            name: item.title,
            metadata: {
              productId: item.id,
            },
          },
        },
      }));

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "http://beryll.ch";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: lineItems,
      customer_email: customer?.email,
      shipping_address_collection: {
        allowed_countries: ["CH", "DE", "AT", "IT", "FR"],
      },
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout/cancel`,
      metadata: {
        customerName: customer?.name || "",
      },
    });

    return NextResponse.json({ id: session.id, url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Fehler beim Erstellen der Stripe-Checkout-Session." },
      { status: 500 }
    );
  }
}
