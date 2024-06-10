import { CheckIcon } from "@radix-ui/react-icons";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { title } from "process";
import { useLanguage } from "@/shared/hooks/useLanguage";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

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
            <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experiencia Laboral</h2>
            <p className="text-center text-gray-500 md:text-xl dark:text-gray-400">
              Como desarrollador web, he adquirido una amplia experiencia en el diseño y desarrollo de aplicaciones web modernas y
              escalables.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full dark:text-white">
            {text.map((item) => (
              <AccordionItem value={item.company} key={item.company} className="grid gap-8">
                <AccordionTrigger>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">{item.title[language]}</h3>
                    <div className="flex justify-start gap-2">
                      <div className=" rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">{item.company}</div>
                      <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">{item.date[language]}</div>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">{item.description[language]}</p>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid gap-2 text-gray-500 dark:text-gray-400">
                    {item.checks[language].length > 0 &&
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

const text = [
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
      en: `Freelance work in a yacht club dedicated to sailing and yachting. The purpose of the application is to register the ships at the dock to have control and status of the actions carried out by the ship's crew. My role for this project was to create an application with a scanner to read unique QR codes for each vessel. The web application is also as a PWA.`,
    },
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
      en: `Growing company, whose two applications are for mobile and web with the main purpose of transportation (connecting carriers with potential customers). Participated in the creation of components, custom hooks, and functionalities for container and presentation components, taking into account performance and business area needs for delivery, without neglecting the previously established objectives.`,
    },
    checks: {
      es: [
        `Para este proyecto se realizó un frontend con React para un primer proyecto y luego otro con react native para el mismo proyecto con la finalidad de darle diferentes experiencias y funcionalidades dependiendo de las necesidades del usuario.`,
        `Se utilizó redux toolkit con thunks para manejar operaciones asíncronas dentro de las diferentes acciones y a su vez, conectar estas con los servicios, los cuales tenían una única conexión que iba de la mano con axios.`,
        `Se hizo uso de imágenes las cuales se manejaban todos los errores para mantener un equilibrio en la experiencia usuario así como también el manejo de los errores que surgen por diferente situaciones con try catch y promesas lo cual permitió atrapar el error y mostrarle con una buena experiencia usuario.`,
        `Se agregó google analytics para poder medir la experiencia de usuario.`,
        `Para las imágenes se hizo la compresión de las imágenes con sharp y se optimizó el tamaños de las mismas.`,
      ],
      en: [
        `For this project, a frontend was created with React for an initial project and then another with React Native for the same project to provide different experiences and functionalities depending on user needs.`,
        `Redux toolkit with thunks was used to handle asynchronous operations within various actions and, in turn, connect these with the services, which had a single connection handled with axios.`,
        `Images were used, handling all errors to maintain user experience balance as well as handling errors that arise from different situations with try catch and promises, which allowed catching the error and showing it with a good user experience.`,
        `Google Analytics was added to measure user experience.`,
        `Images were compressed with sharp and their sizes optimized.`,
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
      en: `Collaborated on various projects for different companies in different types of businesses. Performed integrations and created reusable components with React.js and Node.js, along with Express.js, Material UI, react-hook-form, angular.js, MongoDB, and mongoose, for projects. For this company, I had the opportunity to work on two different projects, one for a pension fund administrator (AFP) and later for a mining company.`,
    },
    checks: {
      es: [
        `En este caso para la AFP se usó MUI, react y context para un flujo cuyo propósito era renovarlo para una mejor experiencia usuario.`,
        `En el caso de la minera se usaron dos frameworks uno era angular donde di apoyo para solucionar tareas pendientes, pero a su vez estuve creando con react.js, node.js y express un chat para la misma minera pero diferente proyecto, para este punto se destaca que se usó socket.io para la conexión para enviar y recibir data realtime.`,
      ],
      en: [
        `For the AFP, MUI, React, and Context were used for a flow whose purpose was to renew it for a better user experience.`,
        `In the case of the mining company, two frameworks were used: Angular, where I provided support to solve pending tasks, and React.js, Node.js, and Express to create a chat for the same mining company but a different project. It is worth noting that socket.io was used for the connection to send and receive real-time data.`,
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
Es importante decir, realicé tareas para frontend y backend desde el comienzo, creando un dashboard el cual le daba una oportunidad al usuario tener un mejor control de las acciones que se podían realizar.`,
      en: `Growing startup whose main purpose is recreation and gastronomy, establishing a connection between companies in the gastronomy area and potential customers.
The role performed was to create and integrate a backend made with node.js, express.js, and graphQL with a frontend in react.js, typescript, and MUI, without neglecting the entire coordination process with the client.
It is important to say that I performed tasks for both frontend and backend from the beginning, creating a dashboard that gave the user a better control over the actions that could be performed.`,
    },
    checks: {
      es: [
        `La creación de endpoints, CRUD operations con REST para mantener la persistencia de datos.`,
        `Se hizo la integración de graphQL con Apollo Client.`,
        `Se usaron sockets para la conexión realtime en el dashboard para una mejor experiencia usuario y mejorar la experiencia usuario.`,
        `Para mejorar la experiencia usuario se implementó el dark/light mode.`,
        `Se realizó la creación de un hook para la conexión con la API para los diferentes servicios`,
        `Se optimizó el performance de la app utilizando memo, useCallback y useMemo para reducir el tiempo de carga y mejorar la experiencia usuario.`,
      ],
      en: [
        `Creation of endpoints, CRUD operations with REST to maintain data persistence.`,
        `GraphQL integration with Apollo Client.`,
        `Sockets were used for real-time connection on the dashboard to improve user experience.`,
        `Dark/light mode was implemented to enhance user experience.`,
        `A hook was created for connection with the API for various services.`,
        `App performance was optimized using memo, useCallback, and useMemo to reduce load time and improve user experience.`,
      ],
    },
  },
  {
    title: {
      en: "Frontend Developer",
      es: "Desarrollador Frontend",
    },
    company: "Validda",
    date: {
      es: "Junio 2021 - Febrero 2022",
      en: "June 2021 - February 2022",
    },
    description: {
      es: `El objetivo del proyecto era mejorar la experiencia usuario en la página web de una empresa de validación de datos. Mi rol fue crear una UI con React, Material UI y TailwindCSS, para mejorar la experiencia usuario y aumentar las conversiones de clientes.`,
      en: `The project goal was to improve the user experience on the website of a data validation company. My role was to create a UI with React, Material UI, and TailwindCSS to improve user experience and increase client conversions.`,
    },
    checks: {
      es: [
        `Implementación de diseño responsive utilizando flexbox y grid para una mejor experiencia usuario.`,
        `Se usó react-router-dom para la navegación entre diferentes secciones de la web.`,
        `Se utilizó redux toolkit para manejar el estado global de la aplicación.`,
        `Se creó un theme con Material UI y TailwindCSS para mantener la consistencia en la UI.`,
        `Se optimizó la performance de la app utilizando lazy loading y code splitting para reducir el tiempo de carga.`,
      ],
      en: [
        `Responsive design implementation using flexbox and grid for a better user experience.`,
        `React-router-dom was used for navigation between different sections of the website.`,
        `Redux toolkit was used to manage the global state of the application.`,
        `A theme was created with Material UI and TailwindCSS to maintain UI consistency.`,
        `App performance was optimized using lazy loading and code splitting to reduce load time.`,
      ],
    },
  },
];
