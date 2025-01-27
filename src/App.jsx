import React from 'react'
import { Intro, About, Contact } from './data'


const App = () => {
  return (
    <div className="bg-secondary min-h-screen" >
      <Intro />
      <div className="w-full border-t border-2 border-white/80 "></div>
      <About />
      <div className="w-full border-t border-2 border-white/80 "></div>
      <Contact />
    </div>
  )
}

export default App