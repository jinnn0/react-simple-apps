import React from 'react'
import Square from './Square.jsx'



function Board({squares, handleClick }) {
    return (
        <div>
            <div className="board-flex">
                {squares.map((square,index) => (
                    <Square
                        key={index}
                        value={squares[index]}
                        handleClick={()=> handleClick(index)}
                     />
                ))}
            </div>
        </div>
    );
}

export default Board
