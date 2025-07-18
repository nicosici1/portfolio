import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section className="bg-white/90 dark:bg-neutral-800/90 text-black dark:text-white py-64 rounded-3xl">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        <h2 className="text-6xl md:text-8xl font-bold leading-snug">
          Tu <span className="text-teal-500">proyecto</span>
          <br />
          tu valor añadido.
        </h2>

        <motion.div
          className="mt-10 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-base md:text-lg text-black/80 dark:text-white/80">
            ¡Ponte en contacto, envíame un correo electrónico!
          </p>

          <a
            href="mailto:nico.siciliano@hotmail.com"
            className="mt-10 text-4xl md:text-6xl font-extrabold text-black dark:text-white underline decoration-2 underline-offset-8 hover:text-teal-500 transition-colors"
          >
            nico.siciliano@hotmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

