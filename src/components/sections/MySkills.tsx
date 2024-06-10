import { FaAws, FaCss3Alt, FaDatabase, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiJavascript, SiMongodb, SiNestjs, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { Card, CardContent } from "../ui/card";

const skillsData = [
  { icon: <SiJavascript className="text-yellow-400 w-6 h-6" />, title: "JavaScript", description: "A lightweight, interpreted, or just-in-time compiled programming language with first-class functions." },
  { icon: <FaReact className="text-blue-500 w-6 h-6" />, title: "React", description: "A JavaScript library for building user interfaces." },
  { icon: <SiNextdotjs className="text-black dark:text-white w-7 h-7" />, title: "Next.js", description: "The React framework for production." },
  { icon: <SiNestjs className="text-red-500 w-6 h-6" />, title: "Nest.js", description: "A progressive Node.js framework for building efficient and scalable server-side applications." },
  { icon: <SiExpress className="text-gray-500 w-7 h-7" />, title: "Express.js", description: "Fast, unopinionated, minimalist web framework for Node.js." },
  { icon: <FaNodeJs className="text-green-500 w-6 h-6" />, title: "Node.js", description: "An asynchronous event-driven JavaScript runtime, designed to build scalable network applications." },
  { icon: <FaCss3Alt className="text-blue-600 w-7 h-7" />, title: "CSS3", description: "The latest evolution of the Cascading Style Sheets language." },
  { icon: <FaHtml5 className="text-orange-500 w-6 h-6" />, title: "HTML5", description: "The latest version of the Hypertext Markup Language used for structuring and presenting content on the World Wide Web." },
  { icon: <SiTailwindcss className="text-teal-500 w-7 h-7" />, title: "Tailwind CSS", description: "A utility-first CSS framework for rapidly building custom designs." },
  { icon: <SiMongodb className="text-green-600 w-6 h-6" />, title: "MongoDB", description: "A general purpose, document-based, distributed database built for modern application developers and for the cloud era." },
  { icon: <FaDatabase className="text-blue-800 w-7 h-7" />, title: "SQL & NoSQL", description: "Experience with both SQL and NoSQL databases, including MongoDB." },
  { icon: <SiTypescript className="text-blue-400 w-6 h-6" />, title: "TypeScript", description: "An open-source language which builds on JavaScript, by adding static type definitions." },
  { icon: <FaAws className="text-yellow-500 w-7 h-7" />, title: "AWS", description: "Amazon Web Services (AWS) is a secure cloud services platform, offering compute power, database storage, content delivery and other functionality to help businesses scale and grow." },
 
];
const MySkills = () => {
  return (
    <section className="min-h-screen flex justify-center dark:text-white pt-[72px] border-gray-200 border-b-2 p-4">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl space-y-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">MY SKILLS</h2>
          <p className="text-gray-500 dark:text-gray-400">Learn more about my experience and skills.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center px-4">
          {skillsData.map((skill, index) => (
            <Card key={index}>
              <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
                <div className="text-center">
                  <div className="flex items-center justify-center">{skill.icon}</div>
                  <h3 className="text-lg font-semibold">{skill.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{skill.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
