import React, { useState } from 'react'
import InterestBlock from './helpers/InterestBlock'
import InterestsSwiper from './helpers/InterestsSwiper'
import useWindowDimensions from './helpers/useWindowDimensions'
import * as Shared from '../shared/shared'

export default function MyInterests(props) {

  const [activeSlideIndex, setActiveSlideIndex] = useState(Shared.interestAnims.blockchain)
  const [showView, setShowView] = useState(0)
  const {screenWidth, screenHeight} = useWindowDimensions()

  const contentTitles = [
    props.t("interest-title-1"),
    props.t("interest-title-2"),
    props.t("interest-title-3"),
    props.t("interest-title-4")
  ]
  const contentTexts = [
    props.t("interest-text-1"),
    props.t("interest-text-2"),
    props.t("interest-text-3"),
    props.t("interest-text-4")
  ]

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
	      		title={contentTitles[activeSlideIndex]} 
	      		content={contentTexts[activeSlideIndex]} 
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
  	<div id="interests">
	  	<div className={`App-section dark-gradient section-pad ${showView}`} >
	    	<div className="columns is-relative">
		      <div className="column is-relative">
						<div className="columns m-0 is-justify-content-center">
				      <div className="column is-6 is-relative ">
							  <h2 className="title is-1 fancy-title fancy-title-light has-text-light"> <span> {props.t("title-interests")} </span> </h2>
				      </div>
				    </div>

			    	{buildScreen()}

				  </div>
				</div>
		  </div>
		</div>
  )
}