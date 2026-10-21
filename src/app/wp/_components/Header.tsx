"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BASE, NAV, SITE, waLink } from "../_lib/site";
import { Logo } from "./Logo";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Barra superior, como en Akluum */}
      <div className="bg-wp-ink text-white/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 text-sm lg:px-8">
          <p className="wp-hand hidden text-[0.95rem] sm:block">
            Inscripciones abiertas · Jardín de niños y Primaria
          </p>
          <div className="flex w-full items-center justify-between gap-5 sm:w-auto sm:justify-end">
            <a href={SITE.phoneHref} className="flex items-center gap-1.5 hover:text-white">
              <PhoneIcon className="h-4 w-4" />
              {SITE.phoneDisplay}
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-[background-color,box-shadow,padding] duration-300 ${
          scrolled
            ? "bg-wp-paper/95 py-2 shadow-[0_6px_30px_-12px_rgba(46,58,89,0.25)] backdrop-blur-md"
            : "bg-wp-paper py-4"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
          <Link href={BASE} aria-label="Waldorf Pacífico, inicio">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative rounded-full px-3.5 py-2 text-[0.95rem] font-semibold transition-colors ${
                      active ? "text-wp-peach-deep" : "text-wp-ink hover:text-wp-peach-deep"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <svg
                        viewBox="0 0 60 8"
                        className="absolute -bottom-0.5 left-1/2 h-2 w-10 -translate-x-1/2 text-wp-peach-deep"
                        aria-hidden="true"
                      >
                        <path d="M2 5c9-4 18 2 28-1s18-3 28 1" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                      </svg>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-wp-peach-deep px-5 py-2.5 text-[0.95rem] font-bold text-white shadow-[0_8px_20px_-8px_rgba(200,98,47,0.7)] transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-[#b5542a] active:translate-y-0 lg:block"
          >
            Agenda tu visita
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-wp-line bg-wp-paper lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            <span className="relative block h-3.5 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-wp-ink transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-5 rounded bg-wp-ink transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-3 h-0.5 w-5 rounded bg-wp-ink transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </span>
          </button>
        </nav>

      </header>

      {/* Menú móvil */}
      <div
        className={`fixed inset-0 z-30 lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`wp-wash-lavender absolute inset-0 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`relative flex h-full flex-col justify-center px-8 transition-opacity duration-300 ${open ? "opacity-100" : "invisible opacity-0"}`}
        >
          <ul className="space-y-2">
            {[{ href: BASE, label: "Inicio" }, ...NAV].map((item, i) => (
              <li
                key={item.href}
                className="transition-[opacity,transform] duration-500"
                style={{
                  transitionDelay: open ? `${80 + i * 50}ms` : "0ms",
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateY(16px)",
                }}
              >
                <Link href={item.href} onClick={() => setOpen(false)} className="wp-display block py-1 text-5xl text-wp-ink" tabIndex={open ? 0 : -1}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-wp-peach-deep px-6 py-3.5 font-bold text-white"
          >
            <WhatsAppIcon />
            Agenda tu visita
          </a>
        </div>
      </div>
    </>
  );
}
