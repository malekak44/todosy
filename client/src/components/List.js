import React, { memo } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Todo from './Todo';

const List = memo(function List({ todos }) {
    return todos.map((todo, index) => (
        <Draggable key={todo._id} draggableId={`todo-${todo._id}`} index={index}>
            {(provided, snapshot) => (
                <div
                    className={`todo ${todo.completed ? 'completed' : ''}`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <Todo key={todo._id} todo={todo} />
                </div>
            )}
        </Draggable>
    ));
})

export default List;