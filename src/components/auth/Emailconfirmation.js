import React from "react";
import { Link } from "react-router-dom";




const Emailconfirmation = () => {

    const confirmation = (e)=>{
        e.preventDefault()
        console.log("welcome your account has confirmed");
    }
  return (
    <div>
     
        <form onSubmit={confirmation} className=" col-sm-5 ">
        <div id="emailHelp" className="form-text text-center">
            <h4>We are more than happy to see you here</h4>
          </div>
          <div id="emailHelp" className="form-text text-center">
            <h3>Go to your email to confirm your regestration</h3>
          </div>
          <div className="d-grid gap-2">
            <button
              className="btn-lg"
              type="submit"
              onClick={confirmation}
             
            >
              <Link to="/signIn">
                Take me to email
              </Link>
                
            </button>
          </div>
        </form>

    </div>
  );
};

export default Emailconfirmation;
