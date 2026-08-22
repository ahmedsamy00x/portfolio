import type { Metadata } from "next";
import { Bodoni_Moda, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";

// Variable cut: dropping the fixed weight list keeps the full wght range, and
// requesting opsz lets the masthead use Bodoni's display drawing rather than a
// text-size cut scaled up to 96px.
const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      className={`${bodoniModa.variable} ${geist.variable} ${geistMono.variable}`}
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
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
