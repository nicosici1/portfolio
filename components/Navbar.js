import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdTranslate } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Navbar({ darkMode, setDarkMode, toggleLanguage }) {
  const { t } = useTranslation();

  return (
    <nav className="py-10 mb-12 flex justify-between dark:text-white">
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
    </nav>
  );
}
