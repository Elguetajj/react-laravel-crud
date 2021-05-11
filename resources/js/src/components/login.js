import React from 'react'
import { Link } from 'react-router-dom';


const Login = () => {
    return(
        <div className="Login__container">
            <form className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address"  />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" />
            <div className="checkbox mb-3">
                <label>
                <input type="checkbox" value="remember-me"/> Remember me
                </label>
            </div>
            <Link to='/home' className="btn btn-lg btn-primary btn-block" >Sign in</Link>
            <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
            </form>
        </div>
    );
};

export default Login;