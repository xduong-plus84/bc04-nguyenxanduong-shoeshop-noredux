import React, { Component } from "react";
import ShoeItemDetail from "./ShoeItemDetail";

export default class ShoeItem extends Component {
  render() {
    return (
      <>
        {/* Button trigger modal */}
        <div className="container">
          <div className="row row-cols-3">
            {this.props.shoeList.map((item, index) => {
              return (
                <div key={index} className="col mb-4">
                  <div className="card h-100">
                    <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p>{item.price}$</p>
                      <p className="card-text">{item.shortDescription}</p>
                      <button
                        className="btn btn-success mr-2"
                        onClick={() => {
                          this.props.hanleAddToCart(item.id, 1);
                        }}
                      >
                        Add to Cart
                      </button>
                      <a
                        href="#"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        onClick={() => {
                          this.props.handleShowDetail(item.id);
                        }}
                      >
                        Xem chi tiết
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal  */}
        <ShoeItemDetail
          shoeDetail={this.props.shoeDetail}
          hanleAddToCart={this.props.hanleAddToCart}
        />
      </>
    );
  }
}
