import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useUI } from '../context/UIContext';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const { t } = useTranslation('translation');
  const titleRef = useRef(null);
  const [visibleRatio, setVisibleRatio] = useState(0);
  const { darkMode } = useUI();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisibleRatio(entry.intersectionRatio);
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i * 0.1),
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  const brightness = 70 + visibleRatio * 20;
  
  // Ajustamos el degradado según el modo
  const gradient = darkMode 
    ? `linear-gradient(to bottom, #A98BFF 0%, #E2DEFF 50%, #4B4BF9 100%)`
    : `linear-gradient(to bottom, #4B4BF9 0%, #7F5AF0 50%, #A98BFF 100%)`;

  return (
    <section className="dark:text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold leading-tight font-redhat bg-clip-text text-transparent transition-all duration-300 ease-in-out"
          style={{
            backgroundImage: gradient,
            textShadow: darkMode 
              ? 'none' 
              : '0 2px 4px rgba(0,0,0,0.1)',
            WebkitTextStroke: darkMode 
              ? 'none' 
              : '0.5px rgba(0,0,0,0.1)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('aboutMe.heading')}
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <motion.div 
            className="flex-1 space-y-4 max-w-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-space font-bold text-4xl md:text-3xl">
              {t('aboutMe.title')}
            </h3>
          </motion.div>

          <motion.div 
            className="flex-1 space-y-6 max-w-md font-redhat text-sm md:text-base leading-relaxed"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="font-semibold text-lg md:text-xl">
              {t('aboutMe.paragraph1')}
            </p>
            <p className="font-redhat text-base md:text-lg text-gray-400 dark:text-gray-300 leading-relaxed">
              {t('aboutMe.paragraph2')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;




/* import React, { useEffect, useState } from 'react';
MI SUPER ABOUT HERMOSO.
const AboutMe = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = window.scrollY / maxScroll;
      setScrollY(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dynamicGradient = `linear-gradient(to right, 
    hsl(${260 + scrollY * 60}, 100%, 80%), 
    hsl(${240 + scrollY * 80}, 100%, 60%))`;

  return (
    <section className="dark:text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2
          className="text-4xl md:text-6xl font-bold leading-tight font-redhat bg-clip-text text-transparent"
          style={{
            backgroundImage: dynamicGradient,
            transition: 'background-image 0.2s ease',
          }}
        >
          I turn complexity into digital simplicity, with an approach that blends modern design and
          exceptional performance. Coding isn't just my job—it's my passion.
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex-1 space-y-4 max-w-md">
            <h3 className="font-space font-bold text-4xl md:text-3xl">ABOUT ME</h3>
          </div>

          <div className="flex-1 space-y-4 max-w-md font-redhat text-sm md:text-base leading-relaxed">
            <p className="font-semibold">Front-End Developer</p>
            <p>
              I specialize in crafting dynamic and responsive websites with careful attention to detail,
              ensuring smooth and engaging user experiences. I love working with the latest technologies
              and turning ideas into digital realities. I'm passionate about exploring new design trends
              and constantly improving my skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; */




/* bg-gradient-to-b from-[#0B0B22] to-[#1A1A3A] */


/* import { ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';

const ScrollReveal = dynamic(() => import('./ScrollReveal.js'), {
  ssr: false,
});

export default function AboutMe() {
  const { t } = useTranslation();

  const scrollToNext = () => {
    document.querySelector('#next-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-neutral-900 text-white px-6 md:px-12 md:py-72 flex flex-col md:flex-row items-center justify-between gap-12">

    <div className="flex-1">
      <h3 className="text-sm font-semibold tracking-widest text-[#4ef0e7] uppercase mb-2">About Me</h3>
      <h2 className="text-2xl md:text-3xl font-bold leading-tight">
        Building products at the crosspaths of AI - SAAS - WEB3
      </h2>
      <div className="mt-6 w-12 h-[2px] bg-[#4ef0e7]"></div>
    </div>
  
    <div className="flex-1 text-gray-300 space-y-6 text-[16px] leading-relaxed max-w-xl">
      <p>
        I'm a developer with a designer's mind — translating bold ideas into elegant, scalable digital experiences.
        I obsess over the tiny details: the margin between pixels, the weight of a font, and the emotion behind every interaction.
      </p>
      
      <blockquote className="border-l-4 pl-4 italic text-[#4ef0e7] border-[#4ef0e7]">
        Driven by curiosity and a relentless eye for detail, I build interfaces that not only work flawlessly,
        but resonate emotionally with users.
      </blockquote>
    </div>
  </section>
  );
} */


/* import { ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';


const ScrollReveal = dynamic(() => import('./ScrollReveal.js'), {
  ssr: false,
});

export default function AboutMe() {
  const { t } = useTranslation(); 

  return (
    <section className="px-6 md:px-12 transition-colors duration-300 min-h-screen flex relative">
      <div className="absolute top-24 left-10 md:left-32">
        <button className="dark:text-white hover:text-indigo-400 transition-colors">
          <ArrowRight size={45} />
        </button>
      </div>

      <div className="max-w-5xl mx-auto text-left py-24 pl-8 md:pl-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-teal-500 dark:text-teal-400">
          <ScrollReveal
            baseOpacity={1}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >
            {t("aboutMe.heading")}
          </ScrollReveal>
        </h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-m uppercase font-semibold dark:text-white mb-4 tracking-wider">
              {t("aboutMe.title")}
            </p>
          </div>
          <div className="max-w-xl">
            <p className="text-m uppercase font-semibold dark:text-white mb-4 tracking-wider">
              Full Stack Developer & Diseñador Frontend
            </p>
            <p className="mt-0 text-lg md:text-xl text-gray-900 dark:text-gray-300">
              {t("aboutMe.paragraph1")}
            </p>
            <p className="mt-6 text-lg md:text-xl text-gray-900 dark:text-gray-300 font-sf font-medium leading-relaxed">
              {t("aboutMe.paragraph2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
 */

