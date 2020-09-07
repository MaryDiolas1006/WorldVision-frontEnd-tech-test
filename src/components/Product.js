import React from 'react';
import ProductCard from './partials/ProductCard';


const Product = (props) => {
  return (
    <div className="container-fluid">
    	<div className="row">
        <div className="col-12 col-md-3">
          <h1 className="text-center mx-auto">Product Catalog</h1>
        </div>
        </div>
        <div className="row">
        <div className="col-12 col-md-3">
             <ProductCard />
        </div>
        </div>
    </div>
  )
}

export default Product;