import axios from 'axios';
import { Link } from 'react-router-dom';
import quoteLeft from '../assets/quote-left.png';
import quoteRight from '../assets/quote-right.png';
import React, { useEffect, useState } from 'react';
import { url } from '../utils/url';
const quoteUrl = `${url}/data/quote`;

const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [quote, setQuote] = useState('Life isn’t about getting and having, it’s about giving and being.');

    useEffect(() => {
        axios.get(quoteUrl)
            .then(data => setQuote(data.data.quote));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const body = document.body;
        if (isNavbarOpen) {
            body.classList.add('noscroll');
        } else {
            body.classList.remove('noscroll');
        }
    }, [isNavbarOpen]);

    return (
        <section className={isNavbarOpen ? 'navbar open' : 'navbar'}>
            <div
                className={isNavbarOpen ? 'overlay has-fade fade-in' : 'overlay has-fade fade-out'}
            ></div>
            <nav>
                <Link to="/" className="navbar__logo">
                    Todosy
                </Link>
                <div
                    className="navbar__toggle hide-for-desktop"
                    onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="navbar__quote hide-for-mobile">
                    <img src={quoteLeft} alt="quote-left" />
                    <p>{quote}</p>
                    <img src={quoteRight} alt="quote-right" />
                </div>
                <div className="navbar__links hide-for-mobile">
                    {/* <Link>Todos</Link>
                <Link>Profile</Link> */}
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>
            </nav>
            <div
                className={isNavbarOpen ? 'navbar__menu has-fade fade-in' : 'navbar__menu has-fade fade-out'}
            >
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </div>
        </section>
    );
};

export default Navbar;