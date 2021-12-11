import { React } from 'react'
import { useCookies } from 'react-cookie';


export default function Userprofile() {
    const [token,setToken, removetoken]=useCookies()


    const logoutclick =()=>{
        console.log("log out clicked");
        removetoken(['mykey'])
        window.location.href="/"
    }



    return ( <
        div >
        <button className='logout' onClick={logoutclick}>log out</button>
        <
        h1 >
        Welcome to user profile page <
        /h1>


        <
        /
        div >
    )
}