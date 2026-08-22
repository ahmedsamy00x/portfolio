import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Ahmed Samy, Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Hex equivalents of the dark-theme oklch tokens in globals.css. Satori does
   not resolve CSS custom properties or oklch(), so the card carries literals.
   If the palette moves, move these with it. */
const INK = "#0a0806";
const PAPER = "#f3f0e9";
const ACCENT = "#ef853b";
const SUBTLE = "#98938c";
const RULE = "#27231f";

export default async function OpengraphImage() {
  // Vendored so the build stays hermetic. Satori has no system fallback, so
  // every family used below has to be registered. All three are OFL licensed.
  const font = (file: string) =>
    readFile(join(process.cwd(), "app/_fonts", file));
  const [bodoni, geist, geistMono] = await Promise.all([
    font("BodoniModa-Display600.ttf"),
    font("Geist-Regular.ttf"),
    font("GeistMono-Medium.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: INK,
          padding: "72px 80px",
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "GeistMono",
            fontSize: 20,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: SUBTLE,
          }}
        >
          <span>Frontend Engineer</span>
          <span>ahmedsamy.dev</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Bodoni",
              fontSize: 150,
              lineHeight: 1,
              letterSpacing: "-0.035em",
              color: PAPER,
            }}
          >
            Ahmed Samy
            <span style={{ color: ACCENT }}>.</span>
          </div>
          <div style={{ display: "flex", height: 1, background: RULE, marginTop: 48 }} />
          <div
            style={{
              display: "flex",
              marginTop: 32,
              fontSize: 30,
              lineHeight: 1.4,
              color: SUBTLE,
              maxWidth: 820,
            }}
          >
            Building considered web interfaces at Buguard. Selected work, notes,
            and contact.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Bodoni", data: bodoni, style: "normal", weight: 600 as const },
        { name: "Geist", data: geist, style: "normal", weight: 400 as const },
        { name: "GeistMono", data: geistMono, style: "normal", weight: 500 as const },
      ],
    }
  );
}
