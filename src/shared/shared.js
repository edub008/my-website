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

export const interestAnims = Object.freeze({
  blockchain: 0,
  metaverse: 1,
  games: 2,
  fenerbahce: 3
})

export const contentTitles = [
  "Blockchain",
  "Metaverse",
  "Chess/Backgammon",
  "Fenerbahçe"
]

export const contentTexts = [
  "I believe Blockchain & Cryptocurrencies will play a vital role in Web 3.0 and stay actively engaged. Some specific projects I find super interesting and have either invested in or I'm kicking the tires with are: <a href='https://solana.com' target='_blank' rel='noopener noreferrer'>SOL</a>, <a href='https://polkadot.network' target='_blank' rel='noopener noreferrer'>DOT</a>, <a href='https://polygon.technology' target='_blank' rel='noopener noreferrer'>MATIC</a>, <a href='https://oceanprotocol.com' target='_blank' rel='noopener noreferrer'>OCEAN</a>, and <a href='https://www.originprotocol.com' target='_blank' rel='noopener noreferrer'>OGN</a>.",
  "I'm an active investor, developer, and advocate of multiple Metaverse solutions and technologies including <a href='https://www.deepmotion.com/animate-3d' target='_blank' rel='noopener noreferrer'>Animate 3D</a> which lets you create high-fidelity animations from video and is proving to be a valuable tool for animators, developers, and other content creators.",
  "Two of my most favorite and competitive board games are Chess and Backgammon. You can find me on <a href='https://chess.com' target='_blank' rel='noopener noreferrer' >chess.com</a> under account <a href='https://www.chess.com/member/ergind' target='_blank' rel='noopener noreferrer'>ergind</a>, always happy to get blitz or standard game going. Or if you think you have a shot in backgammon let me know! :)",
  "My favorite sport is soccer and <a href='https://en.wikipedia.org/wiki/Fenerbah%C3%A7e_S.K.' target='_blank' rel='noopener noreferrer'>Fenerbahçe</a> is the best team in the world (well, at least IMO 🙂). I'm a fierce supporter of the <em>Yellow Canaries</em> and barring nartual disasters or acts of god I watch every game. Haydi Fener!!!"
]