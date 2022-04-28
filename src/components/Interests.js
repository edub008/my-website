import React, { useState } from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFlip, Navigation } from "swiper"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { polygonPathName, loadPolygonPath } from "tsparticles-path-polygon"
import "swiper/css"
import "swiper/css/effect-flip"
import "swiper/css/pagination"
import "swiper/css/navigation"
import * as Shared from '../shared/shared'
import InterestBlock from './helpers/InterestBlock'

import interestImg1 from '../img/interests/Metaverse.png'
import interestImg2 from '../img/interests/bitcoin.png'
import interestImg3 from '../img/interests/chess_backgammon.png'
import interestImg4 from '../img/interests/fenerbahce.png'

import particlesOptions1 from '../effects/particlesTunnel.json'
import particlesOptions3 from '../effects/particleslineLinkColor.json'
import particlesOptions2 from '../effects/particlesShapeLink.json'
import particlesOptions4 from '../effects/particlesFireworks.json'

const partOptions = [
	particlesOptions1,
	particlesOptions2,
	particlesOptions3,
	particlesOptions4
]

const mainTitle = "My Interests"
const testContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

const contentTitles = [
	"Metaverse", 
	"Blockchain & Crypto",
	"Chess & Backgammon",
	"Fenerbahçe"
]

const contentTexts = [
	"I'm an active investor, developer, and advocate of multiple Metaverse solutions and technologies including <a href='https://www.deepmotion.com/animate-3d' target='_blank' rel='noopener noreferrer'>Animate 3D</a> which lets you create high-fidelity animations from video and is proving to be a valuable tool for animators, developers, and other content creators.",
	"I also believe Blockchain & Cryptocurrencies will play a vital role in Web 3.0 and stay actively engaged. Some specific projects I find super interesting and have either invested in or I'm kicking the tires with are: <a href='https://solana.com' target='_blank' rel='noopener noreferrer'>SOL</a>, <a href='https://polkadot.network' target='_blank' rel='noopener noreferrer'>DOT</a>, <a href='https://polygon.technology' target='_blank' rel='noopener noreferrer'>MATIC</a>, <a href='https://oceanprotocol.com' target='_blank' rel='noopener noreferrer'>OCEAN</a>, and <a href='https://www.originprotocol.com' target='_blank' rel='noopener noreferrer'>OGN</a>.",
	"Two of my most favorite and competitive board games are Chess and Backgammon. You can find me on <a href='https://chess.com' target='_blank' rel='noopener noreferrer' >chess.com</a> under account <a href='https://www.chess.com/member/ergind' target='_blank' rel='noopener noreferrer'>ergind</a>, always happy to get blitz or standard game going. Or if you think you have a shot in backgammon let me know! :)",
	"My favorite sport is soccer and <a href='https://en.wikipedia.org/wiki/Fenerbah%C3%A7e_S.K.' target='_blank' rel='noopener noreferrer'>Fenerbahçe</a> is the best team in the world (well, at least IMO 🙂). I'm a fierce supporter of the <em>Yellow Canaries</em> and barring nartual disasters or acts of god I watch every game. Haydi Fener!!!"
]

const imageList = [
	"https://swiperjs.com/demos/images/nature-1.jpg",
	"https://swiperjs.com/demos/images/nature-2.jpg",
	"https://swiperjs.com/demos/images/nature-3.jpg",
	"https://swiperjs.com/demos/images/nature-4.jpg"
]

const imageListBkgds = [
	interestImg1,
	interestImg2,
	interestImg3,
	interestImg4
]

const interestsImages = [
	<img src={imageListBkgds[0]} />,
	<img src={imageListBkgds[1]} />,
	<img src={imageListBkgds[2]} />,
	<img src={imageListBkgds[3]} />
]

export default function MyInterests() {

  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

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

  		<Swiper
  			id="particles-swiper"
        effect={'flip'}
        grabCursor={true}
        navigation={true}
        pagination={false}
        modules={[EffectFlip, Navigation]}
        onSlideChange={(swiperInstance) => setActiveSlideIndex(swiperInstance.activeIndex)}
        className="swiper-interests"
      >
      	<SwiperSlide>
      		{interestsImages[0]}
      	</SwiperSlide>
	      <SwiperSlide>
	      	{interestsImages[1]}
	      </SwiperSlide>
	      <SwiperSlide>
	      	{interestsImages[2]}
	      </SwiperSlide>
	      <SwiperSlide>
	      	{interestsImages[3]}
	      </SwiperSlide>
	    </Swiper>

  	)
  }

  return (

  	<React.Fragment>
	  	<div className="App-section my-interests-gradient section-pad">

	    	<div className="columns auto-margins-x is-relative">
		      <div className="column is-relative">
		      	<Particles
				      id="tsparticles"
				      init={particlesInit}
				      loaded={particlesLoaded}
				      options={partOptions[activeSlideIndex]}
				    />

						<div className="columns m-0 is-justify-content-center">
				      <div className="column is-6 is-relative ">
				      	<Parallax>
							  	<h2 className="title is-1 fancy-title fancy-title-light has-text-light"> <span> {mainTitle} </span> </h2>
							  </Parallax>
				      </div>
				    </div>

				    <div className="columns m-0 auto-margins-x is-relative">
				    	<div className="column is-6 mx-2 has-text-centered is-relative">
				    		
						    <div >
				      		{InterestsSwiper()}
				      	</div>
				      </div>
				      <div className="column mx-2 has-text-centered">
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