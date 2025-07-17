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
    <FaRegLightbulb className={iconClass} />,
    <FaClock className={iconClass} />,
    <FaHandshake className={iconClass} />,
    <HiOutlineSparkles className={iconClass} />,
    <FaTools className={iconClass} />,
    <BsFillPeopleFill className={iconClass} />,
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


/* import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import {
  FaRegLightbulb,
  FaClock,
  FaHandshake,
  FaStar,
  FaTools,
} from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi2';
import { BsFillPeopleFill } from 'react-icons/bs';

const WhyWorkWithMe = () => {
  const { t } = useTranslation('translation');
  

  const iconClass = 'text-black dark:text-white text-3xl mb-4';

  const reasons = [
    {
      icon: <FaRegLightbulb className={iconClass} />,
      title: 'Creative & strategic thinking',
      description: 'I combine design sensibility with problem solving to build purposeful digital products.',
    },
    {
      icon: <FaClock className={iconClass} />,
      title: 'Efficient & reliable',
      description: 'I deliver on time and maintain close communication throughout the process.',
    },
    {
      icon: <FaHandshake className={iconClass} />,
      title: 'Collaborative spirit',
      description: 'I enjoy working with people and adapting to each client’s vision and goals.',
    },
    {
      icon: <HiOutlineSparkles className={iconClass} />,
      title: 'Innovative approach',
      description: 'I stay ahead of trends, bringing fresh and innovative ideas to each project.',
    },
    {
      icon: <FaTools className={iconClass} />,
      title: 'Attention to detail',
      description: 'I focus on the small details that make a big impact on the final result.',
    },
    {
      icon: <BsFillPeopleFill className={iconClass} />,
      title: 'User-first mindset',
      description: 'I design with empathy to create experiences that resonate with real people.',
    },
  ];

  return (
    <section className="px-6 py-20 bg-white text-black dark:bg-neutral-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-space font-bold text-4xl md:text-4xl">
          {t('why.heading', 'Why work with me?')}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-12 text-lg md:text-xl font-redhat max-w-2xl">
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
              <div>{reason.icon}</div>
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
 */



/* import { motion } from "framer-motion";
import React from "react";

const steps = [
  {
    title: "Fundamentos ",
    highlight: "listos para crecer.",
    description:
      "Te ayudo a elegir el hosting ideal según tus necesidades reales. Rendimiento, escalabilidad y seguridad desde el día uno. Cimientos fuertes para crecer sin límites.",
  },
  {
    title: "Un proyecto",
    highlight: "hecho a medida.",
    description:
      "Diseño wireframes y maquetas adaptadas a tu visión. Estás en cada paso para lograr algo que se sienta verdaderamente tuyo.",
  },
  {
    title: "Código",
    highlight: "eficiente y optimizado.",
    description:
      "Paso del diseño al desarrollo con foco en SEO técnico, seguridad y accesibilidad. Código limpio que rinde y funciona como tiene que funcionar.",
  },
  {
    title: "Soporte",
    highlight: "que acompaña.",
    description:
      "No desaparezco al entregar. Te enseño a usar tu sitio, te asesoro y sigo cerca para que evolucione con vos.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const WhyWorkWithMe = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white dark:bg-neutral-900 text-black dark:text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-20"
        >
          ¿Por qué trabajar conmigo?
        </motion.h2>

        <div className="relative">
          <div className="absolute top-0 left-4 md:left-6 w-1 h-full bg-gray-300 dark:bg-gray-700 rounded"></div>

          <div className="flex flex-col gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-start relative"
              >
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-500 text-white font-bold flex items-center justify-center rounded-full">
                    {`0${index + 1}`}
                  </div>
                </div>

                <div className="ml-8">
                  <h3 className="text-2xl font-semibold mb-2">
                    {step.title}{" "}
                    <span className="text-teal-500 dark:text-teal-400">
                      {step.highlight}
                    </span>
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe; */



