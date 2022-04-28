import React, { useContext, useState } from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import { AppStateContext } from '../../AppStateContext'
import * as Shared from '../../shared/shared'

export default function JobInfo(props) {

	const appStateContext = useContext(AppStateContext)
	const [elemScale, setElemScale] = useState(0)

  return (
  	
  	<Parallax onProgressChange={(progress) => setElemScale(Shared.scaleQuarterScreen(progress)) } >
		<div className="tile is-ancestor my-2" style={{ opacity: elemScale, transform: `scale(${elemScale})`}}>
      <div className="tile is-4 is-vertical is-parent">
        <div className="tile is-child is-flex is-justify-content-center">
          <figure className="image is-256x256 is-flex is-align-items-center" style={{maxWidth:'55%'}}>
					  <img src={props.logo} />
					</figure>
        </div>

      </div>
      <div className="tile is-parent px-6">
        <div className="tile is-child">
        	<div className="content has-text-left">
        		
			  			<h1 className="job-title company-text"> {props.company} </h1>
			  			<h3 className="has-text-primary"> {props.title} </h3>

              <h4 className="has-text-black" style={{maxWidth:'85%'}} dangerouslySetInnerHTML={{__html: props.descr }}></h4>
		  			
		  		</div>
        </div>
      </div>
    </div>
    </Parallax>

  )
}