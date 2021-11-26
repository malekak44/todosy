import React, { useState } from 'react';
import { useGlobalContext } from '../../context/AppContext';

const Form = () => {
    const [values, setValues] = useState({
        title: '',
        deadline: ''
    });
    const [isAdding, setIsAdding] = useState(false);
    const [isFocusing, setIsFocusing] = useState(false);
    const { user, createTodo, isToday } = useGlobalContext();

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsAdding(true);

        if (values.title !== '' || values.title !== ' ') {
            const todo = {
                user: user._id,
                title: values.title,
                deadline: isToday
                    ? new Date()
                    : values.deadline,
            }
            createTodo(todo);
            setValues({
                title: '',
                deadline: ''
            });
            setIsAdding(false);
        }
    }

    return (
        <form className="todos__form" onSubmit={handleSubmit}>
            <div className={isFocusing ? "checkbox focusing" : "checkbox"}></div>
            <input
                type="text"
                name="title"
                autoComplete="off"
                disabled={isAdding}
                value={values.title}
                onChange={handleChange}
                onFocus={() => setIsFocusing(true)}
                onBlur={() => setIsFocusing(false)}
                placeholder={`${isAdding ? "Adding..." : "Create a new todo..."}`}
            />
            {!isToday && (
                <input
                    type="date"
                    name="deadline"
                    value={values.deadline}
                    onChange={handleChange}
                    min={new Date().toISOString().slice(0, 10)}
                />
            )}
        </form>
    );
};

export default Form;