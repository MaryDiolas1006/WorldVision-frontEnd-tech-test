import React from 'react';
import ProductAddToCart from './ProductAddToCart';
import ProductAdminControl from './ProductAdminControl';

const ProductCard = (props) => {
  return (
    <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">__name__</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <p className="cart-text">&#8369; _price__</p>
             	
             	<form>
             		<ProductAddToCart />

             		 <button className="btn btn-success w-100">Add to cart</button>

             	</form>	
             	 <a href="" className="btn btn-primary my-1 w-100">View</a>
            </div>
            <div className="card-footer">
            	<ProductAdminControl />
            </div>
          </div>
  )
}

export default ProductCard;