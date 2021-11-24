import React, { memo } from 'react';
import Todo from './Todo';
// import store
import { Draggable } from 'react-beautiful-dnd';

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  ...draggableStyle
})

const InnerList = memo(function InnerList({ todos }) {
  // const filter = usestore
  const filter = '';

  const todosFilter = (todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    if (filter === '') return todo;
  }

  return todos
    .filter(todosFilter)
    .map((todo, index) => (
      <Draggable key={todo.id} draggableId={`todo-${todo.id}`} index={index}>
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
            <Todo key={todo.id} todo={todo} />
          </div>
        )}
      </Draggable>
    ));
});

export default InnerList;