import React from 'react';
import Form from '../components/Form';
import Guide from '../components/Guide';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';

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