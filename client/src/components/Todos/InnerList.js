import Todo from './Todo';
import React, { memo } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useGlobalContext } from '../../context/AppContext';

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  ...draggableStyle
})

const InnerList = memo(function InnerList({ todos }) {
  const { filter } = useGlobalContext();

  const todosFilter = (todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    if (filter === '') return todo;
  }

  return todos
    .filter(todosFilter)
    .map((todo, index) => (
      <Draggable key={todo._id} draggableId={`todo-${todo._id}`} index={index}>
        {(provided, snapshot) => (
          <div
            className={`todo ${todo.completed ? 'completed' : ''}`}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style
            )}
          >
            <Todo key={todo._id} todo={todo} />
          </div>
        )}
      </Draggable>
    ));
});

export default InnerList;