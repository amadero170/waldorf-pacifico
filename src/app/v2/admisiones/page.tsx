import type { Metadata } from "next";
import { BASE, photo, SITE, waLink } from "../_lib/site";
import { PageHero } from "../_components/PageHero";
import { Reveal } from "../_components/Reveal";
import { Eyebrow, Heading, Photo, TextLink, VisitButton } from "../_components/ui";
import { VisitCTA } from "../_components/VisitCTA";

export const metadata: Metadata = {
  title: "Admisiones",
  description: "Inscripciones abiertas para maternal, jardín de niños y primaria. El primer paso es venir a conocernos: agenda tu visita por WhatsApp.",
};

// Proceso provisional: ajustar con la escuela
const PASOS = [
  {
    title: "Escríbenos",
    text: `Un WhatsApp al ${SITE.phoneDisplay} es todo lo que necesitas. Cuéntanos de tu familia y la edad de tu hija o hijo.`,
    color: "bg-wp-sun",
  },
  {
    title: "Ven a conocernos",
    text: "Recorre los salones, el huerto, las palapas y el jardín. Pregunta todo lo que quieras: para eso estamos.",
    color: "bg-wp-peach",
  },
  {
    title: "Entrevista con la maestra",
    text: "Una conversación tranquila para conocer a tu hija o hijo, su historia y lo que buscan como familia.",
    color: "bg-wp-rose",
  },
  {
    title: "Día de convivencia",
    text: "Tu hija o hijo pasa una mañana con su futuro grupo. Casi siempre salen pidiendo regresar.",
    color: "bg-wp-lavender",
  },
  {
    title: "Inscripción",
    text: "Te compartimos la documentación y las cuotas del ciclo escolar. ¡Bienvenidos a la aldea! 🌿",
    color: "bg-wp-sage",
  },
];

const PREGUNTAS = [
  {
    q: "¿Qué edades reciben?",
    a: "Maternal, jardín de niños y primaria completa: primaria menor (1º a 3º) y primaria mayor (4º a 6º). [Confirmar edades de ingreso a maternal y jardín]",
  },
  {
    q: "¿Cuál es el horario?",
    a: `${SITE.hours}`,
  },
  {
    q: "¿Cuánto cuesta la colegiatura?",
    a: "[Por confirmar] Te compartimos las cuotas vigentes del ciclo escolar durante tu visita o por WhatsApp.",
  },
  {
    q: "¿Tienen validez oficial?",
    a: "[Por confirmar con la escuela]",
  },
  {
    q: "¿Puedo inscribir a mi hija o hijo a mitad del ciclo?",
    a: "[Por confirmar] Escríbenos y revisamos juntos la disponibilidad de lugares en el grupo.",
  },
  {
    q: "¿Cómo participan las familias?",
    a: "¡Mucho! Hay Escuela para Padres con especialistas, talleres, jornadas de comunidad y fiestas como el Guateque de Día de Muertos. Aquí educar también es hacer comunidad.",
  },
];

export default function AdmisionesPage() {
  return (
    <>
      <PageHero
        eyebrow="✨ Inscripciones abiertas"
        title="Tu lugar en la aldea te está esperando"
        wash="sun"
        intro={
          <>
            <p>
              Elegir escuela es una gran decisión, y la mejor forma de tomarla es vivirla. Ven, recorre la escuela, platica
              con las maestras y descubre si Waldorf Pacífico es el lugar para tu familia.
            </p>
            <div className="mt-8">
              <VisitButton />
            </div>
          </>
        }
        photos={[
          { src: photo("maestra-canasta-frutas"), alt: "Maestra sonriente con una canasta de frutas" },
          { src: photo("patio-ninos-caminando-palapa"), alt: "Niños caminando por el patio de la escuela" },
        ]}
      />

      {/* Pasos */}
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Así de fácil</Eyebrow>
            <Heading className="mt-3 text-wp-ink">De tu primer mensaje a tu primer día</Heading>
          </Reveal>
          <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {PASOS.map((paso, i) => (
              <Reveal as="li" key={paso.title} delay={i * 80}>
                <div className="relative h-full rounded-[1.75rem] border border-wp-line bg-wp-paper p-7">
                  <span className={`wp-display flex h-14 w-14 items-center justify-center rounded-full text-4xl text-wp-ink ${paso.color}`}>
                    {i + 1}
                  </span>
                  <h3 className="wp-display mt-5 text-3xl text-wp-ink">{paso.title}</h3>
                  <p className="mt-2 leading-relaxed text-wp-ink-soft">{paso.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Qué verás en tu visita */}
      <section className="wp-wash-sage px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="grid grid-cols-3 gap-3">
            <Photo src={photo("jardin-arboles-cielo")} alt="Jardín de la escuela" sizes="(min-width: 1024px) 15vw, 30vw" className="wp-arch col-span-2 row-span-2 aspect-[3/4]" />
            <Photo src={photo("camas-cultivo-vista-general")} alt="Huerto escolar" sizes="(min-width: 1024px) 10vw, 30vw" className="aspect-square rounded-2xl" />
            <Photo src={photo("ninos-modelando-plastilina")} alt="Niños modelando" sizes="(min-width: 1024px) 10vw, 30vw" className="aspect-square rounded-2xl" />
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>Tu visita 🌿</Eyebrow>
            <Heading className="mt-3 text-wp-ink">Lo que vas a descubrir</Heading>
            <ul className="mt-8 space-y-4 text-lg text-wp-ink">
              {[
                "Los salones de jardín y primaria, y los materiales con los que trabajan los niños",
                "El huerto, la milpa, el horno de adobe y los jardines",
                "Los trabajos de los niños: pinturas, tejidos y cuadernos hechos a mano",
                "A las maestras que acompañan a cada grupo",
                "Cómo es el ritmo de un día y de un año en la escuela",
                "Todo lo que quieras preguntar sobre la pedagogía Waldorf",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <svg viewBox="0 0 24 24" className="mt-1 h-5 w-5 shrink-0 text-wp-sage-deep" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <VisitButton />
              <TextLink href={`${BASE}/vida-escolar`}>Ver la vida escolar</TextLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <Reveal>
            <Eyebrow>¿Tienes dudas?</Eyebrow>
            <Heading className="mt-3 text-wp-ink">Lo que más nos preguntan</Heading>
            <p className="mt-5 text-lg leading-relaxed text-wp-ink-soft">
              Si no encuentras lo que buscas,{" "}
              <a href={waLink("¡Hola! Tengo una pregunta sobre las admisiones en Waldorf Pacífico.")} target="_blank" rel="noopener noreferrer" className="font-bold text-wp-sky-deep underline decoration-wp-sky decoration-2 underline-offset-4">
                escríbenos por WhatsApp
              </a>
              .
            </p>
          </Reveal>
          <Reveal delay={100} className="divide-y divide-wp-line border-y border-wp-line">
            {PREGUNTAS.map((p) => (
              <details key={p.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-semibold text-wp-ink [&::-webkit-details-marker]:hidden">
                  {p.q}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-wp-sun text-xl transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-lg leading-relaxed text-wp-ink-soft">{p.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <VisitCTA />
    </>
  );
}
