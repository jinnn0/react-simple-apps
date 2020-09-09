import React, {useState} from 'react'
import Board from './Board.jsx'
import calculateWinner from '../tic-tac-toe-app/calculateHelper'

function TicTacToeAppWithHook() {
    const [boardHistory, setBoardHistory] = useState([Array(9).fill(null)])
    const [move, setMove] = useState(boardHistory.length-1)
    const [isXNext, setIsXNext] = useState(true)
    const winner = calculateWinner(boardHistory[move])

    const handleClick = (id) => {
        const newHistory = boardHistory.slice(0, move + 1)
        const current = newHistory[move]
        const newBoard = [...current]

        if(current[id] || winner) return
        newBoard[id] = isXNext ? "X" : "O"
        setBoardHistory([...newHistory, newBoard])
        setIsXNext(!isXNext)
        setMove(newHistory.length)
    }

    const jumpTo = (move) => {
        setMove(move)
        setIsXNext(((move % 2) === 0))
    }

    const status = winner ? ("Winner : " + winner ) : "Next palyer: " + (isXNext ? "X" : "O")
    const historyButtons = boardHistory.map((history, index) => {
        const message = index ? "Go back to start" : `Go back to move #${index}`

        return <li
                  key={index}
                  onClick={()=>jumpTo(index)}
               >
                 {message}
                </li>
    })


    return (
        <div className="game-app app-container">
            <h1 className="game-title">Tic Tac Toe with hooks</h1>
            <div className="app">
                <div className="game-board">
                    <Board
                        board={boardHistory[move]}
                        handleClick={handleClick}
                    />
                </div>
                <div className="game-info">
                    <div className="status">{status}</div>
                       <ol>{historyButtons}</ol>
                </div>
            </div>
         </div>
    )
}

export default TicTacToeAppWithHook