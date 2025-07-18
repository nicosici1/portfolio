import { useTranslation } from "react-i18next";
import ScrollVelocity from "./ScrollVelocity.js";

export default function Footer({ darkMode }) {
  const { t } = useTranslation();

  return (
    <footer
      className={`relative overflow-hidden text-center text-gray-600 dark:text-gray-400 pb-16 ${
        darkMode ? "bg-neutral-900" : "bg-white"
      }`}
    >
      <div className="relative overflow-visible py-16">
        <ScrollVelocity
          texts={['Dale vida al código. Que hable por vos.']}
          velocity={25}
          className="
            text-[10vw] md:text-[8vw] font-extrabold uppercase leading-[1.1] 
            bg-gradient-to-r from-teal-500 to-cyan-500
            bg-clip-text text-transparent"
          numCopies={4}
        />
        <div className="pt-4">
          <p>© 2025 Nicolás Siciliano</p>
        </div>
      </div>
      

    </footer>
  );
}
