import React, { useState } from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import * as Shared from '../shared/shared'
import backgroundImg from '../img/turkiye2.jpg'

const mainTitle = "My System"
const bkgdImage = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner.jpg"

const systemItems = [
	"PURSUE PASSIONS, NOT PAYCHECKS",
	"PRIORITIZE THE CUSTOMER",
	"LEARN FROM EVERY FAILURE",
	"DETAILS MATTER",
	"TREAT EVERYONE WITH RESPECT",
	"FAMILY COMES FIRST",
	"THE GLASS IS HALF FULL :)"
]

export default function MySystem() {

	const [itemsYTranslate, setItemsYTranslate] = useState(0)

	const mySystemItems = systemItems.map((item, index) =>
		<div key={`system-item-${index+1}`} style={{transform: `translateY(${100-(itemsYTranslate*100)}px)`}} >
			<div className="column">
				<ul>
		  		<li className="title is-3 my-system-text"> {item} </li>
		  	</ul>
		  </div>
		</div>
	)

  return (

  	<React.Fragment>

  	{/* 
  	<div className="App-section">
  		<ParallaxBanner
	      layers={[{ image: backgroundImg, speed: -70 }]}
	      style={{ aspectRatio: '4 / 3' }}
	    >
	    <div className="is-flex is-absolute inset-0 is-justify-content-center is-align-items-center" style={{background:'rgba(0,0,0,.2)', borderRadius:'6px'}}>
	    	<div className="is-relative">
	    		<Parallax onProgressChange={(progress) => setItemsYTranslate( Shared.scaleQuarterScreen(progress) )} >
			      {mySystemItems}
			    </Parallax>
	    	</div>
	    </div>
	    </ParallaxBanner>
	  </div>
		*/}
	
  
  	<div className="App-section is-block pb-0">
  		<ParallaxBanner
	      layers={[{ image: backgroundImg, speed: -70 }]}
	      style={{ aspectRatio: '4 / 3', height: '125vh' }}
	    >
	    	<div className="columns auto-margins-x">
		      <div className="column is-relative">

						<div className="columns m-0 is-justify-content-center">

				      <div className="column is-6 is-relative ">
				      	<Parallax>
							  	<h2 className="title is-1 fancy-title fancy-title-light mx-1 my-6"> <span> {mainTitle} </span> </h2>
							  </Parallax>
				      </div>

				    </div>

				    <div className="columns m-0 auto-margins-x is-justify-content-center  is-relative">
				    	<div className="column is-7 p-2 my-system-overlay">
				    		
				      	<Parallax onProgressChange={(progress) => setItemsYTranslate( Shared.scaleQuarterScreen(progress) )} >
				      	
							  	{mySystemItems}
							  </Parallax>
				      </div>
				    </div>

				  </div>
				</div>

			</ParallaxBanner>

	  </div>
	
	</React.Fragment>

  )
}