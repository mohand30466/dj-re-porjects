import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useData } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import "../../App.css"

const Header = () => {
  const { db, SetUser } = useData();
  const navigate = useNavigate();

  const ancerstyle = {
    textDecoration: "none",
  };

  const logoutclick = () => {
    localStorage.removeItem("mykey");
    SetUser(null);
    navigate("/");
  };
  return (
    <>
      <Navbar bg="secondary" expand="lg">
        <Container className=" bg-secondary ">
          <Navbar.Brand className="text-light" href="/">
            JOP BOARD!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="text-light">
                <Link to="/"> Home</Link>
              </Nav.Link>
              <Nav.Link className="text-light">
                <Link to="/about"> About</Link>
              </Nav.Link>
              <Nav.Link className="text-light">
                <Link to="/partner"> Partners</Link>
              </Nav.Link>
              <Nav.Link className=" text-light me-5">
                <Link to="/contact"> Contacts</Link>
              </Nav.Link>
              {!db ? (
                <>
                  <Button className=" me-3 bg-light">
                    {" "}
                    <Link
                      style={ancerstyle}
                      className="text-secondary"
                      to="/signIn"
                    >
                      Sign In
                    </Link>
                  </Button>
                  <Button className=" bg-light ">
                    <Link
                      style={ancerstyle}
                      className="text-secondary"
                      to="/signUp"
                    >
                      Regester
                    </Link>
                  </Button>
                </>
              ) : (
                <Button
                  className=" bg-light text-secondary "
                  onClick={logoutclick}
                >
                  Log out
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
