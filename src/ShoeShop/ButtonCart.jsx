import React, { Component } from "react";

export default class ButtonCart extends Component {
  render() {
    const btn__cart = {
      padding: "10px",
      position: "fixed",
      bottom: "30px",
      right: "30px",
      borderRadius: "50%",
    };
    const iconCart = {
      color: "black",
      backgroundColor: "transparent",
      fontSize: "2rem",
      border: "none",
      "&:hover": {
        color: "green",
      },
    };
    const quantity = {
      color: "black",
      backgroundColor: "rgb(253, 216, 53)",
      lineHeight: "25px",
      height: "25px",
      width: "25px",
      borderRadius: "50%",
      position: "absolute",
      right: "5px",
      top: "5px",
      textAlign: "center",

      userSelect: "none",
    };
    return (
      <div style={btn__cart}>
        <button style={iconCart} data-toggle="modal" data-target="#showCart">
          <i className="fa fa-shopping-cart" />
        </button>
        <span style={quantity} id="total__products">
          {this.props.cart.reduce((total, obj) => obj.soLuong + total, 0)}
        </span>
      </div>
    );
  }
}
