import type { Metadata } from "next";
import { photo, SITE } from "../_lib/site";
import { PageHero } from "../_components/PageHero";
import { Reveal } from "../_components/Reveal";
import { Gallery } from "../_components/Gallery";
import { Eyebrow, Heading, Photo } from "../_components/ui";
import { VisitCTA } from "../_components/VisitCTA";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "15 años en la Bahía: conoce la aldea Waldorf Pacífico, su historia, sus maestras y la comunidad de familias que la hace posible.",
};

const CULTIVAMOS = [
  "Pensamiento claro y consciente",
  "Ritmo y armonía social",
  "Sentido artístico",
  "Amor por el aprendizaje",
  "Creatividad",
  "Independencia y confianza en uno mismo",
  "Habilidad para resolver problemas",
  "Resiliencia",
  "Autodisciplina",
  "Conciencia ecológica",
];

// Preguntas que guían a los maestros Waldorf, según la introducción del libro
const PREGUNTAS = [
  "¿Cómo logramos que cada niño alcance su propio nivel de excelencia?",
  "¿Cómo despertamos el entusiasmo por aprender, el interés por los demás y el respeto por el mundo?",
  "¿Cómo ayudamos a cada niño a encontrar sentido en su vida?",
];

const CAMPUS = [
  { src: photo("jardin-arboles-cielo"), alt: "Jardín amplio con árboles y cielo azul" },
  { src: photo("arbol-flamboyan-palapa"), alt: "Flamboyán y palapa en el jardín" },
  { src: photo("juegos-madera-llantas-montanas"), alt: "Juegos de madera y llantas con montañas al fondo" },
  { src: photo("patio-ninos-caminando-palapa"), alt: "Niños caminando por el patio hacia la palapa" },
  { src: photo("nino-horno-lena-fuego"), alt: "Horno de leña encendido" },
  { src: photo("camas-cultivo-vista-general"), alt: "Camas de cultivo del huerto escolar" },
];

