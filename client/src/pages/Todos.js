import React from 'react';
import { Navigate } from 'react-router';
import Form from '../components/Todos/Form';
import Header from '../components/Todos/Header';
import Wrapper from '../components/Todos/Wrapper';
import { useGlobalContext } from '../context/AppContext';

const Todos = () => {
    const { user } = useGlobalContext();

    return (
        <>
            {!user && <Navigate to="/login" />}
            <section className="todos">
                <Header />
                <Form />
                <Wrapper />
            </section>
        </>
    );
};

export default Todos;