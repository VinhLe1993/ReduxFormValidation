import React, { Component } from "react";
import "./UserProfile.css";

export default class UserProfile extends Component {
  state = {
    values: {
      userID: "",
      fullName: "",
      tel: "",
      email: "",
    },
    errors: {
      userID: "",
      fullName: "",
      tel: "",
      email: "",
    },
  };

  handleChangeInput = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="formProfile">
        <div>
          <div className="formContainer">
            <form onSubmi={this.handleSubmit}>
              <h1 className="text-center">User Profile</h1>

              <div className="row">
                <div className="col-6">
                  <div className="group">
                    <input
                      value={this.state.values.userID}
                      type="text"
                      name="userID"
                      required
                      onChange={this.handleChangeInput}
                    />
                    <span className="highlight" />
                    <span className="bar" />
                    <label>Mã sinh viên</label>
                    <span className="text text-danger">{this.state.errors.userID}</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="group">
                    <input
                      type="text"
                      name="fullName"
                      required
                      onChange={this.handleChangeInput}
                    />
                    <span className="highlight" />
                    <span className="bar" />
                    <label>Họ tên</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <div className="group">
                    <input
                      type="password"
                      name="tel"
                      required
                      onChange={this.handleChangeInput}
                    />
                    <span className="highlight" />
                    <span className="bar" />
                    <label>Số điện thoại</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="group">
                    <input
                      type="text"
                      name="email"
                      required
                      onChange={this.handleChangeInput}
                    />
                    <span className="highlight" />
                    <span className="bar" />
                    <label>Email</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button className="btn text-white bg-dark w-100">
                    Thêm sinh viên
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
