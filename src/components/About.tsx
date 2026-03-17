"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const values = [
  {
    title: "Pensamiento claro",
    description: "Desarrollamos la capacidad de pensar de forma consciente y creativa.",
    color: "bg-waldorf-turquoise",
  },
  {
    title: "Sentido artístico",
    description: "Cultivamos la sensibilidad estética y la expresión creativa.",
    color: "bg-waldorf-coral",
  },
  {
    title: "Amor por aprender",
    description: "Nutrimos la curiosidad natural y el deseo de descubrir.",
    color: "bg-waldorf-green",
  },
  {
    title: "Conciencia ecológica",
    description: "Fomentamos el respeto y conexión con la naturaleza.",
    color: "bg-waldorf-yellow",
  },
];

export default function About() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="nosotros"
      ref={ref}
      className="relative py-24 md:py-32 bg-bg-cream overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-30">
        <svg viewBox="0 0 200 200" className="w-full h-full text-waldorf-orange">
          <path
            d="M20,100 Q60,20 100,100 T180,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="animate-gentle-pulse"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full text-waldorf-green">
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <div
            className={`relative transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Main Image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-organic-lg">
              <div className="aspect-[4/5]">
                <Image
                  src="/images/cuento.jpg"
                  alt="Maestra leyendo un cuento a los niños"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-waldorf-turquoise/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 md:right-auto md:-left-6 bg-white rounded-2xl p-6 shadow-organic-lg max-w-[200px]">
              <div className="text-4xl font-serif font-bold text-waldorf-turquoise">
                2011
              </div>
              <p className="text-sm text-text-secondary mt-1">
                Primer Jardín Waldorf en la Bahía
              </p>
            </div>

            {/* Decorative ring */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-waldorf-yellow/30 rounded-full" />
          </div>

          {/* Content Column */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-waldorf-turquoise/10 text-waldorf-turquoise text-xs font-medium tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-waldorf-turquoise" />
              Nuestra historia
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-primary tracking-tight leading-tight mb-6">
              Una comunidad educativa{" "}
              <span className="text-waldorf-turquoise">con corazón</span>
            </h2>

            <div className="space-y-4 text-text-secondary leading-relaxed mb-10">
              <p>
                <strong className="text-text-primary">Waldorf Pacífico</strong> es una
                comunidad educativa que busca formar seres humanos equilibrados y libres,
                preservando íntegramente los principios educativos de la pedagogía Waldorf.
              </p>
              <p>
                Desde septiembre de 2011, creamos el primer Jardín de Niños Waldorf en la
                Bahía, apadrinados y siempre apoyados por la comunidad Waldorf de México.
              </p>
              <p>
                Nuestro equipo está formado por maestras Waldorf formadas y en formación,
                unidas por la fuerza de una educación humanista y desde el amor.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`group p-4 rounded-xl bg-white shadow-organic hover:shadow-organic-lg transition-all duration-300 hover:-translate-y-1 ${
                    isInView ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div
                    className={`w-8 h-8 rounded-lg ${value.color} flex items-center justify-center mb-3`}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-text-primary text-sm mb-1">
                    {value.title}
                  </h3>
                  <p className="text-xs text-text-light leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
