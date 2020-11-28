import React from 'react'

function TicTacToeClassSquare({value, isWinner, handleClick}) {
    return (
        <div
            className={"square" + (isWinner ? " winner" : "")}
            onClick={handleClick}
        >
           {value}
        </div>
    )
}

export default TicTacToeClassSquare
