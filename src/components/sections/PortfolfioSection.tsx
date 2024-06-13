import { useLanguage } from "@/shared/hooks/useLanguage";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { FaLink } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { getIcon } from "./ExperienceSection";

const PortfolfioSection = () => {
  const { language } = useLanguage();
  const isDesktop = useMediaQuery("( max-width: 768px )");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const text = {
    title: {
      es: "Portafolio",
      en: "Portfolio",
    },
    subtitle: {
      es: "Aqui puedes ver algunos de mis proyectos más recientes y destacados.",
      en: "Here you can see some of my latest and featured projects.",
    },
    proyects: [
      {
        title: {
          es: "Mi página web",
          en: "My profile web",
        },
        description: {
          es: "Mi página web de portafolio muestra mis habilidades. Este proyecto esta hecho en react con typescript y tailwind.",
          en: "My portfolio website showcases my skills. This project is built with React, TypeScript, and Tailwind.",
        },
        demo: "https://scanner-qr-seven.vercel.app/",
        github: "https://github.com/clma-luis/ScannerQR",
        icons: ["react", "next", "ts", "js", "shadcn-ui", "tailwind", "vite", "html", "css"],
        image: "../../public/myprofile.jpg",
      },
      {
        title: {
          es: "Scanner QR",
          en: "Scanner QR",
        },
        description: {
          es: "Esta aplicación de escáner QR permite utilizar la librería QR SCANNER para la lectura de códigos QR. El proyecto está diseñado para que puedas integrar fácilmente la funcionalidad de escaneo de códigos QR en tus propios proyectos.",
          en: "This QR scanner application allows you to use the QR SCANNER library to read QR codes. The project is designed so you can easily integrate QR code scanning functionality into your own projects.",
        },
        demo: "https://scanner-qr-seven.vercel.app/",
        github: "https://github.com/clma-luis/ScannerQR",
        icons: ["react", "next", "ts", "js", "shadcn-ui", "tailwind", "vite", "html", "css"],
        image: "../../public/scannerqr.jpg",
      },
    ],
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 2 }}
      id="portfolio"
      className="min-h-screen flex justify-center dark:text-white pt-[72px] pb-[72px] border-gray-200 border-b-2 p-4 "
    >
      <div className="container px-4 md:px-6 mx-auto max-w-4xl space-y-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{text.title[language]}</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {text.subtitle[language]}
            </p>
          </div>
        </div>
        <div className="grid gap-6 mt-10">
          {text.proyects.map((proyect, index) => (
            <div key={proyect.title[language]} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {!isDesktop && (
                (index % 2 === 0 )) && (
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-950 border-2 border-gray-500 dark:border-white">
                    <img
                      src={proyect.image}
                      width={600}
                      height={400}
                      alt="Proyecto 1"
                      className="w-full h-48 md:h-full md:w-auto object-cover"
                    />
                  </div>
              )}
              <div className="p-4 flex flex-col justify-center">
                <h3 className="text-lg font-bold">{proyect.title[language]}</h3>
                <div className="w-full flex justify-start gap-2 my-2">
                  {proyect.icons.map((icon, index) => (
                    <div key={index}>{getIcon[icon]}</div>
                  ))}
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2">{proyect.description[language]}</p>

                <div className="flex gap-4">
                  <a
                    href={proyect.demo}
                    className="inline-flex items-center mt-4 text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
                  >
                    <FaLink className="h-5 w-5 text-gray-500 dark:text-white"/>
                  </a>
                  <a
                    href={proyect.github}
                    className="inline-flex items-center mt-4 text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
                  >
                    <AiFillGithub className="h-5 w-5 text-gray-500 dark:text-white" />
                  </a>
                </div>
              </div>

              {( (index % 2 !== 0 && !isDesktop) || isDesktop)  && (
                <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-950 border-2 border-gray-500 dark:border-white">
                  <img
                    src={proyect.image}
                    width={600}
                    height={400}
                    alt="Proyecto 1"
                    className="w-full h-48 md:h-full md:w-auto object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolfioSection;
