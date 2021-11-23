import React from 'react';
import organizedWoman from '../../assets/organized-woman.png';

const About = () => {
    return (
        <article className="home__about">
            <div className="home__about__text">
                <div className="home__about__text__wrapper">
                    <h1>
                        <span>A task manager you</span>
                        <span>Can use to be organized</span>
                    </h1>
                    <p>You can create daily, weekly, monthly and even long-term to-do list, you can track your time. You will be able to manage your tasks easily. We’ve never considered selling out or becoming acquired.</p>
                    <p>Our team is committed to staying independent and earning your trust for as long as you need our services. Our services are completely free. We do not charge for anything.</p>
                </div>
            </div>
            <div className="home__about__image">
                <img src={organizedWoman} alt="multitasking-woman" />
            </div>
        </article>
    );
};

export default About;