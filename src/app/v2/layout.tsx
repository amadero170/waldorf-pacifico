import type { Metadata } from "next";
import { Amatic_SC, Assistant, Patrick_Hand } from "next/font/google";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { WhatsAppFloat } from "./_components/WhatsAppFloat";

// Misma familia tipográfica que Akluum: Amatic SC (títulos), Assistant (texto), Patrick Hand (acentos)
const amatic = Amatic_SC({ variable: "--font-amatic", subsets: ["latin"], weight: ["400", "700"], display: "swap" });
const assistant = Assistant({ variable: "--font-assistant", subsets: ["latin"], display: "swap" });
const patrick = Patrick_Hand({ variable: "--font-patrick", subsets: ["latin"], weight: "400", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"
  ),
  title: {
    default: "Waldorf Pacífico | Maternal, Jardín de niños y Primaria Waldorf en Bucerías",
    template: "%s | Waldorf Pacífico",
  },
  description:
    "15 años educando con amor y respeto en Bahía de Banderas. Maternal, jardín de niños y primaria Waldorf en contacto con la naturaleza. Inscripciones abiertas: agenda tu visita.",
  openGraph: {
    title: "Waldorf Pacífico",
    description: "¿Y si tu hijo aprendiera de otra manera? Maternal, jardín y primaria Waldorf en Bahía de Banderas. Inscripciones abiertas.",
    locale: "es_MX",
    type: "website",
    images: ["/wp/fotos/grupo-ninos-camino-montanas-flores.jpg"],
  },
  // Versión de prueba: no indexar para no duplicar el contenido de la raíz
  robots: { index: false, follow: false },
};

export default function WpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`wp wp-paper min-h-screen ${amatic.variable} ${assistant.variable} ${patrick.variable}`}>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
