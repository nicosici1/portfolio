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
    <FaRocket key="rocket" className="text-3xl mb-4 text-black dark:text-white" />,
    <FaLaptopCode key="laptop" className="text-3xl mb-4 text-black dark:text-white" />,
    <FaShoppingCart key="cart" className="text-3xl mb-4 text-black dark:text-white" />,
    <FaPencilRuler key="pencil" className="text-3xl mb-4 text-black dark:text-white" />,
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

