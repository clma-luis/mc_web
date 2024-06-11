import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useLanguage } from "@/shared/hooks/useLanguage";
const AboutSection = () => {
  const { language } = useLanguage();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 2 }}
      id="about"
      className="min-h-screen flex justify-between dark:text-white py-[72px] border-gray-200 border-b-2 p-4"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">{text.title[language]}</h2>
            <p className="text-gray-500 dark:text-gray-400">{text.subtitle[language]}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <img
                src="../../public/photo.jpg"
                alt="Foto de perfil"
                width={300}
                height={300}
                className="h-[300px] w-[300px] rounded-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="bg-background text-2xl font-bold dark:bg-background">Carlos Luis Marín Alvarez</h3>
                <p className="text-gray-500 dark:text-gray-400">{text.profesional[language]}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">
                  {text.description[language]?.one}
                  <br />
                  <br />
                  {text.description[language]?.two}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;

const text = {
  title: {
    es: "Sobre mi",
    en: "About me",
  },
  subtitle: {
    es: "Conozma mas sobre mi trayectoria y habilidades.",
    en: "Know more about my experience and skills.",
  },
  profesional: {
    es: "Desarrollador Full Stack",
    en: "Full Stack Developer",
  },
  description: {
    es: {
      one: ` Soy un desarrollador de software especializado en JavaScript, aprovechando su versatilidad para cubrir tanto el frontend
                como el backend, aspectos esenciales en el desarrollo de software. Actualmente, mis herramientas y tecnologías de interés
                incluyen TypeScript, React.js, Next.js, Redux, Material-UI, Tailwind CSS, Node.js, Express.js, Nest.js, GraphQL y bases de
                datos relacionales y no relacionales.`,
      two: `Estoy en constante aprendizaje y perfeccionamiento de mis habilidades, buscando contribuir al crecimiento de equipos de
                desarrollo mediante la implementación de estructuras eficientes. Esto garantiza una experiencia de usuario fluida y la
                escalabilidad a largo plazo, siguiendo los principios SOLID. Estos principios me permiten mantener la organización y la
                coherencia en las diferentes estructuras necesarias para el desarrollo, sin olvidar la importancia de los patrones de
                diseño y una arquitectura de software robusta como la arquitectura hexagonal.`,
    },
    en: {
      one: `Software developer with a background oriented in the JavaScript language. I take advantage of the advantages of said language to cover the frontend and backend as essential parts for software development. My interests at the moment at the tool level are typescript, React.js, Next.js, Redux, Material UI, Tailwind, Node.js Express.js, Nest.js, graphQL, relational and non-relational databases.`,
      two: `I am constantly working and studying to improve my skills that allow me to contribute to growth in development teams by implementing efficient structures that guarantee a fluid user experience and long-term scalability using SOLID principles that allow me to keep the different structures that I have in order. They are necessary for development, without leaving aside design patterns and software architecture such as hexagonal architecture.`,
    },
  },
};
