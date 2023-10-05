import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  en: {
    translation: {
      "header-home": "Home",
      "header-airport": "Airports",
    }
  },
  sp: {
    translation: {
      "selector-title": "Selecciona tu experiencia",
      "selector-aeropuerto": "Aeropuertos",
      "selector-papel": "Papel y carton",
      "selector-logi": "Logística",

      "loader-text": "Cargando experiencia...",

      "header-home": "Inicio",
      "header-airport": "Aeropuertos",
      "header-home": "Inicio",
      "airport-desliza": "Desliza hacia abajo",
      "airport-driver1-title": "DRIVER #1: Check-In Eficiente con una Sonrisa",
      "airport-driver1-title2": "Seguridad del aeropuerto",

      "airport-driver1-tab1-title": "CBRA: Eficiencia y seguridad.Comodidad para Pasajeros",
      "airport-driver1-tab1-text":"El proceso de CBRA (Claim-Based Reconciliation Area) se vuelve transparente con nuestras soluciones. Agregamos eficiencia y comodidad, permitiendo a los pasajeros reunirse con su equipaje rápidamente. La ingeniería humana se refleja en la eficacia de nuestros sistemas. Nuestro equipo se esfuerza por lograr un proceso sin fisuras, garantizando que cada pasajero tenga una experiencia positiva al llegar a su destino.",
      "airport-driver1-tab2-title": "Resolución en Pantalla (OSR) en Tiempo Real",
      "airport-driver1-tab2-text":"En la sala de control del BHS, nuestro personal actúa como verdaderos ángeles guardianes, utilizando el On-Screen Resolution (OSR) para abordar cualquier problema en tiempo real, garantizando un flujo constante y seguro de equipaje. Detrás de esta tecnología, hay un equipo humano altamente capacitado que responde de manera eficaz ante desafíos imprevistos. La ingeniería humana se destaca al tomar decisiones informadas y rápidas que mantienen la operación en movimiento sin problemas.",
      "airport-driver1-tab3-title": "Tu Ángel Guardián en la Industria Aeroportuaria",
      "airport-driver1-tab3-text":"MATEC, tu socio confiable en sistemas de manejo de equipaje para aeropuertos, abraza su papel como tu Ángel Guardián en cada paso del proceso aeroportuario. Desde el momento en que los pasajeros realizan el check-in hasta la recogida de su equipaje en el área de reclamo, estamos comprometidos en brindar soluciones que optimizan la eficiencia, la seguridad y la comodidad, al tiempo que impulsan la rentabilidad y la sostenibilidad. A continuación, exploramos cómo MATEC agrega un toque humano a procesos como Check-In, Inspección de Seguridad, Clasificación de equipaje (Make Up) Reclamo de equipaje y más.",
    
      "airport-driver1-title-sidebar": "Driver #1",
      "airport-driver1-text-sidebar": "Iniciamos el viaje con un check-in fluido y amigable. Nuestras soluciones de manejo de equipaje aseguran que el proceso sea rápido y sin complicaciones (seamless), permitiendo a los pasajeros comenzar su experiencia con una sonrisa. Detrás de cada sistema de check-in eficiente, hay una ingeniería humana meticulosa. Nuestro equipo de expertos colabora con los aeropuertos para diseñar soluciones personalizadas que se adapten a sus necesidades únicas, considerando cada detalle, desde la disposición de las cintas transportadoras hasta la interacción con el personal de la aerolínea. La tecnología puede ser avanzada, pero es la mano humana la que perfecciona el proceso.",

      "airport-driver2-title": "Reclamo de Equipaje de Entrada: El Toque Final",
      "footer-credits":"Creditos",
      "footer-privacy":"Política de privacidad",
      "footer-cookies":"Cookies",


    
    }
  } 
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'sp',
    fallbackLng: 'sp',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;