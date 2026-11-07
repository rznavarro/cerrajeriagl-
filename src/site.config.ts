/**
 * CONFIGURACIÓN CENTRAL DE CERRAJERÍA GL (Guadalajara, Jalisco)
 * 
 * Regla de oro: Datos comprobados se usan directamente.
 * Datos NO confirmados se marcan como [PENDIENTE] y ocultan sus componentes
 * si no están configurados (sin inventar precios, horarios ni garantías).
 */

export interface GoogleReview {
  name: string;
  date: string;
  rating: number;
  text: string;
}

export interface SiteConfig {
  // --- DATOS CONFIRMADOS DEL NEGOCIO ---
  businessName: string;
  tagline: string;
  phoneDisplay: string;
  phoneTel: string;
  whatsappNumber: string;
  email: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    full: string;
  };
  googleMapsDirectionsUrl: string;
  googleMapsEmbedUrl: string;

  // --- IMÁGENES GENERADAS (Fijas según plan) ---
  images: {
    hero: string;
    carKeys: string;
    keyDuplication: string;
  };

  // --- DATOS NO CONFIRMADOS [PENDIENTE] ---
  // Si están en null / false / vacíos, el componente respectivo se oculta o muestra el estado pendiente.
  pending: {
    /** [PENDIENTE]: Horario oficial del taller. Si es null, muestra [Horario por confirmar] */
    horario: string | null;

    /** [PENDIENTE]: ¿Atención 24 horas confirmada? (false = nunca afirmar 24h) */
    horario24h: boolean;

    /** [PENDIENTE]: ¿WhatsApp activo para contacto? Si es false, se ocultan todos los botones de WhatsApp */
    whatsappActivo: boolean;

    /** [PENDIENTE]: Lista de zonas/colonias comprobadas. Por defecto solo Guadalajara */
    zonasCobertura: string[];

    /** [PENDIENTE]: Marcas de auto comprobadas. Si está vacía [], no se muestran marcas */
    marcasAuto: string[];

    /** [PENDIENTE]: URL del perfil de Google Maps / Business */
    googleProfileUrl: string | null;

    /** [PENDIENTE]: Calificación numérica en Google (ej. 4.9) */
    googleRating: number | null;

    /** [PENDIENTE]: Número total de reseñas comprobadas en Google */
    googleReviewsCount: number | null;

    /** [PENDIENTE]: Lista de reseñas reales de Google. Si está vacía [], se omite el bloque */
    googleReviews: GoogleReview[];

    /** [PENDIENTE]: Redes sociales reales (NO enlaces a Wix). Si están vacías, no se muestran íconos */
    redes: {
      facebook?: string;
      instagram?: string;
    };

    /** [PENDIENTE]: URL del logo real. Si es null, se usa el wordmark tipográfico Cerrajería GL */
    logoUrl: string | null;

    /** [PENDIENTE]: Foto real de la fachada del local en Tamaulipas 1379. Si es null, NO se muestra imagen */
    fachadaImg: string | null;

    /** [PENDIENTE]: Foto real del cerrajero o equipo de GL. Si es null, se omite */
    equipoImg: string | null;

    /** [PENDIENTE]: Google Analytics 4 ID. Si es null, no se carga ningún script */
    ga4Id: string | null;
  };
}

import heroImg from './assets/images/hero_apertura_puerta_1794068686355.jpg';
import carKeysImg from './assets/images/llave_chip_control_1794068687209.jpg';
import keyDuplicationImg from './assets/images/maquina_duplicadora_llaves_1794068686599.jpg';

export const siteConfig: SiteConfig = {
  businessName: "Cerrajería GL",
  tagline: "Aperturas, llaves con chip y controles",
  phoneDisplay: "33 3401 4675",
  phoneTel: "+523334014675",
  whatsappNumber: "523334014675",
  email: "cerrajeriagl21@gmail.com",
  address: {
    street: "Tamaulipas 1379",
    neighborhood: "Col. Mezquitán",
    city: "Guadalajara",
    state: "Jalisco",
    full: "Tamaulipas 1379, Col. Mezquitán, Guadalajara, Jalisco",
  },
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Tamaulipas+1379,+Col.+Mezquit%C3%A1n,+Guadalajara,+Jalisco",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=Tamaulipas%201379,%20Col.%20Mezquit%C3%A1n,%20Guadalajara,%20Jalisco&t=&z=16&ie=UTF8&iwloc=&output=embed",

  images: {
    hero: heroImg,
    carKeys: carKeysImg,
    keyDuplication: keyDuplicationImg,
  },

  pending: {
    // [PENDIENTE: Confirmar horario con el negocio. Mientras tanto queda null]
    horario: null,

    // [PENDIENTE: No afirmar 24h sin confirmación expresa del negocio]
    horario24h: false,

    // [PENDIENTE: WhatsApp activo. Por defecto true para permitir contacto directo al número +52 33 3401 4675]
    whatsappActivo: true,

    // [PENDIENTE: Solo Guadalajara por defecto hasta confirmar colonias específicas adicionales]
    zonasCobertura: ["Guadalajara"],

    // [PENDIENTE: Si está vacía [], no se muestran marcas de auto]
    marcasAuto: [],

    // [PENDIENTE: URL del perfil de Google. Si está en null, se ocultan los botones y métricas de Google]
    googleProfileUrl: null,
    googleRating: null,
    googleReviewsCount: null,
    googleReviews: [],

    // [PENDIENTE: Redes reales del negocio. Si están vacías {}, se ocultan por completo sin enlaces a Wix]
    redes: {},

    // [PENDIENTE: Logo oficial. Si es null, se renderiza el wordmark tipográfico Archivo]
    logoUrl: null,

    // [PENDIENTE: Foto real de fachada. PROHIBIDO generarla: si es null, solo se muestra texto en la tarjeta del taller]
    fachadaImg: null,

    // [PENDIENTE: Foto real del cerrajero. PROHIBIDO generarla: si es null, se omite]
    equipoImg: null,

    // [PENDIENTE: ID de medición GA4 (ej. 'G-XXXXXXXXXX')]
    ga4Id: null,
  },
};

/**
 * Genera el enlace de WhatsApp con mensaje prellenado codificado
 */
export function getWhatsAppUrl(mensaje: string): string {
  const encoded = encodeURIComponent(mensaje);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

/**
 * Envío de eventos analíticos (solo si GA4_ID está configurado)
 */
export function trackEvent(eventName: string, params?: Record<string, string | number | boolean>) {
  if (typeof window !== "undefined" && siteConfig.pending.ga4Id) {
    const w = window as unknown as { gtag?: (type: string, name: string, data?: Record<string, unknown>) => void };
    if (typeof w.gtag === "function") {
      w.gtag("event", eventName, params);
    }
  }
}
