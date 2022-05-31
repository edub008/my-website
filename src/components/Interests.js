import React, { useState } from 'react'
import { Parallax } from 'react-scroll-parallax'
import InterestBlock from './helpers/InterestBlock'
import InterestsSwiper from './helpers/InterestsSwiper'
import useWindowDimensions from './helpers/useWindowDimensions'
import * as Shared from '../shared/shared'

const mainTitle = "My Interests"

export default function MyInterests() {

  const [activeSlideIndex, setActiveSlideIndex] = useState(Shared.interestAnims.blockchain)
  const [showView, setShowView] = useState(0)
  const {screenWidth, screenHeight} = useWindowDimensions()

  function moveToPreviousInterest() {
  	if( activeSlideIndex ) {
  		setActiveSlideIndex(activeSlideIndex-1)
  	}
  }
  function moveToNextInterest() {
  	if( activeSlideIndex < Object.keys(Shared.interestAnims).length-1 ) {
  		setActiveSlideIndex(activeSlideIndex+1)
  	}
  }

  function interestsSection() {
  	return (
  		<div className="columns m-0 is-desktop" >
	    	<div className="column has-text-centered">
          <div className="columns mx-2 is-mobile" >
            <div className="column min-halfheight has-text-centered">
              <InterestsSwiper 
                setActiveSlideIndex={setActiveSlideIndex}
                activeSlideIndex={activeSlideIndex}
              />
            </div>
          </div>
        </div>
	      <div className="column is-flex mx-2 min-halfheight has-text-centered">
	      	<InterestBlock 
	      		title={Shared.contentTitles[activeSlideIndex]} 
	      		content={Shared.contentTexts[activeSlideIndex]} 
	      		className="anim-grow"
	      	/>
	      </div>
    	</div>
  	)
  }
  function navigationButtons() {
  	return (
  		<div className="columns mx-2 my-4 is-mobile">
        <div className="column is-flex is-justify-content-center">
          <div className="buttons is-grouped">
          	{
          		activeSlideIndex ?
              <button className="button is-primary" onClick={()=>moveToPreviousInterest()}>
              	<div className="anim-color-pulse">
                &larr;
                </div>
              </button>
              :
              <button disabled className="button dark-gradient br-none">
                &larr;
              </button>
            }
            
            {
            	activeSlideIndex < Object.keys(Shared.interestAnims).length-1
            	?
              <button className="button is-primary" onClick={()=>moveToNextInterest()}>
                <div className="anim-color-pulse">
                	&rarr;
                </div>
              </button>
              :
              <button disabled className="button dark-gradient br-none">
                &rarr;
              </button>
            }
        	</div>
        </div>
      </div>
  	)
  }

  function buildScreen() {
  	if( screenWidth < Shared.maxMobileScreenWidth ) {
  		return (
  			<React.Fragment>
				  {navigationButtons()}
				  {interestsSection()}
  			</React.Fragment>
  		)
  	}
  	else {
  		return (
  			<React.Fragment>
  				{interestsSection()}
				  {navigationButtons()}
  			</React.Fragment>
  		)
  	}
  }

  return (
  	<React.Fragment>
  		<Parallax onProgressChange={(progress) => setShowView(progress > 0 ? 'is-visible' : 'is-hidden')} >
		  	<div className={`App-section dark-gradient section-pad ${showView}`} id="interests">
		    	<div className="columns is-relative">
			      <div className="column is-relative">
							<div className="columns m-0 is-justify-content-center">
					      <div className="column is-6 is-relative ">
								  <h2 className="title is-1 fancy-title fancy-title-light has-text-light"> <span> {mainTitle} </span> </h2>
					      </div>
					    </div>

				    	{buildScreen()}

					  </div>
					</div>
			  </div>
			</Parallax>
		</React.Fragment>
  )
}