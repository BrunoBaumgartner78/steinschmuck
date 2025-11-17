// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(circle at 0% 0%, #FBBF77 0, transparent 55%), radial-gradient(circle at 100% 100%, #C57A3B 0, #111827 65%)",
          color: "#F9FAFB",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            opacity: 0.85,
          }}
        >
          Steinschmuck Baumgartner Schweiz
        </div>

        <div style={{ maxWidth: "720px" }}>
          <h1 style={{ fontSize: 64, lineHeight: 1.05, fontWeight: 600, marginBottom: 18 }}>
            Handgefertigter Steinschmuck aus Pakistan,
            <br />
            importiert in die Schweiz.
          </h1>
          <p style={{ fontSize: 26, opacity: 0.9 }}>
            Ketten, Anhänger und Ringe aus 925 Silber mit Natursteinen –
            ruhige, zeitlose Stücke in kleinen Serien.
          </p>
        </div>

        <div style={{ fontSize: 22, opacity: 0.9 }}>
          beryll.ch · Feiner Silberschmuck mit Seele
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
