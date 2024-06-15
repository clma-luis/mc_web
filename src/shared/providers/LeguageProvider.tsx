import React, { createContext, useEffect } from "react";
import { LenguageType } from "../interfaces";
import { getLocalStorage, setLocalStorage } from "../utils/localStorageUtils";
import { LANGUAGE } from "../constants/localStorageVariables";

export interface LenguageContextProps {
  setLanguage: (value: LenguageType) => void;
  language: LenguageType;
}

export const LanguageContext = createContext({} as LenguageContextProps);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setCurrentLanguage] = React.useState<LenguageType>(getLocalStorage(LANGUAGE) as LenguageType)
  useEffect(() => {
    initLenguage();
  }, []);

  const initLenguage = () => {
    if (language === LenguageType.es || language === LenguageType.en) return;

    setLocalStorage(LANGUAGE, LenguageType.en);
  };

  const setLanguage = (value: LenguageType) => {
    setCurrentLanguage(value);
    setLocalStorage(LANGUAGE, value);
  };

  const contextValue: LenguageContextProps = {
    language,
    setLanguage,
  };

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
};
