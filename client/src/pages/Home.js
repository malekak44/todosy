import React from 'react';
import Header from '../components/Home/Header';
import Contents from '../components/Home/Contents';
import FreeUp from '../components/Home/FreeUp';
import About from '../components/Home/About';
import Achieve from '../components/Home/Achieve';

const Home = () => {
    return (
        <section className="home">
            <Header />
            <Contents />
            <FreeUp />
            <About />
            <Achieve/>
        </section>
    );
};

export default Home;