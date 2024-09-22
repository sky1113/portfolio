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
  description: "Skylar Rearick is a full-stack developer looking for entry-level positions in the Greater Seattle area.",
  icons: {
    icon: 'favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} ${cabin.variable} bg-white text-black relative`}
      >
        <div className="blob-1 absolute top-[-10%] left-[20%] w-[45vw] h-[45vh] rounded-full blur-[12rem] bg-[#DEE2FF]"></div>
        <div className="blob-2 absolute top-[60%] right-[-5%] w-[40vw] h-[40vh] rounded-full blur-[12rem] bg-[#B8E1E7]"></div>
        <div className="blob-3 absolute top-[80%] left-[-5%] w-[43vw] h-[34.5vh] rounded-full blur-[12rem] bg-[#A5EFCC]"></div>
        {children}
      </body>
    </html>
  );
}
