import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const FAQSection = () => {
  const { t } = useTranslation('translation');
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = t('faqs.questions', { returnObjects: true });

  return (
    <section id="faq" className="bg-white dark:bg-neutral-900 text-gray-900 dark:text-white px-6 md:px-8 py-20 scroll-mt-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-space font-bold text-4xl md:text-4xl leading-snug text-transparent animate-gradient">
            {t('faqs.titleLine1')}
            <br />
            {t('faqs.titleLine2')}
            <br />
            {t('faqs.titleLine3')}
          </h2>
        </motion.div>

        <div className="flex flex-col divide-y divide-neutral-200 dark:divide-white/80">
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
                className="py-5 cursor-pointer transition-all duration-300"
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-center">
                  <p className="text-base md:text-lg font-bold text-gray-800 dark:text-white font-space">
                    {faq.q}
                  </p>
                  {isOpen ? (
                    <ChevronDown className="w-5 h-5 text-neutral-900 dark:text-white" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-neutral-900 dark:text-white" />
                  )}
                </div>
                {isOpen && faq.a && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 text-gray-800 dark:text-neutral-100 font-redhat leading-relaxed"
                  >
                    {faq.a}
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
