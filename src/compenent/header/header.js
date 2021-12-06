import React from "react";
import {Link} from "react-router-dom";
import "./index.css";


const Header=()=>{

    return(
        <div className="header">
            <div className="container">
                <div className="links">
                    <Link to="/">Home</Link>
                </div>
                <div className="links">
                    <Link to="about">About</Link>
                </div>
                <div className="links">
                   <Link to="contact">Contact</Link>
                </div>
                <div className="auth">
                    <div className="links signIn"> <Link to="signin">Sign In</Link></div>
                    <div className="links signUp"><Link to="signup">Sign Up</Link></div>  
                </div>
            
            </div>

        </div>
    )
}
export default Header;