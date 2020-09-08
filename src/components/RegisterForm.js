import React, {useState} from 'react';
import InputGroup from './partials/InputGroup';

const RegisterForm = (props) => {

    const [ user, setUser ] = useState({
        fullname:"",
        email:"",
        password:"",
        confirmPassword:""
    });

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    };

  return (
    <div>
    	<InputGroup
    		type="text"
    		name="fullname"
    		displayName="Fullname:"
            handleChange = {handleChange}
    	 />

    	 <InputGroup
    		type="email"
    		name="email"
    		displayName="Email:"
            handleChange = {handleChange} 
    	 />
    	 <InputGroup
    		type="password"
    		name="password"
    		displayName="Password:"
            handleChange = {handleChange} 
    	 />

    	 <InputGroup
    		type="password"
    		name="confirmPassword"
    		displayName="Confirm Password:"
            handleChange = {handleChange} 
    	 />

    	 <button className="btn btn-primary">Register</button>
    </div>
  )
}

export default RegisterForm;