import React from 'react';

const Form = () => {
    return (
        <form className="todos__form">
            <div className="checkbox"></div>
            <input
                type="text"
                autoComplete="off"
                placeholder="Create a new todo..."
            />
        </form>
    );
};

export default Form;