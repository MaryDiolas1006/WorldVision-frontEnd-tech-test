import React from 'react';
import AddProductFrom from './partials/AddProductFrom';

const CreateProduct = (props) => {
  return (
    <div className="container">
    	<div className="row">
    		<div className="col-12 col-md-8 col-lg-6 mx-auto mb-5">
    			<h1 className="text-center">Create Pruduct</h1>
    		</div>
            </div>
                <div className="row">
                <div className="col-12 col-md-6 mx-auto">
                    
                    <AddProductFrom />
                    
                 </div> 
            </div>
    	
    	
    </div>
  )
}

export default CreateProduct;