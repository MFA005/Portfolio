import { useRive } from '@rive-app/react-canvas'
import IconsAnimation from '../assets/icons.riv'
import { CSharp, Html, Css, JavaScript, Mongodb, ReactLogo } from '../data/image.js'
import {useIsVisible} from '../data/index.js';
import { useRef } from 'react';


export default function IconsComponent(){

const {rive, RiveComponent} = useRive({
  src: IconsAnimation,
  animations: "movement",
  
  autoplay: true,
  
});

const refHtml = useRef();
const refCss = useRef();
const refJavaScript = useRef();
const refReact = useRef();
const refCSharp = useRef();
const refMongodb = useRef();

const isVisibleHtml = useIsVisible(refHtml);
const isVisibleCss = useIsVisible(refCss);
const isVisibleJavaScript = useIsVisible(refJavaScript);
const isVisibleReact = useIsVisible(refReact);
const isVisibleCSharp = useIsVisible(refCSharp);
const isVisibleMongodb = useIsVisible(refMongodb);

    return (
      <div >
      <RiveComponent className='xl:flex hidden w-[650px] h-[650px]'/>
     
      <div className="flex justify-center items-center ">
      <div className='xl:hidden flex flex-col md:grid md:grid-cols-2 md:gap-y-24 md:pl-28 gap-14 pl-10'> 
        <div ref={refHtml} className={`flex transition-opacity ease-in duration-700 ${isVisibleHtml ? "opacity-100" : "opacity-0"}`}> 
      <img src={Html} alt="html logo" className='w-16 h-16 md:w-20 md:h-20' />
      <span className='pl-10 pt-2 text-2xl font-bold tracking-wider-than-wide text-white font-ShareTech'>HTML</span>
        </div>
        <div ref={refCss} className={`flex transition-opacity ease-in duration-700 ${isVisibleCss ? "opacity-100" : "opacity-0"}`}> 
      <img src={Css} alt="css logo" className='w-16 h-16 md:w-20 md:h-20' />
      <span className='pl-10 pt-2 text-2xl font-bold tracking-wider-than-wide text-white font-ShareTech'>CSS</span>
        </div>
        <div ref={refJavaScript} className={`flex transition-opacity ease-in duration-700 ${isVisibleJavaScript ? "opacity-100" : "opacity-0"}`}> 
      <img src={JavaScript} alt="javascript logo" className='w-16 h-16 md:w-20 md:h-20' />
      <span className='pl-10 pt-2 text-2xl font-bold tracking-wider-than-wide text-white font-ShareTech'>JS</span>
        </div>
        <div ref={refCSharp} className={`flex transition-opacity ease-in duration-700 ${isVisibleCSharp ? "opacity-100" : "opacity-0"}`}> 
      <img src={CSharp} alt="csharp logo" className='w-16 h-16 md:w-20 md:h-20' />
      <span className='pl-10 pt-2 text-2xl font-bold tracking-wider-than-wide text-white font-ShareTech'>C#</span>
        </div>
        <div ref={refReact} className={`flex transition-opacity ease-in duration-700 ${isVisibleReact ? "opacity-100" : "opacity-0"}`}> 
      <img src={ReactLogo} alt="react logo" className='w-16 h-16 md:w-20 md:h-20' />
      <span className='pl-10 pt-2 text-2xl font-bold tracking-wider-than-wide text-white font-ShareTech'>REACT</span>
        </div>
        <div ref={refMongodb} className={`mb-20 flex transition-opacity ease-in duration-700 ${isVisibleMongodb ? "opacity-100" : "opacity-0"}`}> 
      <img src={Mongodb} alt="mongodb logo" className='w-16 h-16 md:w-20 md:h-20' />
      <span className='pl-10 pt-2 text-2xl font-bold tracking-wider-than-wide text-white font-ShareTech z-10'>MONGODB</span>
        </div>
        </div>
      </div>
    </div>
    )
}