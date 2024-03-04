import type { Metadata } from "next";
import "./globals.css";
import {Playfair_Display, Archivo_Black} from "next/font/google"
const playfair = Playfair_Display({
  weight:'700',
  subsets: ['latin'],
  variable: '--font-playfair',
});
const archivo = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo',
})

export const metadata: Metadata = {
  title: "Ethan's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${playfair.variable} h-screen bg-grass-3`}>{children}</body>
    </html>
  );
}
