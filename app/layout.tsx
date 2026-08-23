import type { Metadata } from "next";
import { DM_Mono, Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import StickyHeader from "@/components/StickyHeader";

// Variable cut. Dropping the weight list keeps the full 100..900 wght range;
// requesting opsz lets the masthead use Fraunces' display drawing instead of a
// text cut scaled to 96px. SOFT and WONK are the axes that carry the warmth —
// globals.css drives them through --serif-variation.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

// Variable cut: full 200..800 wght range. Manrope has no italic, and nothing in
// the app asks for one — the two italics on the site are both set in Fraunces.
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

// Not a variable font: 300/400/500 only. The eyebrow labels ask for 500.
const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = "https://ahmedsamy.dev";
const TITLE = "Ahmed Samy, Frontend Engineer";
const DESCRIPTION =
  "Frontend engineer building considered web interfaces at Buguard. Selected work, notes, and contact.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  // opengraph-image.tsx supplies the card image for both OG and Twitter.
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: TITLE,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@lowkeylu__",
  },
  authors: [{ name: "Ahmed Samy", url: SITE_URL }],
  creator: "Ahmed Samy",
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ahmed Samy",
  url: SITE_URL,
  jobTitle: "Frontend Engineer",
  email: "mailto:ahmedsamy446x@gmail.com",
  worksFor: { "@type": "Organization", name: "Buguard LLC", url: "https://buguard.io" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Sadat City" },
  address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
  sameAs: [
    "https://github.com/ahmedsamy00x",
    "https://www.linkedin.com/in/ahmedsamyy1",
    "https://x.com/lowkeylu__",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Font variables belong on <html> so :root can alias them. next-themes
    // appends its class to documentElement, so these survive the theme swap.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${manrope.variable} ${dmMono.variable}`}
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          // Static object built above, no user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col bg-background text-foreground">
            <StickyHeader />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
