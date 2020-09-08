import React from "react";
import "./styles/App.scss";

import Cart from "./components/shopping-cart-app/Cart.jsx";
import Todo from "./components/todo-app/Todo.jsx";
import ClockApp from "./components/clock-app/ClockApp";
import MovieApp from "./components/movie-app/MovieApp.jsx";
import TaskApp from "./components/task-app/TaskApp";

import TicTacToeApp from "./components/game-app/TicTacToeApp";

function App() {

  return (
    <>
      <Cart/>
      <Todo/>
      <ClockApp/>
      <MovieApp/>
      <TaskApp/>
      <TicTacToeApp/>
    </>
  );
}

export default App;
