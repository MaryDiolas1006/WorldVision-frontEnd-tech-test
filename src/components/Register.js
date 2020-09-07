import React from 'react';
import RegisterForm from './RegisterForm';

const Register = (props) => {
  return (
<div className="container container-fluid">
   <div className="row justify-content-center">
        <div className="col-12 col-md-6 mx-auto">
            <RegisterForm />
        </div>
    </div>
</div>

  )
}

export default Register;