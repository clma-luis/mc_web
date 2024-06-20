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
      className="min-h-screen flex justify-between dark:text-white py-[72px] border-gray-200 border-b-2 p-4 dark:bg-background"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">{text.title[language]}</h2>
            <p className="text-center text-gray-500 md:text-xl dark:text-gray-400">{text.subtitle[language]}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <img
                src="/photoTwo.jpg"
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

          <div className="w-full text-gray-500 dark:text-gray-400">
            <p className="">
            <strong className="text-blue-500 dark:text-white">{language ? `Mi misión: ` : `My mission: `}</strong>
              {text.mission[language]}
              <br />
              <br />
              <strong className="text-blue-500 dark:text-white">{language ? `Mi visión: ` : `My vision: `}</strong>
              {text.vision[language]}
              <br />
              <br />

              <strong className="text-blue-500 dark:text-white">{language ? `Mis valores: ` : `My values: `}</strong>
              {text.values[language]?.map((value, index) => (
                <span key={index}>
                  {value}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;

interface TwoOption {
  es: string;
  en: string;
}

interface AboutSectionText {
  title: TwoOption;
  subtitle: TwoOption;
  profesional: TwoOption;
  description: {
    es: {
      one: string;
      two: string;
    };
    en: {
      one: string;
      two: string;
    };
  };
  mission: TwoOption;
  vision: TwoOption;
  values: {
    es: string[];
    en: string[];
  };
}

const text: AboutSectionText = {
  title: {
    es: "Sobre mi",
    en: "About me",
  },
  subtitle: {
    es: "Conozca mas sobre mi trayectoria y habilidades.",
    en: "Know more about my experience and skills.",
  },
  profesional: {
    es: "Desarrollador Full Stack",
    en: "Full Stack Developer",
  },
  description: {
    es: {
      one: `Hola, soy Carlos Luis Marín, un desarrollador de software especializado en JavaScript. Me dedico al desarrollo web, con amplia experiencia en áreas como marketing digital, diseño gráfico y la creación y optimización de páginas web empresariales.`,
      two: `Mi enfoque principal está en JavaScript, React, Next.js, Node.js, Express, Nest.js y TypeScript, entre otras herramientas. Soy una persona proactiva y participativa, con fuertes habilidades en comunicación efectiva, trabajo colaborativo y liderazgo.`,
    },
    en: {
      one: `Hi, I'm Carlos Luis Marin, a software developer specializing in JavaScript. I have extensive experience in web development, including digital marketing, graphic design, and creating and optimizing business websites.`,
      two: `My main focus is on JavaScript, React, Next.js, Node.js, Express, Nest.js, and TypeScript, among other tools. I am a proactive and participatory person, with strong skills in effective communication, collaborative work, and leadership.`,
    },
  },
  mission: {
    es: `Mi misión es aportar mis conocimientos en JavaScript y otras tecnologías relacionadas para contribuir al crecimiento de los proyectos en los que participo. Busco ayudar a las personas a alcanzar sus metas a través de una comunicación efectiva y soluciones innovadoras, mientras sigo aprendiendo y compartiendo de manera proactiva con el equipo.`,
    en: `My mission is to contribute my knowledge in JavaScript and other related technologies to the growth of the projects I am involved in. I aim to help people achieve their goals through effective communication and innovative solutions, while continuously learning and proactively sharing with the team.`,
  },
  vision: {
    es: `Mi visión es liderar proyectos innovadores que no solo resuelvan problemas técnicos, sino que también inspiren a otros desarrolladores a alcanzar su máximo potencial. Aspiro a ser un referente en la comunidad tecnológica, promoviendo la adopción de nuevas tecnologías y prácticas colaborativas que impulsen el éxito colectivo y el desarrollo profesional continuo de todos los miembros del equipo.`,
    en: `My vision is to lead innovative projects that not only solve technical problems but also inspire other developers to reach their full potential. I aspire to be a reference in the technology community, promoting the adoption of new technologies and collaborative practices that drive collective success and continuous professional development for all team members.`,
  },
  values: {
    es: [
      " ",
      "- Proactividad: Siempre dispuesto a alzar la mano y proponer ideas que mejoren el proyecto y el equipo.",
      "- Aprendizaje continuo: Comprometido con la mejora constante y la adquisición de nuevos conocimientos.",
      "- Colaboración: Fomento un ambiente de trabajo colaborativo y dinámico, compartiendo conocimientos de manera pedagógica.",
      "- Innovación: Enfoque en soluciones creativas e innovadoras para resolver problemas complejos.",
      "- Comunicación efectiva: Prioridad en la claridad y efectividad en la comunicación con el equipo.",
    ],
    en: [
      " ",
      "- Proactivity: Always willing to raise my hand and propose ideas that improve the project and the team.",
      "- Continuous learning: Committed to constant improvement and acquiring new knowledge.",
      "- Collaboration: Fostering a collaborative and dynamic work environment, sharing knowledge in a pedagogical manner.",
      "- Innovation: Focus on creative and innovative solutions to solve complex problems.",
      "- Effective communication: Priority on clarity and effectiveness in communication with the team.",
    ],
  },
};
