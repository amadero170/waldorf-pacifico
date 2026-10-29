import type { Metadata } from "next";
import { photo, SITE } from "../_lib/site";
import { PageHero } from "../_components/PageHero";
import { Reveal } from "../_components/Reveal";
import { Gallery } from "../_components/Gallery";
import { Eyebrow, Heading, Photo, VisitButton } from "../_components/ui";
import { VisitCTA } from "../_components/VisitCTA";

export const metadata: Metadata = {
  title: "Jardín de niños",
  description: "Jardín de niños Waldorf en Bahía de Banderas: juego libre, ritmo, cuentos y naturaleza. El primero de la Bahía, desde 2011.",
};

// Texto provisional: pendiente de revisión por la escuela
const PILARES = [
  {
    title: "Juego libre",
    text: "El juego es el trabajo del niño pequeño. Con materiales naturales y sencillos, su imaginación crea mundos enteros.",
    color: "bg-wp-sun",
  },
  {
    title: "Ritmo",
    text: "Cada día, cada semana y cada estación tienen su ritmo. La repetición da seguridad y confianza.",
    color: "bg-wp-sage",
  },
  {
    title: "Cuentos y rondas",
    text: "Narraciones, canciones y juegos de dedos que nutren el lenguaje, la memoria y el mundo interior.",
    color: "bg-wp-rose",
  },
  {
    title: "Naturaleza",
    text: "Tierra, agua, sol y huerto. El jardín es nuestro salón más grande y el lugar favorito para aprender.",
    color: "bg-wp-sky",
  },
  {
    title: "Arte y manos",
    text: "Acuarela, modelado, pan y tejido con los dedos: la voluntad se forma a través del hacer.",
    color: "bg-wp-peach",
  },
  {
    title: "Imitación",
    text: "El niño aprende de lo que ve. Por eso las maestras cuidan cada gesto, cada palabra y cada tarea cotidiana.",
    color: "bg-wp-lavender",
  },
];

const DIA = [
  { time: "Llegada", text: "Recibimiento con calma y juego libre en el jardín." },
  { time: "Ronda", text: "Canciones, versos y movimiento en círculo." },
  { time: "Actividad del día", text: "Acuarela, modelado, pan, huerto o manualidades según el día." },
  { time: "Refrigerio", text: "Compartimos la mesa con gratitud." },
  { time: "Juego en la naturaleza", text: "Tierra, agua, columpios y árboles." },
  { time: "Cuento", text: "Cerramos la jornada con un relato." },
];

// Solo fotos confirmadas del plantel del jardín (Bucerías)
const FOTOS = [
  { src: photo("pascua-busqueda-huevos-canasta"), alt: "Niño del jardín buscando huevos de Pascua con su canasta" },
  { src: photo("ninos-pintando-manta-atomizador"), alt: "Niños del jardín pintando una manta con atomizadores" },
  { src: photo("nina-pintando-manta-mural"), alt: "Niña del jardín pintando una manta grande" },
  { src: photo("taller-padres-ronda-movimiento"), alt: "Madres y padres del jardín en una actividad en ronda" },
];

export default function JardinPage() {
  return (
    <>
      <PageHero
        eyebrow="Jardín de niños"
        title="Un segundo hogar para crecer jugando"
        wash="sage"
        intro={
          <>
            <p>
              Desde {SITE.founded} somos el primer Jardín de Niños Waldorf de la Bahía. Un espacio cálido, rítmico y
              seguro donde los más pequeños juegan, imitan, imaginan y se encuentran con la naturaleza.
            </p>
            <p className="wp-hand mt-4 text-lg text-wp-sage-deep">[Edades: de 3 a 6 años, por confirmar]</p>
          </>
        }
        photos={[
          { src: photo("pascua-busqueda-huevos-canasta"), alt: "Niño del jardín buscando huevos de Pascua" },
          { src: photo("ninos-pintando-manta-atomizador"), alt: "Niños del jardín pintando una manta" },
        ]}
      />

      {/* Pilares */}
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Cómo acompañamos la primera infancia</Eyebrow>
            <Heading className="mt-3 text-wp-ink">Lo esencial en el jardín</Heading>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PILARES.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 90}>
                <div className="h-full rounded-[1.75rem] border border-wp-line bg-wp-paper p-8">
                  <span className={`block h-3 w-14 rounded-full ${p.color}`} aria-hidden="true" />
                  <h3 className="wp-display mt-5 text-4xl text-wp-ink">{p.title}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-wp-ink-soft">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Un día */}
      <section className="wp-wash-sun px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Inhalar y exhalar</Eyebrow>
            <Heading className="mt-3 text-wp-ink">Un día en el jardín</Heading>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-wp-ink-soft">
              La jornada alterna momentos de concentración y de expansión, como una respiración.
            </p>
            <ol className="relative mt-10 space-y-6 border-l-2 border-dashed border-wp-sun-deep/50 pl-8">
              {DIA.map((d) => (
                <li key={d.time} className="relative">
                  <span className="absolute -left-[2.55rem] top-1.5 h-4 w-4 rounded-full border-4 border-wp-paper bg-wp-sun-deep" aria-hidden="true" />
                  <p className="wp-display text-3xl text-wp-ink">{d.time}</p>
                  <p className="text-lg text-wp-ink-soft">{d.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={100} className="mx-auto w-full max-w-sm">
            <Photo
              src={photo("nina-pintando-manta-mural")}
              alt="Niña del jardín pintando una manta grande"
              sizes="(min-width: 1024px) 30vw, 90vw"
              className="wp-arch aspect-[3/4] shadow-[0_40px_80px_-40px_rgba(46,58,89,0.6)]"
            />
          </Reveal>
        </div>
      </section>

      {/* Galería */}
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="grid items-end gap-8 lg:grid-cols-2">
            <div>
              <Eyebrow>Momentos del jardín</Eyebrow>
              <Heading className="mt-3 text-wp-ink">Pequeños grandes descubrimientos</Heading>
            </div>
            <div className="flex items-center gap-5 lg:justify-end">
              <Photo src={photo("pascua-busqueda-huevos-canasta")} alt="Niño del jardín con su canasta de Pascua" sizes="80px" className="h-20 w-20 shrink-0 rounded-full" />
              <p className="wp-hand max-w-xs text-lg text-wp-ink-soft">¿Quieres ver cómo es una mañana en el jardín? Ven a visitarnos.</p>
            </div>
          </Reveal>
          <div className="mt-12">
            <Gallery items={FOTOS} columns={4} />
          </div>
          <div className="mt-12 text-center">
            <VisitButton>Quiero conocer el jardín</VisitButton>
          </div>
        </div>
      </section>

      <VisitCTA />
    </>
  );
}
