import { THEME } from "@/shared/constants/localStorageVariables";
import { HOME_URL } from "@/shared/constants/urlPaths";
import { useTheme } from "@/shared/providers/ThemeProviders";
import { getLocalStorage } from "@/shared/utils/localStorageUtils";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import React from "react";
import { Button } from "./ui/button";
import Logo from "./Logo";

enum ModeType {
  LIGHT = "Light",
  DARK = "Dark",
}

const Navbar = () => {
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

  const handleModeType = () => {
    setModeType((prev) => (prev === ModeType.LIGHT ? ModeType.DARK : ModeType.LIGHT));
    setTheme(modeType === ModeType.LIGHT ? "dark" : "light");
  };

  const toggleLanguage = () => {
    setIsSpanish(!isSpanish);
  };

  return (
    <nav className="fixed top-0 left-0 right-0  border-gray-200  bg-background dark:bg-background border-b-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href={HOME_URL} className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white"></span> <Logo />
        </a>
        <div className="flex md:space-x-0 rtl:space-x-reverse">
          <ul className="flex items-center gap-4">
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                {isSpanish ? "Inicio" : "Home"}
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                {isSpanish ? "Trabajo" : "Work"}
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                {isSpanish ? "Acerca de" : "About"}
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                {isSpanish ? "Contacto" : "Contact"}
              </a>
            </li>
            <li>
              <Button variant="ghost" size="icon" className=" text-gray-500 hover:text-gray-900 bg-transparent hover:bg-transparent px-0 dark:hover:text-gray-50" onClick={toggleLanguage}>
                {isSpanish ? "EN" : "ES"}
                <span className="sr-only">Toggle language</span>
              </Button>
            </li>
            <li>
              <Button variant="ghost" className=" text-gray-500 hover:text-gray-900 bg-transparent hover:bg-transparent px-0 dark:hover:text-gray-50" onClick={handleModeType}>
                {modeType === ModeType.LIGHT ? (
                  <MoonIcon width={20} className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-50" />
                ) : (
                  <SunIcon width={20} className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-50" />
                )}
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
