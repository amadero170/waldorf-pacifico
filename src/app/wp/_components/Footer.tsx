import Link from "next/link";
import { BASE, isPlaceholder, NAV, SITE, waLink } from "../_lib/site";
import { ClockIcon, FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";
import { Logo } from "./Logo";

export function Footer() {
  const socials = [
    { href: SITE.instagram, label: "Instagram", Icon: InstagramIcon },
    { href: SITE.facebook, label: "Facebook", Icon: FacebookIcon },
  ];

  return (
    <footer className="wp-wash-lavender border-t border-wp-line">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.3fr_1fr_1.2fr] lg:px-8">
        <div>
          <Link href={BASE} aria-label="Waldorf Pacífico, inicio">
            <Logo />
          </Link>
          <p className="wp-hand mt-6 max-w-sm text-xl leading-snug text-wp-ink-soft">
            “El niño ha de ser recibido con respeto, educado con amor y, al final, puesto en libertad.”
          </p>
          <p className="mt-2 text-sm font-semibold text-wp-ink-soft">— Rudolf Steiner</p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={isPlaceholder(href) ? "#" : href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-wp-ink/15 bg-wp-paper text-wp-ink transition-colors hover:border-wp-peach-deep hover:text-wp-peach-deep"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="wp-display text-3xl text-wp-ink">Explora</h3>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-semibold text-wp-ink-soft transition-colors hover:text-wp-peach-deep">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="wp-display text-3xl text-wp-ink">Visítanos</h3>
          <ul className="mt-4 space-y-3.5 text-wp-ink-soft">
            <li>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-semibold hover:text-wp-peach-deep">
                <WhatsAppIcon className="h-5 w-5 shrink-0 text-[#1fa855]" />
                WhatsApp {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={SITE.phoneHref} className="flex items-center gap-3 hover:text-wp-peach-deep">
                <PhoneIcon className="h-5 w-5 shrink-0" />
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MailIcon className="h-5 w-5 shrink-0" />
              {SITE.email}
            </li>
            <li className="flex items-start gap-3">
              <PinIcon className="mt-0.5 h-5 w-5 shrink-0" />
              {SITE.address}
            </li>
            <li className="flex items-center gap-3">
              <ClockIcon className="h-5 w-5 shrink-0" />
              {SITE.hours}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-wp-ink/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-sm text-wp-ink-soft sm:flex-row sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Waldorf Pacífico · Bahía de Banderas, Nayarit</p>
          <p>Primer Jardín de Niños Waldorf de la Bahía, desde {SITE.founded}</p>
        </div>
      </div>
    </footer>
  );
}
