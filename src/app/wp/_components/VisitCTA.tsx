import { photo, SITE } from "../_lib/site";
import { PhoneIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { Heading, Photo, VisitButton } from "./ui";

// Llamado a visitar la escuela: va al final de todas las páginas
export function VisitCTA() {
  return (
    <section className="px-5 py-20 lg:px-8 lg:py-28">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-wp-ink">
        <div className="grid items-stretch lg:grid-cols-2">
          <div className="relative z-10 px-8 py-14 sm:px-14 lg:py-20">
            <p className="wp-hand text-xl text-wp-sun">La mejor forma de conocernos es vivirlo</p>
            <Heading className="mt-3 text-white">Ven a conocer la escuela</Heading>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/80">
              Recorre los salones, el huerto y las palapas, conversa con las maestras y siente el ritmo de un día
              Waldorf. Agenda tu visita por WhatsApp y te recibimos con gusto.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <VisitButton />
              <a href={SITE.phoneHref} className="flex items-center gap-2 font-semibold text-white/85 hover:text-white">
                <PhoneIcon className="h-5 w-5" />
                {SITE.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="relative min-h-72 lg:min-h-full">
            <Photo
              src={photo("jardin-palapas-horno")}
              alt="Jardín de la escuela con palapas y horno de adobe"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-wp-ink/40 to-transparent lg:bg-gradient-to-r lg:from-wp-ink lg:via-wp-ink/10 lg:to-transparent" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
