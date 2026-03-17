"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/comunidad.jpg"
          alt="Comunidad Waldorf Pacífico"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 opacity-20 animate-float">
        <svg viewBox="0 0 100 100" className="w-full h-full text-waldorf-yellow">
          <path
            d="M50 10 Q70 30 50 50 Q30 70 50 90 Q70 70 50 50 Q30 30 50 10"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-waldorf-green animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-wide">
              Inscripciones abiertas 2025
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className={`font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight mb-6 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Educando con{" "}
            <span className="text-waldorf-yellow">respeto</span>,{" "}
            <span className="text-waldorf-coral">amor</span> y{" "}
            <span className="text-waldorf-green">libertad</span>
          </h1>

          {/* Quote */}
          <blockquote
            className={`text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-xl italic transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            &ldquo;El niño ha de ser recibido con respeto, educado con amor, y al final
            puesto en libertad.&rdquo;
            <cite className="block mt-2 text-sm text-waldorf-yellow not-italic font-medium">
              &mdash; Rudolf Steiner
            </cite>
          </blockquote>

          {/* Description */}
          <p
            className={`text-base md:text-lg text-white/70 leading-relaxed mb-10 max-w-lg transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Somos una comunidad educativa en la Bahía de Banderas, comprometida
            con formar seres humanos equilibrados y libres a través de la
            pedagogía Waldorf.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              href="#contacto"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-waldorf-turquoise text-white rounded-full font-medium text-base hover:bg-waldorf-turquoise-dark transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Agenda una visita</span>
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 group-hover:bg-white/30 group-hover:translate-x-1 transition-all">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>

            <Link
              href="#nosotros"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium text-base border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <span>Conoce más</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/60 text-xs tracking-widest uppercase">
          Descubre
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
