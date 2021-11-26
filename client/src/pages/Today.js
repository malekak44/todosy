import React, { useEffect } from 'react';
import Form from '../components/Todos/Form';
import Header from '../components/Todos/Header';
import Wrapper from '../components/Todos/Wrapper';
import { useGlobalContext } from '../context/AppContext';

const Today = () => {
    const { setIsToday, getTodayTodos } = useGlobalContext();

    useEffect(() => {
        setIsToday(true);
        getTodayTodos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="todos">
            <Header title="TODAY" />
            <Form />
            <Wrapper />
        </section>
    );
};

export default Today;