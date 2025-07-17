import { useState, useEffect } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Hero from "../components/Hero";
import ShowcaseCards from '../components/ShowcaseCards';
import AboutMe from '../components/AboutMe';
import Services from '../components/Services';
import WhyWorkWithMe from "../components/WhyWorkWithMe";
import FAQSection from "../components/FAQSection";
import Contact from "../components/Contact";
import Layout from "../components/Layout";
import { useRouter } from 'next/router';

export default function Home({ locale }) {
  const { t, i18n } = useTranslation('translation');
  const [darkMode, setDarkMode] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      setDarkMode(true);
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const el = document.querySelector(window.location.hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200); // Espera breve para asegurar que el DOM esté listo
    }
  }, [router.asPath]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Layout
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      toggleLanguage={toggleLanguage}
      title="Nicolás Siciliano | Web Developer"
      description="Portfolio de Nicolás Siciliano - Desarrollador Web Full Stack"
    >
      <Hero />
      <div id="showcase">
        <ShowcaseCards />
      </div>
      <AboutMe />
      <Services />
      <WhyWorkWithMe />
      <FAQSection />
      <div id="contact">
        <Contact />
      </div>
      
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['translation'])),
      locale,
    },
  };
}
