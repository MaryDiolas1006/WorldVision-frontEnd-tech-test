import React, {useState, useEffect} from 'react';
import ProductEditForm from './partials/ProductEditForm';
import ProductCard from './partials/ProductCard';
import {useParams} from 'react-router-dom';


const EditForm = (props) => {


     const {id} = useParams();

    const [product, setProduct] = useState({
        name:'',
        image:'',
        price:"",
        description:''
    });


    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://backend-pushcart.herokuapp.com/products/${id}`)
        .then(response => response.json())
        .then(data => {
            setProduct(data)
            setIsLoading(false)
        })
    },[])




  return (
    <div className="container">
    	<div className="row">
    		<div className="col-12 col-md-6 mx-auto mb-5">
    			<h1 className="text-center">Edit Pruduct</h1>
    		</div>
            </div>
                <div className="row">
                <div className="col-12 col-md-6 ">

                
                    <ProductEditForm product={product} />
            
                
                </div>
                <div className="col-12 col-md-8 col-lg-5 mx-auto">
                {
                    !isLoading ?
                    <ProductCard product={product} />
                    : ""
                }
                </div>
            </div>
        </div>
    )
}

export default EditForm;