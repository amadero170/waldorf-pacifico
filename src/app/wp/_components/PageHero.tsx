import type { ReactNode } from "react";
import { Eyebrow, Heading, Photo, Squiggle } from "./ui";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  photos: [{ src: string; alt: string }, { src: string; alt: string }];
  wash?: "lavender" | "sun" | "sage" | "rose";
};

// Encabezado de páginas internas: texto a la izquierda, dos fotos en arco a la derecha
export function PageHero({ eyebrow, title, intro, photos, wash = "lavender" }: PageHeroProps) {
  return (
    <section className={`wp-wash-${wash} overflow-hidden`}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-12 lg:grid-cols-[1.1fr_1fr] lg:px-8 lg:pb-24 lg:pt-16">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading as="h1" className="mt-3 text-wp-ink">
            {title}
          </Heading>
          <Squiggle className="mt-5 h-3 w-32 text-wp-sun-deep" />
          <div className="mt-6 max-w-xl text-lg leading-relaxed text-wp-ink-soft sm:text-xl">{intro}</div>
        </div>
        <div className="relative mx-auto flex w-full max-w-md items-end gap-4 sm:max-w-lg lg:max-w-none">
          <Photo
            src={photos[0].src}
            alt={photos[0].alt}
            priority
            sizes="(min-width: 1024px) 25vw, 45vw"
            className="wp-arch aspect-[3/4] w-[55%] shadow-[0_30px_60px_-30px_rgba(46,58,89,0.5)]"
          />
          <Photo
            src={photos[1].src}
            alt={photos[1].alt}
            priority
            sizes="(min-width: 1024px) 20vw, 40vw"
            className="wp-arch mb-10 aspect-[3/4] w-[45%] shadow-[0_30px_60px_-30px_rgba(46,58,89,0.5)]"
          />
        </div>
      </div>
    </section>
  );
}
