import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, AlertCircle, Star, Clock } from 'lucide-react';
import { siteConfig, getWhatsAppUrl, trackEvent } from '../site.config';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  const heroWhatsAppMessage = 'Hola, necesito un cerrajero. Estoy en [colonia] y el problema es: ';
  const whatsappUrl = getWhatsAppUrl(heroWhatsAppMessage);

  const handleCall = () => {
    trackEvent('click_call', { servicio: 'hero_principal', ubicacion: 'hero' });
  };

  const handleWhatsApp = () => {
    trackEvent('click_whatsapp', { servicio: 'hero_principal', ubicacion: 'hero' });
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative pt-6 sm:pt-12 md:pt-16 pb-12 sm:pb-20 border-b border-[#2B3138]/10 overflow-hidden"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Columna Izquierda: Texto y Acciones (55% en desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Indicador de servicio local directo */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#E0A526] uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E0A526]" aria-hidden="true" />
              <span>Servicio en Guadalajara y taller físico</span>
            </div>

            {/* H1 Exacto */}
            <h1
              id="hero-heading"
              className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-[#16191D] leading-[1.12] tracking-tight text-balance mb-4"
            >
              Cerrajero en Guadalajara: aperturas, llaves con chip y controles
            </h1>

            {/* Subtítulo Exacto */}
            <p className="text-base sm:text-lg text-[#4A525C] leading-relaxed max-w-xl mb-6 sm:mb-8">
              ¿Se quedó afuera o perdió la llave? Llámenos, cuéntenos qué pasó y le orientamos desde el teléfono.
            </p>

            {/* Bloque de CTAs Principales */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              {/* CTA Primario: Llamar */}
              <a
                href={`tel:${siteConfig.phoneTel}`}
                onClick={handleCall}
                className="inline-flex items-center justify-center gap-3 h-14 px-6 rounded-[10px] bg-[#E0A526] hover:bg-[#C9931F] text-[#16191D] font-display font-bold text-base sm:text-lg tracking-wide shadow-md hover:shadow-lg transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16191D]"
                aria-label={`Llamar a Cerrajería GL al ${siteConfig.phoneDisplay}`}
              >
                <Phone className="w-5 h-5 text-[#16191D]" aria-hidden="true" />
                <span>Llamar al {siteConfig.phoneDisplay}</span>
              </a>

              {/* CTA Secundario: WhatsApp (solo si whatsappActivo) */}
              {siteConfig.pending.whatsappActivo && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsApp}
                  className="inline-flex items-center justify-center gap-2.5 h-14 px-6 rounded-[10px] bg-transparent hover:bg-[#1F9D55]/10 border-2 border-[#1F9D55] text-[#1F9D55] font-display font-bold text-base tracking-wide transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F9D55]"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  <span>Escribir por WhatsApp</span>
                </a>
              )}
            </div>

            {/* Chips de confianza comprobados (unboxed metadata con separadores) */}
            <div
              className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#4A525C] pt-2 border-t border-[#2B3138]/10"
              aria-label="Información de confianza"
            >
              {/* Taller físico (siempre comprobado) */}
              <div className="inline-flex items-center gap-1.5 font-medium text-[#16191D]">
                <MapPin className="w-4 h-4 text-[#E0A526] shrink-0" aria-hidden="true" />
                <span>Taller en Col. Mezquitán, Guadalajara</span>
              </div>

              <span className="text-[#2B3138]/30 hidden sm:inline" aria-hidden="true">·</span>

              {/* Emergencias (siempre comprobado) */}
              <div className="inline-flex items-center gap-1.5 font-medium text-[#16191D]">
                <AlertCircle className="w-4 h-4 text-[#E0A526] shrink-0" aria-hidden="true" />
                <span>Atención de emergencias</span>
              </div>

              {/* Google Rating (solo con dato verificado) */}
              {siteConfig.pending.googleRating && siteConfig.pending.googleReviewsCount && (
                <>
                  <span className="text-[#2B3138]/30 hidden sm:inline" aria-hidden="true">·</span>
                  {siteConfig.pending.googleProfileUrl ? (
                    <a
                      href={siteConfig.pending.googleProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-[#16191D] hover:underline"
                    >
                      <Star className="w-4 h-4 fill-[#E0A526] text-[#E0A526] shrink-0" aria-hidden="true" />
                      <span>
                        ★ {siteConfig.pending.googleRating} en Google · {siteConfig.pending.googleReviewsCount} reseñas
                      </span>
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-1.5 font-medium text-[#16191D]">
                      <Star className="w-4 h-4 fill-[#E0A526] text-[#E0A526] shrink-0" aria-hidden="true" />
                      <span>
                        ★ {siteConfig.pending.googleRating} en Google · {siteConfig.pending.googleReviewsCount} reseñas
                      </span>
                    </div>
                  )}
                </>
              )}

              {/* Horario 24h (solo si HORARIO_24H = true) */}
              {siteConfig.pending.horario24h && (
                <>
                  <span className="text-[#2B3138]/30 hidden sm:inline" aria-hidden="true">·</span>
                  <div className="inline-flex items-center gap-1.5 font-medium text-[#16191D]">
                    <Clock className="w-4 h-4 text-[#E0A526] shrink-0" aria-hidden="true" />
                    <span>Abierto 24 horas</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Columna Derecha: Imagen #1 (45% en desktop; abajo de los CTAs en móvil) */}
          <div className="lg:col-span-5 order-last mt-4 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#2B3138]/10 bg-[#2B3138] aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/5] max-h-[480px] lg:max-h-[560px] w-full">
              {!imgError ? (
                <img
                  src={siteConfig.images.hero}
                  alt="Cerrajero abriendo la cerradura de una puerta de casa"
                  // @ts-expect-error fetchpriority is a valid HTML attribute
                  fetchpriority="high"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.endsWith('/images/hero_apertura_puerta.jpg')) {
                      target.src = '/images/hero_apertura_puerta.jpg';
                    } else {
                      setImgError(true);
                    }
                  }}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#16191D] text-white">
                  <Phone className="w-12 h-12 text-[#E0A526] mb-3" aria-hidden="true" />
                  <p className="font-display font-bold text-lg">Cerrajería GL</p>
                  <p className="text-sm text-neutral-400 mt-1">Servicio de apertura en Guadalajara</p>
                </div>
              )}
              {/* Sutil viñeta para integrar los bordes */}
              <div
                className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
