import axios from "axios";
import { url } from "../utils/url";
import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [user, setUser] = useState({ name: 'Steve' });

    const fetchUser = async () => {
        try {
            const { data } = await axios.get(`${url}/showMe`);
            setUser(data.user);
        } catch (error) {
            console.log(error);
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
            const { data } = await axios.post(`${url}/auth/login`, user);
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <AppContext.Provider value={{
            user,
            login,
            logout,
            signup,
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