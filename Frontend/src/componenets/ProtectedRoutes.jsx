import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function ProtectedRoutes() {
    const isauth=true;
    return isauth?<Outlet/>:<Navigate to={'/login'}/>

}

export default ProtectedRoutes
