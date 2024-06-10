"use client";

import { THEME } from "@/shared/constants/localStorageVariables";
import { useTheme } from "@/shared/providers/ThemeProviders";
import { getLocalStorage } from "@/shared/utils/localStorageUtils";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import React from "react";
import { CiSettings } from "react-icons/ci";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
enum ModeType {
  LIGHT = "Light",
  DARK = "Dark",
}

export function SettingsMenu() {
  const [modeType, setModeType] = React.useState(ModeType.LIGHT);
  const [isSpanish, setIsSpanish] = React.useState(false);
  const { setTheme } = useTheme();
  const currentTheme = getLocalStorage(THEME);

  React.useEffect(() => {
    if (currentTheme) {
      setModeType(ModeType[currentTheme.toUpperCase() as keyof typeof ModeType]);
      setTheme(currentTheme);
    }
  }, []);

  const handleModeType = () => {
    setModeType((prev) => (prev === ModeType.LIGHT ? ModeType.DARK : ModeType.LIGHT));
    setTheme(modeType === ModeType.LIGHT ? "light" : "dark");
  };

  const toggleLanguage = () => {
    setIsSpanish(!isSpanish);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-gray-500 bg-transparent hover:bg-transparent px-0 dark:text-white">
          <CiSettings  className="w-6 h-6"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="font-custom text-icon dark:text-icon" onClick={handleModeType}>
          
          {modeType === ModeType.LIGHT ? (
            <MoonIcon width={20} className="text-gray-500 dark:text-white" />
          ) : (
            <SunIcon width={20} className="text-gray-500 dark:text-white" />
          )}
          &nbsp; {modeType} Mode
        </DropdownMenuItem>
        <DropdownMenuItem className="font-custom text-icon dark:text-icon" onClick={() => {}}>
          <Button
            variant="ghost"
            size="icon"
            className=" text-gray-500 bg-transparent hover:bg-transparent px-0 dark:text-white"
            onClick={toggleLanguage}
          >
            {isSpanish ? "EN" : "ES"}
            <span className="sr-only">Toggle language</span>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
