"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export type Guess = "jardin" | "primaria" | "ambos" | "no-usar" | "sin-clasificar";
type Mark = "jardin" | "primaria" | "ambos" | "no-usar";

export type ReviewItem = {
  name: string;
  kind: "foto" | "video";
  src: string;
  href?: string;
  usedIn: string[];
  guess: Guess;
};

const GUESS: Record<Guess, { label: string; className: string }> = {
  jardin: { label: "Jardín", className: "bg-wp-sage text-wp-ink" },
  primaria: { label: "Primaria", className: "bg-wp-sky text-wp-ink" },
  ambos: { label: "Ambos", className: "bg-wp-sun text-wp-ink" },
  "no-usar": { label: "No usar", className: "bg-wp-ink text-white" },
  "sin-clasificar": { label: "Sin clasificar", className: "bg-wp-rose text-wp-ink" },
};

const MARKS: { value: Mark; label: string; active: string }[] = [
  { value: "jardin", label: "Jardín", active: "bg-wp-sage-deep text-white border-wp-sage-deep" },
  { value: "primaria", label: "Primaria", active: "bg-wp-sky-deep text-white border-wp-sky-deep" },
  { value: "ambos", label: "Ambos", active: "bg-wp-sun-deep text-white border-wp-sun-deep" },
  { value: "no-usar", label: "No usar", active: "bg-wp-ink text-white border-wp-ink" },
];

const FILTERS = [
  { value: "todas", label: "Todas" },
  { value: "jardin", label: "Usadas en Jardín" },
  { value: "primaria", label: "Usadas en Primaria" },
  { value: "conflictos", label: "Cruces" },
  { value: "sin-usar", label: "Sin usar en /wp2" },
  { value: "sin-marcar", label: "Sin marcar" },
] as const;

const STORAGE_KEY = "wp2-revision-fotos";

// Una foto de un nivel usada en la página del otro nivel
function isCrossed(item: ReviewItem, mark?: Mark) {
  const level: string = mark ?? item.guess;
  const inJardin = item.usedIn.includes("Jardín de niños");
  const inPrimaria = item.usedIn.includes("Primaria");
  if (level === "no-usar") return item.usedIn.length > 0;
  return (level === "primaria" && inJardin) || (level === "jardin" && inPrimaria);
}

export function PhotoReview({ items }: { items: ReviewItem[] }) {
  const [marks, setMarks] = useState<Record<string, Mark>>({});
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["value"]>("todas");
  const [copied, setCopied] = useState(false);

  // Se lee después de hidratar para que el HTML estático coincida con el primer render
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) setMarks(JSON.parse(saved));
      } catch {
        // Sin almacenamiento disponible: las marcas solo viven en esta sesión
      }
    });
    return () => cancelAnimationFrame(id);
  }, []);

  const setMark = (name: string, value: Mark) => {
    setMarks((prev) => {
      const next = { ...prev };
      if (next[name] === value) delete next[name];
      else next[name] = value;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const visible = useMemo(() => {
    return items.filter((item) => {
      if (filter === "jardin") return item.usedIn.includes("Jardín de niños");
      if (filter === "primaria") return item.usedIn.includes("Primaria");
      if (filter === "conflictos") return isCrossed(item, marks[item.name]);
      if (filter === "sin-usar") return item.usedIn.length === 0;
      if (filter === "sin-marcar") return !marks[item.name];
      return true;
    });
  }, [items, filter, marks]);

  const copy = async () => {
    const groups = MARKS.map((m) => {
      const names = items.filter((i) => marks[i.name] === m.value).map((i) => i.name);
      return names.length ? `${m.label.toUpperCase()}:\n${names.map((n) => `- ${n}`).join("\n")}` : "";
    }).filter(Boolean);
    const text = groups.length ? groups.join("\n\n") : "No marqué ninguna foto.";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt("Copia este texto:", text);
    }
  };

  const markedCount = Object.keys(marks).length;

  return (
    <div className="mt-10">
      <div className="z-20 -mx-5 sm:sticky sm:top-16 flex flex-wrap items-center gap-3 border-y border-wp-line bg-wp-paper/95 px-5 py-3 backdrop-blur-md lg:-mx-8 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                filter === f.value ? "border-wp-peach-deep bg-wp-peach-deep text-white" : "border-wp-line text-wp-ink-soft hover:border-wp-peach-deep"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-3">
          <span className="text-sm text-wp-ink-soft">
            {markedCount} de {items.length} marcadas
          </span>
          <button type="button" onClick={copy} className="rounded-full bg-wp-ink px-4 py-2 text-sm font-bold text-white hover:bg-wp-ink/85">
            {copied ? "¡Copiado!" : "Copiar mis respuestas"}
          </button>
        </div>
      </div>

      <p className="mt-6 text-wp-ink-soft">
        Mostrando {visible.length} {visible.length === 1 ? "elemento" : "elementos"}.
      </p>

      <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visible.map((item) => {
          const mark = marks[item.name];
          const crossed = isCrossed(item, mark);
          return (
            <li
              key={`${item.kind}-${item.name}`}
              className={`flex flex-col overflow-hidden rounded-2xl border bg-wp-paper ${crossed ? "border-wp-rose-deep ring-2 ring-wp-rose-deep/40" : "border-wp-line"}`}
            >
              <a href={item.href ?? item.src} target="_blank" rel="noopener noreferrer" className="relative block aspect-[4/3] bg-wp-line" title="Abrir en tamaño completo">
                <Image src={item.src} alt={item.name} fill sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 90vw" className="object-cover" />
                {item.kind === "video" && (
                  <span className="absolute left-2 top-2 rounded-full bg-wp-ink/80 px-2.5 py-1 text-xs font-bold text-white">▶ Video</span>
                )}
              </a>
              <div className="flex flex-1 flex-col gap-3 p-4">
                <p className="break-all font-mono text-[0.8rem] font-semibold text-wp-ink">{item.name}</p>
                <span className={`w-fit rounded-full px-2.5 py-0.5 text-xs font-bold ${GUESS[item.guess].className}`}>{GUESS[item.guess].label}</span>
                <div className="text-sm text-wp-ink-soft">
                  {item.usedIn.length ? (
                    <>
                      <span className="font-semibold text-wp-ink">Se usa en: </span>
                      {item.usedIn.join(" · ")}
                    </>
                  ) : (
                    <span className="italic">No se usa en /wp2</span>
                  )}
                </div>
                {crossed && (
                  <p className="rounded-lg bg-wp-rose/60 px-3 py-2 text-sm font-semibold text-wp-rose-deep">
                    ⚠ Está en la sección del otro nivel o marcada “No usar”
                  </p>
                )}
                <div className="mt-auto grid grid-cols-4 gap-1.5 pt-1">
                  {MARKS.map((m) => (
                    <button
                      key={m.value}
                      type="button"
                      onClick={() => setMark(item.name, m.value)}
                      aria-pressed={mark === m.value}
                      className={`rounded-lg border px-1 py-1.5 text-xs font-bold transition-colors ${
                        mark === m.value ? m.active : "border-wp-line text-wp-ink-soft hover:border-wp-ink/40"
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
