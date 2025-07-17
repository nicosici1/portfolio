'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import ScrollVelocity from './ScrollVelocity.js';
import { useRouter } from 'next/router'; // ✅ Import necesario

export default function Footer({ darkMode }) {
  const { t, ready } = useTranslation();
  const router = useRouter();
  const locale = router?.locale || 'en';
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!ready || !mounted) return null;

  return (
    <footer
      className={`relative overflow-hidden text-center text-gray-600 dark:text-gray-400 pb-16 ${
        darkMode ? 'bg-neutral-900' : 'bg-white'
      }`}
    >
      <div className="relative overflow-visible py-16">
        <ScrollVelocity
          texts={[t('footer.slogan')]}
          velocity={75}
          className="text-[16vw] md:text-[14vw] font-extrabold uppercase leading-[1.1] 
                     bg-gradient-to-r from-[#dbd0fa] via-[#8273f0] to-[#4B4BF9]
                     bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x"
          numCopies={4}
        />
        <div className="pt-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Projects */}
            <a
              href={`/${locale}#showcase`}
              className="relative inline-block cursor-pointer group transition-colors text-gray-600 dark:text-gray-400 text-lg"
              aria-label="Ver mis proyectos"
            >
              {t('footer.projects')}
              <span className="absolute left-0 top-0 w-0 h-[3px] mb-1 bg-gradient-to-r from-[#dbd0fa] via-[#8273f0] to-[#4B4BF9] transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* Nicolás Siciliano */}
            <p
              aria-hidden="true"
              className="relative inline-block cursor-default group transition-colors text-gray-600 dark:text-gray-400 text-lg"
            >
              © 2025 Nicolás Siciliano
              <span className="absolute left-0 top-0 w-0 h-[3px] mb-1 bg-gradient-to-r from-[#dbd0fa] via-[#8273f0] to-[#4B4BF9] transition-all duration-300 group-hover:w-full"></span>
            </p>

            {/* Social */}
            <a
              href={`/${locale}/social`}
              className="relative inline-block cursor-pointer group transition-colors text-gray-600 dark:text-gray-400 text-lg"
              aria-label="Ver mis redes sociales"
            >
              {t('footer.social')}
              <span className="absolute left-0 top-0 w-0 h-[3px] mb-1 bg-gradient-to-r from-[#dbd0fa] via-[#8273f0] to-[#4B4BF9] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
/* 
import ScrollVelocity from "./ScrollVelocity.js";
import { useEffect, useState } from "react";

export default function Footer({ darkMode }) {
  const { t, i18n } = useTranslation();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <footer
      className={`relative overflow-hidden text-center text-gray-600 dark:text-gray-400 pb-16 ${
        darkMode ? "bg-neutral-900" : "bg-white"
      }`}
    >
      <div className="relative overflow-visible py-16">
        {hasMounted && (
          <ScrollVelocity
            texts={[t("footer.slogan")]}
            velocity={75}
            className="text-[16vw] md:text-[14vw] font-extrabold uppercase leading-[1.1] 
                     bg-gradient-to-r from-[#dbd0fa] via-[#8273f0] to-[#4B4BF9]
                     bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x"
            numCopies={4}
          />
        )}
        <div className="pt-4">
             <p className="relative inline-block cursor-default group transition-colors">
               © 2025 Nicolás Siciliano
               <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#dbd0fa] via-[#8273f0] to-[#4B4BF9] transition-all duration-300 group-hover:w-full"></span>
             </p>
        </div>
      </div>
    </footer>
  );
} */



