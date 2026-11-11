import type { Metadata } from "next";
import { Cinzel, EB_Garamond } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Digital Wing | Portfolio & Archive",
  description: "Curated works and professional provenance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${ebGaramond.variable}`}>
      <body className="bg-[#0e0d0c] text-[#ece7de] font-serif antialiased selection:bg-[#c5a059] selection:text-black">
        {children}
      </body>
    </html>
  );
}