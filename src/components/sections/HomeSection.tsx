import { ReactTyped } from "react-typed";
import Logo from "../Logo";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/shared/hooks/useLanguage";
import { AiFillLinkedin } from "react-icons/ai";
import { LenguageType } from "@/shared/interfaces";

const HomeSection = () => {
  const { language } = useLanguage();
  const isSpanish = language === LenguageType.es;
  const pdf = isSpanish ? "CV_ES" : "CV_EN";

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
      id="home"
      className="min-h-screen flex justify-between dark:text-white py-[72px] border-gray-200 border-b-2 p-4"
    >
      <div className="max-w-screen-xl flex flex-col flex-wrap items-center justify-center mx-auto p-4">
        <div className="w-full flex flex-col items-center justify-center gap-4 px-4 py-4 ">
          <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
            <Avatar className="h-40 w-40 z-0">
              <img className="w-full h-full" src="/photo.jpg" alt="my photo" />
              <AvatarFallback>
                <Logo width={100} height={100} />
              </AvatarFallback>
            </Avatar>
            <div className=" text-center md:text-start">
              <p className="text-gray-500 dark:text-gray-400">{text.greetings[language]}</p>
              <div className=" dark:text-white text-2xl font-bold">Carlos Luis Marín</div>
              <p className="text-gray-500 dark:text-gray-400">Fullstack developer</p>
            </div>
          </div>

          <h1 className="text-center text-[30px] font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
            <ReactTyped strings={[text.welcome[language]]} typeSpeed={80} />
          </h1>
        </div>
        <div className="w-full flex items-center justify-center gap-4 px-4 ">
          <Button><a href={`/${pdf}.pdf`} target="_blank" rel="noopener noreferrer">
          {text.btnOne[language]}
          </a></Button>
          <Button variant="outline">
            <a href="https://www.linkedin.com/in/clma/" target="_blank" rel="noopener noreferrer" className="flex gap-1">
              <AiFillLinkedin className="h-5 w-5 text-gray-500 dark:text-white" />
              Linkedin
            </a>
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeSection;


interface HomeSectionText {
  greetings: {
    en: string;
    es: string;
  };
  welcome: {
    en: string;
    es: string;
  };
  btnOne: {
    en: string;
    es: string;
  };
}

const text: HomeSectionText = {
  greetings: {
    en: "Hi, I'm ",
    es: "Hola, soy",
  },
  welcome: {
    en: "Welcome to my portfolio!",
    es: "¡Bienvenido a mi portafolio!",
  },
  btnOne: {
    en: "Dowload CV",
    es: "Descargar CV",
  },
};
