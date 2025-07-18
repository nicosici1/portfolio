import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: '¿Cuánto dura el proceso de creación del sitio?',
    answer:
      'Depende de la complejidad del proyecto, pero en general un sitio estándar puede estar listo en 1 a 3 semanas. Esto incluye diseño, desarrollo, revisión y publicación.',
  },
  {
    question: '¿Puedo modificar el sitio yo mismo una vez que se haya completado?',
    answer:
      'Sí. Si el sitio incluye un panel de administración, podrás editar contenidos fácilmente. Si lo preferís, también puedo ofrecerte una guía personalizada o un video explicativo para que sepas cómo hacerlo.',
  },
  {
    question: '¿Qué sucede si algo no funciona en el sitio?',
    answer:
      'Ofrezco un período de soporte posterior al lanzamiento para asegurarme de que todo funcione perfectamente. Si surge un problema, lo resolveré lo antes posible. Además, puedo ofrecerte un plan de mantenimiento continuo para actualizaciones, monitoreo de seguridad y optimizaciones.',
  },
  {
    question: '¿Puede integrar características específicas, como el comercio electrónico o la reserva?',
    answer:
      '¡Claro! Puedo integrar tiendas online, sistemas de reserva, formularios personalizados, pasarelas de pago, bases de datos, entre muchas otras funcionalidades según tus necesidades.',
  },
  {
    question: '¿Mi sitio estará optimizado para teléfonos inteligentes y tabletas?',
    answer:
      'Sí. Todos los sitios que desarrollo son completamente responsive, lo que significa que se adaptan y funcionan perfectamente en dispositivos móviles y tablets.',
  },
  {
    question: '¿Qué debo proporcionarte para comenzar el trabajo?',
    answer:
      'Idealmente, deberías enviarme una descripción de tu negocio, el contenido que querés mostrar (textos, imágenes, logotipo, etc.) y referencias de sitios que te gusten. Con eso puedo arrancar con el diseño.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-neutral-900 text-gray-900 dark:text-white px-6 md:px-8 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
            Paso a paso:
            <br />
            <span>Tu proyecto sin secretos</span>
          </h2>
        </motion.div>

        {/* FAQ list */}
        <div className="flex flex-col divide-y divide-gray-200 dark:divide-white/20">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                viewport={{ once: true }}
                className="py-6 cursor-pointer transition-all duration-300"
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-start">
                  <p className="text-lg font-medium text-gray-900 dark:text-white leading-snug">
                    {faq.question}
                  </p>
                  {isOpen ? (
                    <ChevronDown className="text-gray-900 dark:text-white mt-1" />
                  ) : (
                    <ChevronRight className="text-gray-900 dark:text-white mt-1" />
                  )}
                </div>
                {isOpen && faq.answer && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-sm text-gray-600 dark:text-white/80 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
