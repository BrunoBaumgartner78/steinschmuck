// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

// Größe für OG-Image
export const size = {
  width: 1200,
  height: 630,
};

// MIME-Typ
export const contentType = "image/png";

// Default-Export ist die "Component" für das OG-Image
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #C57A3B 0%, #FBBF77 35%, #111827 100%)",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
          fontSize: 60,
          fontWeight: 600,
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 60,
            marginBottom: 20,
            textShadow: "0 8px 30px rgba(0,0,0,0.45)",
          }}
        >
          Steinschmuck Baumgartner
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 30,
            opacity: 0.9,
            textShadow: "0 4px 20px rgba(0,0,0,0.35)",
          }}
        >
          Handgefertigter Steinschmuck aus der Schweiz
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    }
  );
}
