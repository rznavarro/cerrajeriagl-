import React from 'react';
import { Store, Star, UserCheck, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../site.config';

export const WhyTrustSection: React.FC = () => {
  return (
    <section
      id="confianza"
      aria-labelledby="confianza-heading"
      className="py-16 sm:py-24 bg-[#F6F4EF] border-b border-[#2B3138]/10"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        {/* Encabezado */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wide text-[#E0A526] uppercase mb-2">
            Transparencia y seguridad
          </div>
          <h2
            id="confianza-heading"
            className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#16191D] tracking-tight text-balance leading-tight"
          >
            Un taller real en Guadalajara, no un número sin dirección
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4A525C]">
            En cerrajería, saber quién atiende y dónde encontrarlo físicamente marca la diferencia.
          </p>
        </div>

        {/* 3 Puntos Verificables */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Punto 1: Taller físico */}
          <div className="bg-white rounded-xl p-7 border border-[#2B3138]/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#F6F4EF] border border-[#2B3138]/10 flex items-center justify-center text-[#E0A526] mb-5">
                <Store className="w-6 h-6 stroke-[1.75]" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#16191D] mb-2">
                Taller físico en Col. Mezquitán
              </h3>
              <p className="text-sm text-[#4A525C] leading-relaxed">
                Estamos establecidos en Tamaulipas 1379. Puede visitarnos directamente para duplicados, revisiones y asesoría.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#2B3138]/10">
              <a
                href="#cobertura"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#16191D] hover:text-[#E0A526] transition-colors"
              >
                <span>Ver dirección y mapa</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Punto 2: Reseñas públicas en Google */}
          <div className="bg-white rounded-xl p-7 border border-[#2B3138]/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#F6F4EF] border border-[#2B3138]/10 flex items-center justify-center text-[#E0A526] mb-5">
                <Star className="w-6 h-6 stroke-[1.75] fill-[#E0A526]" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#16191D] mb-2">
                Opiniones verificadas
              </h3>
              <p className="text-sm text-[#4A525C] leading-relaxed">
                Sin testimonios inventados. Nuestras calificaciones son otorgadas de forma directa y transparente por clientes en Google.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#2B3138]/10">
              {siteConfig.pending.googleProfileUrl ? (
                <a
                  href={siteConfig.pending.googleProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#16191D] hover:text-[#E0A526] transition-colors"
                >
                  <span>Leer reseñas en Google</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              ) : (
                <span className="text-xs text-[#4A525C]/70">Perfil de Google en proceso de vinculación</span>
              )}
            </div>
          </div>

          {/* Punto 3: Contacto directo */}
          <div className="bg-white rounded-xl p-7 border border-[#2B3138]/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#F6F4EF] border border-[#2B3138]/10 flex items-center justify-center text-[#E0A526] mb-5">
                <UserCheck className="w-6 h-6 stroke-[1.75]" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#16191D] mb-2">
                Contacto directo con el cerrajero
              </h3>
              <p className="text-sm text-[#4A525C] leading-relaxed">
                Mismo número {siteConfig.phoneDisplay}. Al llamar habla directamente con quien realiza o coordina el trabajo, sin intermediarios ni comisiones de call center.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#2B3138]/10">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#16191D] hover:text-[#E0A526] transition-colors"
              >
                <span>Llamar al {siteConfig.phoneDisplay}</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Reseñas Reales (solo si existen en config. Si está vacío, no se renderiza) */}
        {siteConfig.pending.googleReviews.length > 0 && (
          <div className="mb-12 p-6 rounded-2xl bg-white border border-[#2B3138]/10">
            <h3 className="font-display font-bold text-lg text-[#16191D] mb-4">
              Opiniones de clientes en Google
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {siteConfig.pending.googleReviews.slice(0, 3).map((rev, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-[#F6F4EF] text-sm flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#E0A526] text-[#E0A526]" />
                      ))}
                    </div>
                    <p className="text-[#16191D] italic">&ldquo;{rev.text}&rdquo;</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#2B3138]/10 flex justify-between text-xs text-[#4A525C]">
                    <span className="font-semibold">{rev.name}</span>
                    <span>{rev.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bloque Nosotros (texto adaptado de su sitio real) */}
        <div className="rounded-2xl bg-white p-8 sm:p-10 border border-[#2B3138]/10 shadow-sm flex flex-col lg:flex-row gap-8 items-center">
          {/* Imagen #5 real si existe (PROHIBIDO generarla: si es null se omite) */}
          {siteConfig.pending.equipoImg && (
            <div className="w-full lg:w-1/3 shrink-0 rounded-xl overflow-hidden aspect-square bg-[#2B3138]">
              <img
                src={siteConfig.pending.equipoImg}
                alt="Equipo de Cerrajería GL en su taller"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}

          <div className="flex-1">
            <div className="text-xs font-semibold text-[#E0A526] uppercase tracking-wider mb-2">
              Sobre nosotros
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#16191D] mb-3">
              Cerrajería GL en Guadalajara
            </h3>
            <p className="text-base sm:text-lg text-[#4A525C] leading-relaxed">
              En Cerrajería GL trabajamos con rapidez, eficiencia y honestidad. Nuestro equipo se capacita constantemente para que cada cliente quede satisfecho y vuelva a confiar en nosotros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
