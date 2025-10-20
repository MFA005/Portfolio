import { React, useRef } from "react";
import { useIsVisible } from "../data";
import { DesignLogos, OpenPage } from "../data/image";




const About = () => {

  const refAbout = useRef(null);
  const isVisibleAbout = useIsVisible(refAbout);

  return (
    <div className="relative snap-start min-h-screen bg-dual-gradient from-sky-500 via-transparent to-transparent overflow-x-hidden">
      {/* Background Glow */}
 
 
      {/* Circle Glow (Behind the Boxes) */}
      <div className="circlePosition w-[260px] h-[260px] inset-0 bg-sky-400/40 xl:bg-sky-500/40 md:bg-transparent rounded-full md:left-72 absolute top-[40%] xl:left-[60%] blur-[48px] bg-clip-content z-0 pointer-events-none"></div>
 
      <div ref={refAbout} className={`flex flex-col justify-center items-center transition-opacity duration-1500 ${isVisibleAbout ? "opacity-100" : "opacity-0"
        }`}>
        <span
          className={` mt-12 mb-0 pb-0 text-white text-2xl md:text-4xl font-ShareTech tracking-wider-than-wide font-bold `}
        >
          ABOUT
        </span>
        {/* Grid Section */}
        <div className={`mb-20 relative pt-10 mt-14 flex items-start justify-start  z-10`}>
          {/* Grid Container */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 px-4 md:px-8 max-w-screen-md relative overflow-visible`}>
             {/* Individual Grid Items */}
            <div className="relative z-10 overflow-hidden text-white shadow-xl shadow-black/30 leading-6 md:leading-8 font-ShareTech border-2 border-white/20 hover:border-blue-600/70 transition-all duration-100 hover:scale-[102%] hover:z-20 p-4 md:p-5 col-span-1 md:col-span-2 bg-black/40 rounded-lg text-sm md:text-base">

               {` An aspiring `}
               <strong className="text-cyan-300">developer</strong>
               {` 💻 and `}
               <strong className="text-cyan-300">designer</strong>
               {` 🎨. Passionate about creating `}
               {`user-friendly digital experiences ✨. Specialize in web technologies like `}
               <strong className="text-cyan-300">React</strong>
               {` , `}
               <strong className="text-cyan-300">Tailwind</strong>
               {` , and `}
               <strong className="text-cyan-300">ASP.NET Core MVC</strong>
               {`. Also enjoy exploring design tools like `}
               <strong className="text-cyan-300">Figma</strong>
               {` and `}
               <strong className="text-cyan-300">Rive</strong>
               {` .`}
             </div>
            <a
              href="https://mfaportfolio.framer.website/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 text-white flex shadow-xl shadow-black/30 leading-7 font-ShareTech border-2 border-white/25 hover:border-blue-600/70 transition-all duration-160 hover:scale-[102%] hover:z-20 p-4 md:p-5 col-span-1 row-span-1 justify-center items-center bg-black/90 rounded-lg overflow-hidden min-h-[80px]"
            >
              <img className="w-5 relative z-10 flex-shrink-0" src={OpenPage} />
              <img className="opacity-30 absolute inset-0 rounded-lg object-cover w-full h-full  scale-[1.04] p-3" src={DesignLogos} />
              <span className="relative z-10 text-white text-sm md:text-base ml-3">Design Portfolio</span>
            </a>
            <div className="relative z-10 text-white shadow-xl shadow-black/30 leading-6 md:leading-8 font-ShareTech border-2 border-white/20 hover:border-blue-600/70 transition-all duration-160 hover:scale-[102%] hover:z-20 p-4 md:p-5 col-span-1 row-span-1 bg-black/40 rounded-lg text-sm md:text-base">
              <div className=" text-lg md:text-2xl border-b mb-2 md:mb-3 flex justify-center items-center py-1 border-white/30">Back-End</div>
              <strong className="text-cyan-300 block">C#, Node.js, SQL, Express.js, MongoDB, Nextjs, SQLite</strong>
            </div>
            <div className="relative z-10 text-white shadow-xl shadow-black/30 leading-6 md:leading-8 font-ShareTech border-2 border-white/20 hover:border-blue-600/70 transition-all duration-160 hover:scale-[102%] hover:z-20 p-4 md:p-5 overflow-hidden col-span-1 md:col-start-3 row-span-1 bg-black/40 rounded-lg text-sm md:text-base">
              <div className=" text-2xl border-b mb-3 text-center flex justify-center items-center py-1  border-white/30">Front-End</div>
              <strong className="text-cyan-300 text-center"> TS, JS, React, Nextjs, Tailwind, ASP.NET Core, Flutter</strong>
            </div>
 
            <div className="relative z-10 text-white leading-6 md:leading-8 shadow-xl shadow-black/30 font-ShareTech border-2 border-white/20 hover:border-blue-600/70 transition-all duration-160 hover:scale-[102%] hover:z-20 p-4 md:p-5 col-span-1 md:col-span-3 bg-black/40 rounded-lg text-sm md:text-base">
               <div className=" text-lg md:text-2xl border-b mb-2 md:mb-3 flex justify-center items-center py-1 border-white/30">Ongoing Projects</div>
               <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                 <li><strong className="text-cyan-300">Portfolio website for a client</strong>, designed for clean visual presentation and performance.</li>
                 <li><strong className="text-cyan-300">Speech-to-text translator app</strong> — improving accessibility for hearing-impaired users.</li>
               </ul>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 };

export default About;
