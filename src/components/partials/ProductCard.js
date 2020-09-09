import React, {useState} from 'react';
import ProductAddToCart from './ProductAddToCart';
import ProductAdminControl from './ProductAdminControl';
import {Link, Redirect} from 'react-router-dom';

const ProductCard = ({product, withDescription, setIsRedirect, setDeletedProduct}) => {

  return (
    <div className="card">
            <img src={`https://backend-pushcart.herokuapp.com/${product.image}`} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">&#8369;{product.price} </p>
                
              {
                  withDescription ?
                <p className="card-text">{product.description}</p> :
                <></>
              }
             	
             	<form>
             		<ProductAddToCart />

             		 <button className="btn btn-success w-100">Add to cart</button>

             	</form>	
             	 <Link to={`/products/${product._id}`} className="btn btn-primary my-1 w-100">View</Link>
            </div>
            <div className="card-footer">
            	<ProductAdminControl setDeletedProduct={setDeletedProduct} setIsRedirect={setIsRedirect} id={product._id} />
            </div>
          </div>
  )
}

export default ProductCard;