'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useUI } from '../context/UIContext';

const ContactSection = () => {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const { showNotification } = useUI();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEmailClick = () => {
    showNotification(t('Contact.emailCopied', 'Email copiado al portapapeles'), 'success');
  };

  if (!mounted) return null;

  return (
    <section 
      id="contact"
      className="bg-white dark:bg-neutral-800 rounded-3xl text-black dark:text-white py-24 md:py-48 px-6 md:px-0 scroll-mt-32"
      role="region"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        <motion.h2 
          id="contact-heading"
          className="text-4xl md:text-6xl font-bold font-monograf leading-tight md:leading-snug"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('Contact.title.part1')}{' '}
          <span className="bg-[#4B4BF9] bg-clip-text text-transparent">
            {t('Contact.title.highlight')}
          </span>
          <br />
          {t('Contact.title.part2')}
        </motion.h2>

        <motion.div
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-base md:text-xl font-sans text-black/80 dark:text-white/80 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t('Contact.subtitle')}
          </motion.p>

          <motion.a
            href={`mailto:${t('Contact.email')}`}
            aria-label={`Enviar correo a ${t('Contact.email')}`}
            className="text-lg md:text-4xl font-bold font-sans 
                       dark:text-white dark:hover:text-[#A98BFF] dark:hover:decoration-[#A98BFF]
                       text-[#7F5AF0] hover:text-[#A98BFF] hover:decoration-[#A98BFF] hover:bg-[#A98BFF]/10 hover:rounded-md hover:px-4 hover:py-2
                       underline decoration-2 underline-offset-8 transition-all duration-300
                       cursor-pointer"
            role="button"
            onClick={handleEmailClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('Contact.email')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;