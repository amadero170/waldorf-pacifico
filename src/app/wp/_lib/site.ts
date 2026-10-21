// Datos de contacto y navegación del sitio nuevo.
// Los valores entre [corchetes] son placeholders pendientes de confirmar.

export const BASE = "/wp";

export const SITE = {
  name: "Waldorf Pacífico",
  tagline: "Educar con respeto, amor y libertad",
  phoneDisplay: "322 100 5170",
  phoneHref: "tel:+523221005170",
  whatsappNumber: "523221005170",
  email: "[correo@waldorfpacifico.mx]",
  address: "[Calle y número], Bahía de Banderas, Nayarit",
  mapsUrl: "[enlace de Google Maps]",
  hours: "[Lunes a viernes, 8:00 a 14:00 h]",
  instagram: "[https://instagram.com/waldorfpacifico]",
  facebook: "[https://facebook.com/waldorfpacifico]",
  founded: 2011,
};

export const VISIT_MESSAGE =
  "¡Hola! Me gustaría agendar una visita para conocer Waldorf Pacífico.";

export function waLink(message: string = VISIT_MESSAGE) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Un placeholder todavía no es un enlace real
export function isPlaceholder(value: string) {
  return value.startsWith("[");
}

export const NAV = [
  { href: `${BASE}/nosotros`, label: "Nosotros" },
  { href: `${BASE}/jardin`, label: "Jardín de niños" },
  { href: `${BASE}/primaria`, label: "Primaria" },
  { href: `${BASE}/vida-escolar`, label: "Vida escolar" },
  { href: `${BASE}/admisiones`, label: "Admisiones" },
  { href: `${BASE}/contacto`, label: "Contacto" },
];

export const photo = (name: string) => `/wp/fotos/${name}.jpg`;
export const video = (name: string) => `/wp/videos/${name}.mp4`;
