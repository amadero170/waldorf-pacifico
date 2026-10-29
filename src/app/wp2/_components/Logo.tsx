// Atrapasueños del logo de Waldorf Pacífico, redibujado en SVG.
// Placeholder hasta tener el archivo original del logo.
export function DreamcatcherMark({ className = "" }: { className?: string }) {
  const spokes = Array.from({ length: 12 }, (_, i) => (i * Math.PI) / 6);
  return (
    <svg viewBox="0 0 64 84" className={className} fill="none" aria-hidden="true">
      <circle cx="32" cy="30" r="27" stroke="#3a69ab" strokeWidth="2.4" />
      <circle cx="32" cy="30" r="21" stroke="#c4566b" strokeWidth="2" />
      <circle cx="32" cy="30" r="15" stroke="#4b8650" strokeWidth="2" />
      <circle cx="32" cy="30" r="9" stroke="#e0a21e" strokeWidth="2" />
      {spokes.map((a, i) => (
        <line
          key={i}
          x1={32 + Math.cos(a) * 4}
          y1={30 + Math.sin(a) * 4}
          x2={32 + Math.cos(a) * 27}
          y2={30 + Math.sin(a) * 27}
          stroke="#3a69ab"
          strokeOpacity="0.45"
          strokeWidth="1"
        />
      ))}
      <path d="M30 57c-3 6-3 13 0 22 3-8 3-15 0-22Z" fill="#e0a21e" />
      <path d="M34 57c4 5 5 12 3 20-3-7-4-13-3-20Z" fill="#c4566b" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <DreamcatcherMark className="h-12 w-auto shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={`wp-display text-[1.9rem] ${light ? "text-white" : "text-wp-sky-deep"}`}
        >
          Waldorf Pacífico
        </span>
        <span
          className={`mt-0.5 text-[0.66rem] font-semibold uppercase tracking-[0.28em] ${
            light ? "text-white/80" : "text-wp-sage-deep"
          }`}
        >
          Jardín · Primaria
        </span>
      </span>
    </span>
  );
}
