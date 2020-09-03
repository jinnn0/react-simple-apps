import React from "react";
import "./styles/App.scss";

import Cart from "./components/shopping-cart-app/Cart.jsx";
import Todo from "./components/todo-app/Todo.jsx";
import ClockApp from "./components/clock-app/ClockApp";
import MovieApp from "./components/movie-app/MovieApp.jsx";
import Recipe from "./components/recipe-app/Recipe.jsx";


function App() { 
    
  return (
    <>
      <Cart/> 
      <Todo/>
      <ClockApp/>
      <MovieApp/>
      <Recipe/> 
    </>
  );
}
  
export default App;
