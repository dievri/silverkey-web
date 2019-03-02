import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
const Navbar = () => {
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
