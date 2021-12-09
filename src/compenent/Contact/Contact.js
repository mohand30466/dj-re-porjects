import {
    React,
    useContext
} from 'react';

import { Usercontex } from "../useContex/Contex";




const Contact = () => {
    const x = useContext(Usercontex)

    return ( <
        div >
        <
        h1 > hello from Contact < /h1>    <

        /
        div >

    )
}
export default Contact;