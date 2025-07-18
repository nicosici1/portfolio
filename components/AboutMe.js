import { ArrowRight } from 'lucide-react';
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


/* 
export default function AboutMe() {
  return (
    <section className="px-6 md:px-12 transition-colors duration-300 min-h-screen flex relative">
      <div className="absolute top-24 left-10 md:left-32">
        <button className="dark:text-white hover:text-indigo-400 transition-colors">
          <ArrowRight size={45} />
        </button>
      </div>

      <div className="max-w-5xl mx-auto text-left py-24 pl-8 md:pl-16">
  
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-teal-500 dark:text-teal-400">
          Trasformo la complejidad en simplicidad digital, con un enfoque que combina diseño moderno y rendimiento excepcional.
        </h2>
    
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-m uppercase font-semibold dark:text-white mb-4 tracking-wider">
              ACERCA DE MÍ
            </p>
          </div>
          <div className="max-w-xl">
            <p className="mt-0 text-lg md:text-xl text-gray-700 dark:text-gray-300 font-sf font-medium leading-relaxed">
              Mi dedico alla creazione di siti web dinamici e responsive, curati nei dettagli per offrire esperienze utente fluide e coinvolgenti. Amo lavorare con le ultime tecnologie e trasformare le idee in realtà digitali.
            </p>
            <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 font-sf font-medium leading-relaxed">
              Disfruto explorando nuevas tendencias en diseño y mejorando continuamente mis competenze.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} */