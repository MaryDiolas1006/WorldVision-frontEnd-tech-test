import React from 'react';
import ProductAddToCart from './ProductAddToCart';
import ProductAdminControl from './ProductAdminControl';
import {Link} from 'react-router-dom';

const ProductCard = (props) => {
  return (
    <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">__name__</h5>
              <p className="card-text">&#8369; _price__</p>
                
              {
                props.withDescription ?
                <p className="card-text">_description_</p> :
                <></>
              }
             	
             	<form>
             		<ProductAddToCart />

             		 <button className="btn btn-success w-100">Add to cart</button>

             	</form>	
             	 <Link to="/products/_id_" className="btn btn-primary my-1 w-100">View</Link>
            </div>
            <div className="card-footer">
            	<ProductAdminControl />
            </div>
          </div>
  )
}

export default ProductCard;