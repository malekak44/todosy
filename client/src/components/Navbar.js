import axios from 'axios';
import { Link } from 'react-router-dom';
import quoteLeft from '../assets/quote-left.png';
import quoteRight from '../assets/quote-right.png';
import React, { useEffect, useState } from 'react';
import { url } from '../utils/url';

const Navbar = () => {
    const [quote, setQuote] = useState('Life isn’t about getting and having, it’s about giving and being.');
    const quoteUrl = `${url}/data/quote`;

    useEffect(() => {
        axios.get(quoteUrl)
            .then(data => setQuote(data.data.quote));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <nav className="navbar">
            <Link to="/" className="navbar__logo">
                Todosy
            </Link>
            <div className="navbar__quote">
                <img src={quoteLeft} alt="quote-left" />
                <p>{quote}</p>
                <img src={quoteRight} alt="quote-right" />
            </div>
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