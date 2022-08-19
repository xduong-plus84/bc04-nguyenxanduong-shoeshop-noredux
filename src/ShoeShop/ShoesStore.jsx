import React, { Component } from "react";
import ButtonCart from "./ButtonCart";
import { dataShoes } from "./dataShoes";
import ShoeCart from "./ShoeCart";
import ShoeList from "./ShoeList";

export default class ShoesStore extends Component {
  state = {
    shoeList: dataShoes,
    shoeDetail: dataShoes[0],
    cart: [],
  };
  handleShowDetail = (id) => {
    let index = this.state.shoeList.findIndex((item) => item.id == id);
    index !== -1 &&
      this.setState({
        shoeDetail: dataShoes[index],
      });
  };
  hanleAddToCart = (id, value) => {
    let cloneCart = [...this.state.cart];
    let index = this.state.cart.findIndex((item) => item.id == id);
    console.log("index: ", index);

    if (index != -1) {
      cloneCart[index].soLuong += value;
      if (cloneCart[index].soLuong < 0) {
        cloneCart[index].soLuong = 0;
      }
    } else {
      let indexInData = dataShoes.findIndex((item) => item.id == id);
      console.log("indexInData: ", indexInData);
      let shoeInData = dataShoes[indexInData];

      let shoeInCart = { ...shoeInData, soLuong: 1 };

      cloneCart.push(shoeInCart);
      console.log("cloneCart: ", cloneCart);
    }
    this.setState(
      {
        cart: cloneCart,
      },
      console.log("cart: ", this.state.cart)
    );
  };
  handleRemove = (id) => {
    let index = this.state.cart.findIndex((item) => item.id == id);
    let cloneCart = [...this.state.cart];

    cloneCart.splice(index, 1);

    this.setState({
      cart: cloneCart,
    });
  };
  render() {
    return (
      <div>
        <h1>ShoesStore</h1>
        <ShoeList
          hanleAddToCart={this.hanleAddToCart}
          shoeList={this.state.shoeList}
          handleShowDetail={this.handleShowDetail}
          shoeDetail={this.state.shoeDetail}
        />
        <ButtonCart cart={this.state.cart} />
        <ShoeCart
          cart={this.state.cart}
          handleRemove={this.handleRemove}
          hanleAddToCart={this.hanleAddToCart}
        />
      </div>
    );
  }
}
