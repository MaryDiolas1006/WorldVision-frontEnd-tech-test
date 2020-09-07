import React from 'react';

const LoginForm = (props) => {
  return (
    <form>
    	<label htmlFor="email">Email:</label>
    	<input type="text" className="form-control" name="email" id="email" />

    	<label htmlFor="password">Password</label>
    	<input type="password" name="password" id="password" className="form-control" />

    	<button className="btn btn-primary my-1">Login</button>
    </form>
  )
}

export default LoginForm;