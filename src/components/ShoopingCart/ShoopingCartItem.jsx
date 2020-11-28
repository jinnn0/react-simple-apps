import React from "react";

function ShoopingCartItem({ id, name, price, qty, updateQty }) {
  function decrementQty() {
    updateQty(id, qty - 1);
  }

  function incrementQty() {
    updateQty(id, qty + 1);
  }

  return (
    <li className="cart-item">
      <span className="item-name">{name}</span>
      <span className="item-price">€{price}</span>
      <div className="quantity">
        <button onClick={decrementQty} disabled={qty <= 0}>
          -
        </button>
        <span>{qty}</span>
        <button onClick={incrementQty}>+</button>
      </div>
      <span className="sub-total">Total: €{(qty * price).toFixed(2)}</span>
    </li>
  );
}

export default ShoopingCartItem;
