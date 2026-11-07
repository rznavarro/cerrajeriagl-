import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { Wordmark } from './Wordmark';
import { siteConfig } from '../site.config';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const hasRedes = Boolean(
    siteConfig.pending.redes.facebook || siteConfig.pending.redes.instagram
  );

  return (
    <footer className="bg-[#16191D] text-white pt-14 pb-24 md:pb-14 border-t border-[#2B3138]">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Columna Marca y Dirección (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <Wordmark isLightOnDark={true} />
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Cerrajería profesional en Guadalajara, Jalisco. Especialistas en aperturas de casa y auto, llaves automotrices con chip, controles y duplicados en nuestro taller de Col. Mezquitán.
            </p>
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <MapPin className="w-4 h-4 text-[#E0A526] shrink-0" aria-hidden="true" />
              <span>{siteConfig.address.full}</span>
            </div>
          </div>

          {/* Columna Contacto Directo (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-[#E0A526]">
              Contacto directo
            </h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E0A526]" aria-hidden="true" />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#E0A526]" aria-hidden="true" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li className="pt-1 text-xs text-neutral-400 flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#E0A526] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  {siteConfig.pending.horario || 'Horario por confirmar vía telefónica'}
                </span>
              </li>
            </ul>
          </div>

          {/* Columna Enlaces Rápidos (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-[#E0A526]">
              Enlaces
            </h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Servicios por situación
                </a>
              </li>
              <li>
                <a href="#llaves-auto" className="hover:text-white transition-colors">
                  Llaves con chip y controles
                </a>
              </li>
              <li>
                <a href="#cobertura" className="hover:text-white transition-colors">
                  Ubicación del taller
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#E0A526] hover:underline"
                >
                  <span>Cómo llegar en Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>

            {/* Redes sociales reales (solo si están configuradas, NINGÚN enlace a Wix) */}
            {hasRedes && (
              <div className="pt-3">
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                  Síganos
                </p>
                <div className="flex gap-3">
                  {siteConfig.pending.redes.facebook && (
                    <a
                      href={siteConfig.pending.redes.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors text-xs"
                    >
                      Facebook
                    </a>
                  )}
                  {siteConfig.pending.redes.instagram && (
                    <a
                      href={siteConfig.pending.redes.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors text-xs"
                    >
                      Instagram
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Barra inferior de derechos */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {currentYear} Cerrajería GL. Todos los derechos reservados.</p>
          <p className="text-neutral-400">
            Guadalajara, Jalisco, México
          </p>
        </div>
      </div>
    </footer>
  );
};
