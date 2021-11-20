import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../assets/login-img.jpg';
// import { useNavigate, useLocation } from 'react-router';
// import { useGlobalContext } from '../context/AppContext';

const Login = () => {
    // const navigate = useNavigate();
    // const location = useLocation();
    // const { login } = useGlobalContext();
    // const from = location.state?.from?.pathname || "/";

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const email = 'joe@gmail.com';
    //     const password = '9374dl';
    //     const user = { email, password };

    //     login(user, () => {
    //         navigate(from, { replace: true });
    //     });
    // }

    return (
        <div className="login">
            <img src={loginImg} alt="login-img" />
            <div className="login__wrapper">
                <h3 className="mb-4">Log In</h3>
                <form className="login__form">
                    <div className="form-group">
                        <input type="email" name="email" id="email" autoComplete="off" />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" id="password" />
                        <label htmlFor="password">Password</label>
                        <span toggle="#password"></span>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Log In" />
                    </div>
                    <div className="form-group checkbox__group">
                        <label className="checkbox__wrapper">Remember Me
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <p>Forgot Password</p>
                    </div>
                </form>
                <p className="link">Not a member? <Link to="/signup">Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;