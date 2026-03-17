"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const curriculumAxes = [
  {
    title: "Desarrollo Cognitivo",
    description:
      "Aspectos del pensar: racional, imaginativo, inspirativo e intuitivo.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Lenguaje y Comunicación",
    description:
      "Apropiarse del uso correcto, creativo y funcional del lenguaje.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
  {
    title: "Participación Sustentable",
    description:
      "Técnicas de intervención colaborativa en el entorno natural.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
  },
  {
    title: "Apropiación Corporal",
    description: "Comprensión, identificación y cuidado de la propia corporalidad.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Artes y Oficios",
    description:
      "Sensibilidad, empatía y capacidad de acción y transformación.",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
];

export default function Primaria() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="primaria"
      ref={ref}
      className="relative py-24 md:py-32 bg-bg-mint overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 opacity-20">
        <svg viewBox="0 0 100 100" className="w-32 h-32 text-waldorf-green">
          <path
            d="M50 5 Q95 50 50 95 Q5 50 50 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-waldorf-green/10 text-waldorf-green text-xs font-medium tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-waldorf-green" />
            Primaria del Pacífico
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-primary tracking-tight leading-tight mb-6">
            Educación <span className="text-waldorf-green">integral</span> y{" "}
            <span className="text-waldorf-turquoise">orgánica</span>
          </h2>

          <p className="text-lg text-text-secondary leading-relaxed">
            Primaria del Pacífico es un proyecto que se ha venido soñando y gestando desde
            el comienzo de Waldorf Pacífico, donde la madurez y la experiencia nos
            permiten concretar nuestra visión.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image Column */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Main Image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-organic-lg">
              <div className="aspect-[4/3]">
                <Image
                  src="/images/arte.jpg"
                  alt="Niños pintando con acuarelas"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Groups Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-organic">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-waldorf-orange/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-waldorf-orange"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-waldorf-orange uppercase tracking-wide">
                    Primaria Menor
                  </span>
                </div>
                <p className="font-serif text-2xl text-text-primary">1ro, 2do, 3ro</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-organic">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-waldorf-purple/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-waldorf-purple"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-waldorf-purple uppercase tracking-wide">
                    Primaria Mayor
                  </span>
                </div>
                <p className="font-serif text-2xl text-text-primary">4to, 5to, 6to</p>
              </div>
            </div>
          </div>

          {/* Curriculum Column */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <h3 className="font-serif text-2xl text-text-primary mb-2">
              Cinco ejes curriculares
            </h3>
            <p className="text-text-secondary mb-8">
              Integrados de manera amplia y flexible para generar aprendizajes integrales,
              pertinentes y relevantes.
            </p>

            <div className="space-y-4">
              {curriculumAxes.map((axis, index) => (
                <div
                  key={axis.title}
                  className={`group bg-white rounded-xl p-5 shadow-organic hover:shadow-organic-lg transition-all duration-300 hover:-translate-y-0.5 ${
                    isInView ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-waldorf-turquoise/10 to-waldorf-green/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 text-waldorf-turquoise"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={axis.icon} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary mb-1">{axis.title}</h4>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {axis.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
