import React, { Component } from 'react'
import ProductItemRedux from './ProductItemRedux'

export default class ProductListRedux extends Component {
    renderProduct = () => {
        let {dataPhone} = this.props
        return dataPhone.map((product, index) => {
            return <div className="col-4" key={index}>
                <ProductItemRedux item={product} />
            </div>
        })
    }
    render() {
        return (
            <div className="row">
                {this.renderProduct()}
            </div>
        )
    }
}
