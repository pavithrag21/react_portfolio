import { TypeAnimation } from "react-type-animation";
import { HERO_CONTENT } from "../constants";

import PaviPhoto from "../assets/PaviPhoto.jpeg"


const About = () => {
  return (
    <div className="container ">
      <div className="w-full lg:flex flex-row">
      <div className="w-full"> 
        <h1 className="tracking-wider font-extrabold text-3xl sm:text-4xl lg:text-5xl dark:text-white mb-3">Pavithra GokulaKrishnan</h1>
              {/* <span className="mt-2 text-2xl text-slate-600 block flex justify-between">Iam Interested in </span> */}
              <TypeAnimation 
                  sequence={[
                    'full stack developer',2000,
                    'AI Engineer',2000,
                    'Java developer',2000
                  ]}
                  repeat={Infinity}
                  // className=" font-medium text-sky-500 dark:text-sky-400"
                  style={{fontSize:'2em',color:"skyblue", }}
                  speed={60}
                  />
              <p className="flex mt-2 font-semibold tracking-tight text-l text-neutral-400 mb-4">{HERO_CONTENT}</p>    
            </div>
        <div className="w-full justify-center lg:w-1/2 lg:p-8 align-middle">
            <div className="flex justify-center">
              <img className="h-70 w-80 justify-center mb-10 "src={PaviPhoto}alt="paviphoto"></img>
            </div>
          </div>
        </div>
        </div>
  
  );
};

export default About;