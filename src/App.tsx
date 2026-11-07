/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { MobileStickyBar } from './components/MobileStickyBar';
import { Hero } from './components/Hero';
import { SituationsSection } from './components/SituationsSection';
import { CarKeysSection } from './components/CarKeysSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { CoverageWorkshopSection } from './components/CoverageWorkshopSection';
import { WhyTrustSection } from './components/WhyTrustSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F4EF] text-[#16191D] relative selection:bg-[#E0A526]/30 selection:text-[#16191D]">
      {/* 0. Header con barra fija en desktop */}
      <Header />

      {/* Contenido Principal con estructura semántica */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero */}
        <Hero />

        {/* 2. "¿Qué le pasó?" — Servicios por situación */}
        <SituationsSection />

        {/* 3. Llaves con chip y controles (Bloque destacado) */}
        <CarKeysSection />

        {/* 4. Cómo funciona (3 pasos) */}
        <HowItWorksSection />

        {/* 5. Dónde atendemos + taller */}
        <CoverageWorkshopSection />

        {/* 6. Por qué confiar en GL */}
        <WhyTrustSection />

        {/* 7. Preguntas frecuentes */}
        <FaqSection />

        {/* 8. CTA final */}
        <FinalCtaSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Barra de acción fija en móvil (Siempre visible en celular/tablet) */}
      <MobileStickyBar />
    </div>
  );
}
