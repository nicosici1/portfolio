// components/Layout.jsx

import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ 
  children, 
  darkMode, 
  setDarkMode, 
  toggleLanguage, 
  title, 
  description 
}) {
  return (
    <div
      className={darkMode ? "dark bg-gradient-to-b from-white to-gray-100 dark:from-neutral-900 dark:to-neutral-800" : ""}
      style={{ fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif' }}
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white dark:bg-neutral-900 md:px-20 lg:px-40 pb-16">
        <div className="min-h-screen relative">
          <Navbar 
            darkMode={darkMode} 
            setDarkMode={setDarkMode} 
            toggleLanguage={toggleLanguage} 
          />
          <main>
          {children}
          </main>
        </div>
      </div>

      <Footer darkMode={darkMode} />
    </div>
  );
}
