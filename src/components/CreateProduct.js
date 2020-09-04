import React from 'react';

const CreateProduct = (props) => {
  return (
    <div className="container">
    	<div className="row">
    		<div className="col-12 col-md-6 mx-auto mb-5">
    			<h1 className="text-center">Create Pruduct</h1>
    		</div>
            </div>
                <div className="row">
                <div className="col-12 col-md-6 mx-auto">
                    <label htmlFor="name">Name:</label>
                    <br />
                    <input 
                    id="name" 
                    type="text" 
                    class="form-control" 
                    name="name" 
                    required 
                    autocomplete="name" 
                    autofocus 
                    placeholder="Product Name Here"
                    />
                    <br />
                    <label htmlFor="price">Price:</label>
                    <br />
                    <input 
                    id="price" 
                    type="text" 
                    class="form-control" 
                    name="price" 
                    required 
                    autocomplete="price" 
                    autofocus 
                    placeholder="Product Price Here"
                    />
                    <br />
                    <label htmlFor="image">Image:</label>
                    <br />
                    <input 
                    id="image" 
                    type="file" 
                    class="form-control" 
                    name="image" 
                    required  
                    autofocus 
                    />
                    <br />
                    <label htmlFor="description">Description:</label>
                    <br />
                    <textarea 
                        className="form-control form-control-sm"  
                        name="description" 
                        id="description" 
                        cols="30" 
                        rows="10"></textarea>
                        <br />
                            <button className="submit btn-primary d-block btn-sm">Create Product</button>
                 </div> 
            </div>
    	
    	
    </div>
  )
}

export default CreateProduct;