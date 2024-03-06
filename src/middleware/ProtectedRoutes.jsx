import React from "react";
import { Outlet } from "react-router-dom";
import Homepage from "../pages/Homepage";

const isAuthorized = ()=>{
    const session = JSON.parse(localStorage.getItem("auth"))
    //return true
    return session
}
const ProtectedRoutes = () => {
    const isAuth = isAuthorized();
    return isAuth ? <Outlet/> : <Homepage/> 
}

export default ProtectedRoutes;
