import React from 'react'
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAuth } from './auth'

export default function RequireAuth({children}) {
    const auth = useAuth();
    const location = useLocation();
    if(!auth.user){
        return (
            <Navigate to='/login' state={{path: location.pathname}}></Navigate>
        )
    }
  return children
}