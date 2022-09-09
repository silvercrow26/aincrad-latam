import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../firebase/context/AuthContext';
export const PublicRouter = ({children}) => {
    const { user } = useAuth();
    return (!user) ? children : <Navigate to="/" />
}
