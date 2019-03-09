import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#collapse_target"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="collapse_target">
        <Link to="/" className="navbar-brand">
          <img src={logo} width="30" height="30" />
        </Link>
        <span className="navbar-text">Silverkey</span>

        <ul className="navbar-nav navbar-right ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/download" className="nav-link">
              Download
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          {props.loggedIn ? (
            <li className="nav-item">
              <Link to="/logout" className="nav-link">
                Logout
              </Link>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Log In
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
