import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import BackgroundBlobs from "@/src/components/BackgroundBlobs";
import Header from "@/src/components/Header";
import { Cormorant_Garamond, Cabin } from "next/font/google";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cabin = Cabin({
  subsets: ["latin"],
  variable: "--font-cabin",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Skylar | Personal Portfolio",
  description:
    "Skylar Rearick is a full-stack developer looking for entry-level positions in the Greater Seattle area.",
  icons: {
    icon: "favicon.ico",
  },
};

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cabin.variable} ${cormorantGaramond.variable}`}
    >
      <body className="bg-white text-black">
        <BackgroundBlobs />
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
