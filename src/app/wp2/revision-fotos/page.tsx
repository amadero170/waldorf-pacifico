import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { Eyebrow, Heading } from "../_components/ui";
import { PhotoReview, type Guess, type ReviewItem } from "./PhotoReview";

export const metadata: Metadata = {
  title: "Revisión de fotos",
  robots: { index: false, follow: false },
};

// Página interna: no aparece en el menú. Se genera al compilar leyendo el código de /wp2.
export const dynamic = "force-static";

const APP_DIR = path.join(process.cwd(), "src/app/wp2");
const PUBLIC_DIR = path.join(process.cwd(), "public/wp");

const PAGES = [
  { file: "page.tsx", label: "Inicio" },
  { file: "nosotros/page.tsx", label: "Nosotros" },
  { file: "pedagogia/page.tsx", label: "Pedagogía" },
  { file: "jardin/page.tsx", label: "Jardín de niños" },
  { file: "primaria/page.tsx", label: "Primaria" },
  { file: "vida-escolar/page.tsx", label: "Vida escolar" },
  { file: "admisiones/page.tsx", label: "Admisiones" },
  { file: "contacto/page.tsx", label: "Contacto" },
  { file: "_components/VisitCTA.tsx", label: "Todas (llamado a visitar)" },
];

// Clasificación confirmada por la escuela (28 oct 2026). Lo que no aparece aquí está sin clasificar.
const JARDIN = [
  "nina-pintando-manta-mural", "ninos-pintando-manta-atomizador", "pascua-busqueda-huevos-canasta",
  "taller-padres-ronda-movimiento",
];
const PRIMARIA = [
  "arbol-flamboyan-palapa", "cama-cultivo-maiz-bambu-1", "camas-cultivo-vista-general", "caminata-camino-milpa",
  "caminata-campo-montanas", "ceremonia-arco-girasoles-telas", "ceremonia-blanco-abrazo-maestra",
  "ceremonia-ninos-blanco-flores", "ceremonia-tunel-telas", "clase-primaria-dibujo-crayones-maestra",
  "clase-primaria-palapa-vista-general", "cosecha-maiz-criollo-canasta-1", "dibujo-formas-canicas-nina-1",
  "dibujo-formas-canicas-nina-3", "dibujo-formas-canicas-nino-2", "espiral-adviento-velas",
  "grupo-ninos-abrazados-horno-adobe", "grupo-ninos-camino-montanas-flores", "maestra-canasta-frutas",
  "maestra-nina-pizarron-lectoescritura", "maestra-ninas-pizarron-lectoescritura", "maestra-ninos-taller-tejido-palapa",
  "maestro-nino-ejercicio-tapete", "mariposario-guia-explicando", "nina-corona-flores", "nina-pintando-acuarela",
  "nina-tejiendo-detalle", "ninas-columpios-vestido-blanco", "ninas-huerto-milpa", "nino-cernido-composta",
  "nino-collar-hojas", "nino-deshojando-maiz", "nino-horno-lena-fuego", "nino-mostrando-tejido", "nino-tejiendo-verde",
  "nino-tina-agua-sonriendo", "ninos-jardin-arco", "ninos-modelando-plastilina", "ninos-regando-cama-circular",
  "ninos-regando-huerto", "yoga-maestra-nino-jardin", "yoga-maestra-nino-palapa", "ceremonia-ronda-blanco-jardin",
  "desgranando-maiz-criollo", "juego-paracaidas-telas-jardin", "nina-tejiendo-agujas", "ninas-jardin-juego",
];
const AMBOS = ["exposicion-tejidos-musica", "nina-tejiendo-bolsa"];
const NO_USAR = ["huaracheria-artesano-taller"];

function guessFor(name: string): Guess {
  if (JARDIN.includes(name)) return "jardin";
  if (PRIMARIA.includes(name)) return "primaria";
  if (AMBOS.includes(name)) return "ambos";
  if (NO_USAR.includes(name)) return "no-usar";
  return "sin-clasificar";
}

function loadItems(): ReviewItem[] {
  const sources = PAGES.map((p) => ({ label: p.label, code: fs.readFileSync(path.join(APP_DIR, p.file), "utf8") }));
  const usedIn = (name: string) =>
    sources.filter((s) => s.code.includes(`"${name}"`) || s.code.includes(`/${name}.`)).map((s) => s.label);

  const fotos = fs
    .readdirSync(path.join(PUBLIC_DIR, "fotos"))
    .filter((f) => f.endsWith(".jpg"))
    .sort()
    .map((f): ReviewItem => {
      const name = f.replace(/\.jpg$/, "");
      return { name, kind: "foto", src: `/wp/fotos/${f}`, usedIn: usedIn(name), guess: guessFor(name) };
    });

  const videos = fs
    .readdirSync(path.join(PUBLIC_DIR, "videos"))
    .filter((f) => f.endsWith(".mp4"))
    .sort()
    .map((f): ReviewItem => {
      const name = f.replace(/\.mp4$/, "");
      return { name, kind: "video", src: `/wp/videos/${name}.jpg`, href: `/wp/videos/${f}`, usedIn: usedIn(name), guess: guessFor(name) };
    });

  return [...fotos, ...videos];
}

export default function RevisionFotosPage() {
  const items = loadItems();
  return (
    <section className="px-5 py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <Eyebrow>Página interna · no aparece en el menú</Eyebrow>
        <Heading as="h1" className="mt-3 text-wp-ink">
          Revisión de fotos
        </Heading>
        <div className="mt-6 max-w-3xl space-y-3 text-lg leading-relaxed text-wp-ink-soft">
          <p>
            Todas las fotos y videos del sitio, con la página de /wp2 donde aparece cada una (se detecta solo, leyendo el
            código). La etiqueta de color es la clasificación que nos confirmaste; las que dicen “Sin clasificar” están pendientes.
          </p>
          <p>
            Marca cada foto como <strong className="text-wp-ink">Jardín</strong>, <strong className="text-wp-ink">Primaria</strong>,{" "}
            <strong className="text-wp-ink">Ambos</strong> o <strong className="text-wp-ink">No usar</strong>. Tus marcas se
            guardan en este navegador. Al terminar, usa <em>Copiar mis respuestas</em> y pégalas en el chat.
          </p>
        </div>
        <PhotoReview items={items} />
      </div>
    </section>
  );
}
