import React from 'react';
import { Link } from 'react-router-dom';
import content1 from '../assets/content-1.png';
import content2 from '../assets/content-2.jpg';
import content3 from '../assets/content-3.jpg';

const Home = () => {
    return (
        <section className="home">
            <article className="home__header">
                <h1>
                    <span>Organize Your Work</span>
                    <span>With Todosy</span>
                </h1>
                <Link to="/signup">
                    <button>Get Started</button>
                </Link>
            </article>
            <article className="home__content">
                <div className="home__content__text">
                    <div className="home__content__text__wrapper">
                        <h1>Why Organized Works?</h1>
                        <p>By organizing your works, you can increase your productivity. By keeping organized, you will save time looking for things and will have more time to work on important tasks. As organization can improve the flow of communication between you and your team, you can also make your team more productive. After all, better communication leads to better results.</p>
                    </div>
                </div>
                <div className="home__content__image">
                    <img src={content1} alt="content-1" />
                </div>
            </article>
            <article className="home__content">
                <div className="home__content__image">
                    <img src={content2} alt="content-2" />
                </div>
                <div className="home__content__text">
                    <div className="home__content__text__wrapper">
                        <h1>Benefits of Being Organized</h1>
                        <ul>
                            <li>Increases Productivity.</li>
                            <li>Brings Peace into Your Life.</li>
                            <li>Helps you sleep better.</li>
                            <li>Decreases Overwhelm.</li>
                            <li>Decreases Stress and Depression.</li>
                            <li>Helps you Feel Empowered and Energized.</li>
                            <li>Frees up Time for Activities You Enjoy.</li>
                            <li>Improve your relationships.</li>
                            <li>Helps Your Self Confidence.</li>
                            <li>Promotes a healthier diet.</li>
                            <li>Increases productivity at work.</li>
                        </ul>
                    </div>
                </div>
            </article>
            <article className="home__content">
                <div className="home__content__text">
                    <div className="home__content__text__wrapper">
                        <h1>Get organized at work!</h1>
                        <ul>
                            <li>Focus on what's important.</li>
                            <li>Remind yourself of your long-term goals.</li>
                            <li>Make daily, weekly and monthly to-do lists of tasks.</li>
                            <li>Manage your time well.</li>
                            <li>Time block your days.</li>
                            <li>Establish a routine.</li>
                            <li>Use calendars and planners.</li>
                            <li>Delegate tasks.</li>
                            <li>Manage your mail and phone calls.</li>
                            <li>Reduce clutter.</li>
                            <li>Stay organized.</li>
                        </ul>
                    </div>
                </div>
                <div className="home__content__image">
                    <img src={content3} alt="content-3" />
                </div>
            </article>
        </section>
    );
};

export default Home;