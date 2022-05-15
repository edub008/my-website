//
// Personal Website Project
// start date: 3/25/2022
//

import { ParallaxProvider } from 'react-scroll-parallax'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Education from './components/Education'
import Interests from './components/Interests'
import System from './components/System'
import About from './components/About'
import { AppStateContext } from './AppStateContext'
import logo from './logo.svg'
import './App.scss'

export default function App() {

  return (
    <div className="App" style={{overflow:'hidden'}}>
      <AppStateContext.Provider value={{test: 'placeholder'}}>
        <ParallaxProvider>
          <Hero />
          <Journey />
          <Education />
          <Interests />
          <System />
          <About />
        </ParallaxProvider>
      </AppStateContext.Provider>
    </div>
  )
}