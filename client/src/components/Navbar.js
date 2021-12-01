import { Link } from 'react-router-dom';
import quoteLeft from '../assets/quote-left.png';
import quoteRight from '../assets/quote-right.png';
import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/AppContext';

const Navbar = () => {
    const { quote, user } = useGlobalContext();
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

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
                <Link to={user ? '/todos' : '/'} className="navbar__logo">
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
                <div
                    className={`navbar__quote hide-for-mobile ${quote ? '' : 'has-fade'}`}
                >
                    <img src={quoteLeft} alt="quote-left" />
                    <p>{quote}</p>
                    <img src={quoteRight} alt="quote-right" />
                </div>
                <div className="navbar__links hide-for-mobile">
                    {user ?
                        <>
                            <Link to="/todos">Todos</Link>
                            <Link to="profile">Profile</Link>
                        </> : <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </>
                    }
                </div>
            </nav>
            <div
                className={isNavbarOpen ? 'navbar__menu has-fade fade-in' : 'navbar__menu has-fade fade-out'}
            >
                {user ?
                    <>
                        <Link to="/todos">Todos</Link>
                        <Link to="profile">Profile</Link>
                    </> : <>
                        <Link to="/">Home</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </>
                }
            </div>
        </section>
    );
};

export default Navbar;