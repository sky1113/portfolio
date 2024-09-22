import type { Metadata } from "next";
import {Cormorant_Garamond, Cabin} from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const cabin = Cabin({
  subsets: ['latin'],
  variable: '--font-cabin',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Skylar | Personal Portfolio",
  description: "Skylar Rearick is a full-stack developer looking for entry-level positions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} ${cabin.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
