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
			      <div className="column is-9 auto-margins-x has-text-centered">
			      	<div className="title is-4 has-text-white ">
			      		{footerTitle}
			      	</div>
			      </div>
			    </div>

			    <div className="columns is-desktop m-0 mb-5">
			    	<div className="column">
			    	</div>
			    	<div className="column about-col">
			    		<a className="card" href="https://www.linkedin.com/in/ergindervisoglu/" target='_blank' rel='noopener noreferrer'>
		            <div className="card-image">
		              <img className="image is-128x128 auto-margins-x" src={img_linkedIn} alt="ergin dervisoglu - linkedin" />
		            </div>
		            <div className="card-content">
		              <div className="media">
		                <div className="media-content">
		                  <p className="title about-title has-text-light">LinkedIn</p>
		                </div>
		              </div>
		            </div>
		          </a>
          	</div>
          	<div className="column about-col">
		          <a className="card" href="https://github.com/edub008" target='_blank' rel='noopener noreferrer'>
		            <div className="card-image">
		              <img className="image is-128x128 auto-margins-x" src={img_GitHub} alt="ergin dervisoglu - github" />
		            </div>
		            <div className="card-content">
		              <div className="media">
		                <div className="media-content">
		                  <p className="title about-title has-text-light">GitHub</p>
		                </div>
		              </div>
		            </div>
		          </a>
		        </div>
          	<div className="column about-col">
		          <a className="card" href="https://stackoverflow.com/users/1968395/ergin" target='_blank' rel='noopener noreferrer'>
		            <div className="card-image">
		              <img className="image is-128x128 auto-margins-x" src={img_StackOverflow} alt="ergin dervisoglu - stackoverflow" />
		            </div>
		            <div className="card-content">
		              <div className="media">
		                <div className="media-content">
		                  <p className="title about-title has-text-light">Stack Overflow</p>
		                </div>
		              </div>
		            </div>
		          </a>
				    </div>
				    <div className="column">
			    	</div>
			    </div>

			    <div className="columns m-0 mt-6 has-text-centered auto-margins-x is-justify-content-center">
			      <div className="column is-9 auto-margins-x has-text-centered">
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