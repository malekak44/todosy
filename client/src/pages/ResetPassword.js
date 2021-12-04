import FormGroup from '../components/FormGroup';
import useLocalState from '../utils/localState';
import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/AppContext';
import { useLocation, useNavigate } from 'react-router-dom';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const ResetPassword = () => {
    const query = useQuery();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        newPassword: '',
        retypedPassword: '',
    });
    const {
        alert,
        showAlert,
        hideAlert,
    } = useLocalState();
    const { resetPassword } = useGlobalContext();

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        hideAlert();
        e.preventDefault();
        if (values.newPassword === values.retypedPassword) {
            resetPassword({
                password: values.newPassword,
                passwordToken: query.get('token'),
                email: query.get('email'),
            })
                .then(data => showAlert({ text: data.msg, type: data.type }));
            setValues({
                newPassword: '',
                retypedPassword: '',
            });
        } else {
            showAlert({ text: 'Password doesn\'t match' });
        }
    }

    useEffect(() => {
        setTimeout(() => {
            if (alert.type === 'success') {
                navigate('/login', { replace: true });
            }
        }, 3000);
    }, [alert.type, navigate]);

    return (
        <>
            {alert.show && (
                <div className={`alert alert-${alert.type}`}>
                    <p>{alert.text}</p>
                </div>
            )}
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
                        value="Submit"
                    />
                </form>
            </section>
        </>
    );
};

export default ResetPassword;