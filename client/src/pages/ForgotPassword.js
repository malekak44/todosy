import React, { useState } from 'react';
import FormGroup from '../components/FormGroup';

const ForgotPassword = () => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
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
                    value="Submit"
                />
            </form>
        </section>
    );
};

export default ForgotPassword;