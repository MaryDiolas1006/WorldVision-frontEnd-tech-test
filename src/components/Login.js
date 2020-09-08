import React from 'react';
import LoginForm from './LoginForm';
import {Redirect} from 'react-router-dom';

const Login = (props) => {

	if(props.authUser.isAuth){
		return <Redirect to="/" />
	}

  return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8 col-lg-6 mx-auto">
                    <LoginForm setAuthUser={props.setAuthUser} />
                </div>
            </div>
        </div>
  )
}

export default Login;