import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ArrowRight } from "lucide-react";
import ScrollToTop from "./ScrollToTop";
import SEO from "./SEO";

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
      className={darkMode ? "dark bg-neutral-900" : "bg-white"}
    >
      <SEO title={title} description={description} />

      <div className="md:px-20 lg:px-40 pb-16 relative">
        <div className="hidden lg:flex absolute left-380 top-[2070px] z-20 pl-2">
          <ArrowRight className="w-12 h-12 dark:text-white animate-bounce-horizontal" />
        </div>

        <div className="min-h-screen">
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
      <ScrollToTop />
    </div>
  );
}


