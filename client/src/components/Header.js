import React, { useState, useEffect } from 'react';
import sun from '../assets/icon-sun.svg';
import moon from '../assets/icon-moon.svg';
const getLocalStorage = () => {
    const theme = localStorage.getItem("darkTheme");
    if (theme) {
        return theme;
    } else {
        return false;
    }
}

const Header = () => {
    const [darkTheme, setDarkTheme] = useState(getLocalStorage());

    useEffect(() => {
        localStorage.setItem("darkTheme", darkTheme);
    }, [darkTheme]);

    return (
        <div className="todos__header">
            <h1 className="todos__header__logo">TODO</h1>
            <img
                src={darkTheme ? sun : moon}
                alt="theme-icon"
                className="todos__header__icon"
                onClick={() => setDarkTheme(!darkTheme)}
            />
        </div>
    );
};

export default Header;