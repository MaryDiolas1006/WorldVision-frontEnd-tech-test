import React from 'react';
import { Link  } from 'react-router-dom';

const ProductAdminControl = ({id}) => {
  return (
    <>
    	<Link to={`/products/${id}/edit`} className="btn btn-warning my-1 w-100">Edit</Link>

        <a href="#" className="btn btn-danger my-1 w-100">Edit</a>
    </>
  )
}

export default ProductAdminControl;