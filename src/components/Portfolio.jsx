import React from 'react'
import portfolio from '../data/portfolioData'
import PortfolioItem from './PortfolioItem'
import { ArrowFullscreen } from '../data/image';

function Portfolio() {
  return (
    <div className='relative flex flex-col justify-center items-center py-32 pb-10 bg-radial-both from-yellow-600/70 via-transparent to-transparent'>
        
        <span
            
            className={`text-white mb-24 text-3xl md:text-4xl font-ShareTech tracking-wider-than-wide z-50 font-bold `}
          >
            PROJECTS
          </span>
          <div className="circlePosition w-[300px]  h-[300px] inset-0 bg-yellow-600/70  rounded-full left-10 top-10 absolute xl:top-[10%] xl:left-[20%] blur-[50px] bg-clip-content " style={{ transform: 'rotate(45deg)' }}></div>
          <div className="circlePosition w-[300px]  h-[400px] inset-0 xl:bg-yellow-600/70 md:bg-transparent rounded-full left-40 absolute top-[34%] xl:left-[50%] blur-[50px] bg-clip-content " style={{ transform: 'rotate(45deg)' }}></div>
          <div className='absolute z-40 w-[40%] h-[20%] md:w-[20%] md:h-[10%] sm:w-[30%] sm:h-[10%] top-56 left-[60%] sm:top-64 sm:left-[70%] md:top-58 md:left-[45%]'>
        <img className='' src={ArrowFullscreen} alt="" />
      </div>
      
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