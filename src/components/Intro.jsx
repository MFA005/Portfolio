import { React, useRef } from "react";
import IconsComponent from "./IconsComponent";
import { useIsVisible } from "../data/index.js";

const Intro = () => {
  const refIntro = useRef(null);
  const isVisibleIntro = useIsVisible(refIntro);

  const refSkills = useRef(null);
  const isVisibleSkills = useIsVisible(refSkills);

  return (
    <section
      ref={refIntro}
      className={`relative snap-start min-h-screen xl:h-screen bg-radial-gradient-l from-accent/30 via-transparent to-transparent bg-no-repeat bg-secondary transition-opacity duration-1500 ${
        isVisibleIntro ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="quarterCircle w-[400px] h-[400px] bg-accent/20 xl:bg-transparent rounded-full absolute z-0 top-0 right-0 blur-[50px] clip-rect"></div>
      <div className=" w-full mr-auto ">
        <h1 className=" text-5xl md:text-6xl  font-extrabold text-white leading-tight flex flex-col gap-0 z-10 p-20 md:pt-30 xl:pt-52 pt-28 relative ">
          <span className="text-accent text-base tracking-wider-than-wide py-0 my-0 font-SeaweedScript ">
            {"<h1>"}
          </span>

          <span className="font-SourceCodePro pl-3">  HI, I’M MUHAMMAD</span>

          <div>
            <span className="font-SourceCodePro pl-20">A </span>
            <span className="font-SourceCodePro text-primary "> DEVELOPER</span>
          </div>

          <span className="text-accent text-base tracking-wider-than-wide font-SeaweedScript ml-[300px] md:ml-[500px]">
            {"</h1>"}
          </span>
        </h1>
        <button></button>
        <div className="mt-20 flex justify-center items-center mb-20 md:m-auto h-40 ">
          <span
            ref={refSkills}
            className={` text-white text-3xl md:text-4xl md:mb-[10%] font-ShareTech tracking-wider-than-wide font-bold xl:hidden transition-opacity duration-700 ${
              isVisibleSkills ? "opacity-100" : "opacity-0"
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
