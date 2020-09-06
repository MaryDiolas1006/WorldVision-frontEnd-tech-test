import React from 'react';
import {Link} from 'react-router-dom';

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
                            <Link className="submit btn-primary btn-sm" to="/view">Edit Product</Link>
                 </div> 

                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mx-auto">
                    <div class="card">
                        <img src="https://fratellowatches.imgix.net/2019/04/Rolex-Submariner-2.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">Rolex</h5>
                           <p>Price: <span>&#8369;100000</span></p>
                           <label>Quantity:</label>
                           <br />
                           <input type="number" name="quantity" id="quantity" min="1" />
                            <div className="row">
                                <button className=" col-12  submit d-block mt-3 btn-info mx-auto">View</button>
                                <button className=" col-12  submit d-block mt-3 btn-danger mx-auto">Delete</button>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditForm;