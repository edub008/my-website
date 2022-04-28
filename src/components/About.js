import React, { useState } from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
// import Particles from "react-tsparticles"
// import { loadFull } from "tsparticles"
// import { polygonPathName, loadPolygonPath } from "tsparticles-path-polygon"

const mainTitle = "About"
const footerTitle = "Thanks for visiting!!! 🙂"
const footerText = "I built this site using <a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'>React.js</a> along with some popular libraries such as <a href='https://www.npmjs.com/package/react-scroll-parallax' target='_blank' rel='noopener noreferrer'>react-scroll-parallax</a>, <a href='https://particles.js.org/' target='_blank' rel='noopener noreferrer'>tsparticles</a>, and <a href='https://swiperjs.com/' target='_blank' rel='noopener noreferrer'>Swiper.js</a>. CSS is handled with <a href='https://bulma.io/' target='_blank' rel='noopener noreferrer'>Bulma</a>."

export default function About() {

  return (

  	<React.Fragment>
	  	<div className="App-section is-block" style={{background:'linear-gradient(180deg, #000022 0%, #000000 100%)', paddingTop:'4.25rem', paddingBottom:'4.25rem'}}>

				    <div className="columns m-0 has-text-centered auto-margins-x is-justify-content-center">
				      <div className="column is-9 mx-2 has-text-centered">
				      	<div className="title is-3 has-text-white ">
				      		{footerTitle}
				      	</div>
				      	<div className="title is-4 has-text-white">
				      		<h4 dangerouslySetInnerHTML={{__html: footerText }}></h4>
				      	</div>
				      </div>
				    </div>

		  </div>
		</React.Fragment>

  )
}