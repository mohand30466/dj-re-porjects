import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Api } from "../api/Api";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstname, setFullname] = useState("");

  const [token, setToken] = useState("");
  const navigate = useNavigate()

  const x = !token.key? token.email || token.password1 ||token.detail :navigate(`/accounts/confirm-email/:${token.key}`)
   
 

  const signupClicked = (e) => {
      e.preventDefault()
    Api.RegesterUser({ email, password1, password2 })
      .then((res) => {
        setToken(res)
        
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => x);

  return (
    <Row  className="justify-content-center my-3">
    <Col md={6}>
      <form onSubmit={signupClicked} className="cont ">
      <div id="emailHelp" className="form-text text-center text-primary">
       
        </div>
        <div id="emailHelp" className="form-text ">
          <h3 style={{fontWeight:"400"}}>Sign up get jobs</h3>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            onChange={(e) => setFullname(e.target.value)}
            value={firstname}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
     
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
     
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setPassword1(e.target.value)}
            value={password1}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Reapead password
          </label>
          <input
            type="password"
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label text-black-50" htmlFor="exampleCheck1">
             <a href="policy" className="text-primary" style={{textDecoration:"none"}}> Terms </a>,By Sign up you agree our term data policy and cookies  
          </label>

        </div>
        <p className="text-danger"> {x} </p>
        <div className="d-grid gap-2">
          <button
            className="btn-lg"
            type="submit"
            onClick={signupClicked}
            
          >
            Sign Up
          </button>
        </div>

        <div className="togrlsign">
        Already have account click here to&nbsp;
          <Link to="/signin" style={{textDecoration:"none"}}>
             Sign In 
          </Link>
        </div>
      
      </form>
      </Col>
      </Row>
   
  );
};
export default SignUp;
