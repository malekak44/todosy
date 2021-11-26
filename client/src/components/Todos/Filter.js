import React from 'react';
import FilterButtons from './FilterButtons'; 
import { useGlobalContext } from '../../context/AppContext';

const Filter = () => {
    const { todos, clearCompleted } = useGlobalContext();
    const itemsLeft = todos.filter(todo => !todo.completed).length;

    return (
        <div className="todos__filter">
            <p className="status">{itemsLeft} items left</p>
            <FilterButtons />
            <button
                onClick={clearCompleted}
                className="status filter__btn clear-btn"
            >Clear Completed</button>
        </div>
    );
};

export default Filter;