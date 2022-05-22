import '../../scss/chess-board.scss'

export default function ChessBoard() {

  return (
    <div className="chessboard-container">
      <board>
        <face id="base"></face>
        <face id="front"></face>      
        <face id="side-l"></face>
        <face id="side-r"></face>
        <face id="back"></face>  
        <face id="bottom"></face>
      </board>
    </div>
  )
}