//
// Personal Website Project
// start date: 3/25/2022
//

import { ParallaxProvider } from 'react-scroll-parallax'
import { useTranslation } from 'react-i18next'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Education from './components/Education'
import Interests from './components/Interests'
import System from './components/System'
import About from './components/About'
import './scss/App.scss'

export default function App() {

  const { t, i18n } = useTranslation()
  const changeLanguage = event => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <div className="App overflow-hidden">
      <ParallaxProvider>
        <Hero t={t} changeLanguage={changeLanguage}/>
        <Journey t={t} changeLanguage={changeLanguage}/>
        <Education t={t} changeLanguage={changeLanguage}/>
        <Interests t={t} changeLanguage={changeLanguage}/>
        <System t={t} changeLanguage={changeLanguage}/>
        <About t={t} changeLanguage={changeLanguage}/>
      </ParallaxProvider>
    </div>
  )
}