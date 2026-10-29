import type { Metadata } from "next";
import { BASE, photo } from "../_lib/site";
import { PageHero } from "../_components/PageHero";
import { Reveal } from "../_components/Reveal";
import { Eyebrow, Heading, Photo, TextLink } from "../_components/ui";
import { VisitCTA } from "../_components/VisitCTA";

export const metadata: Metadata = {
  title: "Pedagogía",
  description:
    "Cómo entiende la pedagogía Waldorf el desarrollo del niño: imitación, imaginación y juicio. Aprender con alegría, con arte y desde el asombro.",
};

// Contenido resumido del libro de introducción a la educación Waldorf (ver traduccion-libro.md)
const VALORES = [
  { label: "Vida familiar y comunitaria", color: "bg-wp-sun" },
  { label: "Un sano desarrollo de la infancia", color: "bg-wp-sage" },
  { label: "Alegría al aprender", color: "bg-wp-rose" },
  { label: "Cuerpo, alma y espíritu en equilibrio", color: "bg-wp-lavender" },
  { label: "Excelencia intelectual, imaginación y memoria", color: "bg-wp-sky" },
  { label: "Capacidad para resolver problemas", color: "bg-wp-peach" },
  { label: "Alternativas a los exámenes de alto impacto", color: "bg-wp-sun" },
  { label: "Uso de pantallas adecuado a cada edad", color: "bg-wp-sage" },
  { label: "Juicio ético y moral", color: "bg-wp-rose" },
  { label: "La belleza del entorno como fuerza formadora", color: "bg-wp-lavender" },
];

const ETAPAS = [
  {
    ages: "0 a 7 años",
    title: "Imitación",
    text: "El niño pequeño está totalmente abierto al mundo. Aprende a ponerse de pie, a hablar y a pensar sin instrucción formal: imitando. No solo copia palabras y gestos, también las actitudes y los valores de quienes lo rodean.",
    level: "Jardín de niños",
    href: `${BASE}/jardin`,
    src: photo("pascua-busqueda-huevos-canasta"),
    alt: "Niño del jardín buscando huevos de Pascua con su canasta",
    color: "text-wp-sage-deep",
    bg: "bg-wp-sage",
  },
  {
    ages: "7 a 14 años",
    title: "Imaginación",
    text: "Con el cambio de dientes nace una vida imaginativa nueva y vívida, y la disposición para el aprendizaje formal. El niño vive el mundo a través de sentimientos finos; aprende mejor con imágenes vivas que con definiciones.",
    level: "Primaria",
    href: `${BASE}/primaria`,
    src: photo("dibujo-formas-canicas-nina-3"),
    alt: "Niña de primaria sonriendo frente a su dibujo de formas",
    color: "text-wp-sky-deep",
    bg: "bg-wp-sky",
  },
  {
    ages: "14 a 21 años",
    title: "Juicio",
    text: "En la adolescencia despiertan la búsqueda de la verdad, el idealismo y el pensamiento crítico. Lo que se sembró con cuidado en las etapas anteriores se convierte en un pensar propio, claro y libre.",
    level: "El horizonte hacia el que educamos",
    src: photo("grupo-ninos-camino-montanas-flores"),
    alt: "Grupo de niños en un camino de campo con montañas al fondo",
    color: "text-wp-lavender-deep",
    bg: "bg-wp-lavender",
  },
];

const MATERIAS = ["Matemáticas", "Gramática", "Carpintería", "Tejido", "Deportes", "Idiomas", "Música", "Teatro"];

