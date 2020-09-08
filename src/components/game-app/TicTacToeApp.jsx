import React from 'react'
import Board from './Board.jsx'
import calculateWinner from './calculateHelper'

class TicTacToeApp extends React.Component {
    state={
      history: [Array(9).fill(null)],
      isXNext: true,
      currentMove: 0
    }

    handleClick = (id) => {
      const history = this.state.history.slice(0, this.state.currentMove + 1)
      const current = history[this.state.currentMove]
      const newSquares = [...current]

      if(current[id] || calculateWinner(current)) return

      newSquares[id] = this.state.isXNext ? "X" : "O"
      this.setState({
          history: [ ...history, newSquares],
          isXNext : !this.state.isXNext,
          currentMove: history.length
      })
    }

    jumpTo = (move) => {
        this.setState({currentMove: move})
    }

    render() {
      const history = this.state.history.slice(0, this.state.currentMove + 1)
      const current = history[this.state.currentMove]
      const winner =  calculateWinner(current)

      const nextPalyer = this.state.isXNext ? "X" : "O"
      const status = winner ? ("Winner: " + winner) : ("Next player: " + nextPalyer)

      const moves = this.state.history.map((history, index) =>
           index === 0 ? null : <li
                                  key={index}
                                  onClick={()=> this.jumpTo(index)}>
                                  go back to move #{index}
                                </li>
      )

      return (
        <div className="game-app app-container">
            <div className="app">
               <div className="game-board">
                  <Board
                    squares={current}
                    handleClick={this.handleClick}
                   />
               </div>
               <div className="game-info">
                  <div className="status">{status}</div>
                  <ol>{moves}</ol>
               </div>
            </div>
        </div>
      );
    }
}

export default TicTacToeApp