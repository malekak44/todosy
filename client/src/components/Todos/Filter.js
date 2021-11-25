import React from 'react';
import { useGlobalContext } from '../../context/AppContext';

const Filter = () => {
    const { todos, filter, setFilter, clearCompleted } = useGlobalContext();
    const itemsLeft = todos.filter(todo => !todo.completed).length;

    return (
        <div className="todos__filter">
            <p className="status">{itemsLeft} items left</p>
            <div className="filter__buttons">
                <button
                    onClick={() => setFilter('')}
                    className={filter === '' ? 'active' : ''}
                >All</button>
                <button
                    onClick={() => setFilter('active')}
                    className={`active-btn ${filter === 'active' ? 'active' : ''}`}
                >Active</button>
                <button
                    onClick={() => setFilter('completed')}
                    className={filter === 'completed' ? 'active' : ''}
                >Completed</button>
            </div>
            <button
                onClick={clearCompleted}
                className="status clear-btn"
            >Clear Completed</button>
        </div>
    );
};

export default Filter;