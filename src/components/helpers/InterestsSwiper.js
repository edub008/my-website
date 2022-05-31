import React, { useState } from 'react'
import useWindowDimensions from './useWindowDimensions'
import * as Shared from '../../shared/shared'

// create components using React.lazy to minimize main thread work on 
// initial load to improve site performance
const Metaverse = React.lazy(() => import('./Metaverse'))
const RubixCube = React.lazy(() => import('./RubixCube'))
const ChessBoard = React.lazy(() => import('./ChessBoard'))
const SoccerBall = React.lazy(() => import('./SoccerBall'))

export default function InterestsSwiper(props) {

  const { screenWidth, screenHeight } = useWindowDimensions()

  return (
    <div className={`fullheight ${screenWidth < Shared.maxMobileScreenWidth ? 'w-95vw' : 'w-50vw'}`}>
    
        <React.Suspense fallback={<></>}>
          {(props.activeSlideIndex === Shared.interestAnims.blockchain) && <RubixCube />}
        </React.Suspense>
      
        <React.Suspense fallback={<></>}>
          {(props.activeSlideIndex === Shared.interestAnims.metaverse) && <Metaverse />}
        </React.Suspense>
      
        <React.Suspense fallback={<></>}>
          {(props.activeSlideIndex === Shared.interestAnims.games) && <ChessBoard />}
        </React.Suspense>
      
        <React.Suspense fallback={<></>}>
          {(props.activeSlideIndex === Shared.interestAnims.fenerbahce) && <SoccerBall />}
        </React.Suspense>
    
    </div>
  )
}