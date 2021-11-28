import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../assets/login-img.jpg';
import { useGlobalContext } from '../context/AppContext';
import { Navigate, useNavigate, useLocation } from 'react-router';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const { user, login } = useGlobalContext();
    const [isChecked, setIsChecked] = useState(true);
    const from = location.state?.from?.pathname || "/";

    const handleCheck = () => {
        setIsChecked(!isChecked);
    }

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = values;
        const user = { email, password };

        login(user, () => {
            navigate(from, { replace: true });
        });
    }

    return (
        <>
            {user ? <Navigate to="/todos" /> :
                <section className="container">
                    <img src={loginImg} alt="login-img" />
                    <div className="form__wrapper">
                        <h3>Log In</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form__group">
                                <input type="email" name="email" id="email" value={values.email} onChange={handleChange} autoComplete="off" />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="form__group">
                                <input type="password" name="password" id="password" value={values.password} onChange={handleChange} />
                                <label htmlFor="password">Password</label>
                                <span toggle="#password"></span>
                            </div>
                            <div className="form__group">
                                <input type="submit" value="Log In" />
                            </div>
                            <div className="form__group checkbox__group">
                                <label className="checkbox__wrapper">Remember Me
                                    <input type="checkbox" checked={isChecked} onChange={handleCheck} />
                                    <span className="checkmark"></span>
                                </label>
                                <p>Forgot Password</p>
                            </div>
                        </form>
                        <p className="link">Not a member? <Link to="/signup">Sign Up</Link></p>
                    </div>
                </section>}
        </>
    );
};

export default Login;