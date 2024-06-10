import React from "react";

import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiNestjs, SiExpress, SiTailwindcss, SiMongodb, SiTypescript } from "react-icons/si";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const icons = [
  { icon: <FaReact className="text-blue-500 w-8 h-8" /> },
  { icon: <SiNextdotjs className="text-black w-8 h-8" /> },
  { icon: <SiNestjs className="text-red-500 w-8 h-8" /> },
  { icon: <SiExpress className="text-gray-500 w-8 h-8" /> },
  { icon: <FaNodeJs className="text-green-500 w-8 h-8" /> },
  { icon: <FaCss3Alt className="text-blue-600 w-8 h-8" /> },
  { icon: <FaHtml5 className="text-orange-500 w-8 h-8" /> },
  { icon: <SiTailwindcss className="text-teal-500 w-8 h-8" /> },
  { icon: <SiMongodb className="text-green-600 w-8 h-8" /> },
  { icon: <FaDatabase className="text-blue-800 w-8 h-8" /> },
  { icon: <SiTypescript className="text-blue-400 w-8 h-8" /> },
];

export const Atom: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center w-64 h-64">
      <div className="container">
        <div className="circle"></div>
      </div>

      <Avatar className="absolute w-40 h-40 bg-blue-500 rounded-full">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      {icons.map((icon, index) => (
        <div
          key={index}
          className={`absolute w-44 h-44 bg-transparent rounded-full ${
            (index + 1) % 2 === 0 ? "animate-spin-slow" : "animate-spin-reverse-slow"
          }`}
          style={{
            rotate: `${(index + 1) * 30}deg`,
          }}
        >
          <div
            className={` w-8`}
            style={{ animation: `${(index + 1) % 2 === 0 ? "spin-slow 30s linear infinite" : "spin-reverse-slow 1s linear infinite"}` }}
          >
            {icon.icon}
          </div>
        </div>
      ))}
    </div>
  );
};
