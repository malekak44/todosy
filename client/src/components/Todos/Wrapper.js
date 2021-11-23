import React, { useEffect, useState } from 'react';
import List from './List';
import Filter from './Filter';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Wrapper = () => {
    const [todos, setTodos] = useState([{
        id: 1,
        title: 'complete online JavaScript course',
        completed: true,
    }, {
        id: 2,
        title: 'hey buddy'
    }, {
        id: 3,
        title: 'have breakfast'
    }]);
    useEffect(() => {

    });

    const reorder = (list, startIndex, endIndex) => {
        const newList = Array.from(list);
        const [removed] = newList.splice(startIndex, 1);
        newList.splice(endIndex, 0, removed);
        return newList;
    }

    const handleDragEnd = result => {
        const { destination } = result;
        if (!destination) {
            return;
        }

        const updatedTodos = reorder(
            todos,
            result.source.index,
            result.destination.index
        );

        setTodos(updatedTodos);
    }

    return (
        <div className="todos__wrapper">
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div
                            className={`todo__list ${snapshot.isDraggingOver ? 'dragging' : ''}`}
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            <List todos={todos} />
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <Filter />
        </div>
    );
};

export default Wrapper;