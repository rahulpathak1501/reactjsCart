import React, { Component } from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from "firebase/app";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    // firebase
    //   .firestore()
    //   .collection("products")
    //   .get()
    //   .then((snapshot) => {
    //     //console.log(snapshot);
    //     const products = snapshot.docs.map((doc) => {
    //       //console.log(doc.data());
    //       const data= doc.data();
    //       data['id']=doc.id;
    //       return data;
    //     });
    //     this.setState ({
    //       products,
    //     });
    //   });

    //.get() method is not able to capture what ever changes is happning in firebase in realtime.
    //thats why we use onSnapshot() function which will update the state everytime any changes happend in firbase in real time.

    firebase
      .firestore()
      .collection("products")
      .onSnapshot((snapshot) => {
        //console.log(snapshot);
        const products = snapshot.docs.map((doc) => {
          //console.log(doc.data());
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({
          products,
        });
      });
  }

  handleIncrease = (product) => {
    //console.log(product);
    const { products } = this.state;
    //console.log(products);
    const index = products.indexOf(product);
    // products[index].qty += 1;
    // this.setState({
    //   products,
    // });
    const docRef = firebase
      .firestore()
      .collection("products")
      .doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty + 1,
      })
      .then(() => {
        console.log("updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleDecrease = (product) => {
    //console.log(product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 1) {
      return;
    }
    // products[index].qty -= 1;
    // this.setState({
    //   products,
    // });

    const docRef = firebase
      .firestore()
      .collection("products")
      .doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty - 1,
      })
      .then(() => {
        console.log("updated");
      })
      .catch((err) => {
        console.log(err);
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

    //   const docRef = firebase
    //     .firestore()
    //     .collection("products")
    //     .doc(products[index].id);

    //   docRef
    //     .delete(products)
    //     .then(() => {
    //       console.log("deleted");
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
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
      cartTotal += product.qty * product.price;
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
