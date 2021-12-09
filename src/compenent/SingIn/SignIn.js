import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Api } from "../api/Api";
import { useCookies } from "react-cookie";


const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')
    const [token, setToken] = useCookies(["mykey"])



    useEffect(() => {
        if (token.mykey === "undefined") console.log("try again");
        else if (token.mykey) window.location.href = "profile"

    }, [token])

    const signinClicked = () => {
        Api.SignInUser({ email, password })
            .then(res => setToken("mykey", res.key))
            .then(error => console.log(error))

    }

    return ( <
        div >

        <
        h1 > hello this is Signin page < /h1>

        <
        div className = "email" >
        <
        input type = "email"
        onChange = { e => setEmail(e.target.value) }
        value = { email }
        placeholder = "inter your email" / >
        <
        /div> <
        div className = "password1" >
        <
        input type = "password"
        onChange = { e => setPassword(e.target.value) }
        value = { password }
        placeholder = "repeat your password1" / >
        <
        /div>            <
        div className = "submit" >
        <
        button onClick = { signinClicked } > Sign in < /button> < /
        div >
        <
        p > { msg } < /p> <
        p > forget password < /p> <
        p > < Link to = "/signUp" >
        if you dont have account click here to sign up < /Link></p >




        <
        /div>
    )
}
export default SignIn