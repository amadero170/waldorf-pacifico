"use client";

import { useInView } from "@/hooks/useInView";

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    title: "Pensar",
    subtitle: "Desarrollo Cognitivo",
    description:
      "Desarrollamos diversos aspectos del pensar: racional, imaginativo, inspirativo e intuitivo. Capacidades como resolución de problemas, generación y comprobación de hipótesis.",
    color: "waldorf-turquoise",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Sentir",
    subtitle: "Artes y Oficios",
    description:
      "Desarrollamos sensibilidad, empatía y capacidad de acción y transformación para incidir en el mundo y en el desarrollo propio a través del arte.",
    color: "waldorf-coral",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
        />
      </svg>
    ),
    title: "Hacer",
    subtitle: "Apropiación Corporal",
    description:
      "Desarrollamos la comprensión, identificación y cuidado de la propia corporalidad a través del movimiento consciente y las actividades manuales.",
    color: "waldorf-green",
  },
];

export default function Philosophy() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="filosofia"
      ref={ref}
      className="relative py-24 md:py-32 gradient-watercolor overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <svg className="absolute top-20 left-10 w-16 h-16 text-waldorf-purple" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        <svg className="absolute bottom-20 right-20 w-24 h-24 text-waldorf-blue-soft" viewBox="0 0 100 100">
          <path d="M50 10 L90 90 L10 90 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 md:mb-20 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-waldorf-purple/10 text-waldorf-purple text-xs font-medium tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-waldorf-purple" />
            Pedagogía Waldorf
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-primary tracking-tight leading-tight mb-6">
            Una educación para el{" "}
            <span className="text-waldorf-purple">ser completo</span>
          </h2>

          <p className="text-lg text-text-secondary leading-relaxed">
            Nuestra propuesta académica, basada en la antroposofía, apela a los 3 cuerpos:
            físico, anímico y espiritual. Desde este punto de partida, tendremos actividades
            formativas, desarrollo de proyectos y una estructura orgánica.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`group transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Card */}
              <div className="relative h-full">
                {/* Outer shell */}
                <div className="absolute inset-0 rounded-[2rem] bg-white/50 p-1.5 shadow-organic group-hover:shadow-organic-lg transition-shadow duration-500">
                  {/* Inner core */}
                  <div className="h-full rounded-[calc(2rem-6px)] bg-white p-8 lg:p-10">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-2xl bg-${pillar.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                    >
                      <div className={`text-${pillar.color}`}>{pillar.icon}</div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <div
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-${pillar.color}/10 text-${pillar.color}`}
                      >
                        {pillar.subtitle}
                      </div>

                      <h3 className="font-serif text-2xl text-text-primary">
                        {pillar.title}
                      </h3>

                      <p className="text-text-secondary leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Decorative line */}
                    <div
                      className={`mt-6 h-1 w-12 rounded-full bg-${pillar.color} group-hover:w-20 transition-all duration-500`}
                    />
                  </div>
                </div>

                {/* Spacer for height */}
                <div className="invisible p-8 lg:p-10">
                  <div className="w-16 h-16 mb-6" />
                  <div className="space-y-3">
                    <div className="h-6" />
                    <div className="h-8" />
                    <p className="leading-relaxed">{pillar.description}</p>
                  </div>
                  <div className="mt-6 h-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional quote */}
        <div
          className={`mt-16 md:mt-20 text-center transition-all duration-700 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <blockquote className="max-w-2xl mx-auto">
            <p className="font-serif text-xl md:text-2xl text-text-primary italic leading-relaxed">
              &ldquo;Ofrecemos una educación humanista, en donde el centro es el niño,
              visto desde una forma objetiva en donde se le permita experimentar, ser
              feliz y sano, en camino hacia la libertad.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
