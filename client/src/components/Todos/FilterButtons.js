import React from 'react';
import { useGlobalContext } from '../../context/AppContext';

const FilterButtons = () => {
    const { filter, setFilter } = useGlobalContext();
    return (
            <div className="filter__buttons">
                <button
                    onClick={() => setFilter('')}
                    className={`filter__btn ${filter === '' ? 'active' : ''}`}
                >All</button>
                <button
                    onClick={() => setFilter('active')}
                    className={`filter__btn active-btn ${filter === 'active' ? 'active' : ''}`}
                >Active</button>
                <button
                    onClick={() => setFilter('completed')}
                    className={`filter__btn ${filter === 'completed' ? 'active' : ''}`}
                >Completed</button>
            </div>
    );
};

export default FilterButtons;