import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight, Phone } from 'lucide-react';
import { siteConfig } from '../site.config';

interface FaqItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Preguntas estrictamente verificadas y honestas (sin inventar precios, garantías ni 24h sin confirmar)
  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: '¿Cuánto cuesta el servicio?',
      answer: (
        <p>
          Depende del tipo de cerradura o llave y de su ubicación. Llámenos al{' '}
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="font-semibold text-[#16191D] hover:underline"
          >
            {siteConfig.phoneDisplay}
          </a>
          , cuéntenos su caso y le damos el precio antes de empezar.
        </p>
      ),
    },
    {
      id: 'faq-2',
      question: '¿Atienden de noche o en fin de semana?',
      answer: siteConfig.pending.horario24h ? (
        <p>Sí, atendemos emergencias las 24 horas en Guadalajara.</p>
      ) : (
        <p>
          Para emergencias fuera de horario o en fin de semana, llámenos directamente al{' '}
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="font-semibold text-[#16191D] hover:underline"
          >
            {siteConfig.phoneDisplay}
          </a>{' '}
          para confirmar disponibilidad inmediata en su colonia.
        </p>
      ),
    },
    {
      id: 'faq-3',
      question: '¿Puedo ir al taller a sacar copias?',
      answer: (
        <p>
          Sí, estamos ubicados en {siteConfig.address.full}. Hacemos duplicados de todo tipo de llaves en nuestro taller.{' '}
          <a
            href={siteConfig.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-[#16191D] underline hover:text-[#E0A526]"
          >
            <span>Cómo llegar en Google Maps</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </p>
      ),
    },
    {
      id: 'faq-4',
      question: '¿Qué información necesitan para cotizar una llave con chip o control de auto?',
      answer: (
        <p>
          Únicamente la <strong>marca</strong>, <strong>modelo</strong> y <strong>año</strong> de su vehículo, y si aún cuenta con alguna llave funcional o si perdió todas. Con esos datos le decimos la viabilidad al instante.
        </p>
      ),
    },
  ];

  return (
    <section
      id="preguntas"
      aria-labelledby="preguntas-heading"
      className="py-16 sm:py-24 bg-white border-b border-[#2B3138]/10"
    >
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        {/* Encabezado */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wide text-[#E0A526] uppercase mb-2">
            Respuestas claras
          </div>
          <h2
            id="preguntas-heading"
            className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#16191D] tracking-tight text-balance"
          >
            Preguntas frecuentes
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#4A525C]">
            Información directa sin letras pequeñas ni promesas falsas.
          </p>
        </div>

        {/* Acordeón Accesible */}
        <div className="space-y-4" role="region" aria-label="Acordeón de preguntas frecuentes">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl border border-[#2B3138]/10 bg-[#F6F4EF]/60 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  id={`btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${faq.id}`}
                  onClick={() => toggleItem(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-display font-bold text-base sm:text-lg text-[#16191D] hover:text-[#16191D] focus-visible:outline-2 focus-visible:outline-[#E0A526] cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#4A525C] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#E0A526]' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={`panel-${faq.id}`}
                  role="region"
                  aria-labelledby={`btn-${faq.id}`}
                  hidden={!isOpen}
                  className={`px-5 pb-5 pt-1 text-sm sm:text-base text-[#4A525C] leading-relaxed border-t border-[#2B3138]/5 ${
                    isOpen ? 'block' : 'hidden'
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>

        {/* Ayuda adicional */}
        <div className="mt-10 p-6 rounded-xl bg-[#F6F4EF] border border-[#2B3138]/10 text-center">
          <p className="text-sm text-[#4A525C] mb-3">
            ¿Tiene otra duda o necesita atención urgente?
          </p>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="inline-flex items-center gap-2 font-display font-bold text-base text-[#16191D] hover:text-[#E0A526] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#E0A526]" aria-hidden="true" />
            <span>Llamar al {siteConfig.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
