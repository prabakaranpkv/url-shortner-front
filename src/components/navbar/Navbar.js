import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  // given navlinks
  return (
    <div className="container-fluid">
      <div className="row navbarRow">
        <div className="navbar">
          <li className="col-sm-12 col-md-8" id="heading">
            PK Institute
          </li>

          <div className="col-sm-12 col-md-4 part2">
            <Link className="link" to="/">
              Home
            </Link>

            <Link className="link " to="/signup">
              Signup
            </Link>
            <Link className="link " to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
