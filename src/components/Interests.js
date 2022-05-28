import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from "swiper"
import "swiper/scss"
import "swiper/scss/effect-fade"
import "swiper/scss/pagination"
import "swiper/scss/navigation"
import * as Shared from '../shared/shared'
import InterestBlock from './helpers/InterestBlock'
import Metaverse from './helpers/Metaverse'
import RubixCube from './helpers/RubixCube'
import ChessBoard from './helpers/ChessBoard'
import RotatingCube from './helpers/RotatingCube'
import useWindowDimensions from './helpers/useWindowDimensions'

const mainTitle = "My Interests"
const testContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

const contentTitles = [
	"Blockchain",
	"Metaverse",
	"Chess/Backgammon",
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
  const { screenWidth, screenHeight } = useWindowDimensions();

  function InterestsSwiper() {
  	return (
  		<div style={screenWidth < Shared.maxMobileScreenWidth ? {width:'95vw'} : {width:'50vw'} }>
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
	      	<Metaverse />
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
	  	<div className="App-section dark-gradient section-pad" id="interests">

	    	<div className="columns is-relative">
		      <div className="column is-relative">

						<div className="columns m-0 is-justify-content-center">
				      <div className="column is-6 is-relative ">
							  <h2 className="title is-1 fancy-title fancy-title-light has-text-light"> <span> {mainTitle} </span> </h2>
				      </div>
				    </div>

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