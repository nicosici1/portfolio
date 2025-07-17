import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import {
  FaLaptopCode,
  FaRocket,
  FaShoppingCart,
  FaPencilRuler,
} from 'react-icons/fa';

const Services = () => {
  const { t } = useTranslation('translation');

  // Aseguramos que el array venga bien
  const serviceItemsRaw = t('services.items', { returnObjects: true });
  const serviceItems = Array.isArray(serviceItemsRaw) ? serviceItemsRaw : [];

  // Iconos asignados por orden
  const icons = [
    <FaRocket className="text-3xl mb-4 text-black dark:text-white" />,
    <FaLaptopCode className="text-3xl mb-4 text-black dark:text-white" />,
    <FaShoppingCart className="text-3xl mb-4 text-black dark:text-white" />,
    <FaPencilRuler className="text-3xl mb-4 text-black dark:text-white" />,
  ];

  return (
    <section className="px-6 py-20 bg-white text-black dark:bg-neutral-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-space font-bold text-4xl md:text-4xl">
          {t('services.title', 'SERVICES')}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-12 text-lg md:text-xl font-redhat max-w-2xl">
          {t('services.subtitle', 'I can help you with...')}
        </p>

        <div className="relative flex flex-col gap-10">
          {serviceItems.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group z-[1] border border-neutral-200 dark:border-white/10 rounded-3xl px-6 py-8 bg-white/80 dark:bg-white/5 backdrop-blur-md shadow-xl hover:z-[10] transition-all duration-300 hover:scale-[1.015] hover:shadow-2xl"
            >
              <div>{icons[i]}</div>
              <h3 className="text-lg md:text-xl font-semibold font-space mb-2">
                {service.title}
              </h3>
              <p className="text-neutral-700 dark:text-neutral-400 text-sm font-redhat leading-relaxed">
                {service.description}
              </p>
              <div className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-xl transition duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;



/* 'use client';

import { useTranslation } from 'next-i18next';
import {
  LayoutDashboard,
  Briefcase,
  ShoppingCart,
  Palette,
} from 'lucide-react';
import { motion } from 'framer-motion';

const icons = [
  <LayoutDashboard size={32} />,
  <Briefcase size={32} />,
  <ShoppingCart size={32} />,
  <Palette size={32} />,
];

export default function Services() {
  const { t } = useTranslation('translation');
  const serviceItems = t('services.items', { returnObjects: true });

  return (
    <section className="relative px-6 py-24 bg-white text-black dark:bg-neutral-900 dark:text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-space font-bold text-4xl md:text-4xl">
          {t('services.title', 'Services')}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-12 text-lg md:text-xl font-redhat max-w-2xl">
          {t('services.subtitle', 'I can help you with...')}
        </p>

        <div className="relative flex flex-col gap-10">
          {serviceItems.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group z-[1] border border-neutral-200 dark:border-white/10 rounded-3xl px-6 py-8 bg-white/80 dark:bg-white/5 backdrop-blur-md shadow-xl hover:z-[10] transition-all duration-300 hover:scale-[1.015] hover:shadow-2xl"
            >
              <div className="mb-4 text-black dark:text-white">{icons[i]}</div>
              <h3 className="text-l md:text-2xl font-semibold font-space mb-2">
                {service.title}
              </h3>
              <p className="text-neutral-700 dark:text-neutral-400 text-base font-redhat leading-relaxed">
                {service.description}
              </p>
              <div className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-xl transition duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

 */

/* 
MIS SUPER CARDS SERVICES.
import {
  Briefcase,
  LayoutDashboard,
  ShoppingCart,
  Palette,
  Gauge,
  BarChart2,
} from 'lucide-react';

export default function Services() {
  return (
    <section className="px-6 py-20 bg-white text-black dark:bg-neutral-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-space font-bold text-4xl md:text-4xl">
          Services
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-12 text-lg md:text-xl font-redhat">
          I can help you with...
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <LayoutDashboard size={32} />,
              title: 'Landing Pages',
              description: 'High-converting, fast-loading, responsive landing pages tailored for your campaigns.',
            },
            {
              icon: <Briefcase size={32} />,
              title: 'SaaS Websites',
              description: 'Custom marketing websites for your SaaS product that communicate clearly and convert.',
            },
            {
              icon: <ShoppingCart size={32} />,
              title: 'E-commerce',
              description: 'Shopify or custom storefronts designed for performance and optimized for sales.',
            },
            {
              icon: <Palette size={32} />,
              title: 'UI/UX Design',
              description: 'Modern interfaces that are not just beautiful but also intuitive and user-friendly.',
            },
            {
              icon: <Gauge size={32} />,
              title: 'Web Performance Optimization',
              description: 'Improve speed and Core Web Vitals to provide a faster and smoother user experience.',
            },
            {
              icon: <BarChart2 size={32} />,
              title: 'SEO & Analytics',
              description: 'Set up SEO best practices and track performance to grow your online visibility.',
            },
          ].map((service, i) => (
            <div
              key={i}
              className="group border border-neutral-200 dark:border-white/10 rounded-xl p-4 md:p-5 hover:border-neutral-400/30 dark:hover:border-white/20 transition-colors duration-300 bg-white/50 dark:bg-white/5 backdrop-blur-sm"
            >
              <div className="mb-3 text-black dark:text-white">{service.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold font-space mb-1">
                {service.title}
              </h3>
              <p className="text-neutral-700 dark:text-neutral-400 text-sm font-redhat leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

 */

/* import React from 'react';
import { FaLaptopCode, FaPaintBrush, FaReact } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';

const Services = () => {
  const { t } = useTranslation('translation');

  const cards = [
    {
      icon: (
        <FaLaptopCode className="text-6xl mx-auto text-teal-500 dark:text-teal-400 hover:scale-110 transition-transform" />
      ),
      title: t('landingPagesTitle', 'Landing Pages que convierten'),
      description: t('landingPagesDescription', 'Diseño y desarrollo de sitios web que no solo se ven bien: logran resultados.'),
      subtitle: t('included', 'Incluye:'),
      offers: [
        t('landingPagesOffer1', 'Diseño 100% responsive'),
        t('landingPagesOffer2', 'Optimización SEO desde el inicio'),
        t('landingPagesOffer3', 'Velocidad de carga superior'),
        t('landingPagesOffer4', 'Animaciones y microinteracciones'),
      ],
    },
    {
      icon: (
        <FaPaintBrush className="text-6xl mx-auto text-teal-500 dark:text-teal-400 hover:scale-110 transition-transform" />
      ),
      title: t('designsTitle', 'Diseño Visual Estratégico'),
      description: t('designsDescription', 'Desde una identidad cuidada hasta piezas gráficas funcionales que elevan tu marca.'),
      subtitle: t('included', 'Incluye:'),
      offers: [
        t('photoshop', 'Photoshop'),
        t('illustrator', 'Illustrator'),
        t('figma', 'Diseños UI en Figma (si aplica)'),
        t('brandKits', 'Kits visuales personalizados'),
      ],
    },
    {
      icon: (
        <FaReact className="text-6xl mx-auto text-teal-500 dark:text-teal-400 hover:scale-110 transition-transform" />
      ),
      title: t('mernTitle', 'Aplicaciones con MERN Stack'),
      description: t('mernDescription', 'Desarrollo de aplicaciones completas, pensadas para escalar y adaptarse a tu negocio.'),
      subtitle: t('included', 'Incluye:'),
      offers: [
        t('mernOffer1', 'APIs a medida'),
        t('mernOffer2', 'Conexión con bases de datos'),
        t('mernOffer3', 'Interfaz 100% adaptable'),
        t('mernOffer4', 'Autenticación y seguridad'),
      ],
    },
  ];
  

  return (
    <section className="px-6 md:px-6 py-12 transition-colors duration-300">
      <div>
        <h3 className="text-6xl md:text-5xl font-bold dark:text-white">
          {t('servicesTitle', 'Services')}
        </h3>
        <p className="mt-6 text-xl md:text-2xl text-gray-800 dark:text-gray-300">
          {t('servicesDescription', 'From idea to execution, I turn visions into digital solutions.')}
        </p>
      </div>

      <div className="lg:flex gap-10">
        {cards.map((card, i) => (
          <div
            key={i}
            className="text-center p-10 rounded-3xl my-10 bg-white/90 dark:bg-neutral-800/90 text-black dark:text-white flex-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 dark:border-neutral-700"
          >
            {card.icon}
            <h3 className="text-2xl font-semibold pt-8 pb-2 tracking-tight">{card.title}</h3>
            <p className="py-2 text-lg text-gray-700 dark:text-gray-300">{card.description}</p>
            <h4 className="py-4 text-teal-500 font-semibold">{card.subtitle}</h4>
            {card.offers.map((offer, j) => (
              <p key={j} className="text-teal-600 py-1 text-base">{offer}</p>
            ))}
          </div>
          
        ))}
      </div>
    </section>
  );
};

export default Services; */





{/* <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-neutral-800 text-black dark:text-white flex-1 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-600 dark:bg-gradient-to-br dark:from-teal-600 dark:to-cyan-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0 rounded-xl"></div>
          <div className="relative z-10">
            <FaLaptopCode className="text-6xl mx-auto text-teal-500 dark:text-teal-400 hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold pt-8 pb-2">{t("")}</h3>
            <p className="py-2 text-lg">{t("l")}</p>
            <h4 className="py-4 text-teal-500 font-semibold">{t("")}</h4>
            <p className="text-teal-600 py-1 text-base">{t("")}</p>
            <p className="text-teal-600 py-1 text-base">{t("")}</p>
            <p className="text-teal-600 py-1 text-base">{t("")}</p>
            <p className="text-teal-600 py-1 text-base">{t("")}</p>
          </div>
        </div> */}