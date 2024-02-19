import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useToken } from "../../Context__Store/Store";
import { Button } from "react-bootstrap";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const { deleteToken } = useToken();
  const { HandleToggle } = useToken();

  const handleToken = () => {
    deleteToken();
    console.log("rendering ");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Barkat
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNav}
            aria-expanded={isNavOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={"collapse navbar-collapse" + (isNavOpen ? " show" : "")}
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/" onClick={toggleNav}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contacts"
                  onClick={toggleNav}
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" onClick={toggleNav}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/services"
                  onClick={toggleNav}
                >
                  Services
                </NavLink>
              </li>
              {HandleToggle ? (
                <li className="nav-item">
                  <Button className="nav-link" onClick={handleToken}>
                    LogOut
                  </Button>
                </li>
              ) : (
                <>
                  {" "}
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/register"
                      onClick={toggleNav}
                    >
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/login"
                      onClick={toggleNav}
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
