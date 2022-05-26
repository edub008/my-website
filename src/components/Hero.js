import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import backgroundImg from '../img/ergin-hero.webp'

const preTitle = "Hey, I'm"
const mainTitle = "Ergin Dervişoğlu"

export default function Hero() {
  return (
  	<div className="App-section" id="hero">
  		<ParallaxBanner
	      layers={[{ image: backgroundImg, speed: -70 }]}
	      style={{ aspectRatio: '4 / 3', height:'100vh' }}
	    >
	    <div className="is-flex is-absolute inset-0 is-justify-content-center is-align-items-center">
	    	<div className="is-relative">
		      <h2 className="subtitle is-2 has-text-white"> {preTitle} </h2>
	    		<h1 className="title is-hero has-text-white"> {mainTitle} </h1>
	    	</div>
	    </div>
	    </ParallaxBanner>
	  </div>
  )
}