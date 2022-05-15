import React, { useState, useContext } from 'react'
import { Parallax } from 'react-scroll-parallax'
import { AppStateContext } from '../AppStateContext'
import * as Shared from '../shared/shared'
import dm_logo from "../img/logos/deepmotion-glyph.png"
import ds_logo from "../img/logos/docusign_logo.png"

import ucsc_badge from "../img/education/UC-logo.png"
import sjsu_badge from "../img/education/SJSU-logo.png"

const mainTitle = "My Degrees"
const overlayStyle = {
	top:'20%',
	width: '80%',
	border:'2px solid black',
	borderRadius: '4px'
}
const overlayStyleRight = {
	top:'20%',
	borderTop:'2px solid black', 
	borderRight:'2px solid black',
	borderBottom:'2px solid black',
	borderLeft:'1px solid black'
}

export default function Education() {

	const [titleTranslate, setTitleTranslate] = useState(0)

  return (
  	<React.Fragment>
  		<div className="has-background-white">
  			<div className="columns m-0 p-0 is-mobile">
		      <div className="column m-0 has-text-centered">
		      	<div className="title is-4 has-text-primary"> {mainTitle} </div>
		      </div>
		    </div>
  			<div className="columns m-0 p-0 is-tablet">
		      <div className="column m-0 p-0 degree-1 is-flex is-relative is-justify-content-center">
		      	<div className="default-overlay is-absolute py-2" style={overlayStyle}>
			      	<div className="title is-5 is-underlined has-text-light"> BSci, Computer Science</div>
			      	<div className="subtitle is-5 mb-1 has-text-light"> UC Santa Cruz </div>
			      	<figure className="image is-64x64 auto-margins-x is-justify-content-center is-align-content-center">
					      <img src={ucsc_badge} />
					    </figure>
		      	</div>
		      	
		      </div>
		      <div className="column m-0 p-0 degree-2 is-flex is-relative is-justify-content-center">
		      	<div className="default-overlay is-absolute py-2" style={overlayStyle}>
			      	<div className="title is-5 is-underlined has-text-light"> Masters, Business Administration</div>
			      	<div className="subtitle is-5 mb-1 has-text-light"> San Jose State University </div>
			      	<figure className="image is-64x64 auto-margins-x">
					      <img src={sjsu_badge} />
					    </figure>
			      </div>
		      </div>
		    </div>


  		{/*
				<div className="columns auto-margins-x">
		      <div className="column is-relative">
						<div className="columns m-0 is-justify-content-center">
				      <div className="column ">
				      	<Parallax onProgressChange={(progress) => setTitleTranslate(Shared.scaleQuarterScreen(progress)) } >
				      		<h2 className="title is-1 fancy-title mx-1 mx-6 has-text-dark"> <span>{mainTitle}</span> </h2>
							  </Parallax>
				      </div>
				    </div>
				  </div>

				</div>
		  */}
		    
	    </div>
	  </React.Fragment>
  )
}