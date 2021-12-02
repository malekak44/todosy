import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import FormGroup from '../components/FormGroup';
import { useGlobalContext } from '../context/AppContext';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const ResetPassword = () => {
    const query = useQuery();
    const [values, setValues] = useState({
        newPassword: '',
        retypedPassword: '',
    });
    const [alert, setAlert] = useState('Submit');
    const { resetPassword } = useGlobalContext();

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.newPassword === values.retypedPassword) {
            resetPassword({
                password: values.newPassword,
                passwordToken: query.get('token'),
                email: query.get('email'),
            })
                .then(data => setAlert(data));
        }
    }

    return (
        <section className="form__wrapper container">
            <h3>Reset Password</h3>
            <form onSubmit={handleSubmit}>
                <FormGroup
                    type="password"
                    id="newPassword"
                    label="New Password"
                    value={values.newPassword}
                    handleChange={handleChange}
                />
                <FormGroup
                    type="password"
                    id="retypedPassword"
                    label="Re-Type Password"
                    handleChange={handleChange}
                    value={values.retypedPassword}
                />
                <FormGroup
                    type="submit"
                    value={alert}
                />
            </form>
        </section>
    );
};

export default ResetPassword;