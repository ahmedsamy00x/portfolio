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
  // Fraunces and Manrope are variable upstream; these are static instances
  // pinned with fontTools (Fraunces at wght 500 / opsz 120 / SOFT 30 / WONK 1,
  // matching --serif-variation in globals.css). Satori cannot resolve axes.
  const [fraunces, manrope, dmMono] = await Promise.all([
    font("Fraunces-Display500.ttf"),
    font("Manrope-Regular.ttf"),
    font("DMMono-Medium.ttf"),
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
          fontFamily: "Manrope",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "DMMono",
            fontSize: 20,
            letterSpacing: "0.14em",
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
              fontFamily: "Fraunces",
              fontSize: 176,
              lineHeight: 1,
              letterSpacing: "-0.026em",
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
        { name: "Fraunces", data: fraunces, style: "normal", weight: 500 as const },
        { name: "Manrope", data: manrope, style: "normal", weight: 400 as const },
        { name: "DMMono", data: dmMono, style: "normal", weight: 500 as const },
      ],
    }
  );
}
