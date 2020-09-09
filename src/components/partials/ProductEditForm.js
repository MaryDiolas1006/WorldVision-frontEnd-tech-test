import React, {useState, useEffect} from 'react';
import InputGroup from './InputGroup';
import {Redirect} from 'react-router-dom';


const ProductEditForm = (props) => {

   const [product, setProduct] = useState({})

   const [isRedirect, setIsRedirect] = useState(false)

   const handleChange = e => {
    setProduct({
        ...product,
        [e.target.name] : e.target.value
    })
   }


   const handleChangeFile = e => {
    setProduct({
        ...product,
        image: e.target.files[0]
    })
   }


   const handleSubmit = e => {
    e.preventDefault()

    // prepare the data
    let formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('description', product.description);
     if(product.image) {
        formData.append('image', product.image);
     }

     fetch(`https://backend-pushcart.herokuapp.com/products/${props.product._id}`, {
        method: "put",
        headers: {
            'Authorization' : `Bearer ${localStorage['appState']}`
        },
        body: formData
     })
     .then(res => res.json())
     .then(data => {
        console.log(data)
        setIsRedirect(true)
     })
   }


   useEffect(() => {
        setProduct({
           ...props.product,
           image: ""
       })
   },[props.product])


   if(isRedirect) {
    return <Redirect to={`/products/${props.product._id}`} />
   }

    return(
        <form onSubmit={handleSubmit} >
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
                    value={product.name}
                    handleChange={handleChange}
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
                    handleChange={handleChangeFile}
                    />

                <InputGroup 
                    id="name" 
                    type="number" 
                    class="form-control" 
                    name="price"
                    displayName="Product Price" 
                    value={product.price}
                    required 
                    autocomplete="name" 
                    autofocus 
                    placeholder="Product Name Here"
                    handleChange={handleChange}
                    />
            
            <label htmlFor="description">Description:</label>
                    <br />
                    <textarea 
                        className="form-control form-control-sm"  
                        name="description" 
                        id="description" 
                        value={product.description}
                        cols="30" 
                        rows="10"
                        onChange={handleChange}></textarea>

                <button className="btn btn-md d-block btn-primary my-5">Edit</button>
        </form>                 

    )
}

export default ProductEditForm;