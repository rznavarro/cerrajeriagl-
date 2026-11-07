import React from 'react';
import { siteConfig } from '../site.config';

interface WordmarkProps {
  className?: string;
  isLightOnDark?: boolean;
}

export const Wordmark: React.FC<WordmarkProps> = ({ className = '', isLightOnDark = false }) => {
  // Si en el futuro se proporciona un logo real, se usa automáticamente
  if (siteConfig.pending.logoUrl) {
    return (
      <img
        src={siteConfig.pending.logoUrl}
        alt="Cerrajería GL"
        className={`h-9 w-auto object-contain ${className}`}
      />
    );
  }

  // Wordmark tipográfico especificado: "CERRAJERÍA" Archivo 600 con tracking amplio + "GL" Archivo 800 latón
  return (
    <div className={`inline-flex items-center gap-1.5 font-display select-none ${className}`}>
      <span
        className={`text-base sm:text-lg font-semibold tracking-[0.16em] uppercase transition-colors ${
          isLightOnDark ? 'text-white' : 'text-[#16191D]'
        }`}
      >
        Cerrajería
      </span>
      <div className="relative inline-flex flex-col items-center">
        <span className="text-xl sm:text-2xl font-extrabold text-[#E0A526] leading-none tracking-tight">
          GL
        </span>
        {/* Línea sutil estilo paleta de llave bajo GL */}
        <span className="w-full h-[2px] bg-[#E0A526] mt-[2px] rounded-full" aria-hidden="true" />
      </div>
    </div>
  );
};
