import React from "react";
import "./styles/App.scss";
import Cart from "./components/shopping-cart-app/Cart.jsx";
import ReactRouter from "./components/react-router/ReactRouter.jsx";
import FetchAPI from "./components/fetchAPI/FetchAPI.jsx";
import Gsap from "./components/gsap/Gsap";
import Recipe from "./components/recipe-app/Recipe.jsx";

function App() {

  return (
    <>
      <Cart/>
      <ReactRouter/>
      <FetchAPI/>
      <Gsap/>
      <Recipe/>
    </>
  );
}

export default App;






