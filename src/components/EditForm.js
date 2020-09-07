import React from 'react';
import ProductEditForm from './partials/ProductEditForm';
import ProductCard from './partials/ProductCard';


const EditForm = (props) => {
  return (
    <div className="container">
    	<div className="row">
    		<div className="col-12 col-md-6 mx-auto mb-5">
    			<h1 className="text-center">Edit Pruduct</h1>
    		</div>
            </div>
                <div className="row">
                <div className="col-12 col-md-6 ">
                    <ProductEditForm />
                </div>
                <div className="col-12 col-md-8 col-lg-5 mx-auto">
                    <ProductCard />
                </div>
            </div>
        </div>
    )
}

export default EditForm;