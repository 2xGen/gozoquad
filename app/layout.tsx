import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Figtree, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { CookieConsent } from "@/components/CookieConsent";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { buildSiteGraph } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const googleSiteVerification =
  process.env.GOOGLE_SITE_VERIFICATION ??
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

const display = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  weight: ["600", "700", "800"],
});

const sans = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "travel",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    url: site.url,
    title: site.title,
    description: site.description,
    images: [
      {
        url: site.ogImage.url,
        width: site.ogImage.width,
        height: site.ogImage.height,
        alt: site.ogImage.alt,
        type: site.ogImage.type,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.ogImage.url],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon", sizes: "180x180" }],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "geo.region": "MT-45",
    "geo.placename": "Gozo",
  },
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#241C14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang={site.language}
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-sand font-sans text-ink">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <JsonLd data={buildSiteGraph()} />
        <Header />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
