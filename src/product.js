import React, { Component } from 'react'

export default class Product extends Component {

    products={

            name:'LG Mobile',
            price:1256.0
    }

    constructor(props){

        super(props);
        this.state={

            name:'JBL Speaker',
            price:5454.0
        }
    }
  render() {
    return (

        <React.Fragment>

            <dt>Name:</dt>
            <dd>{this.state.name}</dd>
            <dt>Price</dt>
            <dd>{this.state.price}</dd>

            <dt>Mobile</dt>
            <dd>{this.products.name}</dd>
            <dt>Price</dt>
            <dd>{this.products.price}</dd>
        </React.Fragment>
     
    )
  }
}
