import React from 'react';

const Filter = () => {
    return (
        <div className="todos__filter">
            <p className="status">0 items left</p>
            <div className="filter__buttons">
                <button className="active">All</button>
                <button className="active-btn">Active</button>
                <button>Completed</button>
            </div>
            <button className="status clear-btn">Clear Completed</button>
        </div>
    );
};

export default Filter;