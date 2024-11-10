import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Archivo_Black } from "next/font/google";

/* IMPORT FONT WEIGHT */
const playfair = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-playfair",
});
const archivo = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo",
});

/* EXPORT METADATA */
export const metadata: Metadata = {
  title: "Ethan's Portfolio",
  description: "A front-end dev portfolio built with love.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/svg/logo.svg" type="image/x-icon" />
      </head>
      <body className={`${archivo.variable} ${playfair.variable} h-screen bg-grass-3`}>{children}</body>
    </html>
  );
}
