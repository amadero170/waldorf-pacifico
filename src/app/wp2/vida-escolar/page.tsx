import type { Metadata } from "next";
import { photo, video } from "../_lib/site";
import { PageHero } from "../_components/PageHero";
import { Reveal } from "../_components/Reveal";
import { Gallery, type GalleryItem } from "../_components/Gallery";
import { AutoVideo } from "../_components/AutoVideo";
import { Eyebrow, Heading } from "../_components/ui";
import { VisitCTA } from "../_components/VisitCTA";

export const metadata: Metadata = {
  title: "Vida escolar",
  description: "Festividades, huerto y milpa, artes y oficios, salidas y movimiento: así se vive un año en Waldorf Pacífico.",
};

type Seccion = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  wash: string;
  video?: { name: string; label: string };
  fotos: GalleryItem[];
};

const SECCIONES: Seccion[] = [
  {
    id: "festividades",
    eyebrow: "El ritmo del año",
    title: "Festividades",
    text: "Celebramos el paso de las estaciones con fiestas que preparamos juntos, niños, maestras y familias: San Miguel y su valentía, la luz de la espiral de Adviento, el salto de la fogata, la Pascua y los cierres de ciclo.",
    wash: "wp-wash-sun",
    video: { name: "ceremonia-ronda-blanco-jardin", label: "Ronda de niños y familias vestidos de blanco" },
    fotos: [
      { src: photo("pizarron-san-miguel-dragon"), alt: "Dibujo de pizarrón de San Miguel y el dragón" },
      { src: photo("salto-fogata-1"), alt: "Niño saltando la fogata" },
      { src: photo("ceremonia-arco-girasoles-telas"), alt: "Ceremonia con arco de girasoles" },
      { src: photo("san-miguel-pintura-dragon-mesa-estacion"), alt: "Pintura de San Miguel con mesa de estación" },
      { src: photo("pascua-cascarones-maestras"), alt: "Maestras y niñas con cascarones en Pascua" },
      { src: photo("ceremonia-tunel-telas"), alt: "Túnel de telas de colores con las familias" },
      { src: photo("salto-fogata-4"), alt: "Niña saltando la fogata" },
      { src: photo("relato-ronda-san-miguel-palapa"), alt: "Relato en ronda junto a la pintura de San Miguel" },
      { src: photo("ceremonia-blanco-abrazo-maestra"), alt: "Niña vestida de blanco abraza a su maestra" },
    ],
  },
  {
    id: "huerto",
    eyebrow: "Conciencia ecológica",
    title: "Huerto y milpa",
    text: "Construimos camas de cultivo, preparamos composta, sembramos y regamos. Cuando llega la cosecha de maíz criollo, deshojamos y desgranamos juntos. Así los niños conocen las interdependencias de la naturaleza y aprenden a cuidarla.",
    wash: "wp-wash-sage",
    video: { name: "desgranando-maiz-criollo", label: "Niños desgranando maíz criollo" },
    fotos: [
      { src: photo("cosecha-maiz-criollo-canasta-1"), alt: "Cosecha de maíz criollo en canasta" },
      { src: photo("ninas-huerto-milpa"), alt: "Niñas trabajando en la milpa" },
      { src: photo("nino-cernido-composta"), alt: "Niño cerniendo composta" },
      { src: photo("cama-cultivo-maiz-bambu-1"), alt: "Cama de cultivo de bambú con maíz" },
      { src: photo("nino-deshojando-maiz"), alt: "Niño deshojando una mazorca" },
      { src: photo("ninos-regando-huerto"), alt: "Niños regando el huerto" },
      { src: photo("preparando-tierra-cama-circular"), alt: "Preparando la tierra de una cama circular" },
      { src: photo("mazorca-maiz-criollo-mano"), alt: "Mazorca de maíz criollo en la mano" },
    ],
  },
  {
    id: "oficios",
    eyebrow: "Artes y oficios",
    title: "Manos que crean",
    text: "Tejido con agujas, acuarela, modelado, geometría con hilo y dibujo de formas. A través del trabajo con las manos se desarrollan la voluntad, la paciencia, la sensibilidad y la alegría de crear algo propio.",
    wash: "wp-wash-rose",
    video: { name: "nina-tejiendo-agujas", label: "Niña tejiendo con agujas" },
    fotos: [
      { src: photo("nino-mostrando-tejido"), alt: "Niño mostrando su tejido" },
      { src: photo("ninos-pintando-manta-atomizador"), alt: "Niños pintando una manta con atomizadores" },
      { src: photo("nina-tejiendo-detalle"), alt: "Manos de una niña tejiendo" },
      { src: photo("nina-cocodrilo-tejido-exposicion"), alt: "Niña mostrando un cocodrilo tejido" },
      { src: photo("nina-pintando-manta-mural"), alt: "Niña pintando una manta grande" },
      { src: photo("dibujo-formas-canicas-nina-1"), alt: "Dibujo de formas con canicas" },
      { src: photo("nino-tejiendo-morado"), alt: "Niño tejiendo" },
      { src: photo("maestra-ninos-taller-tejido-palapa"), alt: "Maestra con niños en el taller bajo la palapa" },
    ],
  },
  {
    id: "salidas",
    eyebrow: "Conocer nuestro entorno",
    title: "Salidas",
    text: "Salimos a conocer la región: la playa, el mariposario, el rancho donde ordeñamos vacas, el taller de huaraches y artesanos que nos enseñan su oficio. Caminatas entre milpas y montañas que despiertan el asombro.",
    wash: "wp-wash-lavender",
    video: { name: "mariposario-ninos-ronda", label: "Niños en ronda durante la visita al mariposario" },
    fotos: [
      { src: photo("ronda-ninos-playa"), alt: "Ronda de niños tomados de la mano en la playa" },
      { src: photo("rancho-nino-ordenando-vaca"), alt: "Niño ordeñando una vaca en el rancho" },
      { src: photo("mariposario-orugas-monarca"), alt: "Orugas de mariposa monarca" },
      { src: photo("caminata-camino-milpa"), alt: "Caminata por un camino junto a la milpa" },
      { src: photo("paseo-lancha-chalecos"), alt: "Paseo en lancha con chalecos salvavidas" },
      { src: photo("mariposario-guia-explicando"), alt: "Guía del mariposario explicando a los niños" },
      { src: photo("caminata-campo-montanas"), alt: "Caminata en el campo con montañas" },
      { src: photo("rancho-ganado-corral"), alt: "Ganado en el corral del rancho" },
    ],
  },
  {
    id: "movimiento",
    eyebrow: "Apropiación corporal",
    title: "Movimiento y juego",
    text: "Trepar, columpiarse, jugar con aros y telas, hacer yoga bajo la palapa. El movimiento libre y guiado fortalece el cuerpo y prepara el terreno para el aprendizaje.",
    wash: "wp-wash-sun",
    video: { name: "nino-colgado-estructura-madera", label: "Niño trepando en la estructura de madera" },
    fotos: [
      { src: photo("juego-aros-patio-palapa"), alt: "Juego de movimiento con aros en el patio" },
      { src: photo("yoga-maestra-nino-palapa"), alt: "Maestra y niño haciendo yoga bajo la palapa" },
      { src: photo("maestro-nino-ejercicio-tapete"), alt: "Maestro guiando un ejercicio con un niño" },
      { src: photo("ninas-columpios-vestido-blanco"), alt: "Niñas en los columpios" },
    ],
  },
];

