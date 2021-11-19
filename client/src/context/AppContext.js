import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { url } from "../utils/url";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const fetchUser = async () => {
        try {
            const { data } = await axios.get(`${url}/showMe`);
            setUser(data.user);
        } catch (error) {
            console.log(error);
        }
    }

    const login = async (user) => {
        try {
            const { data } = await axios.post(`${url}/auth/login`, user);
            setUser(data.user);
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