"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const galleryImages = [
  {
    src: "/images/musica.jpg",
    alt: "Niños tocando flauta en clase de música",
    title: "Música",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/arte.jpg",
    alt: "Niños pintando con acuarelas",
    title: "Arte",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/cuento.jpg",
    alt: "Maestra contando un cuento",
    title: "Cuentos",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/naturaleza.jpg",
    alt: "Actividades en la naturaleza",
    title: "Naturaleza",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    src: "/images/comunidad.jpg",
    alt: "Comunidad Waldorf Pacífico",
    title: "Comunidad",
    span: "md:col-span-2 md:row-span-1",
  },
];

export default function Gallery() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="galeria"
      ref={ref}
      className="relative py-24 md:py-32 bg-bg-cream overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-waldorf-yellow/10 text-waldorf-orange text-xs font-medium tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-waldorf-yellow" />
            Nuestra vida escolar
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-primary tracking-tight leading-tight mb-6">
            Momentos de <span className="text-waldorf-orange">aprendizaje</span> y{" "}
            <span className="text-waldorf-yellow">alegría</span>
          </h2>

          <p className="text-lg text-text-secondary leading-relaxed">
            En Waldorf Pacífico cada día es una oportunidad para descubrir, crear y
            conectar con el mundo que nos rodea.
          </p>
        </div>

        {/* Gallery Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.title}
              className={`group relative overflow-hidden rounded-2xl ${image.span} ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div
                className={`relative ${
                  image.span.includes("row-span-2") ? "aspect-[3/4]" : "aspect-[4/3]"
                } md:aspect-auto md:h-full md:min-h-[200px]`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-text-primary">
                    {image.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div
          className={`mt-12 transition-all duration-700 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-organic-lg bg-white p-2">
            <div className="rounded-xl overflow-hidden">
              <video
                className="w-full aspect-video object-cover"
                poster="/images/arte.jpg"
                controls
                preload="metadata"
              >
                <source src="/images/tejer.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg pointer-events-none">
              <span className="text-sm font-medium text-text-primary">
                Tejiendo con amor
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
