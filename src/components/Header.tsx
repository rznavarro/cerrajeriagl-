import React from 'react';
import { Phone } from 'lucide-react';
import { Wordmark } from './Wordmark';
import { siteConfig, trackEvent } from '../site.config';

export const Header: React.FC = () => {
  const handleCallClick = () => {
    trackEvent('click_call', { servicio: 'header_cta', ubicacion: 'top_bar' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F6F4EF]/95 backdrop-blur-md border-b border-[#2B3138]/10 transition-colors">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-8">
        {/* Zona 1: Wordmark */}
        <a
          href="#"
          className="focus-visible:outline-2 focus-visible:outline-[#E0A526] rounded-md transition-opacity hover:opacity-90 whitespace-nowrap shrink-0"
          aria-label="Cerrajería GL - Ir al inicio"
        >
          <Wordmark />
        </a>

        {/* Zona 2: Enlaces internos de navegación (Desktop) */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A525C]"
          aria-label="Navegación principal"
        >
          <a
            href="#servicios"
            className="hover:text-[#16191D] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Servicios
          </a>
          <a
            href="#llaves-auto"
            className="hover:text-[#16191D] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Llaves de auto
          </a>
          <a
            href="#cobertura"
            className="hover:text-[#16191D] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Zonas y taller
          </a>
          <a
            href="#confianza"
            className="hover:text-[#16191D] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Por qué confiar
          </a>
          <a
            href="#preguntas"
            className="hover:text-[#16191D] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Preguntas
          </a>
        </nav>

        {/* Zona 3: Acción primaria directa */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            onClick={handleCallClick}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[10px] bg-[#E0A526] hover:bg-[#C9931F] text-[#16191D] font-display font-bold text-sm tracking-wide shadow-sm hover:shadow transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16191D] whitespace-nowrap shrink-0"
            aria-label={`Llamar a Cerrajería GL al ${siteConfig.phoneDisplay}`}
          >
            <Phone className="w-4 h-4 text-[#16191D]" aria-hidden="true" />
            <span className="hidden sm:inline">Llamar {siteConfig.phoneDisplay}</span>
            <span className="sm:hidden">Llamar</span>
          </a>
        </div>
      </div>
    </header>
  );
};
