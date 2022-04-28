import React, { useState } from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import * as Shared from '../../shared/shared'

export default function InterestBlock(props) {

  return (

  	<React.Fragment>
	    <div className="columns m-0 py-6 auto-margins-x my-interest-overlay">
	    	<div className="column" style={{minHeight:'50vh'}}>

      		<div className="title is-3 has-text-primary"> {props.title} </div>
			  	<div className="subtitle is-4 has-text-light"> 
			  		<div dangerouslySetInnerHTML={{__html: props.content }}></div>
			  	</div>

	      </div>
	    </div>
		</React.Fragment>

  )
}