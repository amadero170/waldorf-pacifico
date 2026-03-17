"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#filosofia", label: "Filosofía" },
  { href: "#primaria", label: "Primaria" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-organic py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#inicio"
            className="flex items-center gap-3 group"
          >
            <div className="relative w-12 h-12 flex items-center justify-center">
              {/* Dreamcatcher SVG simplificado */}
              <svg
                viewBox="0 0 48 48"
                className="w-full h-full"
                fill="none"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="#0097B2"
                  strokeWidth="2"
                  className="group-hover:stroke-[#007A91] transition-colors"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="14"
                  stroke="#27AE60"
                  strokeWidth="1.5"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="8"
                  stroke="#E74C3C"
                  strokeWidth="1.5"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="3"
                  fill="#F5A623"
                />
                {/* Pluma */}
                <path
                  d="M24 44 L22 52 L24 50 L26 52 L24 44"
                  fill="#E74C3C"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif text-xl font-semibold tracking-tight transition-colors ${
                  isScrolled ? "text-waldorf-turquoise" : "text-white"
                }`}
              >
                Waldorf
              </span>
              <span
                className={`text-xs tracking-[0.2em] uppercase transition-colors ${
                  isScrolled ? "text-text-secondary" : "text-white/80"
                }`}
              >
                Pacífico
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isScrolled
                    ? "text-text-secondary hover:text-waldorf-turquoise hover:bg-waldorf-turquoise/5"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="#contacto"
              className={`group inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                isScrolled
                  ? "bg-waldorf-turquoise text-white hover:bg-waldorf-turquoise-dark"
                  : "bg-white text-waldorf-turquoise hover:bg-white/90"
              }`}
            >
              <span>Inscripciones</span>
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-black/10 group-hover:translate-x-0.5 transition-transform">
                <svg
                  className="w-3 h-3"
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
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-text-primary hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Abrir menú"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-organic-lg p-4 space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-text-primary hover:text-waldorf-turquoise hover:bg-bg-sky rounded-xl transition-all"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-2 px-4 py-3 bg-waldorf-turquoise text-white text-center rounded-xl font-medium hover:bg-waldorf-turquoise-dark transition-colors"
            >
              Inscripciones
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
