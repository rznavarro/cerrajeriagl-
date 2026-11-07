import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppUrl, trackEvent } from '../site.config';

export const FinalCtaSection: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl('Hola, necesito un cerrajero en Guadalajara de inmediato. Mi ubicación es: ');

  const handleCall = () => {
    trackEvent('click_call', { servicio: 'cta_final', ubicacion: 'pie_landing' });
  };

  const handleWhatsApp = () => {
    trackEvent('click_whatsapp', { servicio: 'cta_final', ubicacion: 'pie_landing' });
  };

  return (
    <section
      aria-labelledby="cta-final-heading"
      className="py-16 sm:py-20 bg-[#E0A526] text-[#16191D] select-none"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 text-center">
        <h2
          id="cta-final-heading"
          className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-balance mb-4 leading-tight text-[#16191D]"
        >
          ¿Necesita un cerrajero ahora?
        </h2>
        <p className="max-w-xl mx-auto text-base sm:text-lg font-medium text-[#16191D]/90 mb-8 sm:mb-10">
          Llámenos directamente, cuéntenos qué pasó y le orientamos de inmediato. Taller físico en Col. Mezquitán, Guadalajara.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          {/* Botón Principal Llamar */}
          <a
            href={`tel:${siteConfig.phoneTel}`}
            onClick={handleCall}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 h-14 px-8 rounded-[10px] bg-[#16191D] hover:bg-[#2B3138] text-white font-display font-bold text-base sm:text-lg tracking-wide shadow-lg hover:shadow-xl transition-all focus-visible:outline-2 focus-visible:outline-white"
            aria-label={`Llamar a Cerrajería GL al ${siteConfig.phoneDisplay}`}
          >
            <Phone className="w-5 h-5 text-[#E0A526]" aria-hidden="true" />
            <span>Llamar al {siteConfig.phoneDisplay}</span>
          </a>

          {/* Botón Secundario WhatsApp */}
          {siteConfig.pending.whatsappActivo && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 h-14 px-7 rounded-[10px] bg-white/95 hover:bg-white text-[#16191D] font-display font-bold text-base tracking-wide shadow-md transition-all focus-visible:outline-2 focus-visible:outline-[#16191D]"
            >
              <MessageCircle className="w-5 h-5 text-[#1F9D55]" aria-hidden="true" />
              <span>Escribir por WhatsApp</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
