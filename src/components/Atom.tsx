import React, { useEffect } from "react";
import { SiExpress, SiMongodb, SiNestjs, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { FaAws, FaCss3Alt, FaDatabase, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";


const icons = [
     { icon: <FaReact className="text-blue-500 w-6 h-6" /> }, 
    { icon: <SiNextdotjs className="text-black w-7 h-7" /> },
     { icon: <SiNestjs className="text-red-500 w-6 h-6" /> },
    { icon: <SiExpress className="text-gray-500 w-7 h-7" /> },
    { icon: <FaNodeJs className="text-green-500 w-6 h-6" /> },
    { icon: <FaCss3Alt className="text-blue-600 w-7 h-7" /> },
    { icon: <FaHtml5 className="text-orange-500 w-6 h-6" /> },
    { icon: <SiTailwindcss className="text-teal-500 w-7 h-7" /> },
    { icon: <SiMongodb className="text-green-600 w-6 h-6" /> },
    { icon: <FaDatabase className="text-blue-800 w-7 h-7" /> }, 
     { icon: <SiTypescript className="text-blue-400 w-6 h-6" /> }, 
     { icon: <FaAws  className="yellow-500 w-7 h-7" /> }, 
  ];

export const Atom: React.FC = () => {  

  return (
    <div className="relative flex items-center justify-center w-64 h-64">
      <div className="container">
        <div className="circle"></div>
      </div>

      <Avatar className="absolute w-36 h-36 bg-blue-500 rounded-full">
        <AvatarImage src="../../public/photo.jpg" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      {icons.map((icon, index) => (
        <div
          key={index}
          className={`absolute ${(index + 1) % 2 === 0 ? "w-[185px] h-[185px]" : "w-[160px] h-[160px]"}  bg-transparent rounded-full ${
            (index + 1) % 2 === 0 ? "animate-spin-reverse-slow" : "animate-spin-reverse-slow"
          }`}
          style={{
            rotate: `${(index + 1) * 30}deg`,
          }}
        >
          <div
            className={`w-8`}
            style={{
              animation: `${(index + 1) % 2 === 0 ? "spin-reverse-slow 10s linear infinite" : "spin-slow 10s linear infinite"}`,
            }}
          >
            {icon.icon}
          </div>
        </div>
      ))}
    </div>
  );
};
