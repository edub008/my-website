import React from 'react'
import * as Shared from '../shared/shared'
import ucsc_badge from "../img/education/UC-logo.webp"
import sjsu_badge from "../img/education/SJSU-logo.webp"

const mainTitle = "My Degrees"

export default function Education() {

  return (
  	<React.Fragment>
  		<div className="has-background-white" id="education">
  			<div className="columns m-0 p-0 is-mobile">
		      <div className="column m-0 has-text-centered">
		      	<div className="title is-4 has-text-primary"> {mainTitle} </div>
		      </div>
		    </div>
  			<div className="columns m-0 p-0 is-tablet">
		      <div className="column m-0 p-0 degree-1 is-flex is-relative is-justify-content-center">
		      	<div className="default-overlay overlay-style is-absolute py-2">
			      	<div className="title is-5 is-underlined has-text-light"> BSci, Computer Science</div>
			      	<div className="subtitle is-5 mb-1 has-text-light"> UC Santa Cruz </div>
			      	<figure className="image is-64x64 auto-margins-x is-justify-content-center is-align-content-center">
					      <img src={ucsc_badge} className="image is-64x64" alt="uc-santa-cruz-campus" />
					    </figure>
		      	</div>
		      	
		      </div>
		      <div className="column m-0 p-0 degree-2 is-flex is-relative is-justify-content-center">
		      	<div className="default-overlay overlay-style is-absolute py-2">
			      	<div className="title is-5 is-underlined has-text-light"> Masters, Business Administration</div>
			      	<div className="subtitle is-5 mb-1 has-text-light"> San Jose State University </div>
			      	<figure className="image is-64x64 auto-margins-x">
					      <img src={sjsu_badge} className="image is-64x64" alt="sjsu-campus"/>
					    </figure>
			      </div>
		      </div>
		    </div>
	    </div>
	  </React.Fragment>
  )
}