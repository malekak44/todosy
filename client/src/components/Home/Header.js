import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <article className="home__header">
            <h1>
                <span>Organize Your Work</span>
                <span>With Todosy</span>
            </h1>
            <Link to="/signup">
                <button>Get Started</button>
            </Link>
        </article>
    );
};

export default Header;