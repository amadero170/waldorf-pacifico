import type { Metadata } from "next";
import { photo, SITE } from "../_lib/site";
import { PageHero } from "../_components/PageHero";
import { Reveal } from "../_components/Reveal";
import { Gallery } from "../_components/Gallery";
import { Eyebrow, Heading, Photo } from "../_components/ui";
import { VisitCTA } from "../_components/VisitCTA";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Quiénes somos, nuestra historia desde 2011, nuestra filosofía y nuestro campus en Bahía de Banderas.",
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
        eyebrow="Nosotros"
        title="Una comunidad que educa desde el amor"
        intro={
          <p>
            Formamos seres humanos equilibrados y libres, preservando íntegramente los principios educativos de la
            pedagogía Waldorf.
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
            <Eyebrow>Nuestra historia</Eyebrow>
            <Heading className="mt-3 text-wp-ink">El primer Jardín Waldorf de la Bahía</Heading>
            <div className="mt-8 flex items-baseline gap-4">
              <span className="wp-display text-8xl text-wp-peach-deep">{SITE.founded}</span>
              <span className="wp-hand text-xl text-wp-ink-soft">septiembre</span>
            </div>
          </Reveal>
          <Reveal delay={100} className="space-y-5 text-lg leading-relaxed text-wp-ink-soft">
            <p>
              Desde el impulso del mundo espiritual surge, en los fundadores, la necesidad de compartir esta iniciativa
              con todas las familias que se acerquen a conocer la pedagogía. Desde esta forma de educar, creamos el
              primer Jardín de Niños Waldorf en la Bahía en septiembre de {SITE.founded}, apadrinados y siempre apoyados
              por la comunidad Waldorf de México.
            </p>
            <p>
              Nuestro equipo está formado por maestras Waldorf formadas y en formación, unidas por la fuerza de una
              educación humanista y desde el amor.
            </p>
            <p>
              Con los años, la madurez y la experiencia nos permitieron concretar un sueño que nos acompañaba desde el
              comienzo: <strong className="font-semibold text-wp-ink">Primaria del Pacífico</strong>.
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
            <Eyebrow>Nuestra filosofía</Eyebrow>
            <Heading className="mt-3 text-wp-ink">El niño al centro</Heading>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-wp-ink-soft">
              <p>
                Basándonos en el respeto y el contacto con la naturaleza, ofrecemos a los niños las bases para un sano
                desarrollo físico, intelectual y emocional que les permitirá, en un futuro, llegar a ser adultos libres.
              </p>
              <p>
                Ofrecemos una educación humanista en donde el centro es el niño, visto de forma objetiva, en un entorno
                seguro donde se le permita experimentar, ser feliz y sano, en camino hacia la libertad.
              </p>
              <p>
                Una educación centrada en la observación del desarrollo del niño, que le permita hacer emerger sus
                cualidades volitivas, emocionales e intelectuales de forma equilibrada, para responder de manera
                creativa y libre a los retos que se le presenten: niños felices y sanos, capaces de contribuir al
                bienestar de la humanidad.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Por qué Waldorf */}
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <Reveal>
              <Eyebrow>¿Por qué una alternativa?</Eyebrow>
              <Heading className="mt-3 text-wp-ink">Familias que buscan otra forma de educar</Heading>
              <p className="mt-6 text-lg leading-relaxed text-wp-ink-soft">
                Las familias de hoy buscan alternativas pedagógicas para el bienestar de hijos y padres: escuelas que
                trabajen con retos creativos, aseguren procesos educativos de calidad y ayuden al niño a vivir de manera
                feliz y efectiva.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="wp-hand text-xl text-wp-ink">En nuestra comunidad guiamos para lograr:</p>
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
            <Eyebrow>Nuestro campus</Eyebrow>
            <Heading className="mt-3 text-wp-ink">Aprender bajo los árboles</Heading>
            <p className="mt-5 text-lg leading-relaxed text-wp-ink-soft">
              Palapas, jardines amplios, huerto, horno de adobe y juegos de madera, con las montañas de fondo. Un espacio
              pensado para que los niños estén en contacto con la naturaleza todos los días.
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
            <Eyebrow>Las familias también son escuela</Eyebrow>
            <Heading className="mt-3 text-wp-ink">Comunidad y talleres</Heading>
            <p className="mt-5 text-lg leading-relaxed text-wp-ink-soft">
              Madres y padres participan en talleres de acuarela, tejido y movimiento, en reuniones con las maestras y en
              la preparación de las festividades. Educar es un camino que recorremos juntos.
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
