import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import {
  FaRegLightbulb,
  FaClock,
  FaHandshake,
  FaTools,
} from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi2';
import { BsFillPeopleFill } from 'react-icons/bs';

const WhyWorkWithMe = () => {
  const { t } = useTranslation('translation');

  const iconClass = 'text-black dark:text-white text-3xl mb-4';

  const iconComponents = [
    <FaRegLightbulb key="lightbulb" className={iconClass} />,
    <FaClock key="clock" className={iconClass} />,
    <FaHandshake key="handshake" className={iconClass} />,
    <HiOutlineSparkles key="sparkles" className={iconClass} />,
    <FaTools key="tools" className={iconClass} />,
    <BsFillPeopleFill key="people" className={iconClass} />,
  ];

  const reasonsRaw = t('why.reasons', { returnObjects: true });
  const reasons = Array.isArray(reasonsRaw) ? reasonsRaw : [];

  return (
    <section className="px-6 py-20 bg-white text-black dark:bg-neutral-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-space font-bold text-4xl md:text-4xl">
          {t('why.heading', 'Why work with me?')}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-12 pt-2 text-lg md:text-xl font-redhat max-w-2xl">
          {t('why.intro', 'A mix of technical skills and a human approach that ensures great results.')}
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group z-[1] border border-neutral-200 dark:border-white/10 rounded-3xl px-6 py-8 bg-white/80 dark:bg-white/5 backdrop-blur-md shadow-xl hover:z-[10] transition-all duration-300 hover:scale-[1.015] hover:shadow-2xl"
            >
              <div>{iconComponents[i]}</div>
              <h3 className="text-lg md:text-xl font-semibold font-space mb-2">
                {reason.title}
              </h3>
              <p className="text-neutral-700 dark:text-neutral-400 text-sm font-redhat leading-relaxed">
                {reason.description}
              </p>
              <div className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-xl transition duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;

