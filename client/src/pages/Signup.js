import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormGroup from '../components/FormGroup';
import signupImg from '../assets/signup-img.jpg';
import { useGlobalContext } from '../context/AppContext';
import { Navigate, useLocation, useNavigate } from 'react-router';

const Signup = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    });
    let from = location.state?.from?.pathname || "/";
    const { user, signup } = useGlobalContext();

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
        <>
            {user ? <Navigate to="/todos" /> :
                <section className="container">
                    <img src={signupImg} alt="signup-img" />
                    <div className="form__wrapper">
                        <h3>Sign Up</h3>
                        <form onSubmit={handleSubmit} >
                            <FormGroup
                                type="text"
                                id="name"
                                label="Name"
                                value={values.name}
                                handleChange={handleChange}
                            />
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
                                value="Sign Up"
                            />
                        </form>
                        <p className="link">Already have an account? <Link to="/login">Log In</Link></p>
                    </div>
                </section>}
        </>
    );
};

export default Signup;