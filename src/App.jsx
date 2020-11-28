import React from "react";
import "./styles/App.scss";

import ShoopingCart from "./components/ShoopingCart";
import Clock from "./components/Clock";
import MovieSearch from "./components/MovieSearch";
import TodoFunctional from './components/TodoFunctional'
import TodoClass from "./components/TodoClass";
import TicTacToeClass from "./components/TicTacToeClass";
import TicTacToeFunctional from "./components/TicTacToeFunctional";
 
function App() {

  return (
    <>
      <ShoopingCart/>
      <Clock/>
      <MovieSearch/>
      <TodoFunctional/>
      <TodoClass/>
      <TicTacToeClass/>
      <TicTacToeFunctional/>
    </>
  );
}

export default App;
