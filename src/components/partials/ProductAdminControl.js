import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const ProductAdminControl = ({id, setIsRedirect, setDeletedProduct }) => {

const handleClick = () => {
	fetch(`https://backend-pushcart.herokuapp.com/products/${id}`, {
		method: "delete",
		headers: {
			"Authorization" : `Bearer ${localStorage['appState']}`
		}
	})
	.then(res => res.json())
	.then(data => {
		console.log(data)
		setIsRedirect(true)
		if(setDeletedProduct){
			setDeletedProduct({_id: id})

		}
	})
}


  return (
    <>
    	<Link to={`/products/${id}/edit`} className="btn btn-warning my-1 w-100">Edit</Link>

        <button 
        className="btn btn-danger my-1 w-100"
        onClick={handleClick}
        >Delete</button>
    </>
  )
}

export default ProductAdminControl;