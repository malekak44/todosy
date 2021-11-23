import React, { useState } from 'react';

const Todo = ({ todo }) => {
    const [completed, setCompleted] = useState(false);

    return (
        <div className="todo__item">
            <button
                className={`checkbox ${completed ? 'completed' : ''}`}
                onClick={() => setCompleted(!completed)}
            ></button>
            <p>{todo.title}</p>
            <button className="deleteBtn"></button>
        </div>
    );
};

export default Todo;