export default function VidaEscolarPage() {
  return (
    <>
      <PageHero
        eyebrow="Vida escolar"
        title="Un año lleno de ritmo, juego y asombro"
        wash="rose"
        intro={
          <p>
            Fiestas de las estaciones, huerto, oficios, salidas y mucho juego al aire libre. Así se vive el día a día en
            Waldorf Pacífico.
          </p>
        }
        photos={[
          { src: photo("espiral-adviento-velas"), alt: "Espiral de Adviento con velas bajo la palapa" },
          { src: photo("mazorcas-maiz-criollo-colores"), alt: "Mazorcas de maíz criollo de colores" },
        ]}
      />

      {/* Índice de secciones */}
      <nav aria-label="Secciones" className="sticky top-16 z-30 border-y border-wp-line bg-wp-paper/90 backdrop-blur-md">
        <ul className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 lg:px-8">
          {SECCIONES.map((s) => (
            <li key={s.id} className="shrink-0">
              <a href={`#${s.id}`} className="block rounded-full border border-wp-line px-4 py-1.5 font-semibold text-wp-ink-soft transition-colors hover:border-wp-peach-deep hover:text-wp-peach-deep">
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {SECCIONES.map((s, i) => (
        <section key={s.id} id={s.id} className={`scroll-mt-36 px-5 py-20 lg:px-8 lg:py-24 ${i % 2 === 0 ? "" : s.wash}`}>
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
              <Reveal>
                <Eyebrow>{s.eyebrow}</Eyebrow>
                <Heading className="mt-3 text-wp-ink">{s.title}</Heading>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-wp-ink-soft">{s.text}</p>
              </Reveal>
              {s.video && (
                <Reveal delay={100} className="mx-auto w-full max-w-[15rem] lg:mr-0">
                  <div className="aspect-[9/16] overflow-hidden rounded-[1.75rem] bg-wp-ink shadow-[0_30px_60px_-30px_rgba(46,58,89,0.6)]">
                    <AutoVideo src={video(s.video.name)} poster={`/wp/videos/${s.video.name}.jpg`} label={s.video.label} />
                  </div>
                </Reveal>
              )}
            </div>
            <div className="mt-12">
              <Gallery items={s.fotos} columns={s.fotos.length > 6 ? 3 : 4} />
            </div>
          </div>
        </section>
      ))}

      <VisitCTA />
    </>
  );
}
