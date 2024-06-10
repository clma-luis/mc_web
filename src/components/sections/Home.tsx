import { ReactTyped } from "react-typed";
import Logo from "../Logo";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";

const Home = () => {
  return (
    <div className="min-h-screen flex justify-between dark:text-white pt-[72px] border-gray-200 border-b-2 p-4">
      <div className="max-w-screen-xl flex flex-col flex-wrap items-center justify-center mx-auto p-4">
        <div className="w-full flex flex-col items-center justify-center gap-4 px-4 py-4 ">
          <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
            <Avatar className="h-40 w-40 z-0">
              <img src="../../public/photo.jpg" alt="" />
              <AvatarFallback><Logo width={100} height={100}/></AvatarFallback>
            </Avatar>
            <div className=" text-center md:text-start">
              <p className="text-gray-500 dark:text-gray-400">Hi! I'm</p>
              <div className=" dark:text-white text-2xl font-bold">Carlos Luis Marín</div>
              <p className="text-gray-500 dark:text-gray-400">Softawer developer</p>
            </div>
          </div>

          <h1 className="text-center text-[30px] font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
            <ReactTyped strings={["WELCOME TO MY PORTAFOLIO"]} typeSpeed={80} />
          </h1>
        </div>
        <div className="w-full flex items-center justify-center gap-4 px-4 ">
          <Button>Dowload CV</Button>
          <Button variant="outline">Linkedin</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
