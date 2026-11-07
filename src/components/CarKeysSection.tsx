import React, { useState } from 'react';
import { Phone, MessageCircle, KeyRound, ShieldCheck } from 'lucide-react';
import { siteConfig, getWhatsAppUrl, trackEvent } from '../site.config';

export const CarKeysSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  const carWhatsAppMessage = 'Hola, necesito una llave/control para mi auto. Marca:  Modelo:  Año: ';
  const whatsappUrl = getWhatsAppUrl(carWhatsAppMessage);

  const handleCall = () => {
    trackEvent('click_call', { servicio: 'llaves_auto_chip', ubicacion: 'bloque_auto' });
  };

  const handleWhatsApp = () => {
    trackEvent('click_whatsapp', { servicio: 'llaves_auto_chip', ubicacion: 'bloque_auto' });
  };

  return (
    <section
      id="llaves-auto"
      aria-labelledby="llaves-auto-heading"
      className="py-16 sm:py-24 bg-[#16191D] text-white border-t border-b border-[#2B3138]"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Imagen #2: Arriba en móvil (16:9) o columna derecha en desktop */}
          <div className="lg:col-span-6 lg:order-last">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#2B3138] aspect-[16/9] sm:aspect-[4/3] w-full shadow-2xl">
              {!imgError ? (
                <img
                  src={siteConfig.images.carKeys}
                  alt="Llave de auto con chip y control remoto sobre mesa de trabajo"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.endsWith('/images/llave_chip_control.jpg')) {
                      target.src = '/images/llave_chip_control.jpg';
                    } else {
                      setImgError(true);
                    }
                  }}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-white bg-[#2B3138]">
                  <KeyRound className="w-12 h-12 text-[#E0A526] mb-3" aria-hidden="true" />
                  <p className="font-display font-bold text-lg">Llaves con chip y controles</p>
                  <p className="text-sm text-neutral-400 mt-1">Servicio automotriz especializado</p>
                </div>
              )}
              <div
                className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Información y CTAs */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#E0A526] uppercase mb-3">
              <KeyRound className="w-4 h-4 text-[#E0A526]" aria-hidden="true" />
              <span>Servicio automotriz especializado</span>
            </div>

            <h2
              id="llaves-auto-heading"
              className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight text-balance mb-4 leading-tight"
            >
              Llaves con chip y controles para su auto
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6">
              ¿Perdió la llave o necesita una copia con chip? Llámenos con la marca, modelo y año de su vehículo y le decimos si podemos hacerla.
            </p>

            {/* Lista de marcas comprobadas (solo si MARCAS_AUTO tiene datos en config) */}
            {siteConfig.pending.marcasAuto.length > 0 && (
              <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                  Marcas que trabajamos
                </p>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.pending.marcasAuto.map((marca) => (
                    <span
                      key={marca}
                      className="text-xs font-medium text-white/90 bg-white/10 px-2.5 py-1 rounded"
                    >
                      {marca}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Puntos clave */}
            <div className="space-y-3 mb-8 text-sm text-neutral-300">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#E0A526] shrink-0 mt-0.5" aria-hidden="true" />
                <span>Programación y corte preciso de llaves transponder y carcasas con control.</span>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#E0A526] shrink-0 mt-0.5" aria-hidden="true" />
                <span>Le indicamos viabilidad y datos necesarios directamente por llamada.</span>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                onClick={handleCall}
                className="inline-flex items-center justify-center gap-3 h-14 px-6 rounded-[10px] bg-[#E0A526] hover:bg-[#C9931F] text-[#16191D] font-display font-bold text-base tracking-wide transition-all shadow-md focus-visible:outline-2 focus-visible:outline-white"
                aria-label={`Consultar por mi auto a Cerrajería GL al ${siteConfig.phoneDisplay}`}
              >
                <Phone className="w-5 h-5 text-[#16191D]" aria-hidden="true" />
                <span>Consultar por mi auto</span>
              </a>

              {siteConfig.pending.whatsappActivo && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsApp}
                  className="inline-flex items-center justify-center gap-2.5 h-14 px-6 rounded-[10px] bg-[#1F9D55] hover:bg-[#188647] text-white font-display font-bold text-base tracking-wide transition-all focus-visible:outline-2 focus-visible:outline-white"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  <span>Consultar por WhatsApp</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
