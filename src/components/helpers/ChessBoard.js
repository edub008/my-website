import '../../scss/chess-board.scss'

export default function ChessBoard() {

  return (
    <div className="chessboard-container anim-grow">
      <div className="board">
        <div className="face" id="base"></div>
        <div className="face" id="front"></div>      
        <div className="face" id="side-l"></div>
        <div className="face" id="side-r"></div>
        <div className="face" id="back"></div>  
        <div className="face" id="bottom"></div>
      </div>
    </div>
  )
}