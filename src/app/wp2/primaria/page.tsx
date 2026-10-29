import type { Metadata } from "next";
import { photo } from "../_lib/site";
import { PageHero } from "../_components/PageHero";
import { Reveal } from "../_components/Reveal";
import { Gallery } from "../_components/Gallery";
import { Eyebrow, Heading, Photo, VisitButton } from "../_components/ui";
import { VisitCTA } from "../_components/VisitCTA";

export const metadata: Metadata = {
  title: "Primaria",
  description:
    "Primaria del Pacífico, de inspiración Waldorf: primaria menor y mayor, cinco ejes curriculares y una educación que apela al hacer, el sentir y el pensar.",
};

const EJES = [
  {
    title: "Desarrollo cognitivo",
    text: "Desarrollar diversos aspectos del pensar (racional, imaginativo, inspirativo e intuitivo) y capacidades como resolución de problemas, generación y comprobación de hipótesis, establecimiento de criterio, comprensión causa/efecto y conciencia organizacional.",
    color: "text-wp-lavender-deep",
    bg: "bg-wp-lavender",
  },
  {
    title: "Lenguaje y comunicación",
    text: "Apropiarse del uso correcto, creativo y funcional del lenguaje para desarrollar la capacidad de expresión en su mayor potencial.",
    color: "text-wp-rose-deep",
    bg: "bg-wp-rose",
  },
  {
    title: "Apropiación corporal",
    text: "Desarrollar la comprensión, identificación y cuidado de la propia corporalidad.",
    color: "text-wp-sun-deep",
    bg: "bg-wp-sun",
  },
  {
    title: "Artes y oficios",
    text: "Desarrollar sensibilidad, empatía y capacidad de acción y transformación para incidir en el mundo y en el desarrollo propio.",
    color: "text-wp-sky-deep",
    bg: "bg-wp-sky",
  },
  {
    title: "Participación sustentable",
    text: "Conocer técnicas de intervención colaborativa en el entorno natural, fomentar su observación y cuidado conociendo sus interdependencias.",
    color: "text-wp-sage-deep",
    bg: "bg-wp-sage",
  },
];

// Recorrido por grado según el plan de estudios Waldorf (resumen del libro, ver traduccion-libro.md)
const AREAS = {
  relatos: { label: "Relatos", bg: "bg-wp-rose" },
  naturaleza: { label: "Naturaleza", bg: "bg-wp-sage" },
  formas: { label: "Formas y números", bg: "bg-wp-sky" },
} as const;

const GRADOS: { grade: string; moment: string; items: [keyof typeof AREAS, string][] }[] = [
  {
    grade: "1º",
    moment: "Con el cambio de dientes llega la disposición para leer, escribir y contar.",
    items: [
      ["relatos", "Cuentos de hadas de muchos pueblos"],
      ["naturaleza", "La metamorfosis de la mariposa; plantas y minerales que se cuidan en el salón"],
      ["formas", "Comienza el dibujo de formas: líneas en movimiento y figuras en espejo"],
    ],
  },
  {
    grade: "2º",
    moment: "En los animales de las fábulas empieza a ver, con objetividad, los rasgos humanos.",
    items: [
      ["relatos", "Fábulas y leyendas de personajes ejemplares"],
      ["naturaleza", "Observar a los animales: ¿cómo caminan, cómo es su piel, cómo viven?"],
      ["formas", "El dibujo de formas se vuelve más complejo y dinámico"],
    ],
  },
  {
    grade: "3º",
    moment: "El niño se separa del mundo: el árbol especial ya no tiene nombre, ahora es un árbol.",
    items: [
      ["relatos", "Relatos de la Creación y de los primeros pueblos"],
      ["naturaleza", "Agricultura, huerto, construcción de casas, suelos y granos"],
      ["formas", "Medir y pesar: las matemáticas se vuelven prácticas"],
    ],
  },
  {
    grade: "4º",
    moment: "Un umbral: su pulso y su respiración encuentran el ritmo del adulto.",
    items: [
      ["relatos", "Mitología nórdica: otra mirada sobre el origen del mundo"],
      ["naturaleza", "El estudio de los animales"],
      ["formas", "Fracciones y geometría a mano alzada: rosetas, círculos y entrelazados celtas"],
    ],
  },
  {
    grade: "5º",
    moment: "La edad más equilibrada de la infancia: se mueven con armonía y gracia.",
    items: [
      ["relatos", "Culturas antiguas: India, Persia, Mesopotamia, Egipto y Grecia"],
      ["naturaleza", "Botánica: ¿qué se expresa en la planta?"],
      ["formas", "Geometría a mano alzada, cada vez más precisa"],
    ],
  },
  {
    grade: "6º",
    moment: "Llega el estirón y, con él, una nueva sed de verdad y de hechos.",
    items: [
      ["relatos", "Roma y la Edad Media"],
      ["naturaleza", "Mineralogía y física: sonido, luz, calor y magnetismo"],
      ["formas", "Construcciones geométricas con hilo, compás y regla"],
    ],
  },
];

