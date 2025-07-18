import React from 'react';
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
    <section className="px-1 md:px-4 py-24 transition-colors duration-300">
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
            className="text-center p-10 rounded-3xl my-10 bg-white/90 dark:bg-neutral-800/90 text-black dark:text-white flex-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-neutral-700"
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

export default Services;





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