import React from 'react';
import InputGroup from './InputGroup';


const ProductEditForm = () => {

   


    return(
        <form>
            <InputGroup 
                    id="name" 
                    type="text" 
                    class="form-control" 
                    name="name" 
                    displayName="Product Name"
                    required 
                    autocomplete="name" 
                    autofocus 
                    placeholder="Product Name Here"
                    />

            <InputGroup 
                    id="image" 
                    type="file" 
                    class="form-control" 
                    name="image"
                    displayName="Product Image" 
                    required 
                    autocomplete="name" 
                    autofocus 
                    placeholder="Product Name Here"
                    />

                <InputGroup 
                    id="name" 
                    type="number" 
                    class="form-control" 
                    name="price"
                    displayName="Product Price" 
                    required 
                    autocomplete="name" 
                    autofocus 
                    placeholder="Product Name Here"
                    />
            
            <label htmlFor="description">Description:</label>
                    <br />
                    <textarea 
                        className="form-control form-control-sm"  
                        name="description" 
                        id="description" 
                        cols="30" 
                        rows="10"></textarea>

                <button className="btn btn-md d-block btn-primary my-5">Edit</button>
        </form>                 

    )
}

export default ProductEditForm;