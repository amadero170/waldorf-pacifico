import type { Metadata } from "next";
import { LOCATIONS, photo, SITE, waLink } from "../_lib/site";
import { Reveal } from "../_components/Reveal";
import { ClockIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "../_components/Icons";
import { Eyebrow, Heading, Photo, Squiggle, VisitButton } from "../_components/ui";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Escríbenos por WhatsApp al ${SITE.phoneDisplay} para agendar tu visita a Waldorf Pacífico, en Bahía de Banderas, Nayarit.`,
};

export default function ContactoPage() {
  const datos = [
    { Icon: PhoneIcon, label: "Teléfono", value: SITE.phoneDisplay, href: SITE.phoneHref },
    { Icon: MailIcon, label: "Correo", value: SITE.email, href: `mailto:${SITE.email}` },
    { Icon: InstagramIcon, label: "Instagram", value: SITE.instagramHandle, href: SITE.instagram },
    { Icon: ClockIcon, label: "Horario", value: SITE.hours },
    ...LOCATIONS.map((l) => ({ Icon: PinIcon, label: l.label, value: l.address, href: l.mapsUrl })),
  ];

  return (
    <>
      <section className="wp-wash-sun overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-12 lg:grid-cols-[1.15fr_1fr] lg:px-8 lg:pb-28 lg:pt-16">
          <div>
            <Eyebrow>Contacto</Eyebrow>
            <Heading as="h1" className="mt-3 text-wp-ink">
              Nos encantará conocerte
            </Heading>
            <Squiggle className="mt-5 h-3 w-32 text-wp-sun-deep" />
            <p className="mt-6 max-w-lg text-xl leading-relaxed text-wp-ink-soft">
              La forma más rápida de contactarnos es por WhatsApp. Cuéntanos de tu familia y agendamos una visita para que
              conozcas la escuela.
            </p>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 flex max-w-md items-center gap-5 rounded-[1.75rem] bg-[#25D366] p-5 pr-7 text-white shadow-[0_24px_50px_-24px_rgba(18,140,70,0.8)] transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/20">
                <WhatsAppIcon className="h-9 w-9" />
              </span>
              <span>
                <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-white/85">WhatsApp</span>
                <span className="wp-display block text-5xl leading-none">{SITE.phoneDisplay}</span>
              </span>
            </a>

            <dl className="mt-12 grid gap-6 sm:grid-cols-2">
              {datos.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-wp-paper text-wp-peach-deep shadow-sm">
                    <Icon />
                  </span>
                  <div>
                    <dt className="wp-hand text-lg text-wp-ink-soft">{label}</dt>
                    <dd className="font-semibold text-wp-ink">
                      {href ? (
                        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="hover:text-wp-peach-deep">
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <Reveal className="relative mx-auto w-full max-w-md">
            <Photo
              src={photo("ronda-ninos-playa")}
              alt="Ronda de niños tomados de la mano en la playa"
              priority
              sizes="(min-width: 1024px) 35vw, 90vw"
              className="wp-arch aspect-[3/4] shadow-[0_40px_80px_-40px_rgba(46,58,89,0.6)]"
            />
            <p className="wp-hand absolute -bottom-5 -left-3 rotate-[-4deg] rounded-2xl bg-wp-paper px-5 py-3 text-xl text-wp-ink shadow-lg sm:-left-8">
              ¡Te esperamos!
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mapa */}
      <section className="px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Ubicación</Eyebrow>
              <Heading className="mt-3 text-wp-ink">Cómo llegar</Heading>
            </div>
            <VisitButton>Agenda tu visita</VisitButton>
          </Reveal>
          <div className="grid gap-8 lg:grid-cols-2">
            {LOCATIONS.map((l, i) => (
              <Reveal key={l.label} delay={i * 100} className="h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-wp-line bg-wp-paper">
                  <iframe
                    src={l.embedUrl}
                    title={`Mapa de ${l.label}`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="aspect-[4/3] w-full border-0"
                  />
                  <div className="flex flex-wrap items-start justify-between gap-4 p-6 sm:p-8">
                    <div>
                      <h3 className="wp-display text-4xl text-wp-ink">{l.label}</h3>
                      <p className="mt-1 text-lg text-wp-ink-soft">{l.address}</p>
                    </div>
                    <a
                      href={l.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-wp-line px-4 py-2 font-semibold text-wp-ink transition-colors hover:border-wp-peach-deep hover:text-wp-peach-deep"
                    >
                      <PinIcon className="h-4 w-4" />
                      Abrir en Google Maps
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
