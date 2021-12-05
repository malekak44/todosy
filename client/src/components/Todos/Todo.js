import React, { useRef, useState } from 'react';
import { useGlobalContext } from '../../context/AppContext';

const Todo = ({ todo }) => {
  let isCompleted;
  const todoId = todo._id;
  const deadlineRef = useRef(null);
  const [title, setTitle] = useState(todo.title);
  const [isUpdating, setIsUpdating] = useState(false);
  const { isToday, deleteTodo, updateTodo } = useGlobalContext();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const deadlineDate = new Date(todo.deadline).getDate();
  const deadlineMonth = months[new Date(todo.deadline).getMonth()];
  const deadlineStr = `${deadlineDate} ${deadlineMonth}`;

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUpdating(false);
    updateTodo(todoId, {
      title: title
    });
  }

  const updateDeadline = () => {
    setIsUpdating(false);
    updateTodo(todoId, {
      deadline: deadlineRef.current.value,
    });
  }

  return (
    <div
      onDoubleClick={() => setIsUpdating(true)}
      className={`todo__item${isToday ? ' today__item' : ''}${isUpdating ? ' updating' : ''}`}
    >
      <button
        aria-pressed="true"
        onClick={handleComplete}
        aria-label="complete-todo"
        className={`checkbox${todo.completed ? ' completed' : ''}${isUpdating ? ' focusing' : ''}`}
      ></button>
      {isUpdating ?
        <form
          onSubmit={handleSubmit}
          onBlur={() => setIsUpdating(false)}
        >
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="date"
            name="deadline"
            ref={deadlineRef}
            onChange={updateDeadline}
            value={todo.deadline.slice(0, 10)}
            min={new Date().toISOString().slice(0, 10)}
          />
        </form> :
        <>
          <p className="title">{title}</p>
          {!isToday && (<p className="deadline">{deadlineStr}</p>)}
        </>
      }
      <button
        aria-pressed="true"
        className="deleteBtn"
        aria-label="remove-todo"
        onClick={() => deleteTodo(todoId)}
      ></button>
    </div>
  );
};

export default Todo;