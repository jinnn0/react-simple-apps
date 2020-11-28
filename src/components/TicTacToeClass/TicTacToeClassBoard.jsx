import React from 'react'
import TicTacToeClassSquare from './TicTacToeClassSquare'


function TicTacToeClassBoard({squares, handleClick }) {

    return (
        <div className="board-grid">
            {squares.map((square,index) => (
                <TicTacToeClassSquare
                    key={index}
                    value={squares[index]}
                    handleClick={()=> handleClick(index)}
                 />
            ))}
        </div>
    );
}

export default TicTacToeClassBoard
