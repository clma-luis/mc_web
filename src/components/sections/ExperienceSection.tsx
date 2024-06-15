import { useLanguage } from "@/shared/hooks/useLanguage";
import { CheckIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import {
  SiGraphql,
  SiJavascript,
  SiMui,
  SiNestjs,
  SiNextdotjs,
  SiPhp,
  SiRedux,
  SiSass,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWordpress,
} from "react-icons/si";
import { FaAngular, FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";

const ExperienceSection = () => {
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
      id="experience"
      className="min-h-screen flex justify-center dark:text-white pt-[72px] pb-[72px] border-gray-200 border-b-2 p-4"
    >
      <div className="container px-4 md:px-6 mx-auto max-w-4xl space-y-6">
        <div className="space-y-6">
          <div className="w-full space-y-2 justify-center">
            <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{sectionText.title[language]}</h2>
            <p className="text-center text-gray-500 md:text-xl dark:text-gray-400">{sectionText.subtitle[language]}</p>
          </div>

          <Accordion type="single" collapsible className="w-full dark:text-white hover:no-underline">
            {text.map((item) => (
              <AccordionItem value={item.company} key={item.company} className="grid gap-8 hover:no-underline">
                <AccordionTrigger className="w-full flex flex-col hover:no-underline">
                  <div className="w-full flex flex-col justify-start items-start gap-1 pb-2">
                    <h3 className="text-[20px] font-bold">{item.title[language]}</h3>
                    <div className="flex justify-start gap-2">
                      <div className=" rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">{item.company}</div>
                      <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">{item.date[language]}</div>
                    </div>
                  </div>
                  <div className="w-full flex justify-start gap-2 my-2">
                    {item.skillsIcons.map((icon, index) => (
                      <div key={index}>{getIcon[icon]}</div>
                    ))}
                  </div>
                  <p className="text-gray-500 text-start dark:text-gray-400">{item.description[language]}</p>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid gap-2 text-gray-500 dark:text-gray-400">
                    {item.checks &&
                      item.checks[language] &&
                      item.checks[language].map((task, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckIcon className="text-green-500 mt-1 h-5 w-5 flex-shrink-0 " />
                          <span>{task}</span>
                        </li>
                      ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;

interface SectionText {
  title: {
    es: string;
    en: string;
  },
  subtitle: {
    es: string;
    en: string;
  }
}


const sectionText: SectionText = {
  title: {
    es: "Experiencia laboral",
    en: "Work experience",
  },
  subtitle: {
    es: ` Como desarrollador web, he adquirido una amplia experiencia en el diseño y desarrollo de aplicaciones web modernas y
            escalables.`,
    en: `As a web developer, I have acquired a great experience in the design and web development.`,
  },
};


interface ExperienceSection {
  title: {
    es: string;
    en: string;
  };
  company: string;
  date: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  skillsIcons: string[];
  checks: {
    es: string[];
    en: string[];
  };
}

const text: ExperienceSection[] = [
  {
    title: {
      en: "Frontend / Fullstack Developer",
      es: "Desarrollador Frontend / Fullstack",
    },
    company: "Visual IQ",
    date: {
      en: "February 2024 - March 2024",
      es: "Febrero 2024 - Marzo 2024",
    },
    description: {
      es: `Trabajo freelance en un club náutico dedicado a la navegación a vela y el yatismo. El propósito del aplicativo es el
            registro de los barcos al muelle para tener un control y estatus de las acciones realizadas por los tripulantes del barco.
            Mi rol para este proyecto fue la creación de una app con un scanner para la lectura de códigos QR únicos para cada
            embarcación. La app web también como PWA.`,
      en: `Freelance work in a yacht club dedicated to sailing and yachting. The purpose of the application is to register the ships at the dock to have control and status of the actions carried out by the ship's crew. My role for this project was to create an application with a scanner to read unique QR codes for each vessel. The web application is also a PWA.`,
    },
    skillsIcons: ["js", "ts", "next", "nest", "shadcn-ui", "tailwind"],
    checks: {
      es: [
        `Se realizó creación y toda la configuración de proyecto en next.js 14 con typescript y tailwind. con respecto a la UI se hizo la integración de shadcn UI.`,
        `Se hizo la configuración de los servicios con una instancia de fetch que se podría decir que es un singleton pattern para hacer el llamado de dicha instancia en las conexiones de get, post, put, delete, y de esta forma, llamar en este caso los servicios en los componentes que son necesarios.`,
        `Se aprovechó el localStorage para mantener la data necesaria. Es importante decir que se hizo un login donde se recibe un token JWT para el manejo de la autenticación y a su vez de la autorización del usuario. También es importante decir que se usó la librería qr-scanner para realizar la acción de escanear un QR el cual fue facilitado por el cliente.`,
        `Por el lado de nest.js se siguió con las convenciones ya expuestas en la documentación de nest.js para crear en este caso una API con varias rutas cuyas funciones eran el auth, y la traída de los datos y la actualización del estado de cada usuario. Es importante destacar que se usó postgres con prisma y que también por petición del cliente lo dejamos una configuración híbrida para que pueda en un futuro pasarlo al 100% a un microservicio por las próximas funciones que se vayan a implementar.`,
      ],
      en: [
        `Project creation and complete configuration was done in next.js 14 with typescript and tailwind. Regarding the UI, shadcn UI integration was performed.`,
        `Service configuration was done with a fetch instance, which could be considered a singleton pattern to call this instance in get, post, put, delete connections, and in this way, call the services in the necessary components.`,
        `LocalStorage was used to maintain the necessary data. It is important to note that a login was implemented where a JWT token is received for handling user authentication and authorization. It is also important to mention that the qr-scanner library was used to perform the action of scanning a QR code provided by the client.`,
        `On the nest.js side, the conventions already exposed in the nest.js documentation were followed to create an API with several routes whose functions were auth, data retrieval, and updating the status of each user. It is important to highlight that postgres was used with prisma, and also, at the client's request, we left a hybrid configuration so that it can be fully transitioned to a microservice in the future for upcoming functions to be implemented.`,
      ],
    },
  },
  {
    title: {
      en: "Frontend Developer",
      es: "Desarrollador Frontend",
    },
    company: "Tinnto",
    date: {
      en: "December 2022 - February 2024",
      es: "Diciembre 2022 - Febrero 2024",
    },
    description: {
      es: `Compañía en crecimiento, cuyos dos aplicativos son para móvil y para web tienen como principal propósito el transporte (conectar transportistas con clientes potenciales). Participe en la creación de componentes, custom hooks y funcionalidades para componentes contenedores y de presentación teniendo en cuenta el performance y las necesidades del área de negocio para la entrega, sin dejar a un lado lo establecido en los objetivos previamente planteados.`,
      en: `Growing company, whose two applications are for mobile and web, with the main purpose of transportation (connecting carriers with potential customers). I participated in the creation of components, custom hooks, and functionalities for container and presentation components, taking into account performance and business area needs for delivery, while adhering to previously set objectives.`,
    },
    skillsIcons: ["js", "ts", "react", "react-native", "tailwind", "mui", "redux"],
    checks: {
      es: [
        `Para este proyecto se realizó un frontend con React para un primer proyecto y luego otro con react native para el mismo proyecto con la finalidad de darle diferentes experiencias y funcionalidades dependiendo de las necesidades del usuario`,
        `se utilizó redux toolkit con thunks para manejar operaciones asíncronas dentro de las diferentes acciones y a su vez, conectar estas con los servicios, los cuales tenían una unica conexion que iba de la mano con axios.`,
        `se hizo uso de imágenes las cuales se manejaban todos los errores para mantener un equilibrio en la experiencia usuario así como también el manejo de los errores que surgen por diferente situaciones con try catch y promesas lo cual permitió atrapar el error y mostrarle con una buena experiencia usuario.`,
        `Se agregó google analytics para poder medir la experiencia de usuario.`,
        `Para las imágenes se hizo la compresión de las imagenes con sharp y se optimizo el tamaños de las mismas.`,
      ],
      en: [
        `For this project, a frontend was created with React for the first project and then another with React Native for the same project to provide different experiences and functionalities depending on user needs.`,
        `Redux toolkit with thunks was used to handle asynchronous operations within different actions and, in turn, connect these with services, which had a single connection managed with Axios.`,
        `Images were used, and all errors were handled to maintain user experience balance, as well as error handling arising from different situations with try-catch and promises, which allowed catching errors and providing a good user experience.`,
        `Google Analytics was added to measure user experience.`,
        `For images, compression was done with Sharp, and their sizes were optimized.`,
      ],
    },
  },
  {
    title: {
      en: "Frontend Developer / Fullstack Developer",
      es: "Desarrollador Frontend / Desarrollador Fullstack",
    },
    company: "Solera System",
    date: {
      es: "Julio 2022 - Diciembre 2022",
      en: "July 2022 - December 2022",
    },
    description: {
      es: "Colaboré en proyectos diversos, para diferentes empresas en diferentes tipos de negocios. Realice integraciones y creación de componentes reutilizables con React.js y Node.js, junto con Express.js, material UI, react-hook-form, angular.js, MongoDB y mongoose, para proyectos. Para esta empresa se tuvo la oportunidad de trabajar en dos proyectos diferentes, tanto para una AFP y posteriormente para una minera.",
      en: "I collaborated on various projects for different companies in different types of businesses. I carried out integrations and created reusable components with React.js and Node.js, along with Express.js, Material UI, react-hook-form, Angular.js, MongoDB, and mongoose for projects. For this company, I had the opportunity to work on two different projects, both for an AFP and later for a mining company.",
    },
    skillsIcons: ["js", "ts", "react", "node", "express", "mui", "angular"],
    checks: {
      es: [
        `En este caso para la AFP se usó MUI, react y context para un flujo cuyo propósito era renovarlo para una mejor experiencia usuario.`,
        `En el caso de la minera se usaron dos frameworks uno era angular donde di apoyo para solucionar tareas pendientes, pero a su vez estuve creando con react.js, node.js y express un chat para la misma minera pero diferente proyecto, para este punto se destaca que se usó socket.io para la conexion para enviar y recibir data realtime.`,
      ],
      en: [
        `In this case, for the AFP, MUI, React, and Context were used for a flow aimed at renewing it for a better user experience.`,
        `For the mining company, two frameworks were used: Angular, where I supported solving pending tasks, but I was also creating with React.js, Node.js, and Express a chat for the same mining company but a different project. It is worth mentioning that socket.io was used for the connection to send and receive real-time data.`,
      ],
    },
  },
  {
    title: {
      en: "React Developer",
      es: "Desarrollador React",
    },
    company: "Todo Trucks",
    date: {
      es: "Febrero 2022 - Julio 2022",
      en: "February 2022 - July 2022",
    },
    description: {
      es: `Startup en crecimiento cuyo principal propósito es el esparcimiento y gastronomía, entablar una conexión entre empresas en el área de la gastronomía y potenciales clientes. 
El rol desempeñado fue crear e integrar un backend hecho con node.js, express.js y graphQL con un frontend en react.js, typescript y MUI, sin dejar a un lado todo el proceso de coordinación con el cliente.
Es importante decir, realicé tareas para frontend y backend desde el comienzo, creando un dashboard el cual le daba una oportunidad al usuario tener un mejor control de las tareas a realizar en cada food truck.`,
      en: `Growing startup whose main purpose is entertainment and gastronomy, establishing a connection between companies in the gastronomy area and potential customers. The role performed was to create and integrate a backend made with Node.js, Express.js, and GraphQL with a frontend in React.js, TypeScript, and MUI, without overlooking the whole process of coordination with the client. It is important to note that I performed tasks for both frontend and backend from the beginning, creating a dashboard that gave users a better control of the tasks to be performed in each food truck.`,
    },
    skillsIcons: ["js", "ts", "react", "node", "express", "graphql", "mui"],
    checks: {
      es: [
        `Creacion y configuracion inicial del repositorio de backend en node.js con express.js y graphql y typescript para crear diferentes endpoints para un CRUD.`,
        `Creacion y configuracion inicial de frontend en react.js, typescript y MUI para la creacion de un dashboard.`,
        `Se hizo conexion con mongodb para la base de datos.`,
        `Se uso bcrypt para la encriptacion de contrasenas.`,
        `Se hizo uso de JWT para la autenticacion del usuario y autorizacion de ciertas acciones en el dashboard.`,
      ],
      en: [
        `Initial creation and configuration of the backend repository in Node.js with Express.js, GraphQL, and TypeScript to create different endpoints for a CRUD.`,
        `Initial creation and configuration of the frontend in React.js, TypeScript, and MUI for the creation of a dashboard.`,
        `Connected to MongoDB for the database.`,
        `Used bcrypt for password encryption.`,
        `Used JWT for user authentication and authorization of certain actions in the dashboard.`,
      ],
    },
  },
  {
    title: {
      en: "React Developer",
      es: "Desarrollador React",
    },
    company: "Deekler SPA",
    date: {
      en: "June 2021 - September 2022",
      es: "Junio 2021 - Septiembre 2022",
    },
    description: {
      es: `Apoyo en la creación de componentes a una e-commerce para la venta de productos de seguridad. Se usó React.js, Hooks, Custom Hooks, entre otros.
Para este puesto se realizaron tareas ya establecidas en un proyecto ya en proceso, apoyando en la creación de componentes en React React ya teniendo una configuración previa de la conexión para llamar los servicios ya listos y probados previamente por el encargado de esa área.`,
      en: `Support in the creation of components for an e-commerce for the sale of security products. React.js, Hooks, Custom Hooks, among others, were used.
For this position, pre-established tasks were carried out in an ongoing project, supporting the creation of components in React, already having a previous configuration of the connection to call the services already prepared and previously tested by the person in charge of that area.`,
    },
    skillsIcons: ["js", "ts", "react", "mui"],
    checks: {
      en: [],
      es: [],
    },
  },
  {
    title: {
      en: "Web Developer",
      es: "Desarrollador Web",
    },
    company: "Gragel Srltda",
    date: {
      en: "June 2021",
      es: "Junio 2021",
    },
    description: {
      es: `Creación de página web para una empresa que se dedica a la venta de productos de desagüe para construcción.
Para esta oportunidad, el cliente estaba con la necesidad de tener un buen perfil en el internet donde se realizó una landing con las herramientas previamente descritas sin uso de frameworks. Por otro lado tenía una conexión con PHP para el envío de mensajes, pero en términos generales todo estaba en javascript. Se realizó una galería de fotos que fueron facilitadas por el cliente para mostrar la gran variedad de productos.`,
      en: `Website creation for a company dedicated to the sale of drainage products for construction.
For this opportunity, the client needed a good profile on the internet, where a landing was created with the previously described tools without the use of frameworks. On the other hand, it had a connection with PHP for sending messages, but in general terms, everything was in JavaScript. A photo gallery was made, provided by the client to show the wide variety of products.`,
    },
    skillsIcons: ["js", "ts", "html", "css", "sass", "node", "express", "php"],
    checks: {
      es: [],
      en: [],
    },
  },
  {
    title: {
      en: "Web Developer",
      es: "Desarrollador Web",
    },
    company: "Spa Sentidos Relax",
    date: {
      en: "May 2021",
      es: "Mayo 2021",
    },
    description: {
      es: `Creación de sitio Wordpress de la compañía con múltiples páginas relacionadas al negocio Wordpress, PHP, MYSQL. Por otra parte, apoyé en la creación de componentes en React para otra iniciativa de negocio.`,
      en: `Creation of the company's Wordpress site with multiple pages related to the business Wordpress, PHP, MYSQL. On the other hand, I supported the creation of components in React for another business initiative.`,
    },
    skillsIcons: ["js", "html", "css", "wordpress", "php"],
    checks: {
      es: [],
      en: [],
    },
  },
];

export const getIcon: Record<string, JSX.Element> = {
  js: <SiJavascript className="text-yellow-400 w-5 h-5" />,
  react: <FaReact className="text-blue-500 w-5 h-5" />,
  next: <SiNextdotjs className="text-black dark:text-white w-5 h-5" />,
  nest: <SiNestjs className="text-red-500 w-5 h-5" />,
  node: <FaNodeJs className="text-green-500 w-5 h-5" />,
  tailwind: <SiTailwindcss className="text-teal-500 w-5 h-5" />,
  ts: <SiTypescript className="text-blue-500 w-5 h-5" />,
  shadcnui: <SiShadcnui className="text-black dark:text-white w-5 h-5" />,
  mui: <SiMui className="text-black dark:text-white w-5 h-5" />,
  redux: <SiRedux className="text-black dark:text-white w-5 h-5" />,
  graphql: <SiGraphql className="text-black dark:text-white w-5 h-5" />,
  angular: <FaAngular className="text-black dark:text-white w-5 h-5" />,
  sass: <SiSass className="text-black dark:text-white w-5 h-5" />,
  html: <FaHtml5 className="text-orange-500 w-5 h-5" />,
  css: <FaCss3Alt className="text-blue-600 w-5 h-5" />,
  wordpress: <SiWordpress className="text-black dark:text-white w-5 h-5" />,
  php: <SiPhp className="text-black dark:text-white w-5 h-5" />,
  vite: <SiVite className="text-black dark:text-white w-5 h-5" />,
};
