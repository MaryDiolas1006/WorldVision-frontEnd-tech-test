import React from 'react';
import InputGroup from './InputGroup';

const AddProductFrom = (props) => {
  return (
    	 <form>
            <InputGroup
                name="name"
                displayName="Product Name:"
                type="text"
            />

            <InputGroup
                name="price"
                displayName="Product Price:"
                type="number"
            />
            
            <InputGroup
                name="image"
                displayName="Product Image:"
                type="file"
            />

    	

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


    </form>
  )
}

export default AddProductFrom;