import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";

function Cart({ initialItems }) {
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
    <div className="cart">
      <h1 className="cart-title">Shopping Cart</h1>
      <ul className="cart-items">
        {items.map((item) => (
          <CartItem key={item.id} updateQty={updateQty} {...item} />
        ))}
      </ul>

      <h1 className="grand-total">
        <span>Total: €</span>
        <span>{grandTotal}</span>
      </h1>
    </div>
  );
}

export default Cart;
