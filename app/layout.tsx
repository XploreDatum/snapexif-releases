import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SnapExif — EXIF, beautifully.",
  description:
    "Batch-watermark photos with magazine-style camera frames. Six editorial layouts, 40+ camera brands, native resolution, EXIF preserved. Mac-native.",
  openGraph: {
    title: "SnapExif — EXIF, beautifully.",
    description:
      "Batch-watermark photos with magazine-style camera frames. Native resolution, EXIF preserved.",
    images: ["/screenshot-light.png"],
  },
  icons: { icon: "/snapexif-logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
