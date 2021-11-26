import React, { useEffect } from 'react';
import { Navigate } from 'react-router';
import Form from '../components/Todos/Form';
import Header from '../components/Todos/Header';
import Wrapper from '../components/Todos/Wrapper';
import { useGlobalContext } from '../context/AppContext';

const Todos = () => {
    const { user, setIsToday, getAllTodos } = useGlobalContext();

    useEffect(() => {
        setIsToday(false);
        getAllTodos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {!user && <Navigate to="/login" />}
            <section className="todos">
                <Header title="TODOS" />
                <Form />
                {/* <Wrapper /> */}
            </section>
        </>
    );
};

export default Todos;