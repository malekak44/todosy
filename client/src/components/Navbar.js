import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [quote, setQuote] = useState({});
    const quoteUrl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 100);
        axios.get(quoteUrl)
            .then(data => setQuote(data.data.quotes[randomNumber]));
    }, []);

    return (
        <nav className="navbar">
            <Link to="/" className="navbar__logo">
                Todosy
            </Link>
            <p className="navbar__quote">{quote.quote}</p>
            <div className="navbar__links">
                {/* <Link>Todos</Link>
                <Link>Profile</Link> */}
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </div>
        </nav>
    );
};

export default Navbar;