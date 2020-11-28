import React from 'react'

function TicTacToeClassSquare({value, handleClick}) {
    return (
        <button
            className="square"
            onClick={()=> handleClick()}
        >
            {value}
        </button>
    )
}

export default TicTacToeClassSquare