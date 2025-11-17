// app/opengraph-image/route.ts
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #C57A3B 0%, #FBBF77 100%)",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
          fontSize: 60,
          fontWeight: 600,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 60,
            marginBottom: 20,
          }}
        >
          Steinschmuck Baumgartner
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 32,
            opacity: 0.9,
          }}
        >
          Handgefertigter Schmuck aus der Schweiz
        </div>
      </div>
    ),
    size
  );
}
