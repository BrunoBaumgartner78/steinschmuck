// app/api/checkout/create-session/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  console.error("⚠️ STRIPE_SECRET_KEY ist nicht gesetzt!");
}

const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey, {
      // TS meckert sonst wegen sehr engem String-Literal
      apiVersion: "2024-06-20" as Stripe.StripeConfig["apiVersion"],
    })
  : null;

type CheckoutRing = {
  sizeType?: "damen" | "herren";
  size?: string;
};

type CheckoutItem = {
  id: string;
  title: string;
  price: number; // CHF
  quantity: number;
  ring?: CheckoutRing | null;
  category?: string | null;
};

type CheckoutBody = {
  customer?: {
    name: string;
    email: string;
    address: string;
    zip: string;
    city: string;
    country: string;
  };
  items?: CheckoutItem[];
};

export async function POST(req: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json(
        {
          error:
            "Stripe ist serverseitig nicht konfiguriert (STRIPE_SECRET_KEY fehlt).",
        },
        { status: 500 }
      );
    }

    const body = (await req.json()) as CheckoutBody;

    if (!body.items || !Array.isArray(body.items) || body.items.length === 0) {
      return NextResponse.json(
        { error: "Der Warenkorb ist leer oder ungültig." },
        { status: 400 }
      );
    }

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] =
      body.items.map((item) => ({
        price_data: {
          currency: "chf",
          product_data: {
            name: item.title,
            metadata: {
              category: item.category || "",
              ring_size: item.ring?.size || "",
              ring_size_type: item.ring?.sizeType || "",
            },
          },
          unit_amount: Math.round(item.price * 100), // Rappen
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
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout/cancel`,
      allow_promotion_codes: true,
      metadata: {
        customer_name: body.customer?.name ?? "",
        customer_email: body.customer?.email ?? "",
        customer_city: body.customer?.city ?? "",
        customer_country: body.customer?.country ?? "",
      },
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
