import axios from "axios";
import reducer from "./reducer";
import { url } from "../utils/url";
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { SET_QUOTE, SET_USER, SET_IS_TODAY, SET_TODOS, SET_DARK_THEME, SET_FILTER } from "./actions";

const AppContext = createContext();
axios.defaults.withCredentials = true;

const getLocalStorage = () => {
    const theme = localStorage.getItem("dark");
    if (theme) {
        return theme;
    } else {
        return false;
    }
}

const initialState = {
    quote: '',
    todos: [],
    filter: '',
    user: null,
    isToday: false,
    isLoading: true,
    darkTheme: getLocalStorage(),
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setTheme = () => {
        dispatch({ type: SET_DARK_THEME, payload: !state.darkTheme });
        localStorage.setItem('dark', JSON.stringify(!state.darkTheme));
    }

    const setFilter = (value) => {
        dispatch({ type: SET_FILTER, payload: value });
    }

    const setIsToday = (value) => {
        dispatch({ type: SET_IS_TODAY, payload: value });
    }

    const fetchQuote = async () => {
        try {
            const { data } = await axios.get(`${url}/quote`);
            dispatch({ type: SET_QUOTE, payload: data.quote });
        } catch (error) {
            console.log(error);
        }
    }

    const fetchUser = async () => {
        try {
            const { data } = await axios.get(`${url}/user/showMe`, { withCredentials: true });
            dispatch({ type: SET_USER, payload: data.user });
        } catch (error) {
            dispatch({ type: SET_USER, payload: null });
        }
    }

    const signup = async (user) => {
        try {
            const { data } = await axios.post(`${url}/auth/register`, user, { withCredentials: true });
            dispatch({ type: SET_USER, payload: data.user });
        } catch (error) {
            return error.response.data.msg;
        }
    }

    const login = async (user) => {
        try {
            const { data } = await axios.post(`${url}/auth/login`, user, { withCredentials: true });
            dispatch({ type: SET_USER, payload: data.user });
        } catch (error) {
            return error.response.data.msg;
        }
    }

    const logout = async () => {
        try {
            await axios.delete(`${url}/auth/logout`, { withCredentials: true });
            dispatch({ type: SET_USER, payload: null });
        } catch (error) {
            console.log(error);
        }
    }

    const forgotPassword = async (payload) => {
        try {
            const { data } = await axios.post(`${url}/auth/forgot-password`, payload, { withCredentials: true });
            return { msg: data.msg, type: 'success' };
        } catch (error) {
            return { msg: error.response.data.msg, type: 'danger' };
        }
    }

    const resetPassword = async (payload) => {
        try {
            const { data } = await axios.post(`${url}/auth/reset-password`, payload, { withCredentials: true });
            return { msg: data.msg, type: 'success' };
        } catch (error) {
            return { msg: error.response.data.msg, type: 'danger' };
        }
    }

    const updateUser = async (user) => {
        try {
            const { data } = await axios.patch(`${url}/user/update`, user, { withCredentials: true });
            dispatch({ type: SET_USER, payload: data.user });
        } catch (error) {
            console.log(error);
        }
    }

    const getAllTodos = async () => {
        try {
            const { data } = await axios.get(`${url}/todos`, { withCredentials: true });
            dispatch({ type: SET_TODOS, payload: data.todos });
        } catch (error) {
            console.log(error);
        }
    }

    const getTodayTodos = async () => {
        try {
            const { data } = await axios.get(`${url}/todos/today`, { withCredentials: true });
            dispatch({ type: SET_TODOS, payload: data.todos });
        } catch (error) {
            console.log(error);
        }
    }

    const createTodo = async (payload) => {
        try {
            await axios.post(`${url}/todos`, payload, { withCredentials: true });
            if (state.isToday) {
                await getTodayTodos();
            } else {
                await getAllTodos();
            }
        } catch (error) {
            console.log(error)
        }
    }

    const updateTodo = async (id, payload) => {
        try {
            await axios.patch(`${url}/todos/${id}`, payload, { withCredentials: true });
            if (state.isToday) {
                await getTodayTodos();
            } else {
                await getAllTodos();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`${url}/todos/${id}`, { withCredentials: true });
            if (state.isToday) {
                await getTodayTodos();
            } else {
                await getAllTodos();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const clearCompleted = async () => {
        try {
            await axios.delete(`${url}/todos`, { withCredentials: true });
            if (state.isToday) {
                await getTodayTodos();
            } else {
                await getAllTodos();
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUser();
        fetchQuote();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <AppContext.Provider value={{
            login,
            logout,
            signup,
            setTheme,
            setFilter,
            setIsToday,
            updateUser,
            createTodo,
            updateTodo,
            deleteTodo,
            getAllTodos,
            getTodayTodos,
            resetPassword,
            clearCompleted,
            forgotPassword,
            ...state
        }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, useGlobalContext };