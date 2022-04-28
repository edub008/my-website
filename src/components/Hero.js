import React from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import backgroundImg from '../img/ergin-hero.jpg'

const preTitle = "Hey, I'm"
const mainTitle = "Ergin Dervişoğlu"
const bkgdImage = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner.jpg"

export default function Hero() {

  return (
  	<div className="App-section">
  		<ParallaxBanner
	      layers={[{ image: backgroundImg, speed: -70 }]}
	      style={{ aspectRatio: '4 / 3', height:'100vh' }}
	    >
	    <div className="is-flex is-absolute inset-0 is-justify-content-center is-align-items-center">
	    	<div className="is-relative">
	    		<Parallax>
			      <h2 className="subtitle is-2 has-text-white"> {preTitle} </h2>
		    		<h1 className="title is-hero has-text-white"> {mainTitle} </h1>
			    </Parallax>
	    	</div>
	    </div>
	    </ParallaxBanner>
	  </div>
  )
}