import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const SITE_URL = "https://snapexif.com";
const TITLE = "SnapExif — EXIF, beautifully.";
const DESCRIPTION =
  "Batch-watermark photos with magazine-style camera frames. Six editorial layouts, 40+ camera brands, full native resolution. Mac-native. $19, one-time.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s · SnapExif" },
  description: DESCRIPTION,
  applicationName: "SnapExif",
  keywords: [
    "photo watermark",
    "camera frame",
    "EXIF watermark",
    "batch watermark",
    "Mac app",
    "macOS photo tool",
    "Leica frame",
    "Polaroid frame",
    "photo metadata",
    "camera badge",
  ],
  authors: [{ name: "Xploredatum", url: SITE_URL }],
  creator: "Xploredatum",
  publisher: "Xploredatum",
  category: "photography",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "SnapExif",
    images: [
      {
        url: "/screenshot-dark.png",
        width: 2400,
        height: 1500,
        alt: "SnapExif app — batch-watermark photos with editorial EXIF frames",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/screenshot-dark.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/icon-180.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.webmanifest",
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0c" },
    { media: "(prefers-color-scheme: light)", color: "#f6f3ec" },
  ],
};

const SOFTWARE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SnapExif",
  applicationCategory: "PhotoApplication",
  operatingSystem: "macOS 13+",
  description: DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/screenshot-dark.png`,
  offers: {
    "@type": "Offer",
    price: "19.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: SITE_URL,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "1",
    bestRating: "5",
  },
  publisher: {
    "@type": "Organization",
    name: "Xploredatum",
    url: SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_JSONLD) }}
        />
      </head>
      <body style={{ fontFamily: "var(--font-geist-sans)" }}>{children}</body>
    </html>
  );
}
