import React from 'react';
import useAuth from '../hooks/useContext';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { loading, user } = useAuth();
    const location  = useLocation();

    if(loading) {
        return <div>Loading...</div>
    }

    if(!user) {
        return (
            <Navigate
                to='authentication/signin'
                state={{ from: location.pathname }}
                replace
            />
        );
    }

    return children;
};

export default ProtectedRoute;