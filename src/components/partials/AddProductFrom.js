import React, {useState} from 'react';
import InputGroup from './InputGroup';
import {Redirect} from 'react-router-dom';

const AddProductFrom = (props) => {

const [isRedirect, setIsRedirect] = useState({
    latestId: "",
    success: false
})

const [product, setProduct] = useState({
    name:"",
    price:"",
    description:"",
    image: {}
});


if(isRedirect.success) {
    return <Redirect to={`/products/${isRedirect.latestId}`} />
}


const handleChange = e => {
    setProduct({
        ...product,
        [e.target.name] : e.target.value
    });   
};


const handleChangeFile = e => {
    setProduct({
        ...product,
        image: e.target.files[0]
    });
};


const handleSubmit = e => {
    e.preventDefault();

    let formData = new FormData();
    // formData.append('key', value)
    formData.append('name', product.name)
    formData.append('price', product.price)
    formData.append('description', product.description)
    formData.append('image', product.image)

    fetch('https://backend-pushcart.herokuapp.com/products', {
        method: "post",
        body: formData, 
        headers: {
            "Authorization" : `Bearer ${localStorage['appState']}`
        }
    })
    .then(res => res.json())
    .then(data => {
        if(data._id){
           setIsRedirect({
            latestId: data._id,
            success: true
           }) 
        }
        console.log(data)
    });
};

  return (
    	 <form onSubmit={handleSubmit} >
            <InputGroup
                name="name"
                displayName="Product Name:"
                type="text"
                handleChange={handleChange}
            />

            <InputGroup
                name="price"
                displayName="Product Price:"
                type="number"
                handleChange={handleChange}
            />
            
            <InputGroup
                name="image"
                displayName="Product Image:"
                type="file"
                handleChange={handleChangeFile}
            />

    	

    <label htmlFor="description">Description:</label>
    <br />
    <textarea 
    	className="form-control form-control-sm"  
    	name="description" 
    	id="description" 
    	cols="30" 
    	rows="10"
        onChange={handleChange}></textarea>
    	<br />
    	<button className="submit btn-primary d-block btn-sm">Create Product</button>


    </form>
  )
}

export default AddProductFrom;