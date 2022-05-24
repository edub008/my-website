import React, { useState } from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { polygonPathName, loadPolygonPath } from 'tsparticles-path-polygon'
import { Link } from 'react-scroll'

import particlesOptions2 from '../effects/particlesShapeLink.json'
import particlesOptions3 from '../effects/particleslineLinkColor.json'
import particlesOptions1 from '../effects/particlesFireworks1.json'

const ENABLEPARTICLES = false  // disable before deploying to production

const mainTitle = "About"
const footerTitle = "Thanks for visiting! 🙂"
const footerText = "I built this site using <a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'>React.js</a> along with some popular libraries such as <a href='https://www.npmjs.com/package/react-scroll-parallax' target='_blank' rel='noopener noreferrer'>react-scroll-parallax</a>, <a href='https://swiperjs.com/' target='_blank' rel='noopener noreferrer'>Swiper.js</a>, and <a href='https://particles.js.org/' target='_blank' rel='noopener noreferrer'>tsparticles</a>. CSS is handled with <a href='https://bulma.io/' target='_blank' rel='noopener noreferrer'>Bulma</a>."
const textBack = "Back to Top"

export default function About() {

  // TSParticles setup/config
  const particlesInit = async (main) => {
    // console.log(main)
    await loadFull(main)
  }
  const particlesLoaded = (container) => {
    // console.log(container)
  }

  const particlesEffect = (ENABLEPARTICLES || process.env.NODE_ENV === 'production') ? 
  	<Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions3}
    />
    :
    <div></div>

  return (

  	<React.Fragment>
	  	<div className="App-section is-block dark-gradient" id="about" style={{paddingTop:'4.25rem', paddingBottom:'4.25rem'}}>

	  		<div className="is-relative is-fullwidth">
		  		{particlesEffect}

			    <div className="columns m-0 has-text-centered auto-margins-x is-justify-content-center">
			      <div className="column is-9 mx-2 has-text-centered">
			      	<div className="title is-4 has-text-white ">
			      		{footerTitle}
			      	</div>
			      	<div className="subtitle is-5 has-text-white">
			      		<h6 dangerouslySetInnerHTML={{__html: footerText }}></h6>
			      	</div>
			      </div>
			    </div>

			    <div className="columns m-0 has-text-centered auto-margins-x is-justify-content-center">
			      <div className="column">
			      	<div className="button is-small is-primary" > 
			      		<Link
								  activeClass="active"
								  to="hero"
								  spy={true}
								  smooth={true}
								  offset={-100}
								  duration={800}
								  className="has-text-black"
								  >
								  	{textBack}
								</Link>
			      	</div>
			      </div>
			    </div>

			  </div>

		  </div>
		</React.Fragment>

  )
}