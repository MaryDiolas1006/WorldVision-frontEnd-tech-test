import React from 'react';
import { Link  } from 'react-router-dom';

const ProductAdminControl = (props) => {
  return (
    <>
    	<Link to="/products/_productId_/edit" className="btn btn-warning my-1 w-100">Edit</Link>

        <a href="" className="btn btn-danger my-1 w-100">Edit</a>
    </>
  )
}

export default ProductAdminControl;