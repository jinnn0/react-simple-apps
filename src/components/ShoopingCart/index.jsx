import React, { useState, useEffect } from "react";
import ShoopingCartItem from "./ShoopingCartItem";

let initialItems = [
  { id: 1, name: "Salmon", price: 3.99, qty: 0},
  { id: 2, name: "Oyster Sauce", price: 2.49, qty: 0},
  { id: 3, name: "Noodle", price: 0.8, qty: 0}
];



function ShoopingCart() {
  let initialState = JSON.parse(window.localStorage.getItem("items"));
  const [items, setItems] = useState(initialState || initialItems);

  useEffect(() => {
    window.localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const updateQty = (id, newQty) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, qty: newQty };
      }
      return item;
    });

    setItems(newItems);
  };

  const grandTotal = items
    .reduce((total, item) => total + item.qty * item.price, 0)
    .toFixed(2);

  return (
    <div className="shoppingCart app-container">
      <div className="app">
        <h1 className="cart-title">Shopping Cart</h1>
        <ul className="cart-items">
          {items.map((item) => (
            <ShoopingCartItem key={item.id} updateQty={updateQty} {...item} />
          ))}
        </ul>

        <h1 className="grand-total">
          <span>Total: €</span>
          <span>{grandTotal}</span>
        </h1>
      </div>
    </div>
  );
}

export default ShoopingCart;
