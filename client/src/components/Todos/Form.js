import React, { useState } from 'react';
import { useGlobalContext } from '../../context/AppContext';

const Form = () => {
    const [value, setValue] = useState('');
    const { user, createTodo } = useGlobalContext();
    const [isAdding, setIsAdding] = useState(false);
    const [isFocusing, setIsFocusing] = useState(false);

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsAdding(true);

        if (value !== '' || value !== ' ') {
            const todo = {
                user: user._id,
                title: value,
                deadline: Date.now(),
            }
            createTodo(todo);
            setValue('');
            setIsAdding(false);
        }
    }

    return (
        <form className="todos__form" onSubmit={handleSubmit}>
            <div className={isFocusing ? "checkbox focusing" : "checkbox"}></div>
            <input
                type="text"
                value={value}
                autoComplete="off"
                disabled={isAdding}
                onChange={handleChange}
                onFocus={() => setIsFocusing(true)}
                onBlur={() => setIsFocusing(false)}
                placeholder={`${isAdding ? "Adding..." : "Create a new todo..."}`}
            />
        </form>
    );
};

export default Form;