/* shared common/helper functions: */

// sets scale or opacity to [0-1] range as the elem scrolls to half screen height
export function scaleHalfScreen(progress) {
  const upperThreshold = 1.0
  const lowerThreshold = 0.5
  if( progress < lowerThreshold ) {
    return progress * 2
  }
  else {
    return 1.0
  }
}

export function scaleQuarterScreen(progress) {
  const upperThreshold = 1.0
  const lowerThreshold = 0.25
  if( progress < lowerThreshold ) {
    return progress * 4
  }
  else {
    return 1.0
  }
}

export const minTitleWidth = Object.freeze('10rem')

export const maxMobileScreenWidth = Object.freeze(1024)