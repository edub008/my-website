import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import backgroundImg from '../img/ergin-hero.webp'
// import { useTranslation } from 'react-i18next'

const languageOptions = [
	{name: "English", code: 'en'},
	{name: "Turkçe", code: 'tr'}
]

const languages = languageOptions.map((language, index) =>
  <React.Fragment key={`language-${index+1}`}>
  	<option id={language.code} value={language.code}>{language.name}</option>
  </React.Fragment>
)

export default function Hero(props) {

  return (
  	<div className="App-section" id="hero">
  		<div className="language-select">
  			<div className="select is-primary">
				  <select onChange={(e) => props.changeLanguage(e)}>
				  	{languages}
				  </select>
				</div>
  		</div>
  		<ParallaxBanner
	      layers={[{ image: backgroundImg, speed: -70 }]}
	      className="ratio-4x3 is-fullheight">
		    <div className="is-flex is-absolute inset-0 is-justify-content-center is-align-items-center">
		    	<div className="is-relative">
			      <h2 className="subtitle is-2 has-text-white"> {props.t("hero-subtitle")} </h2>
		    		<h1 className="title is-hero has-text-white"> {props.t("name")} </h1>
		    	</div>
		    </div>
	    </ParallaxBanner>
	  </div>
  )
}