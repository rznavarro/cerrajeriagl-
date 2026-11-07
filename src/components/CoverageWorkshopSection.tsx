import React, { useState } from 'react';
import { MapPin, Phone, ArrowUpRight, Clock, Navigation } from 'lucide-react';
import { siteConfig, trackEvent } from '../site.config';

export const CoverageWorkshopSection: React.FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleDirections = () => {
    trackEvent('click_directions', { servicio: 'mapa_taller', ubicacion: 'seccion_cobertura' });
  };

  const handleCall = () => {
    trackEvent('click_call', { servicio: 'cobertura_taller', ubicacion: 'seccion_cobertura' });
  };

  return (
    <section
      id="cobertura"
      aria-labelledby="cobertura-heading"
      className="py-16 sm:py-24 bg-white border-b border-[#2B3138]/10"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        {/* Encabezado */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="text-xs sm:text-sm font-semibold tracking-wide text-[#E0A526] uppercase mb-2">
            Cobertura y ubicación física
          </div>
          <h2
            id="cobertura-heading"
            className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#16191D] tracking-tight text-balance"
          >
            Atendemos en Guadalajara
          </h2>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {siteConfig.pending.zonasCobertura.map((zona) => (
              <span
                key={zona}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F6F4EF] border border-[#2B3138]/15 text-sm font-medium text-[#16191D]"
              >
                <MapPin className="w-3.5 h-3.5 text-[#E0A526]" aria-hidden="true" />
                <span>{zona}</span>
              </span>
            ))}
          </div>
          <p className="mt-3 text-sm sm:text-base text-[#4A525C]">
            ¿No ve su colonia? Llámenos y le confirmamos.
          </p>
        </div>

        {/* Contenedor de 2 Columnas: Mapa interactivo (click-to-load) + Tarjeta del Taller */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Mapa con fachada click-to-load G1 (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#2B3138]/15 bg-[#F6F4EF] shadow-sm relative min-h-[340px] sm:min-h-[420px] flex flex-col">
            {!mapLoaded ? (
              <div className="relative w-full h-full flex-1 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#F6F4EF] to-[#e8e4dc]">
                <div className="w-16 h-16 rounded-2xl bg-white border border-[#2B3138]/10 flex items-center justify-center shadow-md mb-4 text-[#E0A526]">
                  <Navigation className="w-8 h-8" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#16191D] mb-1">
                  Tamaulipas 1379, Col. Mezquitán
                </h3>
                <p className="text-sm text-[#4A525C] mb-6 max-w-sm">
                  Guadalajara, Jalisco. Presione para cargar el mapa interactivo de Google Maps.
                </p>
                <button
                  type="button"
                  onClick={() => setMapLoaded(true)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-[10px] bg-[#16191D] hover:bg-[#2B3138] text-white font-display font-bold text-sm tracking-wide shadow transition-all focus-visible:outline-2 focus-visible:outline-[#E0A526] cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-[#E0A526]" aria-hidden="true" />
                  <span>Ver mapa interactivo</span>
                </button>
              </div>
            ) : (
              <iframe
                title="Mapa de Cerrajería GL en Guadalajara"
                src={siteConfig.googleMapsEmbedUrl}
                className="w-full h-full flex-1 border-0 min-h-[380px]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            )}
          </div>

          {/* Tarjeta del Taller Físico (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-[#16191D] text-white p-6 sm:p-8 border border-[#2B3138] shadow-md">
            <div>
              {/* Foto real de la fachada si existe (PROHIBIDO generar: si es null no se renderiza) */}
              {siteConfig.pending.fachadaImg && (
                <div className="mb-6 rounded-xl overflow-hidden aspect-[4/3] bg-[#2B3138] border border-white/10">
                  <img
                    src={siteConfig.pending.fachadaImg}
                    alt="Fachada de Cerrajería GL en Col. Mezquitán, Guadalajara"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E0A526] uppercase tracking-wider mb-3">
                <MapPin className="w-4 h-4 text-[#E0A526]" aria-hidden="true" />
                <span>Taller físico en Guadalajara</span>
              </div>

              <h3 className="font-display font-extrabold text-2xl text-white mb-3">
                Local en Col. Mezquitán
              </h3>

              <div className="space-y-4 text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#E0A526] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-white">{siteConfig.address.full}</p>
                    <p className="text-xs text-neutral-400 mt-0.5">Entre las calles principales de Mezquitán</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#E0A526] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-white">Horario de atención</p>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      {siteConfig.pending.horario || '[Horario por confirmar — contáctenos por teléfono]'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#E0A526] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-white">Teléfono directo</p>
                    <p className="text-xs text-neutral-400 mt-0.5">{siteConfig.phoneDisplay}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Botones de acción en la tarjeta */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href={siteConfig.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDirections}
                className="flex-1 inline-flex items-center justify-center gap-2 h-12 px-4 rounded-[10px] bg-white hover:bg-neutral-100 text-[#16191D] font-display font-bold text-sm tracking-wide transition-all focus-visible:outline-2 focus-visible:outline-white"
              >
                <span>Cómo llegar</span>
                <ArrowUpRight className="w-4 h-4 text-[#16191D]" aria-hidden="true" />
              </a>

              <a
                href={`tel:${siteConfig.phoneTel}`}
                onClick={handleCall}
                className="flex-1 inline-flex items-center justify-center gap-2 h-12 px-4 rounded-[10px] bg-[#E0A526] hover:bg-[#C9931F] text-[#16191D] font-display font-bold text-sm tracking-wide transition-all focus-visible:outline-2 focus-visible:outline-white"
                aria-label={`Llamar a Cerrajería GL al ${siteConfig.phoneDisplay}`}
              >
                <Phone className="w-4 h-4 text-[#16191D]" aria-hidden="true" />
                <span>Llamar</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
