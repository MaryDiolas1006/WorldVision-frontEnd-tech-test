import React from 'react';

const InputGroup = (props) => {
  return (
   <div className="form-group">
        <label htmlFor={props.name}>{props.displayName}</label>
        <input 
        	type={props.type} 
        	name={props.name} 
        	id={props.name} 
        	 className={ props.type !== "file" ? "form-control" : "form-control-file"}
          min={props.min} 
        	placeholder={props.placeholder} 
        	aria-describedby="helpId" />
    </div>
  )
}

export default InputGroup;