import Link from "next/link";
import { BASE, photo, SITE, video } from "./_lib/site";
import { Reveal } from "./_components/Reveal";
import { Eyebrow, Heading, Photo, Squiggle, TextLink, VisitButton } from "./_components/ui";
import { VisitCTA } from "./_components/VisitCTA";
import { ArrowIcon } from "./_components/Icons";
import { AutoVideo } from "./_components/AutoVideo";

const CULTIVAMOS = [
  { label: "Pensamiento claro y consciente", color: "bg-wp-sky" },
  { label: "Ritmo y armonía social", color: "bg-wp-sage" },
  { label: "Sentido artístico", color: "bg-wp-rose" },
  { label: "Amor por el aprendizaje", color: "bg-wp-sun" },
  { label: "Creatividad", color: "bg-wp-peach" },
  { label: "Independencia y confianza en uno mismo", color: "bg-wp-lavender" },
  { label: "Habilidad para resolver problemas", color: "bg-wp-sky" },
  { label: "Resiliencia", color: "bg-wp-sage" },
  { label: "Autodisciplina", color: "bg-wp-rose" },
  { label: "Conciencia ecológica", color: "bg-wp-sun" },
];

const VIDA = [
  { title: "Festividades", text: "San Micael y el dragón, la Ceremonia de las Rosas, Adviento: cada estación tiene su fiesta.", src: photo("espiral-adviento-velas"), alt: "Espiral de Adviento con velas bajo la palapa", href: "festividades" },
  { title: "Huerto y milpa", text: "Sembramos, regamos y cosechamos nuestro propio maíz criollo y flor de calabaza.", src: photo("mazorcas-maiz-criollo-colores"), alt: "Mazorcas de maíz criollo de colores cosechadas por los niños", href: "huerto" },
  { title: "Manos que crean", text: "Mientras las manos tejen, pintan y modelan, la mente observa, resuelve y planifica.", src: photo("nina-tejiendo-amarillo"), alt: "Niña tejiendo con estambre amarillo", href: "oficios" },
  { title: "Salidas", text: "Playa, mariposario, rancho, artesanos de la región y hasta paseos en barco.", src: photo("mariposario-nina-mariposa"), alt: "Niña observando una mariposa en el mariposario", href: "salidas" },
];

