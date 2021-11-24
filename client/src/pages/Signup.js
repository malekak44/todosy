import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import signupImg from '../assets/signup-img.jpg';
import { useLocation, useNavigate } from 'react-router';
import { useGlobalContext } from '../context/AppContext';

const Signup = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user, signup } = useGlobalContext();
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    });
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            return navigate('/todos', { replace: true });
        }
    }, [navigate, user]);

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password } = values;
        const newUser = { name, email, password };

        signup(newUser, () => {
            navigate(from, { replace: true });
        });
    }

    return (
        <div className="signup">
            <img src={signupImg} alt="signup-img" />
            <div className="signup__wrapper">
                <h3 className="mb-4">Sign Up</h3>
                <form className="signup__form" onSubmit={handleSubmit} >
                    <div className="form-group">
                        <input type="text" name="name" id="name" value={values.name} onChange={handleChange} autoComplete="off" />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" id="email" value={values.email} onChange={handleChange} autoComplete="off" />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" id="password" value={values.password} onChange={handleChange} />
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