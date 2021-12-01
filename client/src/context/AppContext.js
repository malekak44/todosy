import axios from "axios";
import { url } from "../utils/url";
import React, { createContext, useContext, useState, useEffect } from "react";
axios.defaults.withCredentials = true;

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [quote, setQuote] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const fetchQuote = async () => {
        try {
            const { data } = await axios.get(`${url}/quote`, { withCredentials: true });
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
            const { data } = await axios.post(`${url}/auth/register`, user);
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

    useEffect(() => {
        fetchUser();
        fetchQuote();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <AppContext.Provider value={{
            user,
            quote,
            login,
            logout,
            signup,
            isLoading,
            fetchUser,
        }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, useGlobalContext };