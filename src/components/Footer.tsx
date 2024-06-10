import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-background p-6 md:py-12 w-full dark:bg-background">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
        <div className="grid gap-1">
          <h3 className="font-semibold">Desarrollador</h3>
          <div className="flex items-center gap-2">
            <FaRegUser className="h-5 w-5 text-gray-500 dark:text-gray-400" />

            <span>Juan Pérez</span>
          </div>
          <div className="flex items-center gap-2">
            <IoIosMail className="h-5 w-5 text-gray-500 dark:text-gray-400" />

            <a href="mailto:juan.perez@example.com" className="text-blue-500 dark:text-blue-400">
              juan.perez@example.com
            </a>
          </div>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Redes Sociales</h3>
          <div className="flex items-center gap-2">
            <AiFillLinkedin className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <a href="#" target="_blank" className="text-blue-500 dark:text-blue-400">
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-2">
            <AiFillGithub className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <a href="#" target="_blank" className="text-blue-500 dark:text-blue-400">
              GitHub
            </a>
          </div>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Contacto</h3>
          <div className="flex items-center gap-2">
            <FiPhone className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <FiMapPin className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span>Calle Falsa 123, Ciudad, País</span>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Juan Pérez. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
