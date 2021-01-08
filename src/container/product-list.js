// import React, {useState} from 'react';
// import ProductList from '../components/ProductList';
// import data from "../data.json"

// const ProductListContainer = () => {
//       let products = data.products

//    return (
//       <div className="products">
//          <ProductList products={data.products}/>
//       </div>
//    )
// }

// export default ProductListContainer;


import React, { Component } from 'react';
import ProductList from '../components/ProductList';
import data from "../data.json"

class ProductListContainer extends Component {
  constructor(){
     super();
     this.state= {
        products: data.products,
        size:"",
        sort: ""
     }
  }
render() {
   return (
      <div className="products">
         <p className="product-header">Product List</p>
         <ProductList products={this.state.products}/>
      </div>
   )
   }
   
}

export default ProductListContainer;