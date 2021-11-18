import React from 'react';

const Todo = ({ todo }) => {
    return (
        <div className="todo__item">
            <button className="checkbox"></button>
            <p>{todo.title}</p>
            <button></button>
        </div>
    );
};

export default Todo;