import { React, useRef } from "react";
import { useIsVisible } from "../data";



const About = () => {

const refAbout = useRef(null);
  const isVisibleAbout = useIsVisible(refAbout);

  return (
    <div className="relative snap-start min-h-screen bg-dual-gradient ">
      {/* Background Glow */}
      

      {/* Circle Glow (Behind the Boxes) */}
      <div className="circlePosition w-[300px] h-[300px] inset-0 bg-accent/10 xl:bg-accent/10 md:bg-transparent rounded-full left-72 absolute top-[40%] xl:left-[60%] blur-[50px] bg-clip-content z-0"></div>

      <div ref={refAbout} className={`flex flex-col justify-center items-center transition-opacity duration-1500 ${
        isVisibleAbout ? "opacity-100" : "opacity-0"
      }`}>
        <span
            
            className={` mt-20 mb-0 pb-0 text-white text-3xl md:text-4xl font-ShareTech tracking-wider-than-wide font-bold `}
          >
            ABOUT
          </span>
      {/* Grid Section */}
      <div  className={`mb-20 relative pt-10 mt-14 flex items-start justify-start  z-10`}>
        {/* Grid Container */}
        <div  className={`grid grid-cols-4 grid-rows-3 gap-4 px-8 max-w-screen-md xl:gap-7 relative`}>
          {/* Individual Grid Items */}
          <div className="text-white shadow-xl shadow-black/30 leading-8 font-ShareTech border-2 border-white/20 hover:border-accent/70 transition-all duration-100 hover:scale-[102%] p-5 col-span-2 row-span-2 bg-black/40 rounded-lg">
          {`Hi, I’m `}
          <b className="text-primary">Muhammad</b>
          {`, an aspiring `} 
<strong className="text-primary">developer</strong> 
{` 💻 and `} 
<strong className="text-primary">designer</strong> 
{` 🎨 passionate about creating `} 
{`user-friendly digital experiences ✨. I specialize in web technologies like `} 
<strong className="text-primary">React</strong> 
{` ⚛️, `} 
<strong className="text-primary">Tailwind</strong> 
{` 🌬️, and `} 
<strong className="text-primary">ASP.NET Core MVC</strong>
{`. I also enjoy exploring design tools like `} 
<strong className="text-primary">Figma</strong> 
{` and `} 
<strong className="text-primary">Rive</strong> 
{` .`}
          </div>
          <div className="text-white shadow-xl shadow-black/30 leading-8 font-ShareTech border-2 border-white/20 hover:border-accent/70 transition-all duration-160 hover:scale-[102%] p-5 col-span-2 row-span-1 bg-black/40 rounded-lg">
            ASDAS
          </div>
          <div className="break-words text-white shadow-xl shadow-black/30 leading-8 font-ShareTech border-2 border-white/20 hover:border-accent/70 transition-all duration-160 hover:scale-[102%] p-5 col-span-1 row-span-2  bg-black/40 rounded-lg">
          <div className=" text-2xl border-b mb-3 flex justify-center items-center py-1  border-black/60">Skills</div>
            HTML, CSS, JS, C#, Node.js, React, SQL, Express.js, MongoDB, TailwindCSS, ASP.NET Core  
          </div>
          <div className="text-white shadow-xl shadow-black/30 leading-8 font-ShareTech border-2 border-white/20 hover:border-accent/70 transition-all duration-160 hover:scale-[102%] p-5 col-span-1 row-span-1 bg-black/40 rounded-lg">
            CAS
          </div>
          <div className="text-white leading-8 shadow-xl shadow-black/30 font-ShareTech border-2 border-white/20 hover:border-accent/70 transition-all duration-160 hover:scale-[102%] p-5 col-span-2 row-span-1 bg-black/40 rounded-lg">
            SDF
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
