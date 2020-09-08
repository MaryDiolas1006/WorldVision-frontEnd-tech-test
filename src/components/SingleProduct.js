import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './partials/ProductCard';


const SingleProduct = (props) => {

	let {id} = useParams();

	const [ product, setProduct ] = useState({});

	const [ isLoading, setIsLoading ] = useState(true);

	useEffect(() => {
		fetch(`https://backend-pushcart.herokuapp.com/products/${id}`)
			.then( response => response.json())
			.then( data => {
				setProduct(data) 
				setIsLoading(false)
			})
	},[]);

	return (
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-8 col-lg-5 mt-5 mx-auto">
					{
						isLoading ?
					
					<div className="spinner-border" role="status">
  					<span className="sr-only text-center mx-auto">Loading...</span>
					</div> 
					:

						<ProductCard  product={product} withDescription={true}/>
					}
					</div>
				</div>
			</div> 

		)
}


export default SingleProduct;