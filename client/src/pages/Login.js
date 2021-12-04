import React, { useState } from 'react';
import loginImg from '../assets/login-img.jpg';
import FormGroup from '../components/FormGroup';
import useLocalState from '../utils/localState';
import { Link, Navigate } from 'react-router-dom';
import { useGlobalContext } from '../context/AppContext';

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const {
        alert,
        showAlert,
        hideAlert,
    } = useLocalState();
    const { user, login } = useGlobalContext();
    const [isChecked, setIsChecked] = useState(true);

    const handleCheck = () => {
        setIsChecked(!isChecked);
    }

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        hideAlert();
        e.preventDefault();
        const { email, password } = values;
        const user = { email, password };
        login(user).then(data => showAlert({ text: data }))
    }

    return (
        <>
            {user ? <Navigate to="/todos" /> :
                <>
                    {alert.show && (
                        <div className={`alert alert-${alert.type}`}>
                            <p>{alert.text}</p>
                        </div>
                    )}
                    < section className="container">
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
                                    <Link to="/forgot-password">Forgot Password</Link>
                                </div>
                            </form>
                            <p className="link">Not a member? <Link to="/signup">Sign Up</Link></p>
                        </div>
                    </section>
                </>}
        </>
    );
};

export default Login;