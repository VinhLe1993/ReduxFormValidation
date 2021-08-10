import React, { Component } from 'react'
//Kết nối dữ liệu đến redux
import {connect} from 'react-redux';
class ProductItemRedux extends Component {
    render() {
        let {item} = this.props
        return (
            <div className="card">
                <img src={item.hinhAnh} alt="..." height={350}/>
                <div className="card-body">
                    <h3>{item.tenSP}</h3>
                    <p className="text-danger font-weight-bold">{item.giaBan.toLocaleString()}</p>
                    <button className="btn btn-success" onClick={()=>{
                        const action = {
                            type:'ADD_TO_CART' , /**Thuộc tính bắt buộc để 
                            xác định xử lý  */
                            itemIDClick: item
                        }


                        //Đưa dữ liệu lên redux
                        this.props.dispatch(action)
                    }}>Add to cart</button>
                </div>
            </div>
        )
    }
}

//Kết nối redux
export default connect () (ProductItemRedux);
