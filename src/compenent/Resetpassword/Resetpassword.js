import React,{ useState} from "react";
import { Container } from "react-bootstrap";


function Resetpassword(props) {
    const [email,setEmail]= useState('')

  return (
    <div>
      <Container className="bg-white cont">
        <form className=" col-sm-5 ">
        <div className="mb-3">
        
          <input
          placeholder=" Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
     
        </div>
         
          
          <div className="d-grid gap-2">
            <button
              className="btn-lg"
              type="submit"
              onClick={e=>console.log("reset your passwore")}
              className="btn btn-primary"
            >
               Reset your password 
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Resetpassword;
