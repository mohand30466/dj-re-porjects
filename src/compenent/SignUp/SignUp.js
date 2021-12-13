import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Api } from "../api/Api";
import { Container } from "react-bootstrap";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstname, setFullname] = useState("");

  const [token, setToken] = useState("");

  const x = token.key
    ? (window.location.href = "/confirm")
    : token.email || token.password1 || "";

  useEffect(() => x);

  const signupClicked = (e) => {
      e.preventDefault()
    Api.RegesterUser({ email, password1, password2 })
      .then((res) => setToken(res))
      .catch((error) => console.log(error));
  };

  return (
    <Container className="bg-white cont">
      <form onSubmit={signupClicked} className=" col-sm-5 ">
        <div id="emailHelp" className="form-text text-center">
          <h3>REGISTER</h3>
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
            Read the Term or policy,By click sign up you agree the policy
          </label>

        </div>
        <p className="text-danger"> {x} </p>
        <div className="d-grid gap-2">
          <button
            className="btn-lg"
            type="submit"
            onClick={signupClicked}
            className="btn btn-primary"
          >
            Sign Up
          </button>
        </div>

        <div className="togrlsign">
          <Link to="/signin">
            already have account click here to sign in 
          </Link>
        </div>
      
      </form>
    </Container>
  );
};
export default SignUp;
