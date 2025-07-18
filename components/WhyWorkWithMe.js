import { motion } from "framer-motion";
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
          className="text-4xl md:text-5xl font-bold text-center mb-20"
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

export default WhyWorkWithMe;



/* import React from 'react';
import { FaServer, FaDraftingCompass, FaCode, FaHandsHelping } from 'react-icons/fa';

const WhyWorkWithMe = () => {
  const steps = [
    {
      title: 'Sólido',
      highlight: 'fundación.',
      description: 'Proporciono mi experiencia para seleccionar el alojamiento más adecuado para sus necesidades reales. Cada elección se filtra cuidadosamente para garantizar un alto rendimiento, escalabilidad y seguridad, sentando una base sólida para su proyecto digital.',
      icon: <FaServer className="text-4xl text-teal-500 dark:text-teal-400" />,
    },
    {
      title: 'Un proyecto',
      highlight: 'a su medida.',
      description: 'El análisis es el corazón de un proyecto exitoso. Creo wireframes y maquetas personalizadas, involucrándolo en cada fase para garantizar que el resultado final satisfaga perfectamente sus necesidades y objetivos.',
      icon: <FaDraftingCompass className="text-4xl text-teal-500 dark:text-teal-400" />,
    },
    {
      title: 'Código',
      highlight: 'que funciona.',
      description: 'Paso del diseño al desarrollo, centrándome en SEO técnico, seguridad y accesibilidad. Cada línea de código está diseñada para optimizar el rendimiento y garantizar una experiencia de usuario impecable.',
      icon: <FaCode className="text-4xl text-teal-500 dark:text-teal-400" />,
    },
    {
      title: 'Soporte',
      highlight: 'que permanece.',
      description: 'Capacito al cliente para administrar el sitio de forma independiente y ofrecer asesoramiento continuo. Me quedo a su lado para asegurarme de que el sitio crezca con usted y continúe funcionando al máximo.',
      icon: <FaHandsHelping className="text-4xl text-teal-500 dark:text-teal-400" />,
    },
  ];

  return (
    <section className="px-6 md:px-12 py-24 transition-colors duration-300 bg-white dark:bg-neutral-900 dark:from-neutral-900 text-black dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          ¿Por qué trabajar conmigo?
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-6">
              <div>{step.icon}</div>
              <div>
                <h3 className="text-2xl font-semibold leading-snug">
                  {step.title} <span className="text-teal-500 dark:text-teal-400">{step.highlight}</span>
                </h3>
                <p className="mt-3 text-base text-gray-700 dark:text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
 */