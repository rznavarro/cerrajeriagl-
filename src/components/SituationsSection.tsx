import React, { useState } from 'react';
import { DoorClosed, Car, Radio, Wrench, Lock, Copy, Phone, ArrowUpRight, MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppUrl, trackEvent } from '../site.config';

interface SituationCardData {
  id: string;
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
  btnText: string;
  isMapAction?: boolean;
  whatsappMessage: string;
  hasImage?: boolean;
}

const situations: SituationCardData[] = [
  {
    id: 'apertura_casa_negocio',
    icon: DoorClosed,
    title: 'Me quedé afuera de mi casa o negocio',
    description: 'Abrimos su puerta y revisamos que la cerradura siga funcionando.',
    btnText: 'Llamar por una apertura',
    whatsappMessage: 'Hola, me quedé afuera de mi casa/negocio y necesito una apertura. Estoy en: ',
  },
  {
    id: 'llave_auto_chip',
    icon: Car,
    title: 'Perdí la llave de mi auto',
    description: 'Hacemos llaves con chip para su vehículo.',
    btnText: 'Llamar por llave de auto',
    whatsappMessage: 'Hola, perdí la llave de mi auto y necesito una con chip. Marca, modelo y año: ',
  },
  {
    id: 'control_remoto',
    icon: Radio,
    title: 'Necesito un control o llave remota',
    description: 'Controles para su auto.',
    btnText: 'Consultar por un control',
    whatsappMessage: 'Hola, necesito un control o llave remota para mi auto. Marca, modelo y año: ',
  },
  {
    id: 'cerradura_danada',
    icon: Wrench,
    title: 'Mi cerradura está dañada o forzada',
    description: 'Reparamos cerraduras para que vuelva a cerrar con seguridad.',
    btnText: 'Llamar por una reparación',
    whatsappMessage: 'Hola, tengo una cerradura dañada o forzada y necesito revisarla o repararla. Mi ubicación es: ',
  },
  {
    id: 'apertura_candado',
    icon: Lock,
    title: 'No puedo abrir un candado',
    description: 'Apertura de candados sin complicaciones.',
    btnText: 'Llamar por un candado',
    whatsappMessage: 'Hola, necesito abrir un candado atorado o sin llave: ',
  },
  {
    id: 'duplicado_llaves',
    icon: Copy,
    title: 'Necesito copias de mis llaves',
    description: 'Duplicados de todo tipo de llaves en nuestro taller.',
    btnText: 'Cómo llegar al taller',
    isMapAction: true,
    whatsappMessage: 'Hola, quiero saber si tienen duplicados para mi llave: ',
    hasImage: true,
  },
];

export const SituationsSection: React.FC = () => {
  const [imgDuplicadoError, setImgDuplicadoError] = useState(false);

  const handleCardCall = (id: string) => {
    trackEvent('click_call', { servicio: id, ubicacion: 'tarjeta_situacion' });
  };

  const handleCardWhatsApp = (id: string) => {
    trackEvent('click_whatsapp', { servicio: id, ubicacion: 'tarjeta_situacion' });
  };

  const handleCardDirections = () => {
    trackEvent('click_directions', { servicio: 'duplicados_taller', ubicacion: 'tarjeta_situacion' });
  };

  return (
    <section
      id="servicios"
      aria-labelledby="servicios-heading"
      className="py-16 sm:py-24 bg-[#F6F4EF]"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        {/* Encabezado de Sección */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="text-xs sm:text-sm font-semibold tracking-wide text-[#E0A526] uppercase mb-2">
            Servicios por situación
          </div>
          <h2
            id="servicios-heading"
            className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#16191D] tracking-tight text-balance"
          >
            ¿Qué le pasó? Elija su caso
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#4A525C]">
            Atención directa por llamada. Cuéntenos qué cerradura o llave tiene y le orientamos.
          </p>
        </div>

        {/* Grid de 6 Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {situations.map((item) => {
            const Icon = item.icon;
            const waUrl = getWhatsAppUrl(item.whatsappMessage);

            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between rounded-xl bg-white border border-[#2B3138]/10 overflow-hidden shadow-sm hover:shadow-md hover:border-[#E0A526]/50 transition-all duration-200"
              >
                {/* Cabecera con Imagen para I6 (Duplicados) */}
                {item.hasImage ? (
                  <div className="relative h-44 w-full bg-[#16191D] overflow-hidden border-b border-[#2B3138]/10">
                    {!imgDuplicadoError ? (
                      <img
                        src={siteConfig.images.keyDuplication}
                        alt="Máquina duplicando una llave de latón"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={() => setImgDuplicadoError(true)}
                        className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#2B3138] text-white">
                        <Copy className="w-8 h-8 text-[#E0A526]" />
                      </div>
                    )}
                    <div className="absolute top-3 left-3 p-2 rounded-lg bg-[#16191D]/80 backdrop-blur-sm border border-white/10 text-[#E0A526]">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>
                ) : (
                  /* Cabecera con Ícono estándar I1–I5 */
                  <div className="p-6 pb-2">
                    <div className="w-12 h-12 rounded-lg bg-[#F6F4EF] border border-[#2B3138]/10 flex items-center justify-center text-[#16191D] group-hover:border-[#E0A526] group-hover:text-[#E0A526] transition-colors">
                      <Icon className="w-6 h-6 stroke-[1.75]" aria-hidden="true" />
                    </div>
                  </div>
                )}

                {/* Contenido de la Tarjeta */}
                <div className={`p-6 flex-1 flex flex-col justify-between ${item.hasImage ? 'pt-5' : ''}`}>
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-[#16191D] leading-snug mb-2 group-hover:text-[#16191D]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#4A525C] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Acciones */}
                  <div className="mt-6 pt-4 border-t border-[#2B3138]/10">
                    {item.isMapAction ? (
                      /* I6: Botón Cómo llegar al taller */
                      <a
                        href={siteConfig.googleMapsDirectionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleCardDirections}
                        className="w-full inline-flex items-center justify-center gap-2 h-12 px-4 rounded-[10px] bg-[#2B3138] hover:bg-[#16191D] text-white font-display font-bold text-sm tracking-wide transition-all focus-visible:outline-2 focus-visible:outline-[#16191D]"
                      >
                        <span>{item.btnText}</span>
                        <ArrowUpRight className="w-4 h-4 text-[#E0A526]" aria-hidden="true" />
                      </a>
                    ) : (
                      /* I1–I5: Botón Llamar */
                      <a
                        href={`tel:${siteConfig.phoneTel}`}
                        onClick={() => handleCardCall(item.id)}
                        className="w-full inline-flex items-center justify-center gap-2 h-12 px-4 rounded-[10px] bg-[#E0A526] hover:bg-[#C9931F] text-[#16191D] font-display font-bold text-sm tracking-wide shadow-xs hover:shadow-sm transition-all focus-visible:outline-2 focus-visible:outline-[#16191D]"
                        aria-label={`${item.btnText} a Cerrajería GL al ${siteConfig.phoneDisplay}`}
                      >
                        <Phone className="w-4 h-4 text-[#16191D]" aria-hidden="true" />
                        <span>{item.btnText}</span>
                      </a>
                    )}

                    {/* Enlace secundario WhatsApp si está activo */}
                    {siteConfig.pending.whatsappActivo && (
                      <div className="mt-2.5 text-center">
                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => handleCardWhatsApp(item.id)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F9D55] hover:text-[#188647] hover:underline transition-colors focus-visible:outline-none"
                        >
                          <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>o consultar por WhatsApp</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
