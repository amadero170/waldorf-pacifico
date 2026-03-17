"use client";

import { useInView } from "@/hooks/useInView";

export default function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="contacto"
      ref={ref}
      className="relative py-24 md:py-32 bg-waldorf-turquoise overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Floating circles */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full border-2 border-white/20 animate-float" />
      <div className="absolute bottom-20 left-10 w-20 h-20 rounded-full border-2 border-white/10 animate-float" style={{ animationDelay: "1s" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Únete a nuestra comunidad
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-6">
              Nos dará mucho gusto contar con tu familia
            </h2>

            <p className="text-lg text-white/80 leading-relaxed mb-10">
              Agenda una visita para conocer nuestras instalaciones, platicar sobre
              nuestra filosofía educativa y resolver todas tus dudas.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Phone */}
              <a
                href="tel:+523221891238"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Llámanos o escríbenos</p>
                  <p className="text-xl font-medium text-white">322 189 1238</p>
                </div>
                <svg
                  className="w-5 h-5 text-white/60 ml-auto group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/523221891238?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20Waldorf%20Pacífico"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-waldorf-green hover:bg-waldorf-green-dark transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/80 mb-1">Escríbenos por WhatsApp</p>
                  <p className="text-xl font-medium text-white">Enviar mensaje</p>
                </div>
                <svg
                  className="w-5 h-5 text-white/60 ml-auto group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Ubicación</p>
                  <p className="text-lg font-medium text-white">Bahía de Banderas, Nayarit</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dreamcatcher Illustration */}
          <div
            className={`hidden lg:flex items-center justify-center transition-all duration-700 delay-300 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative w-80 h-80 animate-float">
              {/* Dreamcatcher SVG */}
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Outer ring */}
                <circle
                  cx="100"
                  cy="90"
                  r="70"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  opacity="0.9"
                />
                {/* Middle ring */}
                <circle
                  cx="100"
                  cy="90"
                  r="50"
                  fill="none"
                  stroke="#27AE60"
                  strokeWidth="2"
                  opacity="0.8"
                />
                {/* Inner ring */}
                <circle
                  cx="100"
                  cy="90"
                  r="30"
                  fill="none"
                  stroke="#E74C3C"
                  strokeWidth="2"
                  opacity="0.8"
                />
                {/* Center */}
                <circle cx="100" cy="90" r="10" fill="#F5A623" opacity="0.9" />

                {/* Web lines */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                  <line
                    key={angle}
                    x1="100"
                    y1="90"
                    x2={100 + 70 * Math.cos((angle * Math.PI) / 180)}
                    y2={90 + 70 * Math.sin((angle * Math.PI) / 180)}
                    stroke="white"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                ))}

                {/* Feathers */}
                <g transform="translate(70, 160)">
                  <ellipse cx="0" cy="20" rx="8" ry="25" fill="#E74C3C" opacity="0.9" />
                  <line x1="0" y1="0" x2="0" y2="45" stroke="white" strokeWidth="1" />
                </g>
                <g transform="translate(100, 170)">
                  <ellipse cx="0" cy="20" rx="8" ry="25" fill="#F5A623" opacity="0.9" />
                  <line x1="0" y1="0" x2="0" y2="45" stroke="white" strokeWidth="1" />
                </g>
                <g transform="translate(130, 160)">
                  <ellipse cx="0" cy="20" rx="8" ry="25" fill="#27AE60" opacity="0.9" />
                  <line x1="0" y1="0" x2="0" y2="45" stroke="white" strokeWidth="1" />
                </g>

                {/* Beads */}
                <circle cx="70" cy="155" r="4" fill="white" opacity="0.8" />
                <circle cx="100" cy="165" r="4" fill="white" opacity="0.8" />
                <circle cx="130" cy="155" r="4" fill="white" opacity="0.8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
