import React, { useEffect } from 'react';
import Header from '../components/Home/Header';
import Contents from '../components/Home/Contents';
import FreeUp from '../components/Home/FreeUp';
import About from '../components/Home/About';
import Achieve from '../components/Home/Achieve';
import Footer from '../components/Home/Footer';
import { useNavigate } from 'react-router';
import { useGlobalContext } from '../context/AppContext';

const Home = () => {
    const navigate = useNavigate();
    const { user } = useGlobalContext();

    useEffect(() => {
        if (user) {
            return navigate('/todos', { replace: true })
        }
    }, [navigate, user]);

    return (
        <section className="home">
            <Header />
            <Contents />
            <FreeUp />
            <About />
            <Achieve />
            <Footer />
        </section>
    );
};

export default Home;