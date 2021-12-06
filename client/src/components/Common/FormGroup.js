import React from 'react';

const FormGroup = ({ type, id, label, value, handleChange }) => {
    return (
        <div className="form__group">
            <input
                type={type}
                name={id}
                id={id}
                value={value}
                onChange={handleChange}
                autoComplete="off"
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default FormGroup;