import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppUrl, trackEvent } from '../site.config';

export const MobileStickyBar: React.FC = () => {
  const handleCall = () => {
    trackEvent('click_call', { servicio: 'barra_fija_movil', ubicacion: 'bottom_bar' });
  };

  const handleWhatsApp = () => {
    trackEvent('click_whatsapp', { servicio: 'barra_fija_movil', ubicacion: 'bottom_bar' });
  };

  const whatsappUrl = getWhatsAppUrl(
    'Hola, necesito un cerrajero en Guadalajara. ¿Me pueden atender?'
  );

  return (
    <div
      role="region"
      aria-label="Acciones rápidas de contacto"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#16191D]/95 backdrop-blur-md border-t border-[#2B3138] p-2 pb-safe shadow-[0_-8px_24px_rgba(0,0,0,0.25)]"
    >
      <div className="flex items-center gap-2 max-w-lg mx-auto h-14">
        {/* Botón Primario: Llamar Ahora */}
        <a
          href={`tel:${siteConfig.phoneTel}`}
          onClick={handleCall}
          className={`flex items-center justify-center gap-2 h-12 rounded-[10px] bg-[#E0A526] active:bg-[#C9931F] text-[#16191D] font-display font-bold text-base tracking-wide transition-all select-none focus-visible:outline-2 focus-visible:outline-white ${
            siteConfig.pending.whatsappActivo ? 'flex-1' : 'w-full'
          }`}
          aria-label={`Llamar ahora a Cerrajería GL al ${siteConfig.phoneDisplay}`}
        >
          <Phone className="w-5 h-5 text-[#16191D]" aria-hidden="true" />
          <span>Llamar ahora</span>
        </a>

        {/* Botón Secundario: WhatsApp (solo si whatsappActivo) */}
        {siteConfig.pending.whatsappActivo && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsApp}
            className="flex-1 flex items-center justify-center gap-2 h-12 rounded-[10px] bg-[#1F9D55] active:bg-[#188647] text-white font-display font-bold text-base tracking-wide transition-all select-none focus-visible:outline-2 focus-visible:outline-white"
            aria-label="Escribir por WhatsApp a Cerrajería GL"
          >
            <MessageCircle className="w-5 h-5 text-white" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        )}
      </div>
    </div>
  );
};
