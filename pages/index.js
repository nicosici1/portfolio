// pages/index.js
import { useState, useEffect } from "react";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Hero from "../components/Hero.js";
import ShowcaseCards from '../components/ShowcaseCards.js';
import AboutMe from '../components/AboutMe.js';
import Services from '../components/Services.js';
import WhyWorkWithMe from "../components/WhyWorkWithMe.js";
import FAQSection from "../components/FAQSection.js";
import Contact from "../components/Contact.js";
import Layout from "../components/Layout";

export default function Home({ locale }) {
  const [darkMode, setDarkMode] = useState(false);
  const { t, i18n } = useTranslation('translation');

  useEffect(() => {
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Layout
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      toggleLanguage={toggleLanguage}
      title={t("Portfolio")}
      description={t("Portfolio de Nicolás Siciliano")}
    >
      <Hero />
      <ShowcaseCards />
      <Services />
      <AboutMe />
      <WhyWorkWithMe />
      <FAQSection />
      <Contact />
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



/* import Head from "next/head";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero.js";
import ShowcaseCards from '../components/ShowcaseCards.js';
import AboutMe from '../components/AboutMe.js';
import Services from '../components/Services.js';
import Footer from "../components/Footer";
import Layout from "../components/Layout";


import "../i18n.js";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      <div 
        className={darkMode ? "dark bg-gradient-to-b from-white to-gray-100 dark:from-neutral-900 dark:to-neutral-800" : ""} 
        
        style={{ fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif' }}
      >
        <Head>
          <title>{t("title")}</title>
          <meta name="description" content={t("metaDescription")} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="bg-white dark:bg-neutral-900 md:px-20 lg:px-40">
          <div className="min-h-screen relative">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} toggleLanguage={toggleLanguage} />
            <Hero />
          </div>

          <ShowcaseCards />
          <AboutMe />
          <Services />
        </main>

        <Footer darkMode={darkMode} />

      </div>
    </>
  );
} */



        {/* <footer
          className={`text-center py-5 text-gray-600 dark:text-gray-400 ${
            darkMode ? "bg-neutral-800" : "bg-white"
          }`}
        >
 
          <p>{t("footer")}</p>
          <div className="flex justify-center gap-4 mt-4">
            <div className="w-8 h-8 bg-teal-500"></div>
            <div className="w-8 h-8 bg-cyan-500"></div>
            <div className={darkMode ? "w-8 h-8 bg-white" : "w-8 h-8 bg-neutral-800"}></div>
          </div>
        </footer> */}

{/* <nav className="py-10 mb-12 flex justify-between dark:text-white">
              <p className="text-2xl bg-gradient-to-r from-cyan-500 to-teal-500 text-transparent bg-clip-text hover:scale-105 transition-transform duration-300">
                nicolás.dev
              </p>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl"
                  />
                </li>
                <li>
                  <MdTranslate
                    onClick={toggleLanguage}
                    className="cursor-pointer text-2xl ml-4 hover:text-teal-500 transition-colors"
                  />
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                    href="/CV-NicolasSiciliano.pdf"
                    target="_blank"
                  >
                    {t("resume")}
                  </a>
                </li>
              </ul>
            </nav> */}



     {/* <section className="relative overflow-hidden min-h-screen flex items-start justify-center pt-24 md:pt-32 px-4">
            
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
                  {t("availableForProjects") ?? "Disponible para proyectos"}
                </motion.p>
            
                <motion.h1
                  className="font-bold text-5xl md:text-7xl tracking-tight leading-tight text-gray-900 dark:text-white"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {t("heroTitle.line1")}{" "}
                  <span className="text-teal-500 dark:text-teal-400">
                    {t("heroTitle.highlight1")}
                  </span>
                  <br/>
                  {t("heroTitle.line2")}{" "}
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
                  {t("heroDescription") ?? (
                    <>
                      I develop modern web solutions by integrating design, logic, and external services <br className="hidden md:inline" />
                      to bring impactful projects to life.
                    </>
                  )}
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
            </section> */}

     {/* <Image
                    className="rounded-lg object-cover"
                    width={64} 
                    height={64}
                    layout="fixed"
                    src={avatar}
                    alt={t("avatar")}
                  /> */}
   


      {/* <div className="mt-8">
                  <a
                    href="#contacto"
                    className="bg-teal-500 hover:bg-teal-600 dark:bg-teal-400 dark:hover:bg-teal-500 text-white font-semibold py-3 px-6 rounded-full text-lg transition-all duration-300 shadow-lg"
                  >
                    {t("discoverMore") ?? "Descubre más"}
                  </a>
                </div> */}





           /* <div className="text-center p-10 py-10">
              <div className="m-5">
                <ParticlesBackground config={ParticlesConfig} className="h-[100vh] w-[100vw]" />
              </div>
              <div>
                <h1 className="text-5xl py-2 text-teal-600 font-bold dark:text-teal-400 md:text-6xl">
                  Nicolás Siciliano
                </h1>
                <h2 className="text-2xl py-2 font-medium dark:text-white md:text-3xl">
                  {t("softwareDeveloper")}
                </h2>
                <p className="text-md py-5 font-regular leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                  {t("greeting")}
                </p>
                <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                  <a
                    href="https://www.linkedin.com/in/nicol%C3%A1s-siciliano-087794171/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillLinkedin />
                  </a>
                  <a href="https://github.com/nicosici1" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub />
                  </a>
                </div>
              </div>
            </div> */




            {/* <div className="text-center relative py-20">
              <div className="relative z-10">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-6xl md:text-8xl py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-transparent bg-clip-text font-extrabold tracking-tight"
                >
                  Tecnología al servicio de tus ideas
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="text-3xl md:text-4xl py-4 font-semibold text-gray-800 dark:text-gray-200"
                >
                  {t("developModern")}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="text-lg md:text-xl py-5 font-regular leading-8 text-gray-600 dark:text-gray-300 max-w-lg mx-auto"
                >
                  {t("greeting")}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.9 }}
                  className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400"
                >
                  <a
                    href="https://www.linkedin.com/in/nicol%C3%A1s-siciliano-087794171/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillLinkedin className="hover:text-teal-500 transition-colors" />
                  </a>
                  <a href="https://github.com/nicosici1" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub className="hover:text-teal-500 transition-colors" />
                  </a>
                </motion.div>
              </div>
            </div> */}






/* {<section>
            <div>
              <h3 className="text-6xl md:text-5xl font-bold dark:text-white">{t("servicesTitle")}</h3>
              <p className="mt-6 text-xl md:text-2xl text-gray-800 dark:text-gray-300">
                {t("servicesDescription")}
              </p>
            </div>
            
            <div className="lg:flex gap-10">
        
              {[
                {
                  icon: <FaLaptopCode className="text-6xl mx-auto text-teal-500 dark:text-teal-400 hover:scale-110 transition-transform" />,
                  title: t("landingPagesTitle"),
                  description: t("landingPagesDescription"),
                  subtitle: t("whatIOffer"),
                  offers: [
                    t("landingPagesOffer1"),
                    t("landingPagesOffer2"),
                    t("landingPagesOffer3"),
                    t("landingPagesOffer4"),
                  ]
                },
                {
                  icon: <FaPaintBrush className="text-6xl mx-auto text-teal-500 dark:text-teal-400 hover:scale-110 transition-transform" />,
                  title: t("designsTitle"),
                  description: t("designsDescription"),
                  subtitle: t("designTools"),
                  offers: [
                    t("photoshop"),
                    t("illustrator")
                  ]
                },
                {
                  icon: <FaReact className="text-6xl mx-auto text-teal-500 dark:text-teal-400 hover:scale-110 transition-transform" />,
                  title: t("mernTitle"),
                  description: t("mernDescription"),
                  subtitle: t("whatIOffer"),
                  offers: [
                    t("mernOffer1"),
                    t("mernOffer2"),
                    t("mernOffer3"),
                    t("mernOffer4"),
                  ]
                }
              ].map((card, i) => (
                <div
                  key={i}
                  className="text-center p-10 rounded-3xl my-10 bg-white/90 dark:bg-neutral-800/90 text-black dark:text-white flex-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-neutral-700"
                >
                  {card.icon}
                  <h3 className="text-2xl font-semibold pt-8 pb-2 tracking-tight">{card.title}</h3>
                  <p className="py-2 text-lg text-gray-700 dark:text-gray-300">{card.description}</p>
                  <h4 className="py-4 text-teal-500 font-semibold">{card.subtitle}</h4>
                  {card.offers.map((offer, j) => (
                    <p key={j} className="text-teal-600 py-1 text-base">{offer}</p>
                  ))}
                </div>
              ))}
            </div>
          </section>} */




{/* <section>
              <div>
                  <h3 className="text-6xl md:text-5xl font-bold dark:text-white">{t("servicesTitle")}</h3>
                  <p className="mt-6 text-xl md:text-2xl text-gray-800 dark:text-gray-200">
                      {t("servicesDescription")}
                  </p>
              </div>
              <div className="lg:flex gap-10">
                  <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-neutral-800 text-black dark:text-white flex-1 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                      <FaLaptopCode className="text-6xl mx-auto text-teal-500 dark:text-teal-400 hover:scale-110 transition-transform" />
                      <h3 className="text-2xl font-bold pt-8 pb-2">{t("landingPagesTitle")}</h3>
                      <p className="py-2 text-lg">{t("landingPagesDescription")}</p>
                      <h4 className="py-4 text-teal-500 font-semibold">{t("whatIOffer")}</h4>
                      <p className="text-teal-600 py-1 text-base">{t("landingPagesOffer1")}</p>
                      <p className="text-teal-600 py-1 text-base">{t("landingPagesOffer2")}</p>
                      <p className="text-teal-600 py-1 text-base">{t("landingPagesOffer3")}</p>
                      <p className="text-teal-600 py-1 text-base">{t("landingPagesOffer4")}</p>
                  </div>
                  <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-neutral-800 text-black dark:text-white flex-1 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                      <FaPaintBrush className="text-6xl mx-auto text-teal-500 dark:text-teal-400 hover:scale-110 transition-transform" />
                      <h3 className="text-2xl font-bold pt-8 pb-2">{t("designsTitle")}</h3>
                      <p className="py-2 text-lg">{t("designsDescription")}</p>
                      <h4 className="py-4 text-teal-500 font-semibold">{t("designTools")}</h4>
                      <p className="text-teal-600 py-1 text-base">{t("photoshop")}</p>
                      <p className="text-teal-600 py-1 text-base">{t("illustrator")}</p>
                  </div>
                  <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-neutral-800 text-black dark:text-white flex-1 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                      <FaReact className="text-6xl mx-auto text-teal-500 dark:text-teal-400 hover:scale-110 transition-transform" />
                      <h3 className="text-2xl font-bold pt-8 pb-2">{t("mernTitle")}</h3>
                      <p className="py-2 text-lg">{t("mernDescription")}</p>
                      <h4 className="py-4 text-teal-500 font-semibold">{t("whatIOffer")}</h4>
                      <p className="text-teal-600 py-1 text-base">{t("mernOffer1")}</p>
                      <p className="text-teal-600 py-1 text-base">{t("mernOffer2")}</p>
                      <p className="text-teal-600 py-1 text-base">{t("mernOffer3")}</p>
                      <p className="text-teal-600 py-1 text-base">{t("mernOffer4")}</p>
                  </div>
              </div>
          </section> */}



            {/* <section>

            <div>
              <h3 className="text-3xl py-1 font-bold dark:text-white">{t("servicesTitle")}</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                {t("servicesDescription")}
              </p>
            </div>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-neutral-800 text-black dark:text-white flex-1 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ">
                <FaLaptopCode className="text-6xl mx-auto text-teal-500 dark:text-teal-400 hover:scale-110 transition-transform" />
                <h3 className="text-lg font-medium pt-8 pb-2">{t("landingPagesTitle")}</h3>
                <p className="py-2">{t("landingPagesDescription")}</p>
                <h4 className="py-4 text-teal-500">{t("whatIOffer")}</h4>
                <p className="text-teal-600 py-1">{t("landingPagesOffer1")}</p>
                <p className="text-teal-600 py-1">{t("landingPagesOffer2")}</p>
                <p className="text-teal-600 py-1">{t("landingPagesOffer3")}</p>
                <p className="text-teal-600 py-1">{t("landingPagesOffer4")}</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-neutral-800 text-black dark:text-white flex-1 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <FaPaintBrush className="text-6xl mx-auto text-teal-500 dark:text-teal-400 hover:scale-110 transition-transform" />
                <h3 className="text-lg font-medium pt-8 pb-2">{t("designsTitle")}</h3>
                <p className="py-2">{t("designsDescription")}</p>
                <h4 className="py-4 text-teal-500">{t("designTools")}</h4>
                <p className="text-teal-600 py-1">{t("photoshop")}</p>
                <p className="text-teal-600 py-1">{t("illustrator")}</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-neutral-800 text-black dark:text-white flex-1 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <FaReact className="text-6xl mx-auto text-teal-500 dark:text-teal-400 hover:scale-110 transition-transform" />
                <h3 className="text-lg font-medium pt-8 pb-2">{t("mernTitle")}</h3>
                <p className="py-2">{t("mernDescription")}</p>
                <h4 className="py-4 text-teal-500">{t("whatIOffer")}</h4>
                <p className="text-teal-600 py-1">{t("mernOffer1")}</p>
                <p className="text-teal-600 py-1">{t("mernOffer2")}</p>
                <p className="text-teal-600 py-1">{t("mernOffer3")}</p>
                <p className="text-teal-600 py-1">{t("mernOffer4")}</p>
              </div>
            </div>
          </section>
          
          <section className="py-10">
            <div>
              <h3 className="text-3xl py-1 font-bold dark:text-white">{t("portfolioTitle")}</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                {t("portfolioDescription1")}
              </p>
              <p className="py-2 leading-8 text-gray-800 dark:text-gray-200">
                {t("portfolioDescription2")}
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1 relative group">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={ecommerce}
                  alt={t("ecommerceAlt")}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <h4 className="text-white text-xl font-bold mb-4">E-commerce</h4>
                  <a
                    href={repositorio1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
                  >
                    {t("visitProject")}
                  </a>
                </div>
              </div>
              <div className="basis-1/3 flex-1 relative group">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={deporte360}
                  alt={t("deporte360Alt")}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <h4 className="text-white text-xl font-bold mb-4">Deporte 360</h4>
                  <a
                    href={repositorio2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
                  >
                    {t("visitProject")}
                  </a>
                </div>
              </div>
            </div>
          </section> */}

          