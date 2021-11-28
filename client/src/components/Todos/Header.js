import React from 'react';
import sun from '../../assets/icon-sun.svg';
import moon from '../../assets/icon-moon.svg';
import { useGlobalContext } from '../../context/AppContext';

const Header = ({ title }) => {
    const { darkTheme, setTheme } = useGlobalContext();

    return (
        <div className="todos__header">
            <h1 className="todos__header__logo">{title}</h1>
            <img
                className="todos__header__icon"
                src={darkTheme ? sun : moon}
                onClick={setTheme}
                alt="theme-icon"
            />
        </div>
    );
};

export default Header;