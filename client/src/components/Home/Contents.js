import React from 'react';
import messyTable from '../../assets/messy-table.png';
import happyWoman from '../../assets/happy-woman.jpg';
import writingTodos from '../../assets/writing-todos.jpg';
import depressedGirl from '../../assets/depressed-girl.jpg';

const Contents = () => {
    return (
        <>
            <article className="home__content">
                <div className="home__content__text">
                    <div className="home__content__text__wrapper">
                        <h1>Why organized works?</h1>
                        <p>By organizing your works, you can increase your productivity. By keeping organized, you will save time looking for things and will have more time to work on important tasks. As organization can improve the flow of communication between you and your team, you can also make your team more productive. After all, better communication leads to better results.</p>
                    </div>
                </div>
                <div className="home__content__image">
                    <img src={messyTable} alt="messy-table" />
                </div>
            </article>
            <article className="home__content">
                <div className="home__content__image">
                    <img src={happyWoman} alt="happy-woman" />
                </div>
                <div className="home__content__text">
                    <div className="home__content__text__wrapper">
                        <h1>Benefits of being organized</h1>
                        <ul>
                            <li>Increases productivity.</li>
                            <li>Brings peace into your life.</li>
                            <li>Helps you sleep better.</li>
                            <li>Decreases overwhelm.</li>
                            <li>Decreases stress and depression.</li>
                            <li>Helps you feel empowered and energized.</li>
                            <li>Frees up time for activities you enjoy.</li>
                            <li>Improve your relationships.</li>
                            <li>Helps boost your self confidence.</li>
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
                    <img src={writingTodos} alt="writing-todos" />
                </div>
            </article>
            <article className="home__content">
                <div className="home__content__image">
                    <img src={depressedGirl} alt="depressed-girl" />
                </div>
                <div className="home__content__text">
                    <div className="home__content__text__wrapper">
                        <h1>The effects of not being organized</h1>
                        <p>If you don't organize your works, your productivity will be decreased. It will hamper your focus. It can affect your time management. It can also affect your health. It can increase stress and anxiety. It can affect your professional growth and career enhancement. As a result, you will gradually become inefficient and unproductive to adapt to the rapidly changing world.</p>
                    </div>
                </div>
            </article>
        </>
    );
};

export default Contents;