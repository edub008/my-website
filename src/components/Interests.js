import React, { useState } from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from "swiper"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { polygonPathName, loadPolygonPath } from "tsparticles-path-polygon"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import "swiper/css/navigation"
import * as Shared from '../shared/shared'
import InterestBlock from './helpers/InterestBlock'
import WavingCubes from './helpers/WavingCubes'
import RubixCube from './helpers/RubixCube'
import ChessBoard from './helpers/ChessBoard'
import RotatingCube from './helpers/RotatingCube'

import particlesOptions2 from '../effects/particlesShapeLink.json'
import particlesOptions3 from '../effects/particleslineLinkColor.json'
import particlesOptions1 from '../effects/particlesTest.json'

const ENABLEPARTICLES = false  // disable before deploying to production!

const partOptions = [
	particlesOptions1,
	particlesOptions2,
	particlesOptions3
]

const mainTitle = "My Interests"
const testContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

const contentTitles = [
	"Blockchain",
	"Metaverse",
	"Board Games",
	"Fenerbahçe"
]

const contentTexts = [
	"I believe Blockchain & Cryptocurrencies will play a vital role in Web 3.0 and stay actively engaged. Some specific projects I find super interesting and have either invested in or I'm kicking the tires with are: <a href='https://solana.com' target='_blank' rel='noopener noreferrer'>SOL</a>, <a href='https://polkadot.network' target='_blank' rel='noopener noreferrer'>DOT</a>, <a href='https://polygon.technology' target='_blank' rel='noopener noreferrer'>MATIC</a>, <a href='https://oceanprotocol.com' target='_blank' rel='noopener noreferrer'>OCEAN</a>, and <a href='https://www.originprotocol.com' target='_blank' rel='noopener noreferrer'>OGN</a>.",
	"I'm an active investor, developer, and advocate of multiple Metaverse solutions and technologies including <a href='https://www.deepmotion.com/animate-3d' target='_blank' rel='noopener noreferrer'>Animate 3D</a> which lets you create high-fidelity animations from video and is proving to be a valuable tool for animators, developers, and other content creators.",
	"Two of my most favorite and competitive board games are Chess and Backgammon. You can find me on <a href='https://chess.com' target='_blank' rel='noopener noreferrer' >chess.com</a> under account <a href='https://www.chess.com/member/ergind' target='_blank' rel='noopener noreferrer'>ergind</a>, always happy to get blitz or standard game going. Or if you think you have a shot in backgammon let me know! :)",
	"My favorite sport is soccer and <a href='https://en.wikipedia.org/wiki/Fenerbah%C3%A7e_S.K.' target='_blank' rel='noopener noreferrer'>Fenerbahçe</a> is the best team in the world (well, at least IMO 🙂). I'm a fierce supporter of the <em>Yellow Canaries</em> and barring nartual disasters or acts of god I watch every game. Haydi Fener!!!"
]

export default function MyInterests() {

  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [swiperInst, setSwiperInst] = useState(null)

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // TSParticles related:
  const particlesInit = async (main) => {
    // console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  const particlesLoaded = (container) => {
    // console.log(container);
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////

  function InterestsSwiper() {
  	return (
  		<div style={window.innerWidth < 720 ? {width:'95vw'} : {width:'50vw'} }>
  		<Swiper
        style={{height:'400px', overflow:'visible'}}
        effect="fade"
        grabCursor={true}
        navigation={true}
        pagination={{clickable: true}}
        modules={[ Navigation, Pagination, EffectFade]}
        onSlideChange={(swiperInstance) => setActiveSlideIndex(swiperInstance.activeIndex)}
        onSwiper={(swiper) => setSwiperInst(swiper)}

      >
      	<SwiperSlide>
      		<RubixCube />
      	</SwiperSlide>
	      <SwiperSlide>
	      	<WavingCubes />
	      </SwiperSlide>
	      <SwiperSlide>
	      	<ChessBoard />
      	</SwiperSlide>
	      <SwiperSlide>
	      	<RotatingCube />
	      </SwiperSlide>
	    </Swiper>
	    </div>
  	)
  }

  return (

  	<React.Fragment>
	  	<div className="App-section my-interests-gradient section-pad" id="interests">

	    	<div className="columns is-relative">
		      <div className="column is-relative">
		      	{/*
		      	ENABLEPARTICLES || process.env.NODE_ENV === 'production'
		      	?
		      	<Particles
				      id="tsparticles"
				      init={particlesInit}
				      loaded={particlesLoaded}
				      options={partOptions[activeSlideIndex]}
				    />
				    :
				    <div></div>
				  	*/}

						<div className="columns m-0 is-justify-content-center">
				      <div className="column is-6 is-relative ">
				      	<Parallax>
							  	<h2 className="title is-1 fancy-title fancy-title-light has-text-light"> <span> {mainTitle} </span> </h2>
							  </Parallax>
				      </div>
				    </div>


				  {/* 
				    <div className="columns m-0 is-mobile">
				    	<div className="column is-flex is-justify-content-end is-align-items-center">
				    		{
				    			activeSlideIndex
				    			?
				    			<div onClick={()=>swiperInst.slidePrev()} className="swiper-button-prev is-relative" />
				    			:
				    			<div></div>
				    		}
				    	</div>
				    	<div className="column is-6 mx-4" style={{border:'2px solid #00D1B2', borderRadius:'8px'}}>
				    		<div className="title is-interests has-text-primary">
				    			{contentTitles[activeSlideIndex]}
				    		</div>
				    	</div>
				    	<div className="column is-flex is-justify-content-start is-align-items-center">
				    		{
				    			activeSlideIndex !== 3
				    			?
				    			<div onClick={()=>swiperInst.slideNext()} className="swiper-button-next is-relative" />
				    			:
				    			<div></div>
				    		}
				    	</div>
				    </div>
				  */}

				    <div className="columns is-desktop">
				    	<div className="column has-text-centered">
				      	{InterestsSwiper()}
				      </div>
				      <div className="column is-flex mx-2 has-text-centered">
				      	<InterestBlock 
				      		title={contentTitles[activeSlideIndex]} 
				      		content={contentTexts[activeSlideIndex]} 
				      		className="anim-grow"
				      	/>
				      </div>
				    </div>
				  </div>
				</div>

		  </div>
		</React.Fragment>

  )
}