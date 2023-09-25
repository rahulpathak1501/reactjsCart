import { render } from "@testing-library/react";
import React from "react";

function CartItems() {
  return (
    <div className="cart-item">
      <div className="left-block">
        <img />
      </div>
      <div className="right-block">
        <div>Price</div>
        <div>Rs. 999</div>
        <div>Quantity</div>
      </div>
      <div className="cart-item-actions">{/* {button} */}</div>
    </div>
  );
}

export default CartItems;
