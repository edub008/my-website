import '../../scss/soccer-ball.scss'

export default function SoccerBall() {
  return (
    <div className="is-relative anim-grow">
      <div className="soccer-scene">
        <div className="sphere">
          <div className="hemisphere">
            <div className="ball-face"></div>
            <div className="ball-face"></div>
            <div className="ball-face"></div>
            <div className="ball-face"></div>
            <div className="ball-face"></div>
            <div className="ball-face"></div>
            <div className="ball-face"></div>
            <div className="ball-face"></div>
            <div className="ball-face"></div>
            <div className="ball-face"></div>
          </div>
          <div className="hemisphere">
            <div className="ball-face"></div>
            <div className="ball-face"></div>
            <div className="ball-face"></div>
            <div className="ball-face"></div>
            <div className="ball-face"></div>
            <div className="ball-face"></div>
            <div className="ball-face"></div>
            <div className="ball-face"></div>
            <div className="ball-face"></div>
            <div className="ball-face"></div>
          </div>
        </div>
      </div>
    </div>
  )
}