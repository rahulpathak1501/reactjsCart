import React from "react";

import CartItem from "./CartItem";

const Cart = (props) => {
  const { products } = props;
  //console.log(products);
  return (
    <div className="cart">
      {products.map((product) => {
        return (
          <CartItem
            product={product}
            key={product.id}
            onClickIncrease={props.onClickIncrease}
            onClickDecrease={props.onClickDecrease}
            onClickDelete={props.onClickDelete}
          />
        );
      })}
    </div>
  );
};

export default Cart;
