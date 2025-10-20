import { React, useRef } from "react";
import IconsComponent from "./IconsComponent";
import { useIsVisible } from "../data/index.js";
import { GithubLogoGreen } from '../data/image';
import { LinkedInLogo } from "../data/image";


const Intro = () => {
  const refIntro = useRef(null);
  const isVisibleIntro = useIsVisible(refIntro);

  const refSkills = useRef(null);
  const isVisibleSkills = useIsVisible(refSkills);

  const githubProfile = 'https://github.com/MFA005';
  const linkedinProfile = 'https://www.linkedin.com/in/mahmed005/'

  return (
    <section
      ref={refIntro}
      className={`relative snap-start min-h-screen xl:h-screen bg-radial-gradient-l from-accent/30 via-transparent to-transparent bg-no-repeat bg-secondary transition-opacity duration-1500 overflow-x-hidden ${isVisibleIntro ? "opacity-100" : "opacity-0"
        }`}
    >
      <div className="quarterCircle w-[400px] h-[400px] bg-accent/20 xl:bg-transparent rounded-full absolute z-0 top-0 right-0 blur-[50px] bg-clip-content clip-rect"></div>
      <div className=" w-full mr-auto ">
        <h1 className="text-4xl md:text-6xl xxl:text-8xl font-extrabold text-white leading-tight flex flex-col gap-0 z-10 pb-14 p-6 md:p-20 md:pt-30 xl:pt-52 pt-28 relative items-center text-center xl:items-start xl:text-left">
          <span className="text-accent text-base tracking-wider-than-wide py-0 my-0 font-SeaweedScript ">
            {"<h1>"}
          </span>

          <span className="font-SourceCodePro pl-0 md:pl-3">  HI, I’M MUHAMMAD</span>

          <div>
            <span className="font-SourceCodePro pl-0 md:pl-20">A </span>
            <span className="font-SourceCodePro text-primary "> DEVELOPER</span>
          </div>

          <span className="text-accent text-base tracking-wider-than-wide font-SeaweedScript ml-0 xl:ml-[500px] mt-5 xl:mt-0">
            {"</h1>"}
          </span>
        </h1>
        <div className="flex flex-row flex-wrap gap-5 p-5 pt-0 mx-4 md:mx-20 mt-0 justify-center xl:justify-normal mb-10">
          {/* GitHub */}
          <div
            className="group inline-flex items-center gap-2 md:gap-3 xxl:gap-6 px-4 py-2 md:px-6 md:py-3 xxl:px-10 xxl:py-6
               border-2 rounded-lg bg-black/40 border-primary/50 
               hover:border-primary hover:bg-black/60 
               cursor-pointer transition-all duration-200 min-w-0"
             onClick={() => window.open(githubProfile, "_blank")}
           >
             <img
               src={GithubLogoGreen}
               alt="github logo"
               className="w-5 h-5 md:w-6 md:h-6 xxl:w-10 xxl:h-10 object-contain opacity-80 group-hover:opacity-100 transition-all duration-200 flex-shrink-0"
             />
            <span className="text-white font-ShareTech font-semibold tracking-wide opacity-80 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap overflow-hidden text-sm md:text-base xxl:text-2xl">
               GitHub
             </span>
           </div>
 
           {/* LinkedIn */}
           <div
            className="group inline-flex items-center gap-2 md:gap-3 xxl:gap-6 px-4 py-2 md:px-6 md:py-3 xxl:px-10 xxl:py-6
               border-2 rounded-lg bg-black/40 border-primary/50 
               hover:border-primary hover:bg-black/60 
               cursor-pointer transition-all duration-200 min-w-0"
             onClick={() => window.open(linkedinProfile, "_blank")}
           >
             <img
               src={LinkedInLogo}
               alt="linkedin logo"
               className="w-5 h-5 md:w-6 md:h-6 xxl:w-10 xxl:h-10 object-contain opacity-80 group-hover:opacity-100 transition-all duration-200 flex-shrink-0"
             />
            <span className="text-white font-ShareTech font-semibold tracking-wide opacity-80 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap overflow-hidden text-sm md:text-base xxl:text-2xl">
               LinkedIn
             </span>
           </div>
        </div>
        <div className="mt-20 flex justify-center items-center mb-20 md:m-auto h-40 ">
          <span
            ref={refSkills}
            className={` text-white text-2xl md:text-4xl md:mb-[10%] font-ShareTech tracking-wider-than-wide font-bold xl:hidden transition-opacity duration-700 ${isVisibleSkills ? "opacity-100" : "opacity-0"
              }`}
          >
            HIGHLIGHTS
          </span>
        </div>
        <div className="xl:absolute xl:top-1 xl:right-1 z-0 ">
          <IconsComponent />
        </div>
      </div>

    </section>
  );
};

export default Intro;
