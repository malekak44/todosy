import React from 'react';
import Form from '../components/Todos/Form';
import Guide from '../components/Todos/Guide';
import Header from '../components/Todos/Header';
import Wrapper from '../components/Todos/Wrapper';

const Todos = () => {
    return (
        <section className="todos">
            <Header />
            <Form />
            <Wrapper />
            <Guide />
        </section>
    );
};

export default Todos;