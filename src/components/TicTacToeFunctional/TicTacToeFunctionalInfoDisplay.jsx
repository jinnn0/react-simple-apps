import React from 'react'
import HistoryButton from './HistoryButtons.jsx'

function TicTacToeFunctionalInfoDisplay({winnerValue, isXNext, history, currenMove, isAscending, jumpTo, sortMoves}) {
    let status;
    let currentBoard = history[history.length-1].board
    if(winnerValue) {
        status = "Winner: " + winnerValue
    } else if(!currentBoard.includes(null)) {
        status = "Game ended in draw try again!"
    } else {
        status = "Next player: " + (isXNext? "X" : "O")
    }

    const moves = history.map((move, index) => {
        const text = index ? `Go back to move #R${history[index].location[0]} C${history[index].location[1]}` : "Go back to start"
        const className = (index === currenMove) ? "selected" : ""

        return <HistoryButton
                    key={index}
                    text={text}
                    className={className}
                    jumpTo={()=> jumpTo(index)}
                />
    })


    return (
        <div className="game-info">
            <div className="display">
                <div className="status">{status}</div>
                <div
                    className={"sort-btn" + (isAscending ? "" : " up")}
                    onClick={()=>sortMoves()}
                >
                </div>
            </div>

            <ol>{isAscending ? moves : moves.reverse()}</ol>
       </div>
    )
}

export default TicTacToeFunctionalInfoDisplay
