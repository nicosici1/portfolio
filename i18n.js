// i18n.js
/* import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./public/locales/en/translation.json";
import translationES from "./public/locales/es/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n
  i18n.changeLanguage('es');
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false, 
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
    fallbackLng: "en"
  });

export default i18n;
 */






/* // i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Definimos las traducciones
const resources = {
  es: {
    translation: {
      // Sección Hero
      heroTitle: "Landing Pages que Convierten",
      heroSubtitle: "Sitios web diseñados para generar resultados reales.",
      heroDescription: "Landing pages rápidas, modernas y optimizadas para ayudar a tu negocio a atraer más clientes. ¿Listo para empezar?",
      heroCTA: "Hablemos de tu proyecto",
      heroText: "Más de 20 negocios han aumentado sus ventas con nuestras Landing Pages.",

      // Sección Servicios
      servicesTitle: "Servicios que ofrecemos",
      servicesDescription: "Diseñamos soluciones web estratégicas para convertir visitantes en clientes.",
      service1Title: "Landing Pages Personalizadas",
      service1Description: "Creamos landing pages optimizadas con un diseño moderno y responsive, enfocadas en maximizar conversiones.",
      service1IncludesTitle: "Lo que incluye:",
      service1Includes1: "- Diseño responsive para todos los dispositivos",
      service1Includes2: "- Optimización de velocidad y SEO básico",
      service1Includes3: "- Formularios de contacto y animaciones interactivas",
      service1Includes4: "- Entrega rápida en menos de una semana",
      service2Title: "Aplicaciones Web con MERN",
      service2Description: "Construimos aplicaciones web escalables y robustas con el stack MERN (MongoDB, Express, React, Node.js), ideales para startups o proyectos más complejos.",
      service2IncludesTitle: "Lo que ofrecemos:",
      service2Includes1: "- APIs RESTful con Node.js y Express",
      service2Includes2: "- Frontend dinámico con React",
      service2Includes3: "- Gestión de bases de datos con MongoDB",

      // Sección Proyectos
      projectsTitle: "Proyectos Destacados",
      projectsDescription: "Algunos ejemplos de nuestro trabajo. Aplicamos nuestras habilidades en diseño y optimización a cada landing page que creamos.",
      project1Title: "E-commerce: Tienda de Ropa",
      project1Description: "Un e-commerce con diseño responsive y optimización de rendimiento, ideal para maximizar conversiones.",
      project2Title: "Sitio de Noticias: Deporte 360",
      project2Description: "Un sitio de noticias con un diseño moderno y funcional, optimizado para una experiencia de usuario fluida.",

      // Sección Testimonios
      testimonialsTitle: "Lo que dicen nuestros clientes",
      testimonialsDescription: "Nuestros clientes han visto resultados reales con nuestras landing pages.",
      testimonial1: "DevFlow creó una landing page increíble para mi negocio en solo 5 días. ¡Mis conversiones aumentaron un 30%!",
      testimonial1Author: "– Juan Pérez, Emprendedor",
      testimonial2: "El diseño y la velocidad de mi nuevo sitio web son impresionantes. ¡Definitivamente recomiendo a DevFlow!",
      testimonial2Author: "– María Gómez, Dueña de Tienda Online",

      // Sección Formulario
      formTitle: "¿Listo para tu nueva landing page?",
      formDescription: "Completa el formulario y empecemos a trabajar en un sitio web que impulse tu negocio.",
      formNamePlaceholder: "Tu nombre",
      formEmailPlaceholder: "Tu email",
      formMessagePlaceholder: "Cuéntanos sobre tu proyecto",
      formSubmit: "Enviar mensaje",
      formContactDirectly: "O contáctanos directamente en",
      formWhatsApp: "WhatsApp",

      // Footer
      footerCopyright: "DevFlow © 2025",
      footerContact: "Contáctanos:",
    },
  },
  en: {
    translation: {
      // Hero Section
      heroTitle: "Landing Pages that Convert",
      heroSubtitle: "Websites designed to deliver real results.",
      heroDescription: "Fast, modern, and optimized landing pages that help your business attract more clients. Ready to get started?",
      heroCTA: "Let’s talk about your project",
      heroText: "More than 20 businesses have boosted their sales with our Landing Pages.",

      // Services Section
      servicesTitle: "Services We Offer",
      servicesDescription: "We design strategic web solutions that turn visitors into clients.",
      service1Title: "Custom Landing Pages",
      service1Description: "We create optimized landing pages with a modern and responsive design, focused on maximizing conversions.",
      service1IncludesTitle: "What’s included:",
      service1Includes1: "- Responsive design for all devices",
      service1Includes2: "- Speed optimization and basic SEO",
      service1Includes3: "- Contact forms and interactive animations",
      service1Includes4: "- Fast delivery in less than a week",
      service2Title: "Web Applications with MERN",
      service2Description: "We build scalable and robust web applications using the MERN stack (MongoDB, Express, React, Node.js), ideal for startups or complex projects.",
      service2IncludesTitle: "What we offer:",
      service2Includes1: "- RESTful APIs with Node.js and Express",
      service2Includes2: "- Dynamic frontend with React",
      service2Includes3: "- Database management with MongoDB",

      // Projects Section
      projectsTitle: "Featured Projects",
      projectsDescription: "Here are some examples of our work. We apply our design and optimization expertise to every landing page we create.",
      project1Title: "E-commerce: Clothing Store",
      project1Description: "An e-commerce site with responsive design and performance optimization, ideal for maximizing conversions.",
      project2Title: "News Site: Deporte 360",
      project2Description: "A news site with a modern and functional design, optimized for a seamless user experience.",

      // Testimonials Section
      testimonialsTitle: "What Our Clients Say",
      testimonialsDescription: "Our clients have seen real results with our landing pages.",
      testimonial1: "DevFlow created an amazing landing page for my business in just 5 days. My conversions increased by 30%!",
      testimonial1Author: "– Juan Pérez, Entrepreneur",
      testimonial2: "The design and speed of my new website are impressive. I definitely recommend DevFlow!",
      testimonial2Author: "– María Gómez, Online Store Owner",

      // Form Section
      formTitle: "Ready for Your New Landing Page?",
      formDescription: "Fill out the form, and let’s start working on a website that boosts your business.",
      formNamePlaceholder: "Your name",
      formEmailPlaceholder: "Your email",
      formMessagePlaceholder: "Tell us about your project",
      formSubmit: "Send message",
      formContactDirectly: "Or contact us directly on",
      formWhatsApp: "WhatsApp",

      // Footer
      footerCopyright: "DevFlow © 2025",
      footerContact: "Contact us:",
    },
  },
};

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Integra i18next con React
  .init({
    resources,
    fallbackLng: "es", // Idioma por defecto: español
    interpolation: {
      escapeValue: false, // React ya escapa los valores
    },
  });

export default i18n; */