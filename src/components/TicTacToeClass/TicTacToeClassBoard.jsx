import React from 'react'
import TicTacToeFunctionalSquare from './TicTacToeFunctionalSquare.jsx'


function TicTacToeClassBoard({squares, handleClick }) {
    return (
        <div className="board-grid">
            {squares.map((square,index) => (
                <TicTacToeFunctionalSquare
                    key={index}
                    value={squares[index]}
                    handleClick={()=> handleClick(index)}
                 />
            ))}
        </div>
    );
}

export default TicTacToeClassBoard
