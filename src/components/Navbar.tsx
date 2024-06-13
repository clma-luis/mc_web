import { THEME } from "@/shared/constants/localStorageVariables";
import { HOME_URL } from "@/shared/constants/urlPaths";
import useSheet from "@/shared/hooks/useSheet";
import { useTheme } from "@/shared/providers/ThemeProviders";
import { getLocalStorage } from "@/shared/utils/localStorageUtils";
import React from "react";
import Logo from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { SettingsMenu } from "./settingsMenu";
import { Button } from "./ui/button";
import BarsIcon from "./ui/icons/BarsIcon";
import { useLanguage } from "@/shared/hooks/useLanguage";
import { LenguageType } from "@/shared/interfaces";
import { scrollToSection } from "@/shared/utils/scrollUtils";



const Navbar = () => {
  const { createSheet } = useSheet();
  const { setTheme } = useTheme();
  const { language } = useLanguage();
  const isSpanish = language === LenguageType.es;

  const currentTheme = getLocalStorage(THEME);

  React.useEffect(() => {
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  const handleOnCick = () => {
    createSheet({
      children: <MobileMenu />,
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0  border-gray-500  bg-[#FAFAFA] dark:bg-background border-b-2 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="sm:hidden ">
          <Button
            variant="ghost"
            className=" text-gray-500 bg-transparent hover:bg-transparent px-0 dark:text-white"
            onClick={handleOnCick}
          >
            <BarsIcon />
          </Button>
        </div>

        <a href={HOME_URL} className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white"></span> <Logo />
        </a>

        <div className=" hidden sm:flex md:space-x-0 rtl:space-x-reverse ">
          <ul className="flex items-center gap-0 sm:gap-4">
            <li className="hidden sm:block"
             onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            >
              <a href="#home" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                {isSpanish ? "Inicio" : "Home"}
              </a>
            </li>
            <li className="hidden sm:block"
             onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            >
              <a href="#about" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                {isSpanish ? "Sebre mi" : "About"}
              </a>
            </li>
            <li className="hidden sm:block"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}>
              <a href="#skills" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                {isSpanish ? "Habilidades" : "Skills"}
              </a>
            </li>
            
            <li
              className="hidden sm:block"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("experience");
              }}
            >
              <a href="#experience" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                {isSpanish ? "Experiencia" : "Experience"}
              </a>
            </li>
            <li className="hidden sm:block"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("portfolio");
            }}>
              <a href="#portfolio" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                {isSpanish ? "Portafolio" : "Portfolio"}
              </a>
            </li>
            <li className="hidden sm:block"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              <a href="#contact" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                {isSpanish ? "Contacto" : "Contact"}
              </a>
            </li>
          </ul>
        </div>
        <SettingsMenu />
      </div>
    </nav>
  );
};

export default Navbar;
