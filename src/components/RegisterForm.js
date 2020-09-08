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

    const handleSubmit = e => {
        e.proventDefault();
        fetch("https://backend-pushcart.herokuapp.com/register", {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then( response => response.json())
        .then(data => {
            console.log(data)
        })
    };


  return (
    <form onSubmit={handleSubmit}>
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
    
    </form>
  )
}

export default RegisterForm;