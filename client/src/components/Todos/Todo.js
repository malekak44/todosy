import React, { useState } from 'react';
// useStore

const Todo = ({ todo }) => {
  // const todos = useStore((state) => state.todos)
  // const setTodos = useStore((state) => state.setTodos)

  const [todos, setTodos] = useState([]);

  const handleRemove = () => {
    const todoId = todo.id;
    setTodos(todos.filter(oldTodo => oldTodo.id !== todoId))
  }

  const handleComplete = () => {
    const todoId = todo.id;
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed }
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div className="todo__item">
      <button
        aria-pressed="true"
        onClick={handleComplete}
        aria-label="complete-todo"
        className={`checkbox ${todo.completed ? 'completed' : ''}`}
      ></button>
      <p>{todo.title}</p>
      <button
        aria-pressed="true"
        className="deleteBtn"
        onClick={handleRemove}
        aria-label="remove-todo"
      ></button>
    </div>
  );
};

export default Todo;