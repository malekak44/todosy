import axios from "axios";
import { url } from "../utils/url";
import React, { createContext, useContext, useState, useEffect } from "react";
axios.defaults.withCredentials = true;

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [quote, setQuote] = useState('');
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const fetchQuote = async () => {
        try {
            const { data } = await axios.get(`${url}/quote`);
            setQuote(data.quote);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchUser = async () => {
        try {
            const { data } = await axios.get(`${url}/auth/showMe`, { withCredentials: true });
            setUser(data.user);
            setIsLoading(false);
        } catch (error) {
            setUser(null);
            console.log(error);
            setIsLoading(false);
        }
    }

    const signup = async (user, callback) => {
        try {
            const { data } = await axios.post(`${url}/auth/register`, user, { withCredentials: true });
            setUser(data.user);
            await callback();
        } catch (error) {
            console.log(error);
        }
    }

    const login = async (user, callback) => {
        try {
            const { data } = await axios.post(`${url}/auth/login`, user, { withCredentials: true });
            setUser(data.user);
            await callback();
        } catch (error) {
            console.log(error)
        }
    }

    const logout = () => {
        setUser(null);
    }

    const getAllTodos = async () => {
        try {
            const { data } = await axios.get(`${url}/todos`, { withCredentials: true });
            setTodos(data.todos);
        } catch (error) {
            console.log(error);
        }
    }

    const createTodo = async (payload) => {
        try {
            await axios.post(`${url}/todos`, payload, { withCredentials: true });
            await getAllTodos();
        } catch (error) {
            console.log(error)
        }
    }

    const updateTodo = async (id, payload) => {
        try {
            await axios.patch(`${url}/todos/${id}`, payload, { withCredentials: true });
            await getAllTodos();
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`${url}/todos/${id}`, { withCredentials: true });
            await getAllTodos();
        } catch (error) {
            console.log(error);
        }
    }

    const clearCompleted = async () => {
        try {
            await axios.delete(`${url}/todos`, { withCredentials: true });
            await getAllTodos();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUser();
        fetchQuote();
        getAllTodos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <AppContext.Provider value={{
            user,
            quote,
            todos,
            filter,
            isLoading,
            login,
            logout,
            signup,
            setTodos,
            setFilter,
            fetchUser,
            createTodo,
            updateTodo,
            deleteTodo,
            clearCompleted,
        }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, useGlobalContext };