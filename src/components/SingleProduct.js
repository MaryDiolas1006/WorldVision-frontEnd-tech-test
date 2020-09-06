import React from 'react';


const SingleProduct = (props) => {
	return (
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-4 mt-5">
						<img src="https://fratellowatches.imgix.net/2019/04/Rolex-Submariner-2.jpg" alt="" className="w-100 " />
					</div>

					<div className="col-md-8 mt-5">
						<h1 className="offset-3 mb-2">Product name</h1>

						<div className="row">
							<div className="col-2">Description:</div>
							<div className="col">_productdesc_</div>
						</div>

						<div className="row mt-3">
							<div className="col-2">Quantity:</div>
							<div className="badge badge-info">_quantity_</div>
						</div>

						<div className="row mt-3">
							<button className="col-12 col-md-5 submit d-block btn-success mt-3 mx-auto">Add To Cart</button>
							<button className=" col-12 col-md-5 submit d-block mt-3 btn-info mx-auto">View</button>
       					</div>

       		 			<div className="row">
       						<button className="col-12 col-md-5 submit d-block btn-warning mt-3 mx-auto">Edit</button>
       						<button className=" col-12 col-md-5 submit d-block mt-3 btn-danger mx-auto">Delete</button>       		
						</div>
					</div>
				</div>
			</div> 

		)
}


export default SingleProduct;