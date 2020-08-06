import React from "react";
import "./App.css";
import Cart from "./componenets/Cart";

let items = [
  {
    id: 1,
    name: "Salmon",
    price: 3.99,
    qty: 0
  },
  {
    id: 2,
    name: "Oyster Sauce",
    price: 2.49,
    qty: 0
  },
  {
    id: 3,
    name: "Noodle",
    price: 0.8,
    qty: 0
  }
];

function App() {
  return (
    <>
      <Cart initialItems={items} />
    </>
  );
}

export default App;
