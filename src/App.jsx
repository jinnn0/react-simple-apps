import React from "react";
import "./styles/App.scss";

import ShoppingCartApp from "./components/shopping-cart-app/ShoppingCartApp.jsx";
import TodoApp from "./components/todo-app/TodoApp.jsx";
import ClockApp from "./components/clock-app/ClockApp";
import MovieApp from "./components/movie-app/MovieApp.jsx";
import TaskApp from "./components/task-app/TaskApp";
import TicTacToeApp from "./components/tic-tac-toe-app/TicTacToeApp";
import TicTacToeAppWithHook from "./components/tic-tac-toe-app-hooks/TicTacToeAppWithHook";

function App() {

  return (
    <>
      <ShoppingCartApp/>
      <TodoApp/>
      <ClockApp/>
      <MovieApp/>
      <TaskApp/>
      <TicTacToeApp/>
      <TicTacToeAppWithHook/>
    </>
  );
}

export default App;
