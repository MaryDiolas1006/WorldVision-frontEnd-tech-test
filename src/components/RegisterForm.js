import React, {useState} from 'react';
import InputGroup from './partials/InputGroup';
import AlertMessage from './partials/AlertMessage';

const RegisterForm = (props) => {

    const [ user, setUser ] = useState({
        fullname:"",
        email:"",
        password:"",
        confirmPassword:""
    });

    const [ error, setError ] = useState({
        hasError: false,
        color: "danger",
        message: "Check Your Credentials"
    })

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        fetch("https://backend-pushcart.herokuapp.com/users/register", {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then( response => {
            console.log(response.status)
            if(response.status === 400)  {
                setError({
                ...error, 
                hasError:true
            })
        }else {
            setError({ 
                hasError:true,
                color: "success",
                message: "Please login to continue"
            })
           return response.json()
        }
        })
        .then(data => {
            console.log(data)
        })
    };


  return (
    <form onSubmit={handleSubmit}>
    {
        error.hasError ?
        <AlertMessage 
        color={error.color}
        message={error.message}/>
        : <></>
    }

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