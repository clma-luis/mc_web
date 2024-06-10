import { CheckIcon } from "@radix-ui/react-icons"

const Works = () => {
  return (
    <section className="min-h-screen flex justify-center dark:text-white pt-[72px] border-gray-200 border-b-2 p-4">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl space-y-6">
        <div className="space-y-6">
          <div className="w-full space-y-2 justify-center">
            <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experiencia Laboral</h2>
            <p className="text-center text-gray-500 md:text-xl dark:text-gray-400">
              Como desarrollador web, he adquirido una amplia experiencia en el diseño y desarrollo de aplicaciones web
              modernas y escalables.
            </p>
          </div>
          <div className="grid gap-8">
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">2019 - Presente</div>
                <h3 className="text-xl font-bold">Desarrollador Web Senior</h3>
                <div className="ml-auto rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Acme Inc.</div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Como Desarrollador Web Senior en Acme Inc., he sido responsable del diseño y desarrollo de aplicaciones
                web altamente escalables y eficientes. He liderado equipos de desarrollo en la implementación de
                soluciones innovadoras, utilizando las últimas tecnologías y mejores prácticas. Mis principales logros
                incluyen:
              </p>
              <ul className="grid gap-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                  <span>
                    Desarrollo de una aplicación web de comercio electrónico altamente personalizable y escalable, que
                    aumentó las ventas en un 35% en el primer año.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                  <span>
                    Implementación de un sistema de análisis de datos que mejoró la toma de decisiones estratégicas y
                    aumentó la eficiencia operativa en un 25%.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                  <span>
                    Liderazgo de un equipo de desarrollo en la migración de una aplicación heredada a una nueva
                    arquitectura microservicio, lo que mejoró la escalabilidad y la mantenibilidad.
                  </span>
                </li>
              </ul>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">2016 - 2019</div>
                <h3 className="text-xl font-bold">Desarrollador Web</h3>
                <div className="ml-auto rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Empresa XYZ</div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Como Desarrollador Web en Empresa XYZ, fui responsable del diseño y desarrollo de aplicaciones web para
                diversos clientes. Mis principales logros incluyen:
              </p>
              <ul className="grid gap-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                  <span>
                    Desarrollo de una aplicación web de gestión de proyectos que mejoró la eficiencia y la colaboración
                    del equipo en un 20%.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                  <span>
                    Implementación de un sistema de automatización de marketing que aumentó la tasa de conversión de
                    leads en un 15%.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                  <span>
                    Participación en el desarrollo de una aplicación web de reservas de viajes que mejoró la experiencia
                    del usuario y aumentó las ventas en un 18%.
                  </span>
                </li>
              </ul>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">2014 - 2016</div>
                <h3 className="text-xl font-bold">Pasante de Desarrollo Web</h3>
                <div className="ml-auto rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Startup ABC</div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Durante mi pasantía en Startup ABC, tuve la oportunidad de participar en el desarrollo de aplicaciones
                web desde el inicio. Mis principales logros incluyen:
              </p>
              <ul className="grid gap-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                  <span>
                    Desarrollo de un prototipo de aplicación web que posteriormente se convirtió en el producto
                    principal de la empresa.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                  <span>
                    Participación en la implementación de un sistema de autenticación y autorización que mejoró la
                    seguridad de la aplicación.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                  <span>
                    Colaboración con el equipo de diseño en la mejora de la interfaz de usuario y la experiencia de
                    usuario.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works