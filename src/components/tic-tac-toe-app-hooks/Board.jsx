import React from 'react'
import Square from './Square.jsx'

function Board({board, handleClick}) {
    return (
        <div className="board-grid">
            {board.map((square, index) => (
                <Square
                    key={index}
                    value={board[index]}
                    handleClick={()=> handleClick(index)}
                />
            ))}
        </div>
    )
}

export default Board
