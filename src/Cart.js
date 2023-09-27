import React from "react";

import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: "Watch",
          qty: 10,
          img: "",
          id: 1,
        },
        {
          price: 999,
          title: "Mobile Phone",
          qty: 14,
          img: "",
          id: 2,
        },
        {
          price: 9999,
          title: "Laptop",
          qty: 19,
          img: "",
          id: 3,
        },
      ],
    };
  }

  handleIncrease = (product) => {
    //console.log(product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products,
    });
  };

  handleDecrease = (product) => {
    //console.log(product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 1) {
      return;
    }
    products[index].qty -= 1;
    this.setState({
      products,
    });
  };
  handleDelete = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products.splice(index, 1);
    this.setState({
      products,
    });
    console.log(products)
  };

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onClickIncrease={this.handleIncrease}
              onClickDecrease={this.handleDecrease}
              onClickDelete={this.handleDelete}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
