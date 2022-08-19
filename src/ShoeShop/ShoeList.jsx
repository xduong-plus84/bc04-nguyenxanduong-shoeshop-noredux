import React, { Component } from "react";
import ShoeItem from "./ShoeItem";

export default class ShoeList extends Component {
  render() {
    return (
      <ShoeItem
        hanleAddToCart={this.props.hanleAddToCart}
        shoeList={this.props.shoeList}
        handleShowDetail={this.props.handleShowDetail}
        shoeDetail={this.props.shoeDetail}
      />
    );
  }
}
