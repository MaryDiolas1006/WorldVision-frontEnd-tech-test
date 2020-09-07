import React from 'react';
import LoginForm from './LoginForm';

const Login = (props) => {
  return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8 col-lg-6 mx-auto">
                    <LoginForm />
                </div>
            </div>
        </div>
  )
}

export default Login;