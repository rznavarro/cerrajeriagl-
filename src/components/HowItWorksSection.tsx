import React from 'react';
import { PhoneCall, MessageSquareQuote, CheckCircle2, Phone } from 'lucide-react';
import { siteConfig, trackEvent } from '../site.config';

const steps = [
  {
    number: '01',
    icon: PhoneCall,
    title: 'Llámenos o escríbanos',
    description: 'Cuéntenos qué pasó y dónde está.',
  },
  {
    number: '02',
    icon: MessageSquareQuote,
    title: 'Le orientamos',
    description: 'Le decimos qué se necesita para resolverlo.',
  },
  {
    number: '03',
    icon: CheckCircle2,
    title: 'Resolvemos',
    description: 'Vamos a su ubicación o le atendemos en el taller.',
    note: '[Servicio a domicilio sujeto a confirmación de zona]',
  },
];

export const HowItWorksSection: React.FC = () => {
  const handleCall = () => {
    trackEvent('click_call', { servicio: 'como_funciona', ubicacion: 'pasos' });
  };

  return (
    <section
      aria-labelledby="como-funciona-heading"
      className="py-16 sm:py-24 bg-[#F6F4EF] border-b border-[#2B3138]/10"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wide text-[#E0A526] uppercase mb-2">
            Proceso sin complicaciones
          </div>
          <h2
            id="como-funciona-heading"
            className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#16191D] tracking-tight text-balance"
          >
            Cómo funciona
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#4A525C]">
            Tres pasos sencillos para atender su problema de inmediato.
          </p>
        </div>

        {/* 3 Pasos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-white rounded-xl p-8 border border-[#2B3138]/10 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#F6F4EF] border border-[#2B3138]/10 flex items-center justify-center text-[#E0A526]">
                      <Icon className="w-8 h-8 stroke-[1.75]" aria-hidden="true" />
                    </div>
                    <span className="font-display font-extrabold text-2xl text-[#2B3138]/20 tabular-nums">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#16191D] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#4A525C] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {step.note && (
                  <p className="mt-4 pt-3 border-t border-[#2B3138]/5 text-xs text-[#4A525C]/70 italic">
                    {step.note}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Botón final de llamada */}
        <div className="mt-12 text-center">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            onClick={handleCall}
            className="inline-flex items-center justify-center gap-3 h-14 px-8 rounded-[10px] bg-[#E0A526] hover:bg-[#C9931F] text-[#16191D] font-display font-bold text-base tracking-wide shadow-md hover:shadow-lg transition-all focus-visible:outline-2 focus-visible:outline-[#16191D]"
            aria-label={`Llamar ahora a Cerrajería GL al ${siteConfig.phoneDisplay}`}
          >
            <Phone className="w-5 h-5 text-[#16191D]" aria-hidden="true" />
            <span>Llamar ahora al {siteConfig.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
