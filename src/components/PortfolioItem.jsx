import React, { useState, useRef } from 'react';
import { useIsVisible } from '../data';
import { GithubLogo } from '../data/image';


function PortfolioItem({ title, imgUrl, stack, description, githubLink, reverse }) {
  
    const refProject = useRef(null);
      const isVisibleProject = useIsVisible(refProject);

    const [isOpen, setIsOpen] = useState(false); 

  const handleGifClick = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

  const handleCloseFullscreen = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto'; 
  };

    return (
    <div ref={refProject} className={`flex flex-col md:flex-row m-10 mx-20 items-center md:border-hidden border-2 border-white/20 shadow-md shadow-black/50 md:shadow-none bg-black/40 md:bg-transparent rounded-lg gap-10 ${reverse ? 'md:flex-row-reverse' : ''} transition-opacity duration-1500 ${
        isVisibleProject ? "opacity-100" : "opacity-0"
      }`}>
        
      {/* Project Card */}
      <div className="relative w-full md:w-1/2 p-8 pb-2 md:mb-14 md:pb-8 md:border-2 shadow-black/50 md:shadow-md border-white/10 md:bg-black/40  hover:border-yellow-400/70 transition-all duration-160 md:hover:scale-[102%] rounded-lg bg-transparent  ">
      
      

        <div className="w-full h-52 flex items-center justify-center bg-yellow-400/50 rounded-lg cursor-pointer" onClick={handleGifClick}>
          <img src={imgUrl} alt={title} className="w-full h-full object-cover rounded-lg" />
        </div>
        
        <h3 className="text-white font-bold font-SourceCodePro text-lg py-4 pb-6 md:pb-3 mt-4">{title}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {stack.map((item, index) => (
            <span key={index} className="bg-yellow-600 font-bold tracking-wider text-white px-3 py-1 font-ShareTech rounded-md text-sm">
              {item}
            </span>
          ))}
        </div>
    </div>
      <div className="w-[60%] border-t border-1 md:hidden rounded-2xl border-white/20"></div>
      <div className='flex flex-col md:w-1/2 items-center md:items-start justify-center  '>
      {/* Description beside the card */}
      <p className="text-white font-SourceCodePro md:text-left text-center tracking-tighter leading-10 w-full text-lg mt-[-5%] cursor-pointer md:pb-0 px-8">{description}</p> 

        {/*github button*/}
      <div className='flex m-10 mt-5 md:mt-10 p-4 w-40 border-2 rounded-full md:hover:scale-[105%] transition-all duration-100 bg-black/40 border-yellow-300/50 hover:border-yellow-300 cursor-pointer content-center justify-around' onClick={() => window.open(githubLink, "_blank")}>
        <img src={GithubLogo}  alt="github logo" className='md:w-[20% md:h-[15%] sm:w-[20%] sm:h-[15%] w-[20%] h-[20%] cursor-pointer z-[60] transition-all duration-160' />
        <span className='text-yellow-300 font-ShareTech font-extrabold tracking-widest mr-2 '>GitHub</span>
        </div>       
      </div>
      

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/50 z-50 cursor-pointer"
        onClick={handleCloseFullscreen} // Close when clicked on the GIF
        >
          <div
            className="relative"   
          >
            <img src={imgUrl} alt={title} className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg" />
            
          </div>
        </div>
      )}
    </div>
  )
}

export default PortfolioItem