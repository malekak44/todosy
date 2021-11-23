import React from 'react';
import Header from '../components/Home/Header';
import Contents from '../components/Home/Contents';
import FreeUp from '../components/Home/FreeUp';
import About from '../components/Home/About';

const Home = () => {
    return (
        <section className="home">
            <Header />
            <Contents />
            <FreeUp />
            <About />
        </section>
    );
};

export default Home;