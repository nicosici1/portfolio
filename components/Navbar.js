import { useState, useEffect } from "react";
import { FiGlobe, FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "next-i18next";
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar({ darkMode, setDarkMode, toggleLanguage }) {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-neutral-900/30 px-6 md:px-20 lg:px-40 py-4 flex justify-between items-center dark:text-white">
       {isMounted ? (
        <Link href="/">
          <Image
            src={darkMode ? "/assets/logo-light.svg" : "/assets/logo-dark.svg"}
            alt="Nicolás Siciliano Logo"
            width={32}
            height={32}
            className="h-8 w-auto hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </Link>
      ) : (
        <div className="h-8 w-32" />
      )}

      <ul className="hidden md:flex items-center space-x-4">
        <li className="relative group">
          <div
            className="relative w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full cursor-pointer flex items-center"
            onClick={() => setDarkMode(!darkMode)}
          >
            <div
              className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                darkMode ? "translate-x-6" : "translate-x-1"
              }`}
            ></div>
          </div>
          <span
            suppressHydrationWarning
            className="absolute left-1/2 transform -translate-x-1/2 top-10 text-sm text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {t(darkMode ? "dark_mode.light" : "dark_mode.dark")}
          </span>
        </li>

        <li className="relative group">
          {isMounted && (
            <>
              <FiGlobe
                onClick={toggleLanguage}
                className="cursor-pointer text-2xl"
              />
              <span
                suppressHydrationWarning
                className="absolute left-1/2 transform -translate-x-1/2 top-10 text-sm text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {t("change_language")}
              </span>
            </>
          )}
        </li>
      </ul>

      <div className="md:hidden">
        {isMenuOpen ? (
          <FiX
            className="text-3xl cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
        ) : (
          <FiMenu
            className="text-3xl cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        )}
      </div>

      {isMounted && isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md flex flex-col items-center space-y-4 py-6 px-4 md:hidden z-40">
          <div
            className="relative w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full cursor-pointer flex items-center"
            onClick={() => {
              setDarkMode(!darkMode);
              setIsMenuOpen(false);
            }}
          >
            <div
              className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                darkMode ? "translate-x-6" : "translate-x-1"
              }`}
            ></div>
          </div>
          <span suppressHydrationWarning>
            {t(darkMode ? "dark_mode.light" : "dark_mode.dark")}
          </span>
          <FiGlobe
            onClick={() => {
              toggleLanguage();
              setIsMenuOpen(false);
            }}
            className="cursor-pointer text-2xl"
          />
          <span suppressHydrationWarning>{t("change_language")}</span>
        </div>
      )}
    </nav>
  );
}

/* import { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { MdTranslate } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";


export default function Navbar({ darkMode, setDarkMode, toggleLanguage }) {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-neutral-900/30 px-6 md:px-20 lg:px-40 py-4 flex justify-between items-center dark:text-white">
      <img
        src={darkMode ? "assets/logo-light.svg" : "assets/logo-dark.svg"}
        alt="Nicolás Siciliano Logo"
        className="h-8 w-auto hover:scale-105 transition-transform duration-300"
      />

      <ul className="hidden md:flex items-center space-x-4">
        <li className="relative group">
          {darkMode ? (
            <BsFillSunFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl hover:scale-110 transition-transform"
              aria-label="Cambiar a modo claro"
            />
          ) : (
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl hover:scale-110 transition-transform"
              aria-label="Cambiar a modo oscuro"
            />
          )}
          <span className="absolute left-1/2 transform -translate-x-1/2 top-10 text-sm text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            {darkMode ? t("light_mode", "Modo Claro") : t("dark_mode", "Modo Oscuro")}
          </span>
        </li>
        <li>
          <MdTranslate
            onClick={toggleLanguage}
            className="cursor-pointer text-2xl"
          />
        </li>
      </ul>

      <div className="md:hidden">
        {isMenuOpen ? (
          <FiX
            className="text-3xl cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
        ) : (
          <FiMenu
            className="text-3xl cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        )}
      </div>

      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md flex flex-col items-center space-y-4 py-6 px-4 md:hidden z-40">
          <BsFillSunFill
            onClick={() => {
              setDarkMode(!darkMode);
              setIsMenuOpen(false);
            }}
            className="cursor-pointer text-2xl"
          />
          <MdTranslate
            onClick={() => {
              toggleLanguage();
              setIsMenuOpen(false);
            }}
            className="cursor-pointer text-2xl"
          />
        </div>
      )}
    </nav>
  );
}
 */