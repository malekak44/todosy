import React from 'react';
import yogaGirl from '../../assets/yoga-girl.png';

const FreeUp = () => {
    return (
        <article className="home__free-up">
            <h1>Free up your mental space</h1>
            <p>Regain clarity and calmness by getting all those tasks out of your head and onto your to-do list (no matter where you are or what device you use).</p>
            <img src={yogaGirl} alt="yoga-girl" />
        </article>
    );
};

export default FreeUp;