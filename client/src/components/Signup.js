import React from 'react';
import { Link } from 'react-router-dom';
import signupImg from '../assets/signup-img.jpg';
// import { useNavigate, useLocation } from 'react-router';
// import { useGlobalContext } from '../context/AppContext';

const Signup = () => {
    // const navigate = useNavigate();
    // const location = useLocation();
    // const { signup } = useGlobalContext();
    // const from = location.state?.from?.pathname || "/";

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const email = 'joe@gmail.com';
    //     const password = '9374dl';
    //     const user = { email, password };

    //     signup(user, () => {
    //         navigate(from, { replace: true });
    //     });
    // }

    return (
        <div className="signup">
            <img src={signupImg} alt="signup-img" />
            <div className="signup__wrapper">
                <h3 className="mb-4">Sign Up</h3>
                <form className="signup__form">
                    <div className="form-group">
                        <input type="text" name="name" id="name" autoComplete="off" />
                        <label htmlFor="name">Name</label>
                    </div>
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
                        <input type="submit" value="Sign Up" />
                    </div>
                </form>
                <p className="link">Already have an account? <Link to="/login">Log In</Link></p>
            </div>
        </div>
    );
};

export default Signup;