import React from 'react';
import InputGroup from './InputGroup';

const ProductAddToCart = (props) => {
  return (
  	<InputGroup
  		type="number"
  		name="qty"
  		displayName="Quantity"
  	/>
  )
}

export default ProductAddToCart;