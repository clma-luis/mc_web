import { THEME } from "@/shared/constants/localStorageVariables";
import { HOME_URL } from "@/shared/constants/urlPaths";
import { useTheme } from "@/shared/providers/ThemeProviders";
import { getLocalStorage } from "@/shared/utils/localStorageUtils";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import React from "react";
import { Button } from "./ui/button";
import Logo from "./Logo";
import BarsIcon from "./ui/icons/BarsIcon";
import useSheet from "@/shared/hooks/useSheet";
import { MobileMenu } from "./MobileMenu";
import { SettingsMenu } from "./settingsMenu";

enum ModeType {
  LIGHT = "Light",
  DARK = "Dark",
}

const Navbar = () => {
  const { createSheet } = useSheet();
  const { setTheme } = useTheme();
  const [modeType, setModeType] = React.useState(ModeType.LIGHT);
  const [isSpanish, setIsSpanish] = React.useState(false);
  const currentTheme = getLocalStorage(THEME);

  React.useEffect(() => {
    if (currentTheme) {
      setModeType(ModeType[currentTheme.toUpperCase() as keyof typeof ModeType]);
      setTheme(currentTheme);
    }
  }, []);

  const handleOnCick = () => {
    createSheet({
      children: <MobileMenu />,
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0  border-gray-500  bg-background dark:bg-background border-b-2 z-50">
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
            <li className="hidden sm:block">
              <a href="#home" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                {isSpanish ? "Inicio" : "Home"}
              </a>
            </li>
            <li className="hidden sm:block">
              <a href="#work" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                {isSpanish ? "Trabajo" : "Work"}
              </a>
            </li>
            <li className="hidden sm:block">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                {isSpanish ? "Skills" : "Skills"}
              </a>
            </li>
            <li className="hidden sm:block">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
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
