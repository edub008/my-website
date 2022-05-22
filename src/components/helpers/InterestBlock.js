import React, { useState } from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import * as Shared from '../../shared/shared'

export default function InterestBlock(props) {

  return (

  	<React.Fragment>
	    <div className="columns m-0 is-flex is-align-items-center">
	    	<div className="column">

	    		<div className="title is-3 has-text-primary"> 
			  		<div dangerouslySetInnerHTML={{__html: props.title }}></div>
			  	</div>
			  	<div className="subtitle is-4 has-text-light"> 
			  		<div dangerouslySetInnerHTML={{__html: props.content }}></div>
			  	</div>

	      </div>
	    </div>
		</React.Fragment>

  )
}