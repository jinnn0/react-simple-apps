import React from 'react'
import TicTacToeClassBoard from './TicTacToeClassBoard'
import calculateWinner from './calculateHelper'

class TicTacToeClass extends React.Component {
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


    render() {
      const history = this.state.history.slice(0, this.state.currentMove + 1)
      const current = history[this.state.currentMove]
      const winner =  calculateWinner(current)

      const nextPalyer = this.state.isXNext ? "X" : "O"
      const status = winner ? ("Winner: " + winner) : ("Next player: " + nextPalyer)

      return (
        <div className="ticTacToe app-container">
          <h1 className="game-title">Tic Tac Toe - Class component</h1>
            <div className="app">
               <div className="game-board">
                  <TicTacToeClassBoard
                    squares={current}
                    handleClick={this.handleClick}
                   />
               </div>
               <div className="game-info">
                  <div className="status">{status}</div>
               </div>
            </div>
        </div>
      );
    }
}

export default TicTacToeClass