import React from 'react';
import { Link } from 'react-router-dom';
import peaceGirl from '../../assets/peace-girl.png';

const Achieve = () => {
    return (
        <article className="home__achieve">
            <div className="home__achieve__image">
                <img src={peaceGirl} alt="peace-girl" />
            </div>
            <div className="home__achieve__text">
                <div className="home__achieve__text__wrapper">
                    <h1>
                        <span>Achieve peace of mind</span>
                        <span>with Todosy</span>
                    </h1>
                    <p>Do your most daunting task first thing in the morning. Don't worry about what others are thinking. Walk to a window, look outside, and take a single deep breath. Use todosy as your task manager.</p>
                    <Link to="/signup">
                        <button>Get Started</button>
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default Achieve;