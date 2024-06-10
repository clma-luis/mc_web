import { CheckIcon } from "@radix-ui/react-icons";

const AboutMe = () => {
  return (
    <section className="min-h-screen flex justify-between dark:text-white pt-[72px] border-gray-200 border-b-2 p-4">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">ABOUT ME</h2>
            <p className="text-gray-500 dark:text-gray-400">Conozca más sobre mi trayectoria y habilidades.</p>
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
                <p className="text-gray-500 dark:text-gray-400">Desarrollador web full-stack</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">
                  Soy un desarrollador de software especializado en JavaScript, aprovechando su versatilidad para cubrir tanto el frontend
                  como el backend, aspectos esenciales en el desarrollo de software. Actualmente, mis herramientas y tecnologías de interés
                  incluyen TypeScript, React.js, Next.js, Redux, Material-UI, Tailwind CSS, Node.js, Express.js, Nest.js, GraphQL y bases de
                  datos relacionales y no relacionales. 
                  <br />
                  <br />
                  Estoy en constante aprendizaje y perfeccionamiento de mis habilidades, buscando
                  contribuir al crecimiento de equipos de desarrollo mediante la implementación de estructuras eficientes. Esto garantiza
                  una experiencia de usuario fluida y la escalabilidad a largo plazo, siguiendo los principios SOLID. Estos principios me
                  permiten mantener la organización y la coherencia en las diferentes estructuras necesarias para el desarrollo, sin olvidar
                  la importancia de los patrones de diseño y una arquitectura de software robusta como la arquitectura hexagonal.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
