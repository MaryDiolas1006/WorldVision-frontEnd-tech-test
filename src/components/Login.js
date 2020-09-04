import React from 'react';

const Login = (props) => {
  return (
   
   <div>
   	 <form className="px-4 py-3">
   	 <div className="form-group col-12 col-md-4 col-lg-4 mx-auto">
   	 <label htmlFor="email">Email Address</label>
   	 <input type="email" name= "email" class="form-control" id="email" />
   	 </div>
   	 <div className="form-group col-12 col-md-4 col-lg-4 mx-auto">
   	 <label htmlFor="email">Password</label>
   	 <input type="password" name= "password" class="form-control" id="password" />
   	 </div>
   	 <div className="form-group col-12 col-md-4 col-lg-4 mx-auto">
   	  <input type="checkbox" class="form-check-input" id="checkbox" />
        <label class="form-check-label" htmlFor="checkbox">
          Remember me
        </label>
	</div>
	<div className="form-group col-12 col-md-4 col-lg-4 mx-auto">
	<button type="submit" class="btn btn-primary">Sign in</button>
	</div>
  </form>
  <div class=" col-12 col-md-4 col-lg-4 mx-auto">
  <a class="dropdown-item" href="#">New around here? Sign up</a>
  <a class="dropdown-item" href="#">Forgot password?</a>
  </div>
</div>

   

  )
}

export default Login;