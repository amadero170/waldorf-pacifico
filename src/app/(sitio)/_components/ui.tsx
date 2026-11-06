import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { waLink } from "../_lib/site";
import { ArrowIcon, WhatsAppIcon } from "./Icons";

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`wp-hand text-xl text-wp-peach-deep ${className}`}>{children}</p>;
}

export function Heading({
  children,
  as: Tag = "h2",
  className = "",
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const size = Tag === "h1" ? "text-6xl sm:text-7xl lg:text-[5.5rem]" : Tag === "h2" ? "text-5xl sm:text-6xl" : "text-4xl";
  return <Tag className={`wp-display ${size} ${className}`}>{children}</Tag>;
}

// Trazo a mano para separar o subrayar
export function Squiggle({ className = "h-3 w-28 text-wp-sun-deep" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 12" className={className} fill="none" aria-hidden="true">
      <path
        d="M2 7c10-6 18 4 28-1s19-5 29 0 19 5 29 0 19-5 30 1"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Photo({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 33vw, 90vw",
  priority = false,
  position = "center",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  position?: string;
}) {
  // `relative` le ganaría a un `absolute` pasado por className, así que solo se agrega si no viene otro
  const positioning = /\b(absolute|fixed|sticky)\b/.test(className) ? "" : "relative";
  return (
    <div className={`${positioning} overflow-hidden bg-wp-line ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" style={{ objectPosition: position }} />
    </div>
  );
}

export function VisitButton({ children = "Agenda tu visita", className = "" }: { children?: ReactNode; className?: string }) {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 rounded-full bg-wp-peach-deep px-7 py-4 text-lg font-bold text-white shadow-[0_14px_30px_-12px_rgba(200,98,47,0.8)] transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#b5542a] active:translate-y-0 ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {children}
    </a>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-lg font-bold text-wp-sky-deep underline decoration-wp-sky decoration-2 underline-offset-[6px] transition-colors hover:text-wp-ink"
    >
      {children}
      <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