export default function PedagogiaPage() {
  return (
    <>
      <PageHero
        eyebrow="Pedagogía Waldorf"
        title="Un plan de estudios que sigue al niño"
        wash="rose"
        intro={
          <p>
            La pedagogía Waldorf, basada en la filosofía de Rudolf Steiner, acompasa lo que se enseña con las etapas del
            desarrollo del niño. Cada contenido llega en el momento en que el niño está listo para recibirlo y le ayuda a
            crecer sano.
          </p>
        }
        photos={[
          { src: photo("relato-ronda-pintura-angel"), alt: "Maestra narrando un cuento a los niños en ronda" },
          { src: photo("pizarron-metamorfosis-mariposa"), alt: "Dibujo de pizarrón sobre la metamorfosis de la mariposa" },
        ]}
      />

      {/* Valores */}
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <Eyebrow>El enfoque Waldorf</Eyebrow>
            <Heading className="mt-3 text-wp-ink">Lo que valoramos</Heading>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-wp-ink-soft">
              Cada escuela Waldorf, a su manera, busca cumplir estos objetivos. Nosotros los vivimos aquí, en la Bahía, con
              nuestra tierra, nuestras palapas y nuestra comunidad.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ul className="flex flex-wrap gap-2.5">
              {VALORES.map((v) => (
                <li key={v.label} className={`${v.color} rounded-full px-4 py-2 font-semibold text-wp-ink`}>
                  {v.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Tres etapas */}
      <section className="wp-wash-lavender px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>Las fases del desarrollo</Eyebrow>
            <Heading className="mt-3 text-wp-ink">Tres etapas, tres maneras de aprender</Heading>
            <p className="mt-5 text-lg leading-relaxed text-wp-ink-soft">
              Steiner pidió a los maestros comprender a fondo cada etapa de la infancia, porque solo así se puede saber qué
              enseñar, cuándo y cómo.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {ETAPAS.map((e, i) => (
              <Reveal key={e.title} delay={i * 110}>
                <article className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-wp-paper shadow-[0_30px_60px_-35px_rgba(46,58,89,0.45)]">
                  <Photo src={e.src} alt={e.alt} sizes="(min-width: 1024px) 30vw, 90vw" className="aspect-[16/10]" />
                  <div className="flex flex-1 flex-col p-8">
                    <span className={`w-fit rounded-full ${e.bg} px-3 py-1 text-sm font-bold text-wp-ink`}>{e.ages}</span>
                    <h3 className={`wp-display mt-4 text-5xl ${e.color}`}>{e.title}</h3>
                    <p className="mt-3 flex-1 text-lg leading-relaxed text-wp-ink-soft">{e.text}</p>
                    {e.href ? (
                      <div className="mt-6">
                        <TextLink href={e.href}>{e.level}</TextLink>
                      </div>
                    ) : (
                      <p className="wp-hand mt-6 text-lg text-wp-ink-soft">{e.level}</p>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Motivación desde dentro */}
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="grid grid-cols-2 gap-4">
            <Photo src={photo("nina-tejiendo-amarillo")} alt="Niña tejiendo con estambre amarillo" sizes="(min-width: 1024px) 22vw, 45vw" className="wp-arch aspect-[3/4]" />
            <Photo src={photo("pizarron-san-miguel-dragon")} alt="Dibujo de pizarrón de San Miguel y el dragón" sizes="(min-width: 1024px) 22vw, 45vw" className="wp-arch mt-14 aspect-[3/4]" />
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>Aprender con alegría</Eyebrow>
            <Heading className="mt-3 text-wp-ink">El maestro enseña como un artista</Heading>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-wp-ink-soft">
              <p>
                Incluso las materias que parecen más áridas se presentan con imágenes, relatos, dibujo y movimiento. Así el
                entusiasmo por aprender nace desde dentro, sin necesidad de competir ni de premios para motivar.
              </p>
              <p>
                No solo se enseñan artes y oficios: todo se enseña de forma artística. Las habilidades académicas se
                construyen poco a poco, con comprensión profunda.
              </p>
            </div>
            <ul className="mt-7 flex flex-wrap gap-2">
              {MATERIAS.map((m) => (
                <li key={m} className="wp-hand rounded-full border border-wp-line px-4 py-1.5 text-lg text-wp-ink">
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Asombro */}
      <section className="bg-wp-ink px-5 py-20 text-white lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <p className="wp-hand text-xl text-wp-sun">Ciencia que empieza con el asombro</p>
            <Heading className="mt-3 text-white">Primero maravillarse, luego comprender</Heading>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              La reverencia y el sentido de asombro son la base de las ciencias en Waldorf. Los niños observan un fenómeno,
              lo describen con sus palabras, lo comentan en grupo y se preguntan una y otra vez: ¿por qué pasó esto? Llegan
              a los conceptos por su propio pensar, y ese hábito los acompaña toda la vida.
            </p>
            <blockquote className="mt-8 border-l-4 border-wp-sun pl-5">
              <p className="wp-display text-4xl text-white">“Siempre debemos empezar haciendo preguntas, no dando respuestas.”</p>
              <footer className="wp-hand mt-2 text-lg text-white/70">— Victor Weisskopf, físico</footer>
            </blockquote>
          </Reveal>
          <Reveal delay={100}>
            <ol className="space-y-4">
              {["Observar con atención", "Describir con precisión", "Conversar en grupo", "Llegar a una conclusión propia"].map((paso, i) => (
                <li key={paso} className="flex items-center gap-5 rounded-[1.5rem] border border-white/15 bg-white/[0.04] px-6 py-5">
                  <span className="wp-display text-5xl text-wp-sun">{i + 1}</span>
                  <span className="text-xl font-semibold">{paso}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Funcional y bello */}
      <section className="wp-wash-sage px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Eyebrow>Un entorno que educa</Eyebrow>
            <Heading className="mt-3 text-wp-ink">Funcional y bello</Heading>
            <p className="mt-6 text-lg leading-relaxed text-wp-ink-soft">
              En una escuela Waldorf todo se piensa con dos criterios: que sea funcional y que sea bello. Desde los muebles
              del salón hasta la forma de recitar un poema, desde el lápiz que usa un niño hasta los juegos del patio. Un
              entorno así cuida y nutre todos los sentidos.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-wp-ink-soft">
              Por eso, cuando nos visites, notarás el cuidado de los espacios, los trabajos de los niños por todas partes y
              los cuadernos que cada uno crea a mano.
            </p>
          </Reveal>
          <Reveal delay={100} className="grid grid-cols-3 gap-3">
            <Photo src={photo("arbol-flamboyan-palapa")} alt="Flamboyán y palapa en el jardín" sizes="(min-width: 1024px) 15vw, 30vw" className="wp-arch col-span-2 row-span-2 aspect-[3/4]" />
            <Photo src={photo("mesa-estacion-frutas-flores")} alt="Mesa de estación con frutas y flores" sizes="(min-width: 1024px) 10vw, 30vw" className="aspect-square rounded-2xl" />
            <Photo src={photo("exposicion-tejidos-musica")} alt="Tejidos e instrumentos hechos por los niños" sizes="(min-width: 1024px) 10vw, 30vw" className="aspect-square rounded-2xl" />
          </Reveal>
        </div>
      </section>

      <VisitCTA />
    </>
  );
}
