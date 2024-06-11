import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Logo from "./Logo";
import { useLanguage } from "@/shared/hooks/useLanguage";
import { LenguageType } from "@/shared/interfaces";

const Footer = () => {
  const { language } = useLanguage();
  const isSpanish = language === LenguageType.es;
  
  return (
    <footer id="contact" className="bg-background p-6 md:py-12 w-full dark:bg-background">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 text-sm">
        
      <div className="w-full grid gap-1 justify-center">
          <h3 className="w-full text-center font-semibold dark:text-white">{isSpanish ? "Redes Sociales" : "Social Media"}</h3>
          <div className="flex items-center gap-2">
            <AiFillLinkedin className="h-5 w-5 text-gray-500 dark:text-white" />
            <a href="https://www.linkedin.com/in/clma/" target="_blank" className="text-blue-500 dark:text-white">
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-2">
            <AiFillGithub className="h-5 w-5 text-gray-500 dark:text-white" />
            <a href="https://github.com/clma-luis" target="_blank" className="text-blue-500 dark:text-white">
              GitHub
            </a>
          </div>
        </div>
        <div className="w-full grid gap-1 justify-center">
          <h3 className="font-semibold dark:text-white text-center md:text-start">{isSpanish ? "Desarrollador" : "Developer"}</h3>
          <div className="flex items-center gap-2 dark:test-white">
            <FaRegUser className="h-5 w-5 text-gray-500 dark:text-white" />

            <span className="text-gray-500 dark:text-white">Carlos Luis Marín Alvarez</span>
          </div>
          <div className="flex items-center gap-2">
            <IoIosMail className="h-5 w-5 text-gray-500 dark:text-white" />

            <a href="mailto:juan.perez@example.com" className="text-blue-500 dark:text-white">
              marincarlosl19@gmail.com
            </a>
          </div>
        </div>
        
      </div>
      <div className="w-full flex gap-1 justify-center mt-10">
        <Logo width={70} height={70} />
      </div>
      <div className="text-center mt-2 text-gray-500 dark:text-white">&copy; {new Date().getFullYear()} Carlos Marín.</div>
    </footer>
  );
};

export default Footer;
