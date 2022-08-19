import React, { Component } from "react";

export default class ShoeCart extends Component {
  renderShoeInCart = () => {
    return this.props.cart.map((item) => {
      return (
        <tr>
          <td>{item.name}</td>
          <td>$ {item.price}</td>
          <td>
            {""}
            <img src={item.image} style={{ width: 80 }} alt="" />
          </td>
          <td>
            <button
              onClick={() => {
                this.props.hanleAddToCart(item.id, -1);
              }}
              className="btn btn-primary"
            >
              -
            </button>
            <span className="mx-2 text-center"> {item.soLuong}</span>
            <button
              onClick={() => {
                this.props.hanleAddToCart(item.id, 1);
              }}
              className="btn btn-success"
            >
              +
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                this.props.handleRemove(item.id);
              }}
              className="btn btn-danger"
            >
              Xoá
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      //    Cart
      <div
        className="modal fade"
        id="showCart"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Danh sách sản phẩm
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              {/* start body  */}
              <table className="table table-borderless table-hover">
                <tbody>{this.renderShoeInCart()}</tbody>
              </table>

              {/* end body  */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
