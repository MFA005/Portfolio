import React from 'react'
import portfolio from '../data/portfolioData'
import PortfolioItem from './PortfolioItem'
import { ArrowFullscreen } from '../data/image';

function Portfolio() {
  return (
    <div className='relative flex flex-col justify-center items-center py-32 pb-10 bg-radial-both from-yellow-600/70 via-transparent to-transparent'>
        
        <span
            
            className={`text-white mb-20 text-3xl md:text-4xl font-ShareTech tracking-wider-than-wide z-50 font-bold `}
          >
            PROJECTS
          </span>
          <div className="circlePosition w-[300px]  h-[300px] inset-0 bg-yellow-600/70  rounded-full left-10 top-10 absolute xl:top-[10%] xl:left-[20%] blur-[50px] bg-clip-content " style={{ transform: 'rotate(45deg)' }}></div>
          <div className="circlePosition w-[300px]  h-[400px] inset-0 xl:bg-yellow-600/70 md:bg-transparent rounded-full left-40 absolute top-[34%] xl:left-[50%] blur-[50px] bg-clip-content " style={{ transform: 'rotate(45deg)' }}></div>
  <div className="absolute inset-0 w-full h-full -z-10">
    <div className="absolute w-40 h-40 bg-[radial-gradient(circle,_rgba(253,224,71,1)_0%,_transparent_70%)] top-10 left-10"></div>
    <div className="absolute w-64 h-64 bg-[radial-gradient(circle,_rgba(253,224,71,1)_0%,_transparent_70%)] top-40 right-20"></div>
    <div className="absolute w-80 h-80 bg-[radial-gradient(circle,_rgba(253,224,71,1)_0%,_transparent_70%)] bottom-10 left-1/3"></div>
    <div className="absolute w-96 h-96 bg-[radial-gradient(circle,_rgba(253,224,71,1)_0%,_transparent_70%)] bottom-20 right-10"></div>
  </div>
          <div className='absolute z-40 w-[40%] h-[20%] md:w-[20%] md:h-[10%] sm:w-[30%] sm:h-[10%] top-56 left-[60%] sm:top-64 sm:left-[70%] md:top-58 md:left-[45%]'>
        <img className='' src={ArrowFullscreen} alt="" />
      </div>
      <div className="w-40 z-[-10]  h-40 bg-radial-gradient from-yellow-300 via-transparent to-transparent"></div>
<div className="w-64 h-64 z-[-10] absolute bg-radial-gradient from-yellow-300 via-transparent to-transparent"></div>
<div className="w-80 h-80 absolute z-[-10] bg-radial-gradient from-yellow-300 via-transparent to-transparent"></div>
<div className="w-96 h-96 absolute z-[-10] bg-radial-gradient from-yellow-300 via-transparent to-transparent"></div>
    {portfolio.map((project, index) => (
        <PortfolioItem
            key={index}
            imgUrl = {project.imgUrl}
            title = {project.title}
            stack = {project.stack}
            githubLink = {project.githubLink}
            description={project.description}
            reverse={index % 2 !== 0}
        />
    ))}</div>
  )
}

export default Portfolio