// Datos de contacto y navegación de la versión 2 (con contenido del libro Waldorf).
// Las fotos y videos se comparten con /wp (public/wp).

export const BASE = "/wp2";

export const SITE = {
  name: "Waldorf Pacífico",
  tagline: "Educar con respeto, amor y libertad",
  phoneDisplay: "322 100 5170",
  phoneHref: "tel:+523221005170",
  whatsappNumber: "523221005170",
  email: "waldorfpacifico@gmail.com",
  hours: "Lunes a viernes, 8:00 a 14:00 h",
  instagram: "https://instagram.com/waldorfpacifico",
  instagramHandle: "@waldorfpacifico",
  founded: 2011,
};

// Jardín y primaria están en planteles distintos
export const LOCATIONS = [
  {
    label: "Jardín de niños",
    address: "19 de Marzo s/n, esq. San Antonio, Col. Emiliano M. González, 63732 Bucerías, Nay.",
    query: "19 de Marzo s/n esq. San Antonio, Emiliano M. González, 63732 Bucerías, Nayarit",
  },
  {
    label: "Primaria",
    address: "RQC2+8V, 63730 Valle de Banderas, Nay.",
    query: "RQC2+8V, 63730 Valle de Banderas, Nayarit",
  },
].map((l) => ({
  ...l,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(l.query)}`,
  embedUrl: `https://www.google.com/maps?q=${encodeURIComponent(l.query)}&output=embed`,
}));

export const VISIT_MESSAGE =
  "¡Hola! Me gustaría agendar una visita para conocer Waldorf Pacífico.";

export function waLink(message: string = VISIT_MESSAGE) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}


export const NAV = [
  { href: `${BASE}/nosotros`, label: "Nosotros" },
  { href: `${BASE}/pedagogia`, label: "Pedagogía" },
  { href: `${BASE}/jardin`, label: "Jardín de niños" },
  { href: `${BASE}/primaria`, label: "Primaria" },
  { href: `${BASE}/vida-escolar`, label: "Vida escolar" },
  { href: `${BASE}/admisiones`, label: "Admisiones" },
  { href: `${BASE}/contacto`, label: "Contacto" },
];

export const photo = (name: string) => `/wp/fotos/${name}.jpg`;
export const video = (name: string) => `/wp/videos/${name}.mp4`;
