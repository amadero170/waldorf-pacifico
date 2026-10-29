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

// Texto provisional: pendiente de revisión por la escuela. Enriquecido con el libro Waldorf (ver traduccion-libro.md)
const PILARES = [
  {
    title: "Juego libre",
    text: "En el juego de fantasía el niño representa escenas creadas por él mismo y vive la vida con más profundidad. Juega con madera, telas, conchas, piedras y semillas que él mismo recolecta.",
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
    text: "Hasta los seis o siete años, el niño aprende imitando: no solo palabras y gestos, también actitudes y valores. Por eso las maestras cuidan cada gesto y cada tarea cotidiana.",
    color: "bg-wp-lavender",
  },
];

const DOS_MANERAS = [
  {
    title: "Hacer junto a la maestra",
    text: "La maestra hornea, pinta, cuida el huerto y hace manualidades, y los niños la imitan con naturalidad. El trabajo cambia con las estaciones y las festividades del año.",
    src: photo("ninos-pintando-manta-atomizador"),
    alt: "Niños pequeños pintando una manta con atomizadores",
  },
  {
    title: "Imaginar y jugar",
    text: "Cuentos elegidos con cuidado y mucho tiempo de juego libre nutren la fuerza de imaginación propia de esta edad, que será la base de todo aprendizaje posterior.",
    src: photo("pascua-busqueda-huevos-canasta"),
    alt: "Niño del jardín buscando huevos de Pascua con su canasta",
  },
];

const BASES = [
  "Seguir una secuencia y un orden",
  "Integrar lo que perciben con todos los sentidos",
  "Coordinar el ojo y la mano",
  "Apreciar la belleza del lenguaje",
  "Moverse con equilibrio y ritmo",
];

const EN_CASA = [
  { title: "Un entorno bello", text: "Espacios cuidados y sencillos, con objetos naturales y pocos estímulos." },
  { title: "Ritmo diario", text: "Horarios predecibles y regulares: comer, jugar y dormir a la misma hora da seguridad." },
  { title: "Sentidos despiertos", text: "Oler, probar, tocar texturas, sentir lo tibio y lo fresco, saltar la cuerda, guardar el equilibrio." },
  { title: "Sin sobreestimular", text: "Ruido, pantallas y prisas pueden desequilibrar la vida sensorial del niño pequeño." },
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
          { src: photo("nina-pintando-manta-mural"), alt: "Niña del jardín pintando una manta grande" },
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

      {/* Ambiente de hogar */}
      <section className="wp-wash-rose px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>Un ambiente como el del hogar</Eyebrow>
            <Heading className="mt-3 text-wp-ink">Cálido, bello y predecible</Heading>
            <p className="mt-5 text-lg leading-relaxed text-wp-ink-soft">
              La maestra crea un espacio amoroso y protector, donde las cosas suceden de forma regular. Desde ahí acompaña
              al niño de dos maneras.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {DOS_MANERAS.map((m, i) => (
              <Reveal key={m.title} delay={i * 120}>
                <div className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-wp-paper shadow-[0_30px_60px_-35px_rgba(46,58,89,0.45)] sm:flex-row">
                  <Photo src={m.src} alt={m.alt} sizes="(min-width: 768px) 20vw, 90vw" className="aspect-[4/3] shrink-0 sm:aspect-auto sm:w-2/5" />
                  <div className="p-8">
                    <span className="wp-display text-5xl text-wp-rose-deep">{i + 1}</span>
                    <h3 className="wp-display mt-1 text-4xl text-wp-ink">{m.title}</h3>
                    <p className="mt-3 text-lg leading-relaxed text-wp-ink-soft">{m.text}</p>
                  </div>
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

      {/* Bases para la escuela */}
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Eyebrow>Preparados para la primaria</Eyebrow>
            <Heading className="mt-3 text-wp-ink">Lo que se siembra jugando</Heading>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-wp-ink-soft">
              En el jardín no se adelanta la lectura ni la escritura: se fortalecen las capacidades que después harán
              posible una excelencia académica sana. Lo que el niño vive con su cuerpo y sus sentidos es el cimiento del
              pensar de mañana.
            </p>
            <ul className="mt-8 space-y-3">
              {BASES.map((b) => (
                <li key={b} className="flex gap-3 text-lg text-wp-ink">
                  <svg viewBox="0 0 24 24" className="mt-1 h-5 w-5 shrink-0 text-wp-sage-deep" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100} className="rounded-[2rem] bg-wp-ink p-8 text-white sm:p-10">
            <p className="wp-hand text-xl text-wp-sun">Para las familias</p>
            <p className="wp-display mt-2 text-5xl">El jardín continúa en casa</p>
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              {EN_CASA.map((c) => (
                <div key={c.title}>
                  <dt className="text-lg font-bold text-wp-sun">{c.title}</dt>
                  <dd className="mt-1 leading-relaxed text-white/75">{c.text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Galería */}
      <section className="wp-wash-sage px-5 py-20 lg:px-8 lg:py-28">
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