const COMUNIDAD = [
  { src: photo("taller-padres-acuarela-grupo"), alt: "Taller de acuarela para madres y padres" },
  { src: photo("taller-adultos-ojo-de-dios"), alt: "Ojo de dios tejido en un taller para adultos" },
  { src: photo("taller-padres-ronda-movimiento"), alt: "Madres y padres en una actividad en ronda" },
  { src: photo("exposicion-tejidos-musica"), alt: "Exposición de tejidos e instrumentos hechos por los niños" },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="🌱 15 años en la Bahía"
        title="Una aldea que crece con tus hijos"
        intro={
          <p>
            Maestras, familias y niños que se encuentran todos los días para aprender, celebrar y cuidar juntos el
            lugar donde crece la infancia.
          </p>
        }
        photos={[
          { src: photo("ceremonia-ninos-blanco-flores"), alt: "Niños vestidos de blanco con flores junto a su maestra" },
          { src: photo("maestra-canasta-frutas"), alt: "Maestra sonriente con una canasta de frutas" },
        ]}
      />

      {/* Historia */}
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Cómo empezó todo</Eyebrow>
            <Heading className="mt-3 text-wp-ink">Fuimos los primeros en la Bahía</Heading>
            <div className="mt-8 flex items-baseline gap-4">
              <span className="wp-display text-8xl text-wp-peach-deep">{SITE.founded}</span>
              <span className="wp-hand text-xl text-wp-ink-soft">septiembre</span>
            </div>
          </Reveal>
          <Reveal delay={100} className="space-y-5 text-lg leading-relaxed text-wp-ink-soft">
            <p>
              Todo comenzó con un sueño: que las familias de la Bahía pudieran vivir la pedagogía Waldorf. En septiembre
              de {SITE.founded} abrimos el primer Jardín de Niños Waldorf de la región, apadrinados y siempre apoyados
              por la comunidad Waldorf de México.
            </p>
            <p>
              Nuestras maestras nunca dejan de aprender: se forman en pedagogía Waldorf año con año, y las familias
              hacen posible ese camino con su apoyo y generosidad.
            </p>
            <p>
              Con los años, la experiencia nos permitió cumplir el sueño que nos acompañaba desde el principio:{" "}
              <strong className="font-semibold text-wp-ink">Primaria del Pacífico</strong>. Hoy acompañamos a los
              niños desde maternal hasta sexto de primaria.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filosofía */}
      <section className="wp-wash-rose px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="grid grid-cols-2 gap-4">
            <Photo src={photo("relato-ronda-pintura-angel")} alt="Maestra narrando un cuento a los niños en ronda" sizes="(min-width: 1024px) 22vw, 45vw" className="wp-arch aspect-[3/4]" />
            <Photo src={photo("ninas-columpios-vestido-blanco")} alt="Niñas en los columpios bajo los árboles" sizes="(min-width: 1024px) 22vw, 45vw" className="wp-arch mt-14 aspect-[3/4]" />
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>Lo que nos mueve</Eyebrow>
            <Heading className="mt-3 text-wp-ink">Tu hijo, al centro de todo</Heading>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-wp-ink-soft">
              <p>
                Aquí nadie tiene prisa por hacer crecer a los niños. Con respeto y en contacto diario con la naturaleza,
                cuidamos que su cuerpo, su mente y sus emociones se desarrollen sanos y a su ritmo.
              </p>
              <p>
                Cada niño es mirado como alguien único, en un entorno seguro donde puede experimentar, equivocarse,
                descubrir y, sobre todo, ser feliz.
              </p>
              <p>
                El resultado: niños con voluntad, corazón y pensamiento en equilibrio, capaces de enfrentar con
                creatividad los retos de la vida y de aportar algo bueno al mundo.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Preguntas que nos guían */}
      <section className="bg-wp-ink px-5 py-20 text-white lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="wp-hand text-xl text-wp-sun">Cada niño es único ✨</p>
            <Heading className="mt-3 text-white">Las preguntas que nos hacemos cada día</Heading>
          </Reveal>
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {PREGUNTAS.map((q, i) => (
              <Reveal as="li" key={q} delay={i * 100}>
                <div className="h-full rounded-[1.75rem] border border-white/15 bg-white/[0.04] p-8">
                  <span className="wp-display text-6xl text-wp-sun">{i + 1}</span>
                  <p className="wp-display mt-3 text-3xl leading-tight">{q}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Por qué Waldorf */}
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <Reveal>
              <Eyebrow>¿Buscas algo distinto?</Eyebrow>
              <Heading className="mt-3 text-wp-ink">No eres la única familia que lo piensa</Heading>
              <p className="mt-6 text-lg leading-relaxed text-wp-ink-soft">
                Cada vez más familias quieren una escuela donde aprender vaya más allá de memorizar: con retos creativos,
                aprendizajes de calidad y niños que disfrutan ir a clases. Eso es lo que construimos aquí todos los días.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="wp-hand text-xl text-wp-ink">Lo que vemos florecer en nuestros alumnos:</p>
              <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {CULTIVAMOS.map((item, i) => (
                  <li key={item} className="flex items-start gap-3 border-b border-wp-line pb-4 text-lg text-wp-ink">
                    <span className="wp-display mt-[-0.15rem] text-3xl text-wp-peach-deep">{String(i + 1).padStart(2, "0")}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Campus */}
      <section className="wp-wash-sage px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <Eyebrow>Nuestros espacios</Eyebrow>
            <Heading className="mt-3 text-wp-ink">Un salón sin paredes</Heading>
            <p className="mt-5 text-lg leading-relaxed text-wp-ink-soft">
              Palapas, jardines enormes, huerto, horno de adobe y juegos de madera, con las montañas de fondo. Aquí los
              niños trepan, siembran y exploran todos los días.
            </p>
          </Reveal>
          <div className="mt-12">
            <Gallery items={CAMPUS} />
          </div>
        </div>
      </section>

      {/* Comunidad */}
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <Eyebrow>Educar también es hacer comunidad</Eyebrow>
            <Heading className="mt-3 text-wp-ink">Aquí las familias también aprenden</Heading>
            <p className="mt-5 text-lg leading-relaxed text-wp-ink-soft">
              Talleres de acuarela, tejido y movimiento, Escuela para Padres con especialistas, jornadas de limpieza y
              fiestas como el Guateque de Día de Muertos. Cuando muchas manos se unen, la comunidad se hace presente.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Gallery items={COMUNIDAD} columns={2} />
          </Reveal>
        </div>
      </section>

      <VisitCTA />
    </>
  );
}
