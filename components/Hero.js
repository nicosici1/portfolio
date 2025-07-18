import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import dynamic from 'next/dynamic';
import ParticlesConfig from '../components/ParticlesConfig';

const ParticlesBackground = dynamic(() => import('../components/ParticlesBackground'), {
  ssr: false,
});

const Hero = () => {
  const { t } = useTranslation('translation');

  return (
    <section className="relative overflow-hidden min-h-screen flex items-start justify-center pt-24 md:pt-32 px-4">
      <div className="absolute inset-0 z-0">
        <ParticlesBackground config={ParticlesConfig} className="h-[100vh] w-[100vw]" />
      </div>

      <div className="text-center relative z-10 max-w-4xl transform -translate-y-10 md:-translate-y-20">
        <motion.p
          className="text-sm md:text-base text-teal-500 dark:text-teal-400 font-medium mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('heroTitle.availableForProjects', 'Available for projects')}
        </motion.p>

        <motion.h1
          className="font-bold text-5xl md:text-7xl tracking-tight leading-tight text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t('heroTitle.line1', 'Technology at the')}{' '}
          <span className="text-teal-500 dark:text-teal-400">
            {t('heroTitle.highlight1', 'service')}
          </span>
          <br />
          {t('heroTitle.line2', 'of your')}{' '}
          <span className="bg-teal-100 dark:bg-teal-600 text-teal-900 dark:text-white px-3 rounded-lg inline-block mt-2">
            {t('heroTitle.highlight2', 'ideas')}
          </span>.
        </motion.h1>

        <motion.p
          className="mt-6 text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-sf font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {t('heroTitle.heroDescription', 'Modern web solutions')}
        </motion.p>

        <motion.div
          className="text-5xl flex justify-center gap-16 py-5 text-teal-500 dark:text-teal-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://www.linkedin.com/in/nicol%C3%A1s-siciliano-087794171/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <AiFillLinkedin className="hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="https://github.com/nicosici1"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <AiFillGithub className="hover:scale-110 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

// components/Hero.js
/* import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import dynamic from 'next/dynamic';
import ParticlesConfig from "../components/ParticlesConfig";


const ParticlesBackground = dynamic(() => import('../components/ParticlesBackground'), {
  ssr: false,
});

const Hero = () => {
  const { t } = useTranslation();

  

  return (
    <section className="relative overflow-hidden min-h-screen flex items-start justify-center pt-24 md:pt-32 px-4">
      <div className="absolute inset-0 z-0">
        <ParticlesBackground config={ParticlesConfig} className="h-[100vh] w-[100vw]" />
      </div>

      <div className="text-center relative z-10 max-w-4xl transform -translate-y-10 md:-translate-y-20">
        <motion.p
          className="text-sm md:text-base text-teal-500 dark:text-teal-400 font-medium mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t("availableForProjects")}
        </motion.p>

        <motion.h1
          className="font-bold text-5xl md:text-7xl tracking-tight leading-tight text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t("heroTitle.line1")}
          <span className="text-teal-500 dark:text-teal-400">
            {t("heroTitle.highlight1")}
          </span>
          <br />
          {t("heroTitle.line2")}
          <span className="bg-teal-100 dark:bg-teal-600 text-teal-900 dark:text-white px-3 rounded-lg inline-block mt-2">
            {t("heroTitle.highlight2")}
          </span>.
        </motion.h1>

        <motion.p
          className="mt-6 text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-sf font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {t("heroDescription")}
        </motion.p>

        <motion.div
          className="text-5xl flex justify-center gap-16 py-5 text-teal-500 dark:text-teal-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://www.linkedin.com/in/nicol%C3%A1s-siciliano-087794171/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <AiFillLinkedin className="hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="https://github.com/nicosici1"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <AiFillGithub className="hover:scale-110 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; */
