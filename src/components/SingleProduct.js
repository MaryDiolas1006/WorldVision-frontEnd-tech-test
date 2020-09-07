import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './partials/ProductCard';


const SingleProduct = (props) => {

	let {id} = useParams();
	return (
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-8 col-lg-5 mt-5 mx-auto">
						<ProductCard  withDescription={true}/>
					</div>
				</div>
			</div> 

		)
}


export default SingleProduct;