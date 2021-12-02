import React, { useEffect } from 'react';
import Form from '../components/Todos/Form';
import Header from '../components/Todos/Header';
import Wrapper from '../components/Todos/Wrapper';
import { useGlobalContext } from '../context/AppContext';

const Todos = () => {
    const { setIsToday, getAllTodos } = useGlobalContext();

    useEffect(() => {
        setIsToday(false);
        getAllTodos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="todos">
            <Header title="TODOS" />
            <Form />
            <Wrapper />
        </section>
    );
};

export default Todos;