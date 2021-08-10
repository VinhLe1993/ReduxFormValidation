import React, { Component } from "react";
import "./UserProfile.css";

export default class UserProfile extends Component {
  render() {
    return (
      <div className="formProfile">
        <div>
          <div className="formContainer">
            <form>
              <h1 className="text-center">User Profile</h1>

              <div className="row">
                <div className="col-6">
                  <div className="group">
                    <input type="text" name="maSV" required />
                    <span className="highlight" />
                    <span className="bar" />
                    <label>Mã sinh viên</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="group">
                    <input type="text" name="hoTen" required />
                    <span className="highlight" />
                    <span className="bar" />
                    <label>Họ tên</label>
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="col-6">
                  <div className="group">
                    <input type="password" name="soDienThoai" required />
                    <span className="highlight" />
                    <span className="bar" />
                    <label>Số điện thoại</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="group">
                    <input type="password" name="email" required />
                    <span className="highlight" />
                    <span className="bar" />
                    <label>Email</label>
                  </div>
                </div>
              </div>
              <div className="row">
                  <div className="col-12">
                      <button className="btn text-white bg-dark w-100">Thêm sinh viên</button>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
