import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useGlobalContext } from '../../context/AppContext';

const RequireAuth = ({ children }) => {
    let location = useLocation();
    const { user } = useGlobalContext();

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} />;
};

export default RequireAuth;