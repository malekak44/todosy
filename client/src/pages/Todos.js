import React from 'react';
import Form from '../components/Todos/Form';
import Header from '../components/Todos/Header';
import Wrapper from '../components/Todos/Wrapper';

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