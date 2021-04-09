import React, { useState, Fragment } from "react";
import {AuthContext} from "./context";
import { ProfilePage } from "../pages/ProfilePage";
import { Booking } from "../Booking";
import BookingJumbotron from "../BookingJumbotron";



export default function App(){
    const [token, setToken] = useState(null);
    const [tokenExpirationTime, setTokenExpirationTime] = useState();

    // const [loggedIn, setLoggedIn] = useState(false);
    const login = () => {
        setToken(token);
        const expiration = new Date(new Date().getTime() + 1000 * 60  * 60);

        setTokenExpirationDate(expiration);//set expiration time one hour from current time
        localStorage.setItem(
             "userData",
              JSON.stringify({
                     token,
                     expirationTime: expiration.toISOString()
               })
         );
    }
    const logout = () => {
        setToken(null);
        setTokenExpirationTime(null);
         localStorage.removeItem("userData");
    }


    useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && storedData.token && new Date(storedData.expirationTime) > new Date()) 
        {
            login(storedData.token, new Date(storedData.expirationTime));
        }
    }, [login]);


    useEffect(() => {
        if (token && tokenExpirationDate) {
        const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
        logoutTimer = setTimeout(logout, remainingTime);
        } else {
        clearTimeout(logoutTimer);
        }
    }, [token, logout, tokenExpirationDate]);


return (
        <>
            <AuthContext.Provider value={!!token ? login : logout}>
                <div class="center">
                    <Authentication/>
                    <ProfilePage />
                    <Booking />
                </div>
            </ AuthContext.Provider>
        </>
   );
};