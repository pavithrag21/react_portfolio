import { FaCss3, FaHtml5, FaJs } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { FaJava, FaC } from "react-icons/fa6";
import { BiLogoMongodb } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa6";
// import { ABOUT_TEXT, EXPERIENCES } from "../constants";

const Skills = () => {
  return (
    <div>
      <h1 className="tracking-wider text-center font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white justify-center-between mt-20 mb-10">
        Skills
      </h1>
      <div className="container mx-auto">
      
          <div className="w-full grid grid-cols-6 place-items-center justify-center gap-4 p-4">
            <FaHtml5 className="text-orange-600 text-4xl md:text-6xl lg:text-8xl" />
            <FaCss3 className="text-blue-600 text-4xl md:text-6xl lg:text-8xl" />
            <FaJs className="text-yellow-500 text-4xl md:text-6xl lg:text-8xl" />
            <FaReact className="text-cyan-500 text-4xl md:text-6xl lg:text-8xl" />
            <FaNode className="text-green-600 text-4xl md:text-6xl lg:text-8xl" />
            <FaPython className="text-blue-500 text-4xl md:text-6xl lg:text-8xl" />
            <FaJava className="text-red-600 text-4xl md:text-6xl lg:text-8xl" />
            <FaC className="text-blue-800 text-4xl md:text-6xl lg:text-8xl" />
            <BiLogoMongodb className="text-green-500 text-4xl md:text-6xl lg:text-8xl" />
            <GrMysql className="text-blue-700 text-4xl md:text-6xl lg:text-8xl" />
            <BiLogoTailwindCss className="text-blue-500 text-4xl md:text-6xl lg:text-8xl" />
            <FaBootstrap className="text-blue-600 text-4xl md:text-6xl lg:text-8xl" />
          </div>

      </div>
      </div>
      
  );
};

export default Skills;
