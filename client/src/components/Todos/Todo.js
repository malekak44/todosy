import React, { useState } from 'react';
import { useGlobalContext } from '../../context/AppContext';

const Todo = ({ todo }) => {
  let isCompleted;
  const todoId = todo._id;
  const [title, setTitle] = useState(todo.title);
  const [isUpdating, setIsUpdating] = useState(false);
  const { isToday, deleteTodo, updateTodo } = useGlobalContext();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const deadlineDate = new Date(todo.deadline).getDate();
  const deadlineMonth = months[new Date(todo.deadline).getMonth()];
  const deadline = `${deadlineDate} ${deadlineMonth}`;

  if (todo.completed) {
    isCompleted = false;
  } else {
    isCompleted = true;
  }

  const handleComplete = () => {
    updateTodo(todoId, {
      completed: isCompleted
    });
  }

  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUpdating(false);
    updateTodo(todoId, {
      title: title
    });
  }

  return (
    <div className={`todo__item ${isToday && 'today__item'}`}>
      <button
        aria-pressed="true"
        onClick={handleComplete}
        aria-label="complete-todo"
        className={`checkbox ${todo.completed ? 'completed' : ''} ${isUpdating ? 'focusing' : ''}`}
      ></button>
      {isUpdating ?
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={handleChange}
            className="todos__input"
            onBlur={() => setIsUpdating(false)}
          />
        </form> :
        <p
          onDoubleClick={() => setIsUpdating(true)}
        >{title}</p>
      }
      {!isToday && (
        <p className="deadline">{deadline}</p>
      )}
      <button
        aria-pressed="true"
        className="deleteBtn"
        aria-label="remove-todo"
        onClick={() => deleteTodo(todoId)}
      ></button>
    </div >
  );
};

export default Todo;