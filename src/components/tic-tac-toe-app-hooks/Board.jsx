import React from 'react'
import Square from './Square.jsx'

function Board({board, handleClick, winners}) {

    const renderSquare = (id) => {
        return <Square
                    key={id}
                    value={board[id]}
                    isWinner={winners.includes(id)}
                    handleClick={()=> handleClick(id)}
                />
    }

    let squares = [];
    for (let i = 0; i < 3; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(renderSquare(i * 3 + j));
      }
      squares.push(
        <div key={i} className="board-row">{row}</div>
      );
    }

    return (
        <div className="game-board">
          <div className="board-grid remove-grid">
              {squares}
          </div>
        </div>
    )
}

export default Board
