import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Api } from "../api/Api";
import { useCookies } from "react-cookie";
import { Container } from "react-bootstrap";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [token, setToken] = useCookies(["mykey"]);

  useEffect(() => {
    if (token.mykey === "undefined");
    else if (token.mykey) window.location.href = "home";
  }, [token]);

  const signinClicked = (e) => {
    e.preventDefault();
    Api.SignInUser({ email, password })
      .then((res) => setToken("mykey", res.key))
      .then((error) => console.log(error));
    promptUser();
  };
  const promptUser = () => setMsg("email or password is incorrect");

  return (
    <Container className="bg-white cont">
      <form onSubmit={signinClicked} className=" col-sm-5 ">
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
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
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
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember Me!
          </label>
        </div>
        <p> {msg} </p>
        <div className="d-grid gap-2">
          <button
            className="btn-lg"
            type="submit"
            onClick={signinClicked}
            className="btn btn-primary"
          >
            Sign In
          </button>
        </div>

        <div className="togrlsign">
          <Link to="/signUp">
            If you dont have account click here to sign up
          </Link>
        </div>
        <div className=" forgetpassword">
          <Link to="/restpassword">
            <p>Forget password </p>
          </Link>
        </div>
      </form>
    </Container>
  );
};
export default SignIn;
