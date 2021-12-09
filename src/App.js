import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './compenent/Home/Home';
import About from './compenent/About/About';
import Contact from './compenent/Contact/Contact';
import Header from './compenent/header/header';
import SignIn from './compenent/SingIn/SignIn';
import SignUp from './compenent/SignUp/SignUp'
import Account from './compenent/Account/Account';
import Userprofile from './compenent/Userprofile/Userprofile';
import { Usercontex } from './compenent/useContex/Contex';
import { useState } from 'react/cjs/react.development';

import './App.css';


function App() {
    const [token, setToken] = useState('')
    return ( <
        div >
        <
        Usercontex.Provider value = {
            { token, setToken }
        } >
        <
        BrowserRouter >
        <
        Header / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "about"
        element = { < About / > }
        /> <
        Route path = "contact"
        element = { < Contact / > }
        /> <
        Route path = "signIn"
        element = { < SignIn / > }
        /> <
        Route path = "signUp"
        element = { < SignUp / > }
        />  <
        Route path = "account"
        element = { < Account / > }
        /> <
        Route path = "profile"
        element = { < Userprofile / > }
        />

        <
        /Routes> < /
        BrowserRouter >
        <
        /Usercontex.Provider>

        <
        /div> 

    );
}

export default App;