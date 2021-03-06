import React from 'react'
import ucsc_badge from "../img/education/UC-logo.webp"
import sjsu_badge from "../img/education/SJSU-logo.webp"

const degreeTitle1 = "BSci, Computer Science"
const degreeLocation1 = "UC Santa Cruz"
const degreeTitle2 = "Masters, Business Administration"
const degreeLocation2 = "San Jose State University"
const degreeImgAlt1 = "uc-santa-cruz-campus"
const degreeImgAlt2 = "sjsu-campus"

export default function Education(props) {
  return (
  	<React.Fragment>
  		<div className="has-background-white" id="education">
  			<div className="columns m-0 p-0 is-mobile">
		      <div className="column m-0 has-text-centered">
		      	<div className="title is-2 has-text-black mb-4"> {props.t("title-edu")} </div>
		      </div>
		    </div>
  			<div className="columns m-0 p-0 is-tablet">
		      <div className="column m-0 p-0 degree-1 is-flex is-relative is-justify-content-center">
		      	<div className="default-overlay overlay-style is-absolute py-2">
			      	<div className="title is-5 is-underlined has-text-primary"> {degreeTitle1} </div>
			      	<div className="subtitle is-5 mb-1 has-text-light"> {degreeLocation1} </div>
			      	<figure className="image is-64x64 auto-margins-x is-justify-content-center is-align-content-center">
					      <img src={ucsc_badge} className="image is-64x64" alt={degreeImgAlt1} />
					    </figure>
		      	</div>
		      </div>
		      <div className="column m-0 p-0 degree-2 is-flex is-relative is-justify-content-center">
		      	<div className="default-overlay overlay-style is-absolute py-2">
			      	<div className="title is-5 is-underlined has-text-primary"> {degreeTitle2} </div>
			      	<div className="subtitle is-5 mb-1 has-text-light"> {degreeLocation2} </div>
			      	<figure className="image is-64x64 auto-margins-x">
					      <img src={sjsu_badge} className="image is-64x64" alt={degreeImgAlt1} />
					    </figure>
			      </div>
		      </div>
		    </div>
	    </div>
	  </React.Fragment>
  )
}