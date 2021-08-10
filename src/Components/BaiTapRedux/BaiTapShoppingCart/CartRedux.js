import React, { Component } from "react";
//Thư viện kết nối redux
import { connect } from "react-redux";

class CartRedux extends Component {
  renderCart = () => {
    return this.props.cart.map((product, index) => {
      return (
        <tr key={index}>
          <td>{product.maSP}</td>
          <td>{product.tenSP}</td>
          <td>
            <img src={product.hinhAnh} alt="..." height={50} />
          </td>
          <td>{product.giaBan}</td>
          <td>
            <button
              className="btn btn-outline-success mr-2"
              onClick={() => {
                const action = {
                  type: "ADJ_QTY",
                  productIDClick: product.maSP,
                  soLuong: 1,
                };
                //Gọi hàm dispatch gửi dữ liệu lên redux
                this.props.dispatch(action);
              }}
            >
              +
            </button>
            {product.soLuong}
            <button
              className="btn btn-outline-success ml-2"
              onClick={() => {
                const action = {
                  type: "ADJ_QTY",
                  productIDClick: product.maSP,
                  soLuong: -1,
                };
                //Gọi hàm dispatch gửi dữ liệu lên redux
                this.props.dispatch(action);
              }}
            >
              -
            </button>
          </td>
          <td>{product.giaBan * product.soLuong}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                //Tạo ra action chứa dữ liệu gửi lên redux
                const action = {
                  type: "DELETE_ITEM",
                  productIDClick: product.maSP,
                };
                /**Dùng hàm this.props.dispatch từ redux cung cấp
                 * để gửi dữ liệu lên redux (reducer)
                 */
                this.props.dispatch(action);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        {/* Modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Cart</h5>
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
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>Tên sản phẩm</th>
                      <th>Hính ảnh</th>
                      <th>Giá bán</th>
                      <th>Số lượng</th>
                      <th>Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderCart()}</tbody>
                </table>
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
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Hàm này lấy giá trị state từ redux về biến đổi thành props của component

const mapStateToProps = (rootReducer) => {
  return {
    cart: rootReducer.cartReducer,
  };
};

const ComponentCartRedux = connect(mapStateToProps)(CartRedux);

export default ComponentCartRedux;
