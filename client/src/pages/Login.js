import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../assets/login-img.jpg';
import FormGroup from '../components/FormGroup';
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
                            <FormGroup
                                type="email"
                                id="email"
                                label="Email"
                                value={values.email}
                                handleChange={handleChange}
                            />
                            <FormGroup
                                type="password"
                                id="password"
                                label="Password"
                                value={values.password}
                                handleChange={handleChange}
                            />
                            <FormGroup
                                type="submit"
                                value="Log In"
                            />
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