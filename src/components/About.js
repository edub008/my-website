import React, { useState } from 'react'
import { Link } from 'react-scroll'
import img_linkedIn from "../img/communities/linked-in.webp"
import img_GitHub from "../img/communities/github.webp"
import img_StackOverflow from "../img/communities/stack-overflow.webp"

const mainTitle = "About"
const footerTitle = "Let's connect, a great way to get my attention is through the following communities..."
const footerText = "I built this site using <a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'>React.js</a> along with some popular libraries such as <a href='https://www.npmjs.com/package/react-scroll-parallax' target='_blank' rel='noopener noreferrer'>react-scroll-parallax</a>, <a href='https://swiperjs.com/' target='_blank' rel='noopener noreferrer'>Swiper.js</a>, and <a href='https://particles.js.org/' target='_blank' rel='noopener noreferrer'>tsparticles</a>. CSS is handled with <a href='https://bulma.io/' target='_blank' rel='noopener noreferrer'>Bulma</a>."
const textBack = "Back to Top"

export default function About() {

  return (
  	<React.Fragment>
	  	<div className="App-section about-class is-block dark-gradient " id="about">

	  		<div className="is-relative is-fullwidth">
		  		
			    <div className="columns m-0 mb-5 has-text-centered auto-margins-x is-justify-content-center">
			      <div className="column is-9 mx-2 has-text-centered">
			      	<div className="title is-4 has-text-white ">
			      		{footerTitle}
			      	</div>
			      </div>
			    </div>

			    <div className="columns m-0 mb-5">
			    	<div className="column">
				      <div className="tile is-ancestor">
				        <div className="tile is-parent">
				          <article className="tile is-child">
				            
				          </article>
				        </div>
				        <a className="tile is-parent is-vertical tile-hover" href="https://www.linkedin.com/in/ergindervisoglu/" target='_blank' rel='noopener noreferrer' >
					        <article className="tile is-child">
					          <p className="subtitle has-text-primary">Linked In</p>
					          <hr />
					        </article>
					        <article className="tile is-child">
					          <img className="image is-128x128 auto-margins-x" src={img_linkedIn} alt="ergin dervisoglu - linkedin" />
					        </article>
					      </a>
					      <a className="tile is-parent is-vertical tile-hover" href="https://github.com/edub008" target='_blank' rel='noopener noreferrer' >
					        <article className="tile is-child">
					          <p className="subtitle has-text-primary">GitHub</p>
					          <hr />
					        </article>
					        <article className="tile is-child">
					          <img className="image is-128x128 auto-margins-x" src={img_GitHub} alt="ergin dervisoglu - github" />
					        </article>
					      </a>
					      <a className="tile is-parent is-vertical tile-hover" href="https://stackoverflow.com/users/1968395/ergin" target='_blank' rel='noopener noreferrer' >
					        <article className="tile is-child">
					          <p className="subtitle has-text-primary">Stack Overflow</p>
					          <hr />
					        </article>
					        <article className="tile is-child">
					          <img className="image is-128x128 auto-margins-x" src={img_StackOverflow} alt="ergin dervisoglu - stackoverflow" />
					        </article>
					      </a>
				        <div className="tile is-parent">
				          <article className="tile is-child">
				            
				          </article>
				        </div>
				      </div>
				    </div>
			    </div>

			    <div className="columns m-0 mt-6 has-text-centered auto-margins-x is-justify-content-center">
			      <div className="column is-9 mx-2 has-text-centered">
			      	<div className="subtitle is-6 has-text-white">
			      		<h1 className="subtitle is-6" dangerouslySetInnerHTML={{__html: footerText }}></h1>
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
								  href="#hero"
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