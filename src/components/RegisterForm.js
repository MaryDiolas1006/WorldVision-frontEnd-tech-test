import React from 'react';
import InputGroup from './partials/InputGroup';

const RegisterForm = (props) => {
  return (
    <div>
    	<InputGroup
    		type="text"
    		name="fullname"
    		displayName="Fullname:" 
    	 />

    	 <InputGroup
    		type="email"
    		name="email"
    		displayName="Email:" 
    	 />
    	 <InputGroup
    		type="password"
    		name="password"
    		displayName="Password:" 
    	 />

    	 <InputGroup
    		type="password"
    		name="confirmPassword"
    		displayName="Confirm Password:" 
    	 />

    	 <button className="btn btn-primary">Register</button>
    </div>
  )
}

export default RegisterForm;