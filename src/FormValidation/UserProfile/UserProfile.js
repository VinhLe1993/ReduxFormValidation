import React, { Component } from "react";
import "./UserProfile.css";
import { connect } from "react-redux";

class UserProfile extends Component {
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

    let newValue = { ...this.state.values, [name]: value };

    let attrValue = "";
    let regex;
    if (event.target.getAttribute("typeEmail")) {
      attrValue = event.target.getAttribute("typeEmail");
      regex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    }

    let newError = { ...this.state.errors };
    let messageError = "";
    if (value.trim() === "") {
      messageError = name + " is required !";
    }
    //Nếu là email
    if (regex) {
      if (attrValue === "email") {
        if (!regex.test(value)) {
          messageError = name + " wrong format !";
        }
      }
    }

    newError[name] = messageError;
    this.setState({
      values: newValue,
      errors: newError,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let valid = true;
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "") {
        valid = false;
        break;
      }
    }
    for (let key in this.state.values) {
      if (this.state.values[key] === "") {
        valid = false;
        break;
      }
    }
    if (!valid) {
      alert("Dữ liệu không hợp lệ");
      return;
    }
    const action = {
      type: "ADD_TO_LIST",
      student: this.state.values,
    };
    this.props.dispatch(action);
  };

  render() {
    return (
      <form className="card mt-5" onSubmit={this.handleSubmit}>
        <div className="card-header bg-dark text-white">Form đăng kí</div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <p>Mã SV</p>
                <input
                  className="form-control"
                  name="userID"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.userID}</p>
              </div>
              <div className="form-group">
                <p>Số Điện Thoại</p>
                <input
                  
                  className="form-control"
                  name="tel"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.tel}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>Họ tên</p>
                <input
                  className="form-control"
                  name="fullName"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.fullName}</p>
              </div>

              <div className="form-group">
                <p>Email</p>
                <input
                  className="form-control"
                  typeEmail="email"
                  name="email"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.email}</p>
              </div>
            </div>
          </div>
          <div className="card-footer text-left">
            <button className="btn btn-outline-success mr-2" type="submit">
              Thêm sinh viên
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default connect()(UserProfile);
