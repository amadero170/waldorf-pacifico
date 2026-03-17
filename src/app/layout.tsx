import type { Metadata } from "next";
import { Outfit, Fraunces } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Waldorf Pacífico | Educación con Amor y Libertad",
  description:
    "Comunidad educativa Waldorf en la Bahía de Banderas. Formamos seres humanos equilibrados y libres a través de la pedagogía Waldorf. Jardín de niños y primaria.",
  keywords: [
    "Waldorf",
    "pedagogía Waldorf",
    "escuela alternativa",
    "educación humanista",
    "Puerto Vallarta",
    "Bahía de Banderas",
    "jardín de niños",
    "primaria",
    "Rudolf Steiner",
  ],
  authors: [{ name: "Waldorf Pacífico" }],
  openGraph: {
    title: "Waldorf Pacífico | Educación con Amor y Libertad",
    description:
      "Comunidad educativa que busca formar seres humanos equilibrados y libres.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${fraunces.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
