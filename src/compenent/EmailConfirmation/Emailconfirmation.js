import React from "react";
import { Container } from "react-bootstrap";


const Emailconfirmation = () => {

    const confirmation = (e)=>{
        e.preventDefault()
        console.log("welcome your account has confirmed");
    }
  return (
    <div>
      <Container className="bg-white cont">
        <form onSubmit={confirmation} className=" col-sm-5 ">
        <div id="emailHelp" className="form-text text-center">
            <h4>We are more than happy to see you here</h4>
          </div>
          <div id="emailHelp" className="form-text text-center">
            <h3>Go to your email to confir your regestration</h3>
          </div>
          <div className="d-grid gap-2">
            <button
              className="btn-lg"
              type="submit"
              onClick={confirmation}
              className="btn btn-primary"
            >
               Take me to email 
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Emailconfirmation;
