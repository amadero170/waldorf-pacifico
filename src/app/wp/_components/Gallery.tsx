"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { PHOTO_DIMS } from "../_lib/photo-dims";

const dims = (src: string) => PHOTO_DIMS[src] ?? [960, 1280];

export type GalleryItem = { src: string; alt: string };

// Galería tipo mosaico con visor a pantalla completa
export function Gallery({ items, columns = 3 }: { items: GalleryItem[]; columns?: 2 | 3 | 4 }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: number) => setIndex((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, step]);

  const cols = { 2: "sm:columns-2", 3: "sm:columns-2 lg:columns-3", 4: "sm:columns-3 lg:columns-4" }[columns];

  return (
    <>
      <div className={`columns-2 gap-3 sm:gap-4 ${cols}`}>
        {items.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative mb-3 block w-full overflow-hidden rounded-2xl bg-wp-line sm:mb-4"
            aria-label={`Ver foto: ${item.alt}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={dims(item.src)[0]}
              height={dims(item.src)[1]}
              sizes="(min-width: 1024px) 30vw, 50vw"
              className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-wp-ink/70 to-transparent p-3 pt-10 text-left text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {item.alt}
            </span>
          </button>
        ))}
      </div>

      {index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={items[index].alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-wp-ink/95 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <figure className="relative flex max-h-full max-w-5xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <Image
              src={items[index].src}
              alt={items[index].alt}
              width={dims(items[index].src)[0]}
              height={dims(items[index].src)[1]}
              sizes="90vw"
              className="max-h-[80vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="wp-hand mt-4 text-center text-lg text-white/90">{items[index].alt}</figcaption>
          </figure>
          <button type="button" onClick={close} className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white hover:bg-white/20" aria-label="Cerrar">
            ×
          </button>
          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20"
                aria-label="Foto anterior"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20"
                aria-label="Foto siguiente"
              >
                ›
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
