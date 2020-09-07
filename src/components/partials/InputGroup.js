import React from 'react';

const InputGroup = (props) => {
  return (
   <div className="form-group">
        <label htmlFor={props.name}>{props.displayName}</label>
        <input 
        	type="text" 
        	name={props.name} 
        	id={props.name} 
        	className="form-control" 
        	placeholder={props.placeholder} 
        	aria-describedby="helpId" />
    </div>
  )
}

export default InputGroup;