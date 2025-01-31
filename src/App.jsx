import React from 'react'
import { Intro, About, Contact, Portfolio } from './data'


const App = () => {
  return (
    <div className="bg-secondary h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
  <div className="snap-center snap-always">
    <Intro />
  </div>
  <div className="w-full border-t border-2 border-white/80"></div>
  <div className="snap-center snap-always">
    <About />
  </div>
  <div className="w-full border-t border-2 border-white/80"></div>
  <div className="snap-center snap-always">
    <Portfolio />
  </div>
  <div className="w-full border-t border-2 border-white/80"></div>
  <div className="snap-center snap-always">
    <Contact />
  </div>
</div>

  )
}

export default App