const FOTOS = [
  { src: photo("maestra-nina-pizarron-lectoescritura"), alt: "Maestra y niña escribiendo en el pizarrón" },
  { src: photo("clase-primaria-dibujo-crayones-maestra"), alt: "Clase de dibujo con crayones" },
  { src: photo("dibujo-formas-canicas-nino-2"), alt: "Niño haciendo dibujo de formas" },
  { src: photo("pizarron-enero-2026-mandala"), alt: "Pizarrón con mandala y árbol" },
  { src: photo("taller-tallado-madera-artesano"), alt: "Artesano enseñando tallado en madera a una niña" },
  { src: photo("pizarron-ingles-my-house"), alt: "Pizarrón de la clase de inglés" },
  { src: photo("nino-tejiendo-verde"), alt: "Niño tejiendo con estambre verde" },
  { src: photo("mariposa-canicas-vidrio"), alt: "Mariposa formada con canicas de vidrio" },
];

export default function PrimariaPage() {
  return (
    <>
      <PageHero
        eyebrow="Primaria del Pacífico · Inspiración Waldorf"
        title="Nutrir el intelecto, la creatividad y el corazón"
        wash="lavender"
        intro={
          <p>
            Buscamos velar por el desarrollo integral de los niños. Inspirados en los principios de la pedagogía Waldorf,
            cultivamos la individualidad de cada niño, promoviendo su crecimiento físico, emocional y espiritual.
          </p>
        }
        photos={[
          { src: photo("clase-primaria-palapa-vista-general"), alt: "Clase de primaria bajo la palapa" },
          { src: photo("nina-geometria-hilo-estrella"), alt: "Niña haciendo geometría con hilo" },
        ]}
      />

      {/* Intro */}
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Eyebrow>Un sueño que se hizo realidad</Eyebrow>
            <Heading className="mt-3 text-wp-ink">Desde el respeto y el amor</Heading>
          </Reveal>
          <Reveal delay={100} className="space-y-5 text-lg leading-relaxed text-wp-ink-soft">
            <p>
              Guiados por una comprensión profunda de las necesidades de los niños en cada etapa de su desarrollo,
              nuestro enfoque busca nutrir no solo su intelecto, sino también su creatividad, imaginación y conexión con
              el mundo que les rodea.
            </p>
            <p>
              Enriquecemos la pedagogía con herramientas alternativas que fomentan el desarrollo de habilidades
              múltiples, adaptándonos a los tiempos actuales y educando siempre desde el respeto y el amor.
            </p>
            <p>
              Primaria del Pacífico es un proyecto que se ha venido soñando y gestando desde el comienzo de Waldorf
              Pacífico. Hoy, la madurez y la experiencia nos permiten concretar nuestra visión.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grupos */}
      <section className="wp-wash-sun px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>Grupos</Eyebrow>
            <Heading className="mt-3 text-wp-ink">Aprendemos unos de otros</Heading>
            <p className="mt-5 text-lg leading-relaxed text-wp-ink-soft">
              Proponemos un camino de acompañamiento y guía mutua, en donde unos aprendemos de otros: desde el mayor, que
              es el guía o maestro, hasta los más pequeños que van iniciando la primaria.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {[
              { title: "Primaria menor", grades: "1º · 2º · 3º", src: photo("dibujo-formas-canicas-nina-3"), alt: "Niña sonriendo mientras hace dibujo de formas", accent: "text-wp-rose-deep" },
              { title: "Primaria mayor", grades: "4º · 5º · 6º", src: photo("nina-tejiendo-bolsa"), alt: "Niña tejiendo una bolsa", accent: "text-wp-sky-deep" },
            ].map((g, i) => (
              <Reveal key={g.title} delay={i * 120}>
                <div className="flex h-full items-center gap-6 rounded-[2rem] bg-wp-paper p-6 shadow-[0_30px_60px_-35px_rgba(46,58,89,0.4)] sm:gap-8 sm:p-8">
                  <Photo src={g.src} alt={g.alt} sizes="160px" className="wp-arch aspect-[3/4] w-28 shrink-0 sm:w-36" />
                  <div>
                    <h3 className={`wp-display text-5xl ${g.accent}`}>{g.title}</h3>
                    <p className="wp-hand mt-2 text-2xl text-wp-ink">{g.grades}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto mt-10 max-w-4xl rounded-[2rem] border-2 border-dashed border-wp-sun-deep/40 p-8 text-center sm:p-10">
            <p className="wp-display text-4xl text-wp-ink sm:text-5xl">El maestro, una autoridad amorosa</p>
            <p className="mt-4 text-lg leading-relaxed text-wp-ink-soft">
              Entre el cambio de dientes y la pubertad, los niños necesitan a alguien en quien confiar. En la pedagogía
              Waldorf, el maestro de grupo acompaña a sus alumnos durante varios años, los conoce a fondo y se vuelve el
              “autor” de cada materia: la crea pensando en ese grupo de niños.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Hacer, sentir, pensar */}
      <section className="bg-wp-ink px-5 py-20 text-white lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="wp-hand text-xl text-wp-sun">Nuestra propuesta académica, basada en la antroposofía</p>
            <Heading className="mt-3 text-white">Hacer, sentir y pensar</Heading>
            <p className="mt-6 text-lg leading-relaxed text-white/75">
              Apelamos a los tres cuerpos: físico, anímico y espiritual. Desde este punto de partida, tenemos actividades
              formativas, desarrollo de proyectos y una estructura orgánica que apela al hacer, el sentir y el pensar.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {[
              { word: "Hacer", body: "las manos", color: "text-wp-peach" },
              { word: "Sentir", body: "el corazón", color: "text-wp-rose" },
              { word: "Pensar", body: "la cabeza", color: "text-wp-sky" },
            ].map((item, i) => (
              <Reveal key={item.word} delay={i * 100}>
                <div className="rounded-[1.75rem] border border-white/15 bg-white/[0.04] px-6 py-10 text-center">
                  <p className={`wp-display text-7xl ${item.color}`}>{item.word}</p>
                  <p className="wp-hand mt-2 text-xl text-white/70">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cinco ejes */}
      <section className="wp-wash-lavender px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <Eyebrow>Plan de estudios</Eyebrow>
            <Heading className="mt-3 text-wp-ink">Cinco ejes curriculares</Heading>
            <p className="mt-5 text-lg leading-relaxed text-wp-ink-soft">
              Integrados de manera amplia y flexible para generar aprendizajes integrales, pertinentes y relevantes.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            {EJES.map((eje, i) => (
              <Reveal key={eje.title} delay={(i % 3) * 90} className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}>
                <div className="relative h-full overflow-hidden rounded-[1.75rem] bg-wp-paper p-8">
                  <span className={`absolute -right-8 -top-8 h-28 w-28 rounded-full ${eje.bg} opacity-70`} aria-hidden="true" />
                  <span className={`wp-display relative text-6xl ${eje.color}`}>{i + 1}</span>
                  <h3 className={`wp-display relative mt-3 text-4xl ${eje.color}`}>{eje.title}</h3>
                  <p className="relative mt-3 text-lg leading-relaxed text-wp-ink-soft">{eje.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recorrido 1º a 6º */}
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <Eyebrow>De 1º a 6º</Eyebrow>
              <Heading className="mt-3 text-wp-ink">Un recorrido que acompaña al niño</Heading>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-wp-ink-soft">
                Lo que se enseña en cada grado responde a lo que el niño vive por dentro a esa edad. De los cuentos de hadas
                a las grandes culturas; de la mariposa a la física; del dibujo de formas a la geometría.
              </p>
            </Reveal>
            <Reveal delay={100} className="flex flex-wrap gap-2 lg:justify-end">
              {Object.values(AREAS).map((a) => (
                <span key={a.label} className={`${a.bg} rounded-full px-4 py-1.5 font-semibold text-wp-ink`}>
                  {a.label}
                </span>
              ))}
            </Reveal>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {GRADOS.map((g, i) => (
              <Reveal key={g.grade} delay={(i % 3) * 90}>
                <article className="h-full rounded-[1.75rem] border border-wp-line bg-wp-paper p-7">
                  <div className="flex items-baseline gap-3">
                    <span className="wp-display text-6xl text-wp-peach-deep">{g.grade}</span>
                    <span className="wp-hand text-xl text-wp-ink-soft">grado</span>
                  </div>
                  <p className="wp-hand mt-2 text-lg leading-snug text-wp-ink">{g.moment}</p>
                  <ul className="mt-5 space-y-3">
                    {g.items.map(([area, text]) => (
                      <li key={area} className="flex gap-3 leading-snug text-wp-ink-soft">
                        <span className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ${AREAS[area].bg}`} aria-hidden="true" />
                        <span>
                          <span className="sr-only">{AREAS[area].label}: </span>
                          {text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { src: photo("pizarron-metamorfosis-mariposa"), alt: "Pizarrón con la metamorfosis de la mariposa", caption: "1º · La mariposa" },
              { src: photo("ninas-huerto-milpa"), alt: "Niñas trabajando en la milpa", caption: "3º · El huerto y la milpa" },
              { src: photo("nina-geometria-hilo-estrella"), alt: "Niña haciendo geometría con hilo", caption: "6º · Geometría con hilo" },
            ].map((f) => (
              <figure key={f.src}>
                <Photo src={f.src} alt={f.alt} sizes="(min-width: 640px) 30vw, 90vw" className="aspect-[4/3] rounded-[1.5rem]" />
                <figcaption className="wp-hand mt-2 text-center text-lg text-wp-ink-soft">{f.caption}</figcaption>
              </figure>
            ))}
          </Reveal>
          <p className="mt-8 text-center text-wp-ink-soft">Cada maestra adapta estos contenidos a su grupo y a nuestro entorno.</p>
        </div>
      </section>

      {/* Propuesta de actualidad */}
      <section className="wp-wash-sun px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Photo
              src={photo("maestra-ninas-pizarron-lectoescritura")}
              alt="Maestra acompañando a dos niñas en el pizarrón"
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="wp-blob mx-auto aspect-[4/5] max-w-md"
            />
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>Educación personal y orgánica</Eyebrow>
            <Heading className="mt-3 text-wp-ink">Una propuesta de actualidad</Heading>
            <p className="mt-6 text-lg leading-relaxed text-wp-ink-soft">
              Hemos elaborado una propuesta que responde a las necesidades del mundo y de nuestro entorno local, desde un
              conocimiento completo del ser humano y sus diferentes etapas de desarrollo.
            </p>
            <p className="wp-display mt-8 text-4xl text-wp-peach-deep">
              Nuestro enfoque es la educación personal y orgánica.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Galería */}
      <section className="wp-wash-sage px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <Eyebrow>En el salón</Eyebrow>
            <Heading className="mt-3 text-wp-ink">Pizarrones, cuadernos y manos ocupadas</Heading>
          </Reveal>
          <div className="mt-12">
            <Gallery items={FOTOS} />
          </div>
          <div className="mt-12 text-center">
            <VisitButton>Quiero conocer la primaria</VisitButton>
          </div>
        </div>
      </section>

      <VisitCTA />
    </>
  );
}
