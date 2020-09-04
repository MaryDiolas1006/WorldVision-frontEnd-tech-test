import React from 'react';

const Register = (props) => {
  return (
    <div>
    <form className="px-4 py-3">
     <div className="form-group col-12 col-md-4 col-lg-4 mx-auto">
   	 <label htmlFor="fullname">Fullname</label>
   	 <input type="text" name= "fullname" class="form-control" id="fullname" />
   	 </div>
   	 <div className="form-group col-12 col-md-4 col-lg-4 mx-auto">
   	 <label htmlFor="email">Email Address</label>
   	 <input type="email" name= "email" class="form-control" id="email" />
   	 </div>
   	 <div className="form-group col-12 col-md-4 col-lg-4 mx-auto">
   	 <label htmlFor="password">Password</label>
   	 <input type="password" name= "password" class="form-control" id="password" />
   	 </div>
   	 <div className="form-group col-12 col-md-4 col-lg-4 mx-auto">
   	 <label htmlFor="password">Confirm Password</label>
   	 <input type="password" name= "password" class="form-control" id="password" />
   	 </div>
	<div className="form-group col-12 col-md-4 col-lg-4 mx-auto">
	<button type="submit" class="btn btn-primary">Register</button>
	</div>
  </form>
    </div>
  )
}

export default Register;