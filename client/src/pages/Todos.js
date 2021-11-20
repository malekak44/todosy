import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';

const Todos = () => {
    return (
        <section className="todos">
            <Header />
            <Form />
            <Wrapper />
        </section>
    );
};

export default Todos;