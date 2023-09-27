import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: "Mobile Phone",
      qty: 1,
      img: "",
    };
  }

  increse = () => {
    console.log(this.state.qty);
    // (this.state.qty += 1);
    // this type of update is called object form
    // this.setState({
    //   qty: this.state.qty + 1,
    // });
    // there is anothe type of udate is there that is function form
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
    // this type we use when we might need the previous state again.
  };
  decrease = () => {
    const {qty}=this.state.qty;
    if(qty===0){
        return;
    }
    this.setState({
      qty: this.state.qty - 1,
    });
  };

  render() {
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs {price} </div>
          <div style={{ color: "#777" }}>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="decrese"
              onClick={this.decrease}
              className="action-icons"
              src="https://img.icons8.com/ios/25/minus.png"
            />
            <img
              alt="increse"
              onClick={this.increse}
              className="action-icons"
              src="https://img.icons8.com/ios/25/plus--v1.png"
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://img.icons8.com/material-outlined/24/filled-trash.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
