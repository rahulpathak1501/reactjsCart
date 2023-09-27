import React, { Component } from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: "Watch",
          qty: 10,
          img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          id: 1,
        },
        {
          price: 999,
          title: "Mobile Phone",
          qty: 14,
          img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80",
          id: 2,
        },
        {
          price: 9999,
          title: "Laptop",
          qty: 19,
          img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1420&q=80",
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
    //console.log(products);
  };

  getCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };

  getTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.forEach((product) => {
      cartTotal += product.qty*product.price;
    });
    return cartTotal;
  };

  render() {
    const { products } = this.state;
    //console.log("app.js" + products);
    return (
      <div className="App">
        <Navbar count={this.getCount()} />
        <Cart
          products={products}
          onClickIncrease={this.handleIncrease}
          onClickDecrease={this.handleDecrease}
          onClickDelete={this.handleDelete}
        />
        <div style={{ padding: 20, fontSize: 20, fontWeight: "bold" }}>
          Total: {this.getTotal()}
        </div>
      </div>
    );
  }
}

export default App;
