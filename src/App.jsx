import React from "react";
import "./styles/App.scss";
import Cart from "./components/shopping-cart-app/Cart.jsx";
import Todo from "./components/todo-app/Todo.jsx";
import ReactRouter from "./components/react-router-app/ReactRouter.jsx";
import FetchAPI from "./components/fetchAPI-app/FetchAPI.jsx";
import Gsap from "./components/gsap-app/Gsap";
import MovieApp from "./components/movie-app/MovieApp.jsx";
import Recipe from "./components/recipe-app/Recipe.jsx";

function App() {

  return (
    <>
      <Cart/>
      <Todo/>
      <MovieApp/>
      <ReactRouter/>
      <FetchAPI/>
      <Gsap/>
      <Recipe/>
    </>
  );
}

export default App;