// Primeras impresiones de una escuela Waldorf, según la introducción del libro
const VISITA = [
  { title: "Belleza en cada rincón", text: "Colores vivos, materiales naturales y espacios que cuida toda la comunidad." },
  { title: "Hecho por los niños", text: "Pinturas, tejidos y cuadernos que cada alumno crea con sus propias manos." },
  { title: "Maestras que conocen a tu hijo", text: "Cada niño es mirado como alguien único, con entusiasmo y compromiso." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="wp-wash-sun relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-10 lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:px-8 lg:pb-28 lg:pt-16">
          <div className="relative z-10">
            <Eyebrow>✨ Inscripciones abiertas</Eyebrow>
            <Heading as="h1" className="mt-4 text-wp-ink">
              ¿Y si tu hijo aprendiera de otra <span className="text-wp-peach-deep">manera</span>?
            </Heading>
            <Squiggle className="mt-6 h-3.5 w-36 text-wp-sun-deep" />
            <p className="mt-7 max-w-lg text-xl leading-relaxed text-wp-ink-soft">
              Aquí las letras cobran vida en los cuentos, los números se descubren con el movimiento y la curiosidad
              se convierte en aprendizaje. Maternal, jardín de niños y primaria Waldorf, rodeados de naturaleza.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <VisitButton />
              <TextLink href={`${BASE}/pedagogia`}>Descubre cómo aprendemos</TextLink>
            </div>
          </div>

          {/* Collage de fotos en arco */}
          <div className="relative mx-auto h-[30rem] w-full max-w-xl sm:h-[36rem]">
            <Photo
              src={photo("grupo-ninos-camino-montanas-flores")}
              alt="Grupo de niños sonriendo en un camino de campo con montañas al fondo"
              priority
              sizes="(min-width: 1024px) 30vw, 60vw"
              className="wp-arch absolute left-[18%] top-0 h-[80%] w-[54%] shadow-[0_40px_80px_-40px_rgba(46,58,89,0.6)]"
            />
            <Photo
              src={photo("nina-corona-flores")}
              alt="Niña sonriente con corona de flores"
              priority
              sizes="(min-width: 1024px) 18vw, 38vw"
              className="wp-arch absolute bottom-0 left-0 h-[52%] w-[36%] border-[6px] border-wp-paper shadow-[0_30px_60px_-30px_rgba(46,58,89,0.6)]"
            />
            <Photo
              src={photo("clase-primaria-palapa-vista-general")}
              alt="Clase de primaria bajo la palapa"
              priority
              sizes="(min-width: 1024px) 18vw, 38vw"
              className="wp-arch absolute bottom-[6%] right-0 h-[50%] w-[36%] border-[6px] border-wp-paper shadow-[0_30px_60px_-30px_rgba(46,58,89,0.6)]"
            />
            <div className="absolute right-[2%] top-[6%] flex h-28 w-28 rotate-[8deg] flex-col items-center justify-center rounded-full bg-wp-sage-deep text-center text-white shadow-lg">
              <span className="wp-hand text-sm leading-none">¡ya son</span>
              <span className="wp-display text-4xl leading-none">{new Date().getFullYear() - SITE.founded}</span>
              <span className="wp-hand px-2 text-[0.7rem] leading-tight">años en la Bahía!</span>
            </div>
          </div>
        </div>
      </section>

      {/* CITA */}
      <section className="bg-wp-ink px-5 py-16 text-center lg:py-20">
        <Reveal className="mx-auto max-w-4xl">
          <p className="wp-display text-4xl text-white sm:text-5xl lg:text-6xl">
            “El niño ha de ser recibido con respeto, educado con amor y, al final, puesto en libertad.”
          </p>
          <p className="wp-hand mt-5 text-xl text-wp-sun">— Rudolf Steiner</p>
        </Reveal>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative order-2 lg:order-1">
            <Photo
              src={photo("grupo-ninos-abrazados-horno-adobe")}
              alt="Grupo de niños abrazados junto al horno de adobe"
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="wp-blob mx-auto aspect-[4/5] max-w-md"
            />
            <div className="absolute -bottom-4 right-2 max-w-[15rem] rotate-[-3deg] rounded-2xl bg-wp-paper p-5 shadow-[0_20px_40px_-20px_rgba(46,58,89,0.45)] sm:right-10">
              <p className="wp-hand text-lg leading-snug text-wp-ink">
                Maestras Waldorf que nunca dejan de formarse, con el apoyo de toda la comunidad.
              </p>
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2" delay={100}>
            <Eyebrow>Más que una escuela, una aldea 🌿</Eyebrow>
            <Heading className="mt-3 text-wp-ink">Aquí educar también es hacer comunidad</Heading>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-wp-ink-soft">
              <p>
                En Waldorf Pacífico las familias no solo dejan a sus hijos en la puerta: celebran las fiestas con
                nosotros, participan en la Escuela para Padres y ponen manos a la obra para que cada rincón luzca bello.
              </p>
              <p>
                En {SITE.founded} abrimos el primer Jardín de Niños Waldorf de la Bahía, de la mano de la comunidad Waldorf
                de México. {new Date().getFullYear() - SITE.founded} años después, acompañamos a los niños desde maternal
                hasta el último año de primaria.
              </p>
            </div>
            <div className="mt-8">
              <TextLink href={`${BASE}/nosotros`}>Conoce nuestra historia</TextLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NIVELES */}
      <section className="wp-wash-lavender px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Cada cosa a su tiempo</Eyebrow>
            <Heading className="mt-3 text-wp-ink">El conocimiento llega en el momento justo</Heading>
            <p className="mt-5 text-lg leading-relaxed text-wp-ink-soft">
              Con profundidad, con significado y con alegría. En el jardín, los niños aprenden jugando e imitando; en la
              primaria, la imaginación se transforma en pensamiento.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {[
              {
                href: `${BASE}/jardin`,
                title: "Jardín de niños",
                stage: "Parece que solo juegan…",
                text: "…pero mientras cantan, pintan y trepan, están formando voluntad, imaginación, paciencia y confianza en sí mismos.",
                src: photo("nina-pintando-manta-mural"),
                alt: "Niña del jardín pintando una manta grande",
                accent: "text-wp-sage-deep",
              },
              {
                href: `${BASE}/primaria`,
                title: "Primaria",
                stage: "Aprender deja de ser una obligación",
                text: "Las letras salen de las historias y los números del ritmo y el arte. Primaria menor (1º a 3º) y mayor (4º a 6º).",
                src: photo("maestra-ninas-pizarron-lectoescritura"),
                alt: "Maestra y niñas escribiendo en el pizarrón",
                accent: "text-wp-sky-deep",
              },
            ].map((card, i) => (
              <Reveal key={card.href} delay={i * 120}>
                <Link
                  href={card.href}
                  className="group block overflow-hidden rounded-[2rem] bg-wp-paper shadow-[0_30px_60px_-35px_rgba(46,58,89,0.45)] transition-transform duration-500 hover:-translate-y-1"
                >
                  <Photo src={card.src} alt={card.alt} sizes="(min-width: 768px) 45vw, 90vw" className="aspect-[16/11]" />
                  <div className="p-8 sm:p-10">
                    <p className="wp-hand text-lg text-wp-ink-soft">{card.stage}</p>
                    <h3 className={`wp-display text-5xl ${card.accent}`}>{card.title}</h3>
                    <p className="mt-3 text-lg leading-relaxed text-wp-ink-soft">{card.text}</p>
                    <span className="mt-6 inline-flex items-center gap-2 font-bold text-wp-ink">
                      Quiero saber más
                      <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <TextLink href={`${BASE}/pedagogia`}>Descubre cómo acompañamos cada etapa</TextLink>
          </Reveal>
        </div>
      </section>

      {/* LO QUE CULTIVAMOS */}
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <Eyebrow>Lo que tu hijo se lleva para toda la vida</Eyebrow>
            <Heading className="mt-3 text-wp-ink">Mucho más que calificaciones</Heading>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-wp-ink-soft">
              El aprendizaje verdadero no siempre se ve de inmediato: crece en silencio, como una semilla bajo la tierra
              antes de florecer. Esto es lo que vemos florecer en nuestros alumnos.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {CULTIVAMOS.map((item) => (
                <li key={item.label} className={`${item.color} rounded-full px-4 py-2 font-semibold text-wp-ink`}>
                  {item.label}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="grid grid-cols-2 gap-4">
            <Photo src={photo("nina-geometria-hilo-estrella")} alt="Niña haciendo geometría con hilo" sizes="(min-width: 1024px) 25vw, 45vw" className="aspect-[3/4] rounded-[2rem]" />
            <div className="mt-12 space-y-4">
              <Photo src={photo("pizarron-san-miguel-dragon")} alt="Dibujo de pizarrón de San Miguel y el dragón" sizes="(min-width: 1024px) 25vw, 45vw" className="aspect-square rounded-[2rem]" />
              <Photo src={photo("ninos-regando-cama-circular")} alt="Niños regando la cama de cultivo circular" sizes="(min-width: 1024px) 25vw, 45vw" className="aspect-[4/3] rounded-[2rem]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* VIDA ESCOLAR */}
      <section className="wp-wash-sage px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Eyebrow>Así se vive la aldea</Eyebrow>
              <Heading className="mt-3 text-wp-ink">Días llenos de asombro</Heading>
            </div>
            <TextLink href={`${BASE}/vida-escolar`}>Ver todas las fotos</TextLink>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VIDA.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <Link href={`${BASE}/vida-escolar#${item.href}`} className="group block">
                  <Photo src={item.src} alt={item.alt} sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw" className="wp-arch aspect-[3/4] transition-transform duration-500 group-hover:-translate-y-1" />
                  <h3 className="wp-display mt-5 text-4xl text-wp-ink">{item.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-wp-ink-soft">{item.text}</p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 overflow-hidden rounded-[2rem] bg-wp-ink shadow-[0_30px_60px_-35px_rgba(46,58,89,0.6)]">
            <div className="grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:p-14">
              <div className="lg:pr-6">
                <p className="wp-hand text-xl text-wp-sun">¡Ser niños! 🌿</p>
                <p className="wp-display mt-2 text-5xl text-white sm:text-6xl">El jardín es nuestro salón más grande</p>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-white/75">
                  Trepar, correr, jugar con tierra y sentir el viento fortalece el cuerpo, integra los sentidos y da
                  confianza. Al aire libre, cada niño crece con libertad.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="aspect-[9/16] overflow-hidden rounded-[1.75rem] bg-black/30">
                  <AutoVideo
                    src={video("juego-paracaidas-telas-jardin")}
                    poster="/wp/videos/juego-paracaidas-telas-jardin.jpg"
                    label="Niños jugando con telas de colores en el jardín"
                  />
                </div>
                <div className="mt-10 aspect-[9/16] overflow-hidden rounded-[1.75rem] bg-black/30">
                  <AutoVideo
                    src={video("ceremonia-ronda-blanco-jardin")}
                    poster="/wp/videos/ceremonia-ronda-blanco-jardin.jpg"
                    label="Ronda de niños y familias vestidos de blanco en el jardín"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CUANDO NOS VISITES */}
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>Elegir escuela es una gran decisión</Eyebrow>
            <Heading className="mt-3 text-wp-ink">Lo que vas a sentir en tu primera visita</Heading>
            <p className="mt-5 text-lg leading-relaxed text-wp-ink-soft">
              Tus hijos pasarán aquí buena parte de su infancia. Ven a verlo con tus propios ojos: esto es lo primero que
              nos cuentan las familias.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {VISITA.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="h-full rounded-[1.75rem] border border-wp-line bg-wp-paper p-8 text-center">
                  <span className="wp-display text-6xl text-wp-peach-deep">{i + 1}</span>
                  <h3 className="wp-display mt-2 text-4xl text-wp-ink">{v.title}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-wp-ink-soft">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VisitCTA />
    </>
  );
}
