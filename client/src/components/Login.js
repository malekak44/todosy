import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useGlobalContext } from '../context/AppContext';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useGlobalContext();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = 'joe@gmail.com';
        const password = '9374dl';
        const user = { email, password };

        login(user, () => {
            navigate(from, { replace: true });
        });
    }

    return (
        <div>
            <p>You must log in to view the page at {from}</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input name="username" type="text" />
                </label>{" "}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;