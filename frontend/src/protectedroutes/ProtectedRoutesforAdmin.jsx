// import { useRef } from "react"
import { Outlet } from 'react-router'
import { useSelector, useDispatch } from 'react-redux';
import React, { Component }  from 'react';
import Home from "../Molecule/home";



const useAuthforAdmin = () => {
    const dispatch = useDispatch();

    const userType = useSelector((state) => state.login.userType)

    if (userType == "Admin") {
        return true
    }
    else {
        return false
    }

}

// <Outlet is a function by react-router that simply just route you to where you want to go. 
const ProtectedRoutesforAdmin = () => {
    const isAuth = useAuthforAdmin()
    return isAuth ? <Outlet/> : <Home />
}

export default ProtectedRoutesforAdmin;