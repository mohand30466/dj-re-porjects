import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Api } from "../api/Api";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/AuthContextProvider";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate()
   const { SetUser} = useData()
   

  const signinClicked = (e) => {
    e.preventDefault();
    Api.SignInUser({ email, password })
      .then((res) => {localStorage.setItem("mykey", res.key)
      SetUser(res.key)
      
      
      if (res.key)navigate("/profile")
      
    })
      .then((error) => console.log(error));
    promptUser();
  };
  const promptUser = () => setMsg("email or password is incorrect");


  return (
    <Row className="justify-content-center my-3" style={{hight:"100vh"}}>
      <Col  md={6} >
        <form onSubmit={signinClicked}>
          <div id="emailHelp" className="form-text text-center">
            <h3>WELCOME BACK</h3>
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <p> {msg} </p>
          <div className="d-grid gap-2">
            <button className="btn btn-lg btn-primary" type="submit">
              Sign In
            </button>
          </div>

          <div className="togrlsign  mt-2">
          If you dont have an account click here to&nbsp;
            <Link to="/signUp" className="text-decoration-none">
               Sign up
            </Link>
          </div>
          <div > if you forget your password&nbsp;
            <Link to="/restpassword" className="text-decoration-none">
              Forget password 
            </Link>
          </div>
        </form>
      </Col>
    </Row>
  );
};
export default SignIn;
