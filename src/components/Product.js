import React, {useState, useEffect} from 'react';
import ProductCard from './partials/ProductCard';


const Product = (props) => {

  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    fetch("https://backend-pushcart.herokuapp.com/products") 
      .then(response => {return response.json()})
      .then(products => {setProducts(products)} )

    },[]);


  let productList = products.map(product => (
      
      <div className="col-12 col-md-3 mt-5" key={product._id}>

      <ProductCard  product={product} />
      
    </div>
    ))


  return (
    <div className="container-fluid">
    	<div className="row">
        <div className="col-12 col-md-3 mx-auto" >
          <h1 className="text-center ">Product Catalog</h1>
        </div>
        </div>
        <div className="row">
          {productList}
        </div>
    </div>
  )
}

export default Product;