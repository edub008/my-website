import React, { useState } from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import useWindowDimensions from './helpers/useWindowDimensions'
import * as Shared from '../shared/shared'
import backgroundImg from '../img/turkiye.webp'

const mainTitle = "My System"
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
	const { screenWidth, screenHeight } = useWindowDimensions();

	const mySystemItems = systemItems.map((item, index) =>
		<div key={`system-item-${index+1}`} >
			<div className="column">
				<ul>
		  		<li className="title is-3 my-system-text"> {item} </li>
		  	</ul>
		  </div>
		</div>
	)

  return (
  	<React.Fragment>
	  	<div className="App-section is-block pb-0" id="system">
	  		<ParallaxBanner
		      layers={[{ image: backgroundImg }]}
		      className="ratio-4x3 is-fullheight"
		    >
		    	<div className="columns auto-margins-x">
			      <div className="column is-relative">
							<div className="columns m-0 is-justify-content-center">
					      <div className="column is-6 is-relative ">
								  	<h2 className="title is-1 fancy-title fancy-title-light mx-1 my-6"> <span> {mainTitle} </span> </h2>
					      </div>
					    </div>
					    <div className="columns m-0 auto-margins-x is-justify-content-center  is-relative">
					    	<div className="column is-7 p-2 my-system-overlay">
					    		<Parallax speed="-20">
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