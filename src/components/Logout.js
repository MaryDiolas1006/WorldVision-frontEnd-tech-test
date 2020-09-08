import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';

const Logout = ({setAuthUser}) => {

	const [isRedirect, setIsRedirect] = useState(false);

	useEffect(() => {
	localStorage.removeItem("appState")
	setAuthUser({
    isAuth: false,
    _id:"",
    fullname:"",
    email:""
  })
    setIsRedirect(true);
	},[])

	if(isRedirect){
		return <Redirect to="/" />
	}


  return (
    <div>
    	Please Wait a moment...
    </div>
  )
}

export default Logout;