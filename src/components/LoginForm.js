import React, {useState} from 'react';
import AlertMessage from './partials/AlertMessage';
import InputGroup from './partials/InputGroup';
import { Redirect } from 'react-router-dom';

const LoginForm = (props) => {

	const [ credentials, setCredentials ] = useState({
		email: "",
		password: ""
	});

	const [alert, setAlert] = useState({
		hasAlert: false,
		color:"",
		message: ""
	});

	const handleChange = e => {
		setCredentials({
			...credentials,
			[e.target.name]:e.target.value
		})
	};

	const [isSuccess, setIsSuccess] = useState(false);

	// setting a loading when user click login button without putting credentials
	const [isLoading, setIsLoading] = useState(false);


	// after user login, it will redirect to home
	if(isSuccess){
		return <Redirect to="/" />
	}

	
	const handleSubmit = e => {
		e.preventDefault()
		setIsLoading(true)

		fetch(`https://backend-pushcart.herokuapp.com/users/login`, {
			method: "post",
			body: JSON.stringify(credentials),
			headers: {
				"Content-Type" : "application/json"
			}
		})
			 .then( response => {
            if(response.status !== 200) {
                setAlert({
                    hasAlert: true,
                    color: "danger",
                    message : "Check your credentials" 
                })
            }else {
            	setIsSuccess(true);	
            }
            return response.json()
        })

			.then(data => {
				console.log(data)
				setIsLoading(false)
			});

	}

	



  return (
  	
    <form onSubmit={handleSubmit}>
     {
     	alert.hasAlert ? 
    	<AlertMessage color={alert.color} message={alert.message} />
     	: <> </>
     }

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
    	

    	<button 

    	className="btn btn-primary my-1"
    	 disabled={isLoading}

    	>
    	{
    		isLoading ?
    		"Login..." :
    		"Login"
    	}
    	</button> 
    	
    </form>
  )
}

export default LoginForm;