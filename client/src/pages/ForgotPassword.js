import React, { useState } from 'react';
import useLocalState from '../utils/localState';
import FormGroup from '../components/Common/FormGroup';
import { useGlobalContext } from '../context/AppContext';

const ForgotPassword = () => {
    const [value, setValue] = useState('');
    const {
        alert,
        loading,
        showAlert,
        hideAlert,
        setLoading,
    } = useLocalState();
    const { forgotPassword } = useGlobalContext();

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        setLoading(true);
        hideAlert();
        e.preventDefault();
        forgotPassword({ email: value })
            .then(data => showAlert({
                text: data.msg,
                type: data.type
            }));
        setLoading(false);
    }

    return (
        <>
            {alert.show && (
                <div className={`alert alert-${alert.type}`}>
                    <p>{alert.text}</p>
                </div>
            )}
            <section
                className={`form__wrapper container${loading ? ' container__loading' : ''}`}
            >
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
        </>
    );
};

export default ForgotPassword;