import React, {useState, useEffect} from 'react';
import ProductCard from './partials/ProductCard';
import {Redirect} from 'react-router-dom';


const Product = (props) => {

  const [ products, setProducts ] = useState([]);

  const [isRedirect, setIsRedirect] = useState(false);

  const [deletedProduct, setDeletedProduct] = useState({});


  useEffect(() => {
    fetch("https://backend-pushcart.herokuapp.com/products") 
      .then(response => {return response.json()})
      .then(products => {setProducts(products)} )

    },[]);

  useEffect(() => {
    if(deletedProduct){
      setProducts(products.filter(product => {
      return product._id !== deletedProduct._id
    }))

    }
  },[deletedProduct])


  let productList = products.map(product => (
      
      <div className="col-12 col-md-3 mt-5" key={product._id}>

      <ProductCard setDeletedProduct={setDeletedProduct} setIsRedirect={setIsRedirect} product={product} />
      
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