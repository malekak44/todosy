import React from 'react';
import Form from './Form';
import Header from './Header';
import Wrapper from './Wrapper';

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