import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Link } from 'react-scroll';
import { ArrowDown } from 'lucide-react';

const ParticlesConfig = require('../components/ParticlesConfig').default;
const ParticlesBackground = dynamic(() => import('../components/ParticlesBackground'), { ssr: false });

const Hero = () => {
  /* const { t } = useTranslation('translation'); */
  const { t, i18n } = useTranslation('translation');

  const cvLink = i18n.language === 'es' 
  ? '/cv-nicolas.siciliano-ES.pdf' 
  : '/cv-nicolas.siciliano-EN.pdf';


  return (
    <section className="relative min-h-screen flex items-start justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParticlesBackground config={ParticlesConfig} className="h-full w-full" />
      </div>

      <div className="text-center mt-36 md:mt-48 relative z-10 max-w-4xl transform -translate-y-10 md:-translate-y-20">

        <motion.p
          className="text-xs md:text-sm font-redhat tracking-widest uppercase bg-gradient-to-r from-[#A98BFF] to-[#4B4BF9] bg-clip-text text-transparent font-semibold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('hero.availableForProjects')}
        </motion.p>

        <motion.h1
          className="font-space font-bold text-5xl md:text-7xl tracking-tight leading-tight text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t('hero.line1')}{' '}
          <span className="bg-gradient-to-r from-[#A98BFF] to-[#4B4BF9] bg-clip-text text-transparent">
            {t('hero.highlight1')}
          </span>
          <br />
          {t('hero.line2')}{' '}
          <span className="inline-block relative px-5 py-2 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-lg shadow-xl text-[#4B4BF9] dark:text-white font-semibold animate-pulse border border-white/10">
            {t('hero.highlight2')}
          </span>.
        </motion.h1>

        <motion.p
          className="mt-6 text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-redhat"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {t('hero.Description')}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-100}
            className="cursor-pointer bg-black/90 hover:bg-black text-white font-bold py-3 px-6 rounded-full text-lg backdrop-blur-xl transition-all shadow-xl dark:bg-white/10 dark:hover:bg-white/20 dark:border dark:border-white/20"
          >
            {t('hero.cta1')}
          </Link>

          <a
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer bg-black/90 hover:bg-black text-white font-bold py-3 px-6 rounded-full text-lg backdrop-blur-xl transition-all shadow-xl dark:bg-white/10 dark:hover:bg-white/20 dark:border dark:border-white/20"
          >
            {t('hero.cvButton')}
          </a>
        </motion.div>

        <Link
          to="showcase"
          smooth={true}
          duration={600}
          offset={-50}
          className="mt-32 md:mt-80 flex justify-center animate-bounce cursor-pointer"
        >
          <ArrowDown className="w-8 h-8 dark:text-white animate-bounce" />
        </Link>

      </div>
    </section>
  );
};

export default Hero;


