import React from 'react';
import Header from '../components/Home/Header';
import Contents from '../components/Home/Contents';
import FreeUp from '../components/Home/FreeUp';

const Home = () => {
    return (
        <section className="home">
            <Header />
            <Contents />
            <FreeUp />
        </section>
    );
};

export default Home;