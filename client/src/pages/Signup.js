import React, { useState } from 'react';
import FormGroup from '../components/FormGroup';
import useLocalState from '../utils/localState';
import signupImg from '../assets/signup-img.jpg';
import { Link, Navigate } from 'react-router-dom';
import { useGlobalContext } from '../context/AppContext';

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    });
    const {
        alert,
        loading,
        showAlert,
        hideAlert,
        setLoading,
    } = useLocalState();
    const { user, signup } = useGlobalContext();

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        setLoading(true);
        hideAlert();
        e.preventDefault();
        const { name, email, password } = values;
        const newUser = { name, email, password };
        signup(newUser).then(data => showAlert({ text: data }));
        setLoading(false);
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
                    <section
                        className={`container${loading ? ' container__loading' : ''}`}
                    >
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
                    </section>
                </>}
        </>
    );
};

export default Signup;