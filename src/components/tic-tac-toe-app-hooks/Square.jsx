import React from 'react'

function Square({value, isWinner, handleClick}) {
    return (
        <div
            className={"square" + (isWinner ? " winner" : "")}
            onClick={handleClick}
        >
           {value}
        </div>
    )
}

export default Square
