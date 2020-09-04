import React from 'react';

const Login = (props) => {
  return (
  <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <form>
                        <div class="form-group row">
                            <label htmlFor="email" class="col-md-4 col-form-label text-md-right">Email</label>

                            <div class="col-md-6">
                                <input 
                                id="email" 
                                type="email" 
                                class="form-control" 
                                name="email" 
                                required 
                                autocomplete="email" 
                                autofocus 
                                placeholder="Email Here" />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label 
                            htmlFor="password" 
                              class="col-md-4 col-form-label text-md-right">Password</label>
                            <div class="col-md-6">
                                <input 
                                id="password" 
                                type="password" 
                                class="form-control" 
                                name="password" 
                                required 
                                autocomplete="current-password"
                                placeholder="Password Here" />
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" />

                                    <label class="form-check-label" htmlFor="remember">
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    Login
                                </button>

                                    <a class="btn btn-link" href="">
                                        Forgot Password
                                    </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>


  )
}

export default Login;