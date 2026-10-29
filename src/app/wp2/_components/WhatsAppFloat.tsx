import { waLink } from "../_lib/site";
import { WhatsAppIcon } from "./Icons";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 sm:bottom-7 sm:right-7"
    >
      <span className="wp-hand pointer-events-none hidden translate-x-2 rounded-full bg-wp-paper px-4 py-2 text-[1.05rem] text-wp-ink opacity-0 shadow-[0_10px_30px_-10px_rgba(46,58,89,0.35)] transition-[opacity,transform] duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        ¿Agendamos una visita?
      </span>
      <span className="relative flex h-15 w-15 items-center justify-center">
        <span className="wp-ping absolute inset-0 rounded-full bg-[#25D366]" aria-hidden="true" />
        <span className="relative flex h-15 w-15 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_-8px_rgba(18,140,70,0.65)] transition-transform duration-300 group-hover:scale-105 group-active:scale-95">
          <WhatsAppIcon className="h-8 w-8" />
        </span>
      </span>
    </a>
  );
}
