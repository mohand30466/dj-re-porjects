import { React, useContext } from 'react'
import { Usercontex } from '../useContex/Contex'

export default function Userprofile() {

    const userinfo = useContext(Usercontex)
    console.log(userinfo.token);
    return ( <
        div >
        <
        h1 >
        Welcome to user profile page <
        /h1>


        <
        /
        div >
    )
}