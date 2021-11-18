import React from 'react';

const Form = () => {
    return (
        <form className="todos__form">
            <div className="todos__checkbox"></div>
            <input type="text" name="todo" autoComplete="off" />
        </form>
    );
};

export default Form;