import React from 'react';
import moon from '../../assets/icon-moon.svg';

const Header = ({ title }) => {

    return (
        <div className="todos__header">
            <h1 className="todos__header__logo">{title}</h1>
            <img
                src={moon}
                alt="theme-icon"
                className="todos__header__icon"
            />
        </div>
    );
};

export default Header;