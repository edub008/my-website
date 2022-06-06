import React, { useState } from 'react'
import { Link } from 'react-scroll'
import img_linkedIn from "../img/communities/linked-in.webp"
import img_GitHub from "../img/communities/github.webp"
import img_StackOverflow from "../img/communities/stack-overflow.webp"

const linkedInHref = "https://www.linkedin.com/in/ergindervisoglu/"
const gitHubHref = "https://github.com/edub008"
const stackOverflowHref = "https://stackoverflow.com/users/1968395/ergin"
const linkedInImgAlt = "ergin dervisoglu - linkedin"
const gitHubImgAlt = "ergin dervisoglu - github"
const stackOverflowImgAlt = "ergin dervisoglu - stack overflow"

export default function About(props) {
  return (
  	<React.Fragment>
	  	<div className="App-section about-class is-block dark-gradient " id="about">

	  		<div className="is-relative is-fullwidth">
			    <div className="columns m-0 mb-5 has-text-centered auto-margins-x is-justify-content-center">
			      <div className="column is-9 auto-margins-x has-text-centered">
			      	<div className="title is-4 has-text-white ">
			      		{props.t("text-connect")}
			      	</div>
			      </div>
			    </div>

			    <div className="columns is-desktop m-0 mb-5">
			    	<div className="column">
			    	</div>
			    	<div className="column about-col">
			    		<a className="card" href={linkedInHref} target='_blank' rel='noopener noreferrer'>
		            <div className="card-image">
		              <img className="image is-128x128 auto-margins-x" src={img_linkedIn} alt={linkedInImgAlt} />
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
		          <a className="card" href={gitHubHref} target='_blank' rel='noopener noreferrer'>
		            <div className="card-image">
		              <img className="image is-128x128 auto-margins-x" src={img_GitHub} alt={gitHubImgAlt} />
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
		          <a className="card" href={stackOverflowHref} target='_blank' rel='noopener noreferrer'>
		            <div className="card-image">
		              <img className="image is-128x128 auto-margins-x" src={img_StackOverflow} alt={stackOverflowImgAlt} />
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
			      		<h1 className="subtitle is-6" dangerouslySetInnerHTML={{__html: props.t("text-footer") }}></h1>
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
								  	{props.t("button-top")}
								</Link>
			      	</div>
			      </div>
			    </div>
			  </div>
		  </div>
		</React.Fragment>
  )
}