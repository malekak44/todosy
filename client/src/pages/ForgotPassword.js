import React, { useState } from 'react';
import FormGroup from '../components/FormGroup';
import { useGlobalContext } from '../context/AppContext';

const ForgotPassword = () => {
    const [value, setValue] = useState('');
    const [alert, setAlert] = useState('Submit');
    const { forgotPassword } = useGlobalContext();

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        forgotPassword({ email: value })
            .then(data => setAlert(data));
    }

    return (
        <section className="form__wrapper container">
            <h3>Forgot Password</h3>
            <form onSubmit={handleSubmit}>
                <FormGroup
                    type="email"
                    id="email"
                    label="Email"
                    value={value}
                    handleChange={handleChange}
                />
                <FormGroup
                    type="submit"
                    value={alert}
                />
            </form>
        </section>
    );
};

export default ForgotPassword;