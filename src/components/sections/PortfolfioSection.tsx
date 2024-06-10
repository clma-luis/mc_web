import { ArrowRightIcon } from "@radix-ui/react-icons"

const PortfolfioSection = () => {
  return (
    <section className="min-h-screen flex justify-center dark:text-white pt-[72px] border-gray-200 border-b-2 p-4">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl space-y-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mi Portafolio</h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Aquí puedes ver algunos de mis proyectos más recientes y destacados.
          </p>
        </div>
      </div>
      <div className="grid gap-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 flex flex-col justify-center">
            <h3 className="text-lg font-bold">Proyecto 1</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Descripción breve del proyecto 1. Herramientas utilizadas: React, Tailwind CSS, Node.js.
            </p>
            <a
              href="#"
              className="inline-flex items-center mt-4 text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
         
            >
              Ver proyecto
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-950">
            <img
              src="/placeholder.svg"
              width={600}
              height={400}
              alt="Proyecto 1"
              className="w-full h-48 md:h-full md:w-auto object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="order-2 md:order-1 bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-950">
            <img
              src="/placeholder.svg"
              width={600}
              height={400}
              alt="Proyecto 2"
              className="w-full h-48 md:h-full md:w-auto object-cover"
            />
          </div>
          <div className="order-1 md:order-2 p-4 flex flex-col justify-center">
            <h3 className="text-lg font-bold">Proyecto 2</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Descripción breve del proyecto 2. Herramientas utilizadas: Vue.js, Sass, Firebase.
            </p>
            <a
              href="#"
              className="inline-flex items-center mt-4 text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
         
            >
              Ver proyecto
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="p-4 flex flex-col justify-center">
            <h3 className="text-lg font-bold">Proyecto 3</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Descripción breve del proyecto 3. Herramientas utilizadas: Angular, Bootstrap, MongoDB.
            </p>
            <a
              href="#"
              className="inline-flex items-center mt-4 text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
       
            >
              Ver proyecto
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-950">
            <img
              src="/placeholder.svg"
              width={600}
              height={400}
              alt="Proyecto 3"
              className="w-full h-48 md:h-full md:w-auto object-cover"
            />
          </div>
        </div>
       
      </div>
    </div>
  </section>
  )
}

export default PortfolfioSection