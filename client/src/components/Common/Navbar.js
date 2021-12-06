import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import quoteLeft from "../../assets/quote-left.png";
import quoteRight from "../../assets/quote-right.png";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import defaultUser from "../../assets/default-user.jpg";
import { useGlobalContext } from "../../context/AppContext";

const Navbar = () => {
    const menuRef = useRef(null);
    const navbarRef = useRef(null);
    const overlayRef = useRef(null);
    const body = document.body;
    const menu = menuRef.current;
    const navbar = navbarRef.current;
    const overlay = overlayRef.current;
    const fadeElements = [menu, overlay];
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [isLogoutOpen, setIsLogoutOpen] = useState(false);
    const { quote, user, logout, darkTheme, setTheme } = useGlobalContext();

    const closeNavbar = () => {
        setIsNavbarOpen(false);
        body.classList.remove("noscroll");
        fadeElements.forEach(element => {
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
        });
    }

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);

        if (navbar.classList.contains("open")) {
            closeNavbar();
        } else {
            body.classList.add("noscroll");
            fadeElements.forEach(element => {
                element.classList.remove("fade-out");
                element.classList.add("fade-in");
            });
        }
    }

    return (
        <section
            ref={navbarRef}
            className={isNavbarOpen ? "navbar open" : "navbar"}
        >
            <div
                ref={overlayRef}
                onClick={closeNavbar}
                className="overlay has-fade"
            ></div>
            <nav>
                <Link to={user ? "/todos" : "/"} className="navbar__logo">
                    Todosy
                </Link>
                <div
                    className="navbar__toggle hide-for-desktop"
                    onClick={toggleNavbar}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div
                    className={`navbar__quote hide-for-mobile ${quote ? "" : "has-fade"}`}
                >
                    <img src={quoteLeft} alt="quote-left" />
                    <p>{quote}</p>
                    <img src={quoteRight} alt="quote-right" />
                </div>
                <div className="navbar__links hide-for-mobile">
                    {user ?
                        <>
                            <Link to="/today">Today</Link>
                            <Link to="/profile">Profile</Link>
                        </> : <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </>
                    }
                    {darkTheme ?
                        <BsSunFill onClick={setTheme} className="navbar__icon" /> :
                        <BsMoonFill onClick={setTheme} className="navbar__icon" />
                    }
                    {user ?
                        <div className="navbar__profile">
                            <img
                                onClick={() => setIsLogoutOpen(!isLogoutOpen)}
                                src={user?.image || defaultUser}
                                alt={user.name}
                            />
                            <div className={isLogoutOpen ? 'open' : ''}>
                                <p
                                    onClick={() => {
                                        logout();
                                        setIsLogoutOpen(false);
                                    }}
                                >Logout</p>
                            </div>
                        </div> : ''
                    }
                </div>
            </nav>
            <div
                ref={menuRef}
                className="navbar__menu has-fade"
            >
                {user ?
                    <>
                        <Link to="/today" onClick={closeNavbar}>Today</Link>
                        <Link to="profile" onClick={closeNavbar}>Profile</Link>
                        <p onClick={() => { logout(); closeNavbar(); }}>Logout</p>
                    </> : <>
                        <Link to="/" onClick={closeNavbar}>Home</Link>
                        <Link to="/login" onClick={closeNavbar}>Login</Link>
                        <Link to="/signup" onClick={closeNavbar}>Signup</Link>
                    </>
                }
                <p onClick={() => { setTheme(); closeNavbar(); }}>Theme
                    {darkTheme ?
                        <BsSunFill onClick={setTheme} className="navbar__icon" /> :
                        <BsMoonFill onClick={setTheme} className="navbar__icon" />
                    }
                </p>
            </div>
        </section >
    );
};

export default Navbar;