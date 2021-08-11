import React, { Component } from 'react'
import {connect} from 'react-redux';

class TableUserList extends Component {
    renderTable = () => {
        return this.props.arrStudent.map((student, index)=>{
            return (
                <tr key={index}>
                    <td>{student.userID}</td>
                    <td>{student.fullName}</td>
                    <td>{student.tel}</td>
                    <td>{student.email}</td>

                </tr>
            )
        
        })
    }



    render() {
        return (
            <div className="card mt-5">
                <div className="card-header bg-dark text-white">
                    Danh sách người dùng
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã SV</th>
                            <th>Họ tên</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        arrStudent: state.BTQLReducer.arrStudent
    }
}


export default connect(mapStateToProps) (TableUserList)
