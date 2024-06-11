"use client";

import { useLanguage } from "@/shared/hooks/useLanguage";
import useSheet from "@/shared/hooks/useSheet";
import { Button } from "./ui/button";
import { SheetHeader, SheetTitle } from "./ui/sheet";
import { scrollToSection } from "@/shared/utils/scrollUtils";

export const MobileMenu = () => {
  const { closeSheet } = useSheet();
  const { language } = useLanguage();

  const handleNavigation = () => {
    closeSheet();
  };

  return (
    <div className="mt-4 flex flex-col justify-start">
      <SheetHeader>
        <SheetTitle>{title[language]}</SheetTitle>
      </SheetHeader>

      {data.map((item) => (
        <Button key={item.url} variant={"ghost"} className="w-full flex justify-start dark:text-white" onClick={() => handleNavigation()}>
          <a
            href={`#${item.url}`}
            className="w-full flex justify-start"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.url);
            }}
          >
            {item[language]}
          </a>
        </Button>
      ))}
    </div>
  );
};

const title: Record<string, string> = {
  es: "Menú principal",
  en: "Main menu",
};

const data: Record<string, string>[] = [
  {
    es: "Inicio",
    en: "Home",
    url: "home",
  },
  {
    es: "Sobre mi",
    en: "About",
    url: "about",
  },
  {
    es: "Habilidades",
    en: "Skills",
    url: "skills",
  },
  {
    es: "Experiencia",
    en: "Experience",
    url: "experience",
  },
 
  {
    es: "Portafolio",
    en: "Portfolio",
    url: "portfolio",
  },
  {
    es: "Contacto",
    en: "Contact",
    url: "contact",
  },
];
