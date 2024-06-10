import { useContext } from "react";
import { LanguageContext } from "../providers/LeguageProvider";

export const useLanguage = () => {
    const {language, setLanguage} = useContext(LanguageContext);

    return {language, setLanguage};
}