/* import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Link } from 'react-scroll';
import { ArrowDown } from 'lucide-react';
const ParticlesConfig = require('../components/ParticlesConfig').default;
const ParticlesBackground = dynamic(() => import('../components/ParticlesBackground'), { ssr: false });

const Hero = () => {
  const { t } = useTranslation('translation');

  return (
    <section className="relative min-h-screen flex items-start justify-center px-4 overflow-hidden">

      <div className="absolute inset-0 z-0">
        <ParticlesBackground config={ParticlesConfig} className="h-full w-full" />
      </div>

      <div className="text-center mt-36 md:mt-48 relative z-10 max-w-4xl transform -translate-y-10 md:-translate-y-20">

        <motion.p
          className="text-sm font-redhat md:text-base bg-gradient-to-r from-[#A98BFF] to-[#4B4BF9] bg-clip-text text-transparent font-medium mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('heroTitle.availableForProjects', 'Available for projects')}
        </motion.p>

        <motion.h1
          className="font-space font-bold text-5xl md:text-7xl tracking-tight leading-tight text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t('heroTitle.line1', 'Technology at the')}{' '}
          <span className="bg-gradient-to-r from-[#A98BFF] to-[#4B4BF9] bg-clip-text text-transparent">
            {t('heroTitle.highlight1', 'service')}
          </span>
          <br />
          {t('heroTitle.line2', 'of your')}{' '}
          <span className="inline-block relative px-5 py-2 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-lg shadow-xl text-[#4B4BF9] dark:text-white font-semibold animate-pulse border border-white/10">
            {t('heroTitle.highlight2', 'ideas')}
          </span>.
        </motion.h1>

        <motion.p
          className="mt-6 text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-redhat"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {t('heroTitle.heroDescription', 'Modern web solutions')}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-100}
            className="cursor-pointer bg-black/90 hover:bg-black text-white font-bold py-3 px-6 rounded-full text-lg backdrop-blur-xl transition-all shadow-xl dark:bg-white/10 dark:hover:bg-white/20 dark:border dark:border-white/20"
          >
            {t('heroTitle.cta1', 'Let’s talk')}
          </Link>

          <a
            href="/cv-nicolas-siciliano.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer bg-black/90 hover:bg-black text-white font-bold py-3 px-6 rounded-full text-lg backdrop-blur-xl transition-all shadow-xl dark:bg-white/10 dark:hover:bg-white/20 dark:border dark:border-white/20"
          >
            {t('heroTitle.cvButton', 'View CV')}
          </a>
        </motion.div>

        <Link
          to="showcase"
          smooth={true}
          duration={600}
          offset={-50}
          className="mt-32 md:mt-80 flex justify-center animate-bounce cursor-pointer"
        >
          <ArrowDown className="w-8 h-8 dark:text-white animate-bounce" />

        </Link>

      </div>
    </section>
  );
};

export default Hero; */





/* CON COLOR BLUR GLLASSS */
{/* <section className="relative min-h-screen flex items-start justify-center px-4 overflow-hidden bg-[#0e0d12] text-white">

  <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-cyan-500 opacity-20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-teal-400 opacity-20 rounded-full blur-2xl"></div>
  <div className="absolute top-1/3 left-1/2 w-[200px] h-[200px] bg-cyan-400 opacity-10 rounded-full blur-2xl"></div>


  <div className="absolute inset-0 z-0">
    <ParticlesBackground config={ParticlesConfig} className="h-full w-full" />
  </div>

  <div className="text-center mt-36 md:mt-48 relative z-10 max-w-4xl transform -translate-y-10 md:-translate-y-20">
    <motion.p
      className="text-sm font-redhat md:text-base bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent font-medium mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {t('heroTitle.availableForProjects', 'Available for projects')}
    </motion.p>

    <motion.h1
      className="font-space font-bold text-5xl md:text-7xl tracking-tight leading-tight text-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {t('heroTitle.line1', 'Technology at the')}{' '}
      <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
        {t('heroTitle.highlight1', 'service')}
      </span>
      <br />
      {t('heroTitle.line2', 'of your')}{' '}
      <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
        {t('heroTitle.highlight2', 'vision')}
      </span>
    </motion.h1>

    <motion.div
      className="mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <Link
        to="projects"
        smooth={true}
        duration={500}
        className="cursor-pointer inline-block bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-full transition-colors"
      >
        {t('heroTitle.cta', 'Discover my work')}
      </Link>
    </motion.div>
  </div>
</section> */}


/* import { useTranslation } from 'next-i18next';
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
    <section className="relative overflow-hidden min-h-screen flex items-start justify-center px-4">

      <div className="absolute inset-0 z-0">
        <ParticlesBackground config={ParticlesConfig} className="h-[100vh] w-[100vw]" />
      </div>

      <div className="text-center mt-36 md:mt-48 relative z-10 max-w-4xl transform -translate-y-10 md:-translate-y-20">
        <motion.p
          className="text-sm font-redhat md:text-base text-teal-500 dark:text-teal-400 font-medium mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('heroTitle.availableForProjects', 'Available for projects')}
        </motion.p>

        <motion.h1
          className="font-space font-bold text-5xl md:text-7xl tracking-tight leading-tight text-gray-900 dark:text-white"
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
          className="mt-6 text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-sf font-redhat"
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
 */
