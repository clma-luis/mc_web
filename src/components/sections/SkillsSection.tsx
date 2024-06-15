import { useLanguage } from "@/shared/hooks/useLanguage";
import { motion } from "framer-motion";
import { FaAws, FaCss3Alt, FaDatabase, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiJavascript, SiMongodb, SiNestjs, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "../ui/card";

const SkillsSection = () => {
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
      id="skills"
      className="min-h-screen flex justify-center dark:text-white pt-[72px] pb-[72px] border-gray-200 border-b-2 p-4"
    >
      <div className="container px-4 md:px-6 mx-auto max-w-4xl space-y-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">{text.title[language]}</h2>
          <p className="text-center text-gray-500 md:text-xl dark:text-gray-400">{text.subtitle[language]}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center px-4">
          {skillsData.map((skill, index) => (
            <Card key={index}>
              <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
                <div className="text-center">
                  <div className="flex items-center justify-center">{skill.icon}</div>
                  <h3 className="text-lg font-semibold">{skill.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{skill.description[language]}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;

interface SkillsSectionText {
  title: {
    en: string;
    es: string;
  }
  subtitle: {
    en: string;
    es: string;
  }
}

const text: SkillsSectionText = {
  title: {
    en: "My Skills",
    es: "Mis habilidades",
  },
  subtitle: {
    en: "I have experience with the following technologies:",
    es: "Tengo experiencia con las siguientes tecnologías:",
  },
};


interface SkillsData {
  icon: React.ReactNode;
  title: string;
  description: {
    en: string;
    es: string;
  };
}

const skillsData: SkillsData[] = [
  {
    icon: <SiJavascript className="text-yellow-400 w-6 h-6" />,
    title: "JavaScript",
    description: {
      en: "A lightweight, interpreted, or just-in-time compiled programming language with first-class functions.",
      es: "Un lenguaje de programación de bajo nivel que incluye funciones de primera clase.",
    },
  },
  {
    icon: <FaReact className="text-blue-500 w-6 h-6" />,
    title: "React",
    description: {
      en: "A JavaScript library for building user interfaces.",
      es: "Una biblioteca de JavaScript para construir interfaces de usuario.",
    },
  },
  {
    icon: <SiNextdotjs className="text-black dark:text-white w-7 h-7" />,
    title: "Next.js",
    description: {
      en: "The React framework for production.",
      es: "El framework de React para producción.",
    },
  },
  {
    icon: <SiNestjs className="text-red-500 w-6 h-6" />,
    title: "Nest.js",
    description: {
      en: "A progressive Node.js framework for building efficient and scalable server-side applications.",
      es: "Un framework progresivo de Node.js para construir aplicaciones del lado del servidor eficientes y escalables.",
    },
  },
  {
    icon: <SiExpress className="text-gray-500 w-7 h-7" />,
    title: "Express.js",
    description: {
      en: "Fast, unopinionated, minimalist web framework for Node.js.",
      es: "Un framework web rápido, sin opiniones y minimalista para Node.js.",
    },
  },
  {
    icon: <FaNodeJs className="text-green-500 w-6 h-6" />,
    title: "Node.js",
    description: {
      en: "An asynchronous event-driven JavaScript runtime, designed to build scalable network applications.",
      es: "Un entorno de ejecución de JavaScript basado en eventos asíncronos, diseñado para construir aplicaciones de red escalables.",
    },
  },
  {
    icon: <FaCss3Alt className="text-blue-600 w-7 h-7" />,
    title: "CSS3",
    description: {
      en: "The latest evolution of the Cascading Style Sheets language.",
      es: "La última evolución del lenguaje de Hojas de Estilo en Cascada.",
    },
  },
  {
    icon: <FaHtml5 className="text-orange-500 w-6 h-6" />,
    title: "HTML5",
    description: {
      en: "The latest version of the Hypertext Markup Language used for structuring and presenting content on the World Wide Web.",
      es: "La última versión del Lenguaje de Marcado de Hipertexto utilizado para estructurar y presentar contenido en la World Wide Web.",
    },
  },
  {
    icon: <SiTailwindcss className="text-teal-500 w-7 h-7" />,
    title: "Tailwind CSS",
    description: {
      en: "A utility-first CSS framework for rapidly building custom designs.",
      es: "Un framework CSS de utilidades primero para construir diseños personalizados rápidamente.",
    },
  },
  {
    icon: <SiMongodb className="text-green-600 w-6 h-6" />,
    title: "MongoDB",
    description: {
      en: "A general purpose, document-based, distributed database built for modern application developers and for the cloud era.",
      es: "Una base de datos distribuida, basada en documentos y de propósito general, construida para desarrolladores de aplicaciones modernas y para la era de la nube.",
    },
  },
  {
    icon: <FaDatabase className="text-blue-800 w-7 h-7" />,
    title: "SQL & NoSQL",
    description: {
      en: "Experience with both SQL and NoSQL databases, including MongoDB.",
      es: "Experiencia con bases de datos SQL y NoSQL, incluyendo MongoDB.",
    },
  },
  {
    icon: <SiTypescript className="text-blue-400 w-6 h-6" />,
    title: "TypeScript",
    description: {
      en: "An open-source language which builds on JavaScript, by adding static type definitions.",
      es: "Un lenguaje de código abierto que se basa en JavaScript, añadiendo definiciones de tipos estáticos.",
    },
  },
  {
    icon: <FaAws className="text-yellow-500 w-7 h-7" />,
    title: "AWS",
    description: {
      en: "Amazon Web Services (AWS) is a secure cloud services platform, offering compute power, database storage, content delivery and other functionality to help businesses scale and grow.",
      es: "Amazon Web Services (AWS) es una plataforma de servicios en la nube segura, que ofrece potencia de cómputo, almacenamiento de bases de datos, entrega de contenido y otras funcionalidades para ayudar a las empresas a escalar y crecer.",
    },
  